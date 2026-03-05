#!/usr/bin/env bash
set -euo pipefail

command -v curl >/dev/null 2>&1 || { echo "curl is required"; exit 1; }
command -v jq >/dev/null 2>&1 || { echo "jq is required"; exit 1; }

BASE_URL="${1:-https://devlo.ch}"
SLUG_MAP="${SLUG_MAP:-src/lib/i18n/slug-map.json}"
CHECK_SCOPE="${CHECK_SCOPE:-all}" # all | sample
CHECK_PAGE_IDS="${CHECK_PAGE_IDS:-}" # comma-separated override
N8N_WEBHOOK_URL="${N8N_WEBHOOK_URL:-}"
N8N_REQUIRED="${N8N_REQUIRED:-0}"
N8N_LOGS_URL_TEMPLATE="${N8N_LOGS_URL_TEMPLATE:-}"
N8N_LOGS_AUTH_HEADER="${N8N_LOGS_AUTH_HEADER:-}"
N8N_API_BASE="${N8N_API_BASE:-https://devlo.app.n8n.cloud/api/v1}"
N8N_API_KEY="${N8N_API_KEY:-}"
N8N_WORKFLOW_ID="${N8N_WORKFLOW_ID:-}"
CURL_MAX_TIME="${CURL_MAX_TIME:-20}"
STAMP="$(date +%Y%m%dT%H%M%S)"
OUT_DIR="docs/i18n_sanity_migration/check_success_${STAMP}"
RAW_DIR="${OUT_DIR}/raw"
mkdir -p "$RAW_DIR"

if [[ ! -f "$SLUG_MAP" ]]; then
  echo "slug map file not found: $SLUG_MAP"
  exit 1
fi

if [[ "$N8N_REQUIRED" == "1" && -z "$N8N_WEBHOOK_URL" ]]; then
  echo "N8N_REQUIRED=1 but N8N_WEBHOOK_URL is missing"
  exit 1
fi
if [[ "$N8N_REQUIRED" == "1" && -z "$N8N_API_KEY" ]]; then
  echo "N8N_REQUIRED=1 but N8N_API_KEY is missing"
  exit 1
fi

SAMPLE_PAGE_IDS=(
  "home"
  "services"
  "consultation"
  "academy"
  "case-studies"
  "case-study:monizze-120-rendez-vous"
  "case-study:logiciel-comptable-200k-ca"
  "service:outbound-multicanal"
)
LOCALES=("fr" "en" "de" "nl")
FRENCH_UI_PHRASES=(
  "Voir toutes les études de cas"
  "En savoir plus"
  "Changer de service"
  "leviers à configurer"
  "études de cas liées"
  "questions fréquentes"
  "Détails de campagne"
  "Résultats clés"
  "KPIs observés"
  "Cas client vérifié"
  "Suisse romande"
)

if [[ -n "$CHECK_PAGE_IDS" ]]; then
  IFS=',' read -r -a PAGE_IDS <<<"$CHECK_PAGE_IDS"
elif [[ "$CHECK_SCOPE" == "sample" ]]; then
  PAGE_IDS=("${SAMPLE_PAGE_IDS[@]}")
else
  PAGE_IDS=()
  while IFS= read -r page_id; do
    PAGE_IDS+=("$page_id")
  done < <(jq -r 'keys[]' "$SLUG_MAP" | sort)
fi

if [[ "${#PAGE_IDS[@]}" -eq 0 ]]; then
  echo "no page IDs resolved for validation"
  exit 1
fi

trim() {
  sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//'
}

normalize_text() {
  local input="$1"
  echo "$input" | tr '[:upper:]' '[:lower:]' | tr -s ' ' | trim
}

