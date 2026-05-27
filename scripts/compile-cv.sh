#!/bin/bash
# Compile Typst CV files into public/cv/ for static serving.
# Runs as a prebuild step so PDFs are always fresh on deploy.

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
CURRICULUM_DIR="$PROJECT_DIR/curriculum"
OUTPUT_DIR="$PROJECT_DIR/public/cv"

mkdir -p "$OUTPUT_DIR"

# Check if typst is available
if ! command -v typst &> /dev/null; then
  echo "⚠️  typst not found, attempting to install..."
  # Try cargo install (works on Vercel with rust toolchain)
  if command -v cargo &> /dev/null; then
    cargo install typst-cli
  # Try downloading pre-built binary (Linux x86_64 for CI/Vercel)
  elif [[ "$(uname)" == "Linux" ]]; then
    TYPST_VERSION="0.14.2"
    curl -fsSL "https://github.com/typst/typst/releases/download/v${TYPST_VERSION}/typst-x86_64-unknown-linux-musl.tar.xz" \
      | tar -xJ --strip-components=1 -C /tmp
    chmod +x /tmp/typst
    export PATH="/tmp:$PATH"
  # macOS (local dev - should already have it via brew)
  elif [[ "$(uname)" == "Darwin" ]]; then
    echo "❌ Please install typst: brew install typst"
    exit 1
  fi
fi

echo "📄 Compiling CVs from $CURRICULUM_DIR..."

typst compile "$CURRICULUM_DIR/cv-en.typ" "$OUTPUT_DIR/cv-en.pdf"
echo "  ✓ cv-en.pdf"

typst compile "$CURRICULUM_DIR/cv-it.typ" "$OUTPUT_DIR/cv-it.pdf"
echo "  ✓ cv-it.pdf"

echo "✅ CV compilation complete → $OUTPUT_DIR/"
