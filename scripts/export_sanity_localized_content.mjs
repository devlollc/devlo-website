import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";

const outputPath = resolve(process.cwd(), "src/lib/i18n/localized-content.json");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Missing Sanity env vars. Required: (NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID), (NEXT_PUBLIC_SANITY_DATASET or SANITY_DATASET), (SANITY_API_TOKEN or SANITY_WRITE_TOKEN)",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: "published",
});

const docs = await client.fetch(
  `*[_type in ["page","service","caseStudy"] && defined(pageId)]{
    pageId,
    title,
    description,
    seoTitle,
    seoDescription,
    body,
    ogImage,
    updatedAt
  }`,
);

const map = {};

for (const doc of docs) {
  map[doc.pageId] = {
    title: doc.seoTitle || doc.title || null,
    description: doc.seoDescription || doc.description || null,
    body: doc.body || null,
    ogImage: doc.ogImage || null,
    updatedAt: doc.updatedAt || null,
  };
}

writeFileSync(outputPath, `${JSON.stringify(map, null, 2)}\n`, "utf8");
console.log(`Exported ${docs.length} localized docs to ${outputPath}`);