normalize_path() {
  local path="$1"
  if [[ -z "$path" || "$path" == "/" ]]; then
    echo "/"
    return
  fi
  local with_slash="$path"
  [[ "$with_slash" == /* ]] || with_slash="/$with_slash"
  echo "${with_slash%/}"
}

to_absolute_url() {
  local value="$1"
  if [[ -z "$value" ]]; then
    echo ""
  elif [[ "$value" =~ ^https?:// ]]; then
    echo "$value"
  else
    local normalized
    normalized="$(normalize_path "$value")"
    echo "${BASE_URL%/}${normalized}"
  fi
}

to_base_env_url() {
  local value="$1"
  if [[ -z "$value" ]]; then
    echo ""
    return
  fi
  local absolute
  absolute="$(to_absolute_url "$value")"
  if [[ -z "$absolute" ]]; then
    echo ""
    return
  fi
  local path
  path="$(echo "$absolute" | sed -E 's#^https?://[^/]+##')"
  [[ -n "$path" ]] || path="/"
  echo "${BASE_URL%/}${path}"
}

path_for() {
  local page_id="$1"
  local locale="$2"
  jq -r --arg page "$page_id" --arg loc "$locale" '.[$page][$loc] // empty' "$SLUG_MAP"
}

extract_first() {
  local type="$1"
  local file="$2"
  case "$type" in
    title)
      perl -0777 -ne 'if (/<title[^>]*>([^<]+)<\/title>/is) { print $1 }' "$file" | head -n1 | tr '\n' ' ' | trim
      ;;
    h1)
      perl -0777 -ne 'if (/<h1[^>]*>(.*?)<\/h1>/is) { print $1 }' "$file" | sed -E 's/<[^>]+>//g' | head -n1 | tr '\n' ' ' | tr -s ' ' | trim
      ;;
    description)
      perl -0777 -ne 'if (/<meta[^>]*name=["'"'"']description["'"'"'][^>]*content=["'"'"']([^"'"'"']+)["'"'"']/is) { print $1 }' "$file" | head -n1 | tr '\n' ' ' | trim
      ;;
    canonical)
      perl -0777 -ne 'if (/<link[^>]*rel=["'"'"']canonical["'"'"'][^>]*href=["'"'"']([^"'"'"']+)["'"'"']/is) { print $1 }' "$file" | head -n1 | tr '\n' ' ' | trim
      ;;
    og-url)
      perl -0777 -ne 'if (/<meta[^>]*property=["'"'"']og:url["'"'"'][^>]*content=["'"'"']([^"'"'"']+)["'"'"']/is) { print $1 }' "$file" | head -n1 | tr '\n' ' ' | trim
      ;;
    og-image)
      perl -0777 -ne 'if (/<meta[^>]*property=["'"'"']og:image["'"'"'][^>]*content=["'"'"']([^"'"'"']+)["'"'"']/is) { print $1 }' "$file" | head -n1 | tr '\n' ' ' | trim
      ;;
    html-lang)
      perl -0777 -ne 'if (/<html[^>]*lang=["'"'"']([^"'"'"']+)["'"'"']/is) { print $1 }' "$file" | head -n1 | tr '\n' ' ' | trim
      ;;
    *)
      echo ""
      ;;
  esac
}

failures="[]"
warnings="[]"
results="[]"

for page_id in "${PAGE_IDS[@]}"; do
  echo "checking pageId=${page_id}" >&2
  fr_path="$(path_for "$page_id" "fr")"
  if [[ -z "$fr_path" ]]; then
    failures="$(jq -c --arg issue "missing-fr-slug:$page_id" '. + [$issue]' <<<"$failures")"
    continue
  fi

  fr_url="${BASE_URL%/}$(normalize_path "$fr_path")"
  fr_html="${RAW_DIR}/fr_${page_id//[:\/]/_}.html"
  curl -sSL --max-time "$CURL_MAX_TIME" "$fr_url" >"$fr_html"
  fr_title="$(extract_first title "$fr_html")"
  fr_h1="$(extract_first h1 "$fr_html")"
  fr_desc="$(extract_first description "$fr_html")"
  fr_fingerprint="$(normalize_text "$(printf '%s %s %s' "$fr_title" "$fr_h1" "$fr_desc")")"
  fr_title_norm="$(normalize_text "$fr_title")"
  fr_h1_norm="$(normalize_text "$fr_h1")"
  fr_desc_norm="$(normalize_text "$fr_desc")"

  for locale in "${LOCALES[@]}"; do
    path="$(path_for "$page_id" "$locale")"
    if [[ -z "$path" ]]; then
      failures="$(jq -c --arg issue "missing-slug:$page_id:$locale" '. + [$issue]' <<<"$failures")"
      continue
    fi

    url="${BASE_URL%/}$(normalize_path "$path")"
    safe="${locale}_${page_id//[:\/]/_}"
    html_file="${RAW_DIR}/${safe}.html"
    headers_file="${RAW_DIR}/${safe}.headers.txt"

    curl -sSL --max-time "$CURL_MAX_TIME" -D "$headers_file" "$url" >"$html_file"
    status="$(awk 'toupper($1) ~ /^HTTP\// { code=$2 } END { print code }' "$headers_file")"
    html_lang="$(extract_first html-lang "$html_file")"
    title="$(extract_first title "$html_file")"
    h1="$(extract_first h1 "$html_file")"
    description="$(extract_first description "$html_file")"
    canonical_raw="$(extract_first canonical "$html_file")"
    og_url_raw="$(extract_first og-url "$html_file")"
    og_image_raw="$(extract_first og-image "$html_file")"

    canonical="$(to_absolute_url "$canonical_raw")"
    og_url="$(to_absolute_url "$og_url_raw")"
    og_image="$(to_absolute_url "$og_image_raw")"

    canonical_probe_url="$(to_base_env_url "$canonical_raw")"
    if [[ -n "$canonical_probe_url" ]]; then
      canonical_status="$(curl -sI --max-time "$CURL_MAX_TIME" -o /dev/null -w '%{http_code}|%{num_redirects}' "$canonical_probe_url" || true)"
    else
      canonical_status="MISSING"
    fi

    og_image_probe_url="$(to_base_env_url "$og_image_raw")"
    if [[ -n "$og_image_probe_url" ]]; then
      og_image_status="$(curl -sI --max-time "$CURL_MAX_TIME" -o /dev/null -w '%{http_code}' "$og_image_probe_url" || true)"
    else
      og_image_status="MISSING"
    fi

    hreflang_blob="$(grep -Eio '<link[^>]+hreflang=["'\''][^"'\''>]+["'\''][^>]*>' "$html_file" || true)"
    has_fr="$(grep -Eio 'hreflang=["'\'']fr["'\'']' <<<"$hreflang_blob" | wc -l | tr -d ' ')"
    has_en="$(grep -Eio 'hreflang=["'\'']en["'\'']' <<<"$hreflang_blob" | wc -l | tr -d ' ')"
    has_de="$(grep -Eio 'hreflang=["'\'']de["'\'']' <<<"$hreflang_blob" | wc -l | tr -d ' ')"
    has_nl="$(grep -Eio 'hreflang=["'\'']nl["'\'']' <<<"$hreflang_blob" | wc -l | tr -d ' ')"
    has_xd="$(grep -Eio 'hreflang=["'\'']x-default["'\'']' <<<"$hreflang_blob" | wc -l | tr -d ' ')"

    locale_fingerprint="$(normalize_text "$(printf '%s %s %s' "$title" "$h1" "$description")")"
    locale_title_norm="$(normalize_text "$title")"
    locale_h1_norm="$(normalize_text "$h1")"
    locale_desc_norm="$(normalize_text "$description")"

    check_pass=true
    [[ "$status" == "200" ]] || { check_pass=false; failures="$(jq -c --arg issue "status:$page_id:$locale:$status" '. + [$issue]' <<<"$failures")"; }
    [[ "$html_lang" == "$locale" ]] || { warnings="$(jq -c --arg issue "html-lang:$page_id:$locale:$html_lang" '. + [$issue]' <<<"$warnings")"; }
    [[ -n "$title" && -n "$description" ]] || { check_pass=false; failures="$(jq -c --arg issue "missing-meta:$page_id:$locale" '. + [$issue]' <<<"$failures")"; }
    [[ -n "$canonical" && "$canonical" == "$og_url" ]] || { check_pass=false; failures="$(jq -c --arg issue "canonical-og-mismatch:$page_id:$locale" '. + [$issue]' <<<"$failures")"; }
    [[ "$canonical_status" == "200|0" ]] || { check_pass=false; failures="$(jq -c --arg issue "canonical-status:$page_id:$locale:$canonical_status" '. + [$issue]' <<<"$failures")"; }
    [[ "$has_fr" -gt 0 && "$has_en" -gt 0 && "$has_de" -gt 0 && "$has_nl" -gt 0 && "$has_xd" -gt 0 ]] || { check_pass=false; failures="$(jq -c --arg issue "hreflang-missing:$page_id:$locale" '. + [$issue]' <<<"$failures")"; }
    [[ -n "$og_image" && "$og_image_status" == "200" ]] || { check_pass=false; failures="$(jq -c --arg issue "og-image:$page_id:$locale:$og_image_status" '. + [$issue]' <<<"$failures")"; }

    if [[ "$locale" != "fr" ]]; then
      if [[ "$locale_fingerprint" == "$fr_fingerprint" ]]; then
        check_pass=false
        failures="$(jq -c --arg issue "same-content-as-fr:$page_id:$locale" '. + [$issue]' <<<"$failures")"
      fi
      if [[ -n "$fr_title_norm" && -n "$locale_title_norm" && "$locale_title_norm" == "$fr_title_norm" ]]; then
        check_pass=false
        failures="$(jq -c --arg issue "same-title-as-fr:$page_id:$locale" '. + [$issue]' <<<"$failures")"
      fi
      if [[ -n "$fr_h1_norm" && -n "$locale_h1_norm" && "$locale_h1_norm" == "$fr_h1_norm" ]]; then
        check_pass=false
        failures="$(jq -c --arg issue "same-h1-as-fr:$page_id:$locale" '. + [$issue]' <<<"$failures")"
      fi
      if [[ -n "$fr_desc_norm" && -n "$locale_desc_norm" && "$locale_desc_norm" == "$fr_desc_norm" ]]; then
        check_pass=false
        failures="$(jq -c --arg issue "same-description-as-fr:$page_id:$locale" '. + [$issue]' <<<"$failures")"
      fi
      for phrase in "${FRENCH_UI_PHRASES[@]}"; do
        if grep -Fqi "$phrase" "$html_file"; then
          check_pass=false
          failures="$(jq -c --arg issue "french-ui-leak:$page_id:$locale:$phrase" '. + [$issue]' <<<"$failures")"
        fi
      done
    fi

    results="$(jq -c \
      --arg pageId "$page_id" \
      --arg locale "$locale" \
      --arg url "$url" \
      --arg status "$status" \
      --arg htmlLang "$html_lang" \
      --arg canonical "$canonical" \
      --arg ogUrl "$og_url" \
      --arg ogImage "$og_image" \
      --arg canonicalStatus "$canonical_status" \
      --arg ogImageStatus "$og_image_status" \
      --arg pass "$check_pass" \
      '. + [{pageId:$pageId,locale:$locale,url:$url,status:$status,htmlLang:$htmlLang,canonical:$canonical,ogUrl:$ogUrl,ogImage:$ogImage,canonicalStatus:$canonicalStatus,ogImageStatus:$ogImageStatus,pass:($pass=="true")}]' <<<"$results")"
  done
done

total_checks="$(jq 'length' <<<"$results")"
total_failures="$(jq 'length' <<<"$failures")"
overall_pass="false"
if [[ "$total_failures" -eq 0 && "$total_checks" -gt 0 ]]; then
  overall_pass="true"
fi

summary_file="${OUT_DIR}/summary.json"
build_summary() {
  jq -n \
  --arg baseUrl "$BASE_URL" \
  --arg generatedAt "$STAMP" \
  --arg overallPass "$overall_pass" \
  --arg checkScope "$CHECK_SCOPE" \
  --arg checkPageIds "$CHECK_PAGE_IDS" \
  --argjson totalChecks "$total_checks" \
  --argjson totalFailures "$total_failures" \
  --argjson totalPages "${#PAGE_IDS[@]}" \
  --argjson results "$results" \
  --argjson warnings "$warnings" \
  --argjson failures "$failures" \
  '{baseUrl:$baseUrl,generatedAt:$generatedAt,overallPass:($overallPass=="true"),checkScope:$checkScope,checkPageIds:$checkPageIds,totalPages:$totalPages,totalChecks:$totalChecks,totalFailures:$totalFailures,results:$results,warnings:$warnings,failures:$failures}'
}

build_summary >"$summary_file"

if [[ -n "$N8N_API_KEY" ]]; then
  n8n_workflows_status="$(
    curl -sS -o "${OUT_DIR}/n8n_workflows.json" \
      -w "%{http_code}" \
      -H "X-N8N-API-KEY: ${N8N_API_KEY}" \
      "${N8N_API_BASE}/workflows?limit=1" || true
  )"

  if [[ "$n8n_workflows_status" -lt 200 || "$n8n_workflows_status" -ge 300 ]]; then
    failures="$(jq -c --arg issue "n8n-api-workflows-http:$n8n_workflows_status" '. + [$issue]' <<<"$failures")"
    overall_pass="false"
    total_failures="$(jq 'length' <<<"$failures")"
  fi

  if [[ -n "$N8N_WORKFLOW_ID" ]]; then
    n8n_exec_status="$(
      curl -sS -o "${OUT_DIR}/n8n_executions.json" \
        -w "%{http_code}" \
        -H "X-N8N-API-KEY: ${N8N_API_KEY}" \
        "${N8N_API_BASE}/executions?limit=1&workflowId=${N8N_WORKFLOW_ID}" || true
    )"

    if [[ "$n8n_exec_status" -lt 200 || "$n8n_exec_status" -ge 300 ]]; then
      failures="$(jq -c --arg issue "n8n-api-executions-http:$n8n_exec_status" '. + [$issue]' <<<"$failures")"
      overall_pass="false"
      total_failures="$(jq 'length' <<<"$failures")"
    else
      n8n_execution_id="$(jq -r '.data[0].id // empty' "${OUT_DIR}/n8n_executions.json" 2>/dev/null || true)"
      n8n_execution_status="$(jq -r '.data[0].status // empty' "${OUT_DIR}/n8n_executions.json" 2>/dev/null || true)"

      if [[ -n "$n8n_execution_id" ]]; then
        curl -sS \
          -H "X-N8N-API-KEY: ${N8N_API_KEY}" \
          "${N8N_API_BASE}/executions/${n8n_execution_id}" \
          > "${OUT_DIR}/n8n_execution_${n8n_execution_id}.json" || true
      fi

      if [[ "$N8N_REQUIRED" == "1" && "$n8n_execution_status" != "success" ]]; then
        failures="$(jq -c --arg issue "n8n-latest-execution-status:${n8n_execution_status:-unknown}" '. + [$issue]' <<<"$failures")"
        overall_pass="false"
        total_failures="$(jq 'length' <<<"$failures")"
      fi
    fi
  fi
fi

if [[ -n "$N8N_WEBHOOK_URL" ]]; then
  n8n_response_file="${OUT_DIR}/n8n_response.json"
  n8n_status_file="${OUT_DIR}/n8n_status.txt"
  curl -sS -X POST "$N8N_WEBHOOK_URL" \
    -H "Content-Type: application/json" \
    --data-binary "@${summary_file}" \
    -w "%{http_code}" \
    -o "$n8n_response_file" \
    >"$n8n_status_file" || true

  n8n_http_status="$(cat "$n8n_status_file" 2>/dev/null || echo "000")"
  if [[ "$n8n_http_status" -lt 200 || "$n8n_http_status" -ge 300 ]]; then
    warnings="$(jq -c --arg issue "n8n-webhook-http:$n8n_http_status" '. + [$issue]' <<<"$warnings")"
  fi

  if [[ "$overall_pass" != "true" && -n "$N8N_LOGS_URL_TEMPLATE" ]]; then
    execution_id="$(
      jq -r '
        .executionId // .id // .execution_id // .data.executionId // .data.id // empty
      ' "$n8n_response_file" 2>/dev/null || true
    )"

    if [[ -n "$execution_id" ]]; then
      n8n_logs_url="${N8N_LOGS_URL_TEMPLATE//\{executionId\}/$execution_id}"
      n8n_logs_file="${OUT_DIR}/n8n_logs.json"
      if [[ -n "$N8N_LOGS_AUTH_HEADER" ]]; then
        curl -sS "$n8n_logs_url" -H "$N8N_LOGS_AUTH_HEADER" >"$n8n_logs_file" || true
      else
        curl -sS "$n8n_logs_url" >"$n8n_logs_file" || true
      fi

      n8n_error_message="$(
        jq -r '
          [
            .message,
            .error,
            .data?.error,
            (.nodes[]?.error?.message // empty)
          ] | map(select(type=="string" and length>0)) | .[0] // empty
        ' "$n8n_logs_file" 2>/dev/null || true
      )"

      if [[ -n "$n8n_error_message" ]]; then
        warnings="$(jq -c --arg issue "n8n-log:$n8n_error_message" '. + [$issue]' <<<"$warnings")"
      fi
    fi
  fi
fi

build_summary >"$summary_file"

echo "check_success summary: $summary_file"
jq -r '.overallPass as $ok | "overallPass=\($ok) checks=\(.totalChecks) failures=\(.totalFailures)"' "$summary_file"

if [[ "$overall_pass" != "true" ]]; then
  jq -r '.failures[]' "$summary_file"
  exit 1
fi
