#!/usr/bin/env bash
set -euo pipefail

command -v curl >/dev/null || { echo "curl required"; exit 1; }
command -v jq >/dev/null || { echo "jq required"; exit 1; }
command -v rg >/dev/null || { echo "rg required"; exit 1; }
command -v npx >/dev/null || { echo "npx required"; exit 1; }

MODE="${1:-before}"
BASE_URL="${2:-https://devlo.ch}"
DATE_TAG="${3:-$(date +%F)}"

if [[ "$MODE" != "before" && "$MODE" != "after" ]]; then
  echo "Usage: bash scripts/audit_mobile.sh [before|after] [base_url] [yyyy-mm-dd]"
  exit 1
fi

ROOT_DIR="docs/mobile_audit_${DATE_TAG}/${MODE}"
mkdir -p "$ROOT_DIR"

PAGES_FILE="$ROOT_DIR/pages_to_test.txt"
cat > "$PAGES_FILE" <<'PAGES'
/
/services
/services/enrichissement-clay
/services/outbound-multicanal
/services/cold-email
/consultation
/etudes-de-cas
/academy
/etudes-de-cas/monizze-120-rendez-vous
/etudes-de-cas/logiciel-comptable-200k-ca
/etudes-de-cas/immobilier-30-prospects
PAGES

printf "mode=%s\nbase_url=%s\ndate=%s\n" "$MODE" "$BASE_URL" "$DATE_TAG" > "$ROOT_DIR/context.txt"

# A1: viewport checks in source and live HTML
{
  echo "# viewport grep in source"
  grep -R "viewport" -n src/app src/pages 2>/dev/null || true
  echo
  echo "# viewport in live HTML"
  for route in / /services /consultation; do
    echo "## ${BASE_URL}${route}"
    curl -sL --max-time 25 "${BASE_URL}${route}" | rg -i "viewport" || true
    echo
  done
} > "$ROOT_DIR/viewport_checks.txt"

# Fetch HTML and static signal extraction
while IFS= read -r route; do
  [[ -z "$route" ]] && continue
  slug="${route#/}"
  slug="${slug//\//_}"
  [[ -z "$slug" ]] && slug="home"

  html_file="$ROOT_DIR/${MODE}_html_${slug}.html"
  findings_file="$ROOT_DIR/${MODE}_findings_${slug}.txt"
  header_file="$ROOT_DIR/${MODE}_headers_${slug}.txt"

  curl -sI --max-time 20 "${BASE_URL}${route}" > "$header_file" || true
  curl -sL --max-time 40 "${BASE_URL}${route}" > "$html_file" || true

  {
    echo "Route: ${route}"
    echo "URL: ${BASE_URL}${route}"
    echo
    echo "-- CSS inline patterns --"
    rg -n "width:\\s*[0-9]{3,}px|min-width:\\s*[0-9]{3,}px|overflow-x|translateX\\(|min-w-max" "$html_file" || true
    echo
    echo "-- Tailwind-like class signals --"
    rg -n "w-\\[[0-9]{3,}px\\]|min-w-\\[[0-9]{3,}px\\]|min-w-max|grid-cols-2|flex-row|overflow-x" "$html_file" || true
  } > "$findings_file"
done < "$PAGES_FILE"

# Mobile scroll-width checks via Playwright
SCROLL_JSON="$ROOT_DIR/mobile_scroll_check.json"
SCROLL_TXT="$ROOT_DIR/mobile_scroll_check.txt"

if npx --yes -p playwright node scripts/mobile_scroll_check.mjs "$BASE_URL" "$SCROLL_JSON" "$PAGES_FILE"; then
  {
    echo "route,status,scrollWidth,viewportWidth,offenders"
    jq -r '.results[] | [ .route, .status, (.scrollWidth // ""), (.viewportWidth // ""), ((.offenders | length) // 0) ] | @csv' "$SCROLL_JSON"
    echo
    echo "Failing routes:"
    jq -r '.results[] | select(.status != "PASS") | "- \(.route): status=\(.status) scrollWidth=\(.scrollWidth // "n/a") viewport=\(.viewportWidth // "n/a")"' "$SCROLL_JSON"
  } > "$SCROLL_TXT"
else
  {
    echo "Playwright check unavailable"
    echo "status: WARN"
  } > "$SCROLL_TXT"
fi

# Summary JSON for quick diff before/after
SUMMARY_JSON="$ROOT_DIR/summary.json"
VIEWPORT_OK="unknown"
if rg -q "name=\"viewport\"|name='viewport'" "$ROOT_DIR/viewport_checks.txt"; then
  VIEWPORT_OK="pass"
fi

if [[ -f "$SCROLL_JSON" ]]; then
  FAIL_COUNT=$(jq '[.results[] | select(.status != "PASS")] | length' "$SCROLL_JSON")
  PASS_COUNT=$(jq '[.results[] | select(.status == "PASS")] | length' "$SCROLL_JSON")
else
  FAIL_COUNT=-1
  PASS_COUNT=0
fi

jq -n \
  --arg mode "$MODE" \
  --arg baseUrl "$BASE_URL" \
  --arg generatedAt "$(date -u +%FT%TZ)" \
  --arg viewport "$VIEWPORT_OK" \
  --argjson passCount "$PASS_COUNT" \
  --argjson failCount "$FAIL_COUNT" \
  '{mode:$mode, baseUrl:$baseUrl, generatedAt:$generatedAt, viewportMeta:$viewport, scrollCheck:{pass:$passCount, fail:$failCount}}' \
  > "$SUMMARY_JSON"

echo "Mobile audit complete: $ROOT_DIR"
