import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const mappingPath = path.join(repoRoot, "src/content/hadoseo-metadata.ts");
const reportPath = path.join(repoRoot, "docs/hadoseo-metadata-parity.csv");

const sourcePath =
  process.argv[2] ??
  process.env.HADOSEO_SOURCE ??
  ["/mnt/data/file.txt", "/Users/charlesperret/Downloads/file.txt"].find((candidate) =>
    fs.existsSync(candidate),
  );

function parseSimpleCsvLine(line) {
  const columns = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === "\"") {
      if (inQuotes && line[i + 1] === "\"") {
        current += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === "," && !inQuotes) {
      columns.push(current);
      current = "";
      continue;
    }
    current += char;
  }

  columns.push(current);
  return columns;
}

function parseTargetMetadata(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const headerIndex = lines.findIndex((line) => {
    const headers = parseSimpleCsvLine(line).map((header) => header.trim().toLowerCase());
    return (
      headers.includes("route") &&
      headers.includes("title") &&
      headers.includes("description") &&
      headers.includes("canonical") &&
      (headers.includes("og_image") || headers.includes("ogimage"))
    );
  });

  if (headerIndex === -1) {
    throw new Error(`CSV header not found in ${filePath}`);
  }

  const headers = parseSimpleCsvLine(lines[headerIndex]).map((header) =>
    header.trim().toLowerCase(),
  );
  const columnIndex = (name) => headers.indexOf(name);
  const routeIndex = columnIndex("route");
  const titleIndex = columnIndex("title");
  const descriptionIndex = columnIndex("description");
  const canonicalIndex = columnIndex("canonical");
  const ogImageIndex = columnIndex("og_image") === -1 ? columnIndex("ogimage") : columnIndex("og_image");
  const statusIndex = columnIndex("status");
  const scopeIndex = columnIndex("scope");

  const rows = [];
  for (let i = headerIndex + 1; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line || line.startsWith("```")) break;
    const columns = parseSimpleCsvLine(line);
    const scope = scopeIndex === -1 ? "" : columns[scopeIndex];
    const route = columns[routeIndex];

    if (scope && scope !== "PAGE") continue;
    if (!route || route === "*") continue;

    rows.push({
      route,
      title: columns[titleIndex],
      description: columns[descriptionIndex],
      canonical: columns[canonicalIndex],
      ogImage: columns[ogImageIndex],
      status: statusIndex === -1 ? undefined : columns[statusIndex],
    });
  }

  return rows;
}

function parseMappingMetadata(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const blockPattern =
    /\{\s*route:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*canonical:\s*"([^"]+)",\s*ogImage:\s*"([^"]+)",\s*status:\s*"([^"]+)",\s*\}/g;
  const rows = [];
  let match;

  while ((match = blockPattern.exec(raw)) !== null) {
    const [, route, title, description, canonical, ogImage, status] = match;
    rows.push({ route, title, description, canonical, ogImage, status });
  }

  return rows;
}

if (!sourcePath || !fs.existsSync(sourcePath)) {
  const mappingRows = parseMappingMetadata(mappingPath);

  if (mappingRows.length === 0) {
    console.error(`HadoSEO metadata mapping is empty or unreadable: ${mappingPath}`);
    process.exit(1);
  }

  console.log(
    `HadoSEO metadata structure check passed (${mappingRows.length} routes). Pass a source CSV path or HADOSEO_SOURCE to run parity.`,
  );
  process.exit(0);
}

function csvEscape(value) {
  const stringValue = value == null ? "" : String(value);
  if (/["\n,]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, "\"\"")}"`;
  }
  return stringValue;
}

const targetRows = parseTargetMetadata(sourcePath);
const mappingRows = parseMappingMetadata(mappingPath);

const targetByRoute = new Map(targetRows.map((row) => [row.route, row]));
const mappingByRoute = new Map(mappingRows.map((row) => [row.route, row]));

const reportRows = [];
let mismatchCount = 0;

const allRoutes = new Set([...targetByRoute.keys(), ...mappingByRoute.keys()]);
for (const route of [...allRoutes].sort()) {
  const target = targetByRoute.get(route);
  const current = mappingByRoute.get(route);

  if (!target) {
    mismatchCount += 1;
    reportRows.push({
      route,
      field: "route",
      target: "MISSING_IN_TARGET",
      current: "PRESENT_IN_MAPPING",
      status: "MISMATCH",
    });
    continue;
  }

  if (!current) {
    mismatchCount += 1;
    reportRows.push({
      route,
      field: "route",
      target: "PRESENT_IN_TARGET",
      current: "MISSING_IN_MAPPING",
      status: "MISMATCH",
    });
    continue;
  }

  for (const field of ["title", "description", "canonical", "ogImage", "status"]) {
    const targetField = field === "ogImage" ? "ogImage" : field;
    const targetValue = target[targetField];
    const currentValue = current[field];

    if (targetValue === undefined) continue;

    const status = targetValue === currentValue ? "OK" : "MISMATCH";
    if (status === "MISMATCH") mismatchCount += 1;

    reportRows.push({
      route,
      field,
      target: targetValue,
      current: currentValue,
      status,
    });
  }
}

const headers = ["route", "field", "target", "current", "status"];
const csvContent = [
  headers.join(","),
  ...reportRows.map((row) =>
    headers.map((header) => csvEscape(row[header])).join(","),
  ),
].join("\n");

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, csvContent, "utf8");

if (mismatchCount > 0) {
  console.error(
    `HadoSEO parity check failed with ${mismatchCount} mismatch(es). Report: ${reportPath}`,
  );
  process.exit(1);
}

console.log(`HadoSEO parity check passed (${targetRows.length} routes). Report: ${reportPath}`);
