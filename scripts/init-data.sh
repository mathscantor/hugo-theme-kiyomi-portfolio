#!/usr/bin/env bash
#
# init-data.sh - Copy kiyomi-portfolio starter data into your site.
#
# Copies the theme's exampleSite data/ and content/_index.md into your site's
# own data/ and content/ directories, but ONLY for files that do not already
# exist. Existing files are never overwritten, so the script is safe to re-run.
#
# Usage (run from your Hugo site root):
#   bash themes/kiyomi-portfolio/scripts/init-data.sh
#
# Or, if the theme lives elsewhere, pass the site root as the first argument:
#   bash /path/to/themes/kiyomi-portfolio/scripts/init-data.sh /path/to/site

set -euo pipefail

# Resolve the theme directory (parent of this script's directory).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
THEME_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
EXAMPLE_DIR="${THEME_DIR}/exampleSite"

# Site root: first argument, or the current working directory.
SITE_ROOT="${1:-$(pwd)}"

if [ ! -d "${EXAMPLE_DIR}" ]; then
  echo "error: exampleSite not found at ${EXAMPLE_DIR}" >&2
  exit 1
fi

created=0
skipped=0

# copy_if_missing <source-file> <destination-file>
copy_if_missing() {
  local src="$1"
  local dest="$2"
  if [ -e "${dest}" ]; then
    echo "  skip   ${dest} (already exists)"
    skipped=$((skipped + 1))
  else
    mkdir -p "$(dirname "${dest}")"
    cp "${src}" "${dest}"
    echo "  create ${dest}"
    created=$((created + 1))
  fi
}

echo "Initializing kiyomi-portfolio starter files in: ${SITE_ROOT}"

# Data files.
if [ -d "${EXAMPLE_DIR}/data" ]; then
  echo "Data files:"
  while IFS= read -r -d '' src; do
    rel="${src#"${EXAMPLE_DIR}/data/"}"
    copy_if_missing "${src}" "${SITE_ROOT}/data/${rel}"
  done < <(find "${EXAMPLE_DIR}/data" -type f -print0)
fi

# About content.
if [ -f "${EXAMPLE_DIR}/content/_index.md" ]; then
  echo "Content:"
  copy_if_missing "${EXAMPLE_DIR}/content/_index.md" "${SITE_ROOT}/content/_index.md"
fi

echo "Done. ${created} created, ${skipped} skipped."
echo "Next: edit the files above, set [params] in your hugo.toml, and add your images under static/."
