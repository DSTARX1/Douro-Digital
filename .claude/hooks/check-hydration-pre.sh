#!/bin/bash
# PreToolUse hook: Block edits that introduce common hydration anti-patterns
# Checks the NEW code being written (new_string for Edit, content for Write)

INPUT=$(cat)

TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // empty')
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Only check React component files
if [[ ! "$FILE_PATH" =~ \.(tsx|jsx)$ ]]; then
  exit 0
fi

# Get the new code being introduced
if [ "$TOOL_NAME" = "Edit" ]; then
  NEW_CODE=$(echo "$INPUT" | jq -r '.tool_input.new_string // empty')
elif [ "$TOOL_NAME" = "Write" ]; then
  NEW_CODE=$(echo "$INPUT" | jq -r '.tool_input.content // empty')
else
  exit 0
fi

if [ -z "$NEW_CODE" ]; then
  exit 0
fi

ISSUES=""

# 1. Check for direct window/document property access without any SSR guard
#    Allow: typeof window, useEffect, useLayoutEffect, event handlers, dynamic imports
if echo "$NEW_CODE" | grep -qE '\bwindow\.(location|innerWidth|innerHeight|scrollY|scrollX|addEventListener|removeEventListener|matchMedia|getComputedStyle|requestAnimationFrame|cancelAnimationFrame|open|close|history|navigator|screen|performance|devicePixelRatio)' 2>/dev/null; then
  if ! echo "$NEW_CODE" | grep -qE 'useEffect|useLayoutEffect|typeof window|"use client".*useEffect|onClick|onChange|onSubmit|onLoad|onScroll|onResize|addEventListener|useCallback' 2>/dev/null; then
    ISSUES="${ISSUES}
- Direct window.* access detected without useEffect guard. Wrap browser API calls in useEffect() to prevent hydration mismatch."
  fi
fi

# 2. Check for document.* calls (getElementById, querySelector, etc.)
if echo "$NEW_CODE" | grep -qE '\bdocument\.(getElementById|querySelector|querySelectorAll|createElement|body|documentElement|cookie|title|referrer|activeElement)' 2>/dev/null; then
  if ! echo "$NEW_CODE" | grep -qE 'useEffect|useLayoutEffect|typeof document|onClick|onChange|onSubmit|useCallback|useRef' 2>/dev/null; then
    ISSUES="${ISSUES}
- Direct document.* access detected without useEffect guard. DOM APIs are not available during SSR. Wrap in useEffect()."
  fi
fi

# 3. Check for localStorage/sessionStorage in render path
if echo "$NEW_CODE" | grep -qE '\b(localStorage|sessionStorage)\.(getItem|setItem|removeItem|clear|length)' 2>/dev/null; then
  if ! echo "$NEW_CODE" | grep -qE 'useEffect|useLayoutEffect|useState.*\(\)|onClick|onChange|onSubmit|useCallback' 2>/dev/null; then
    ISSUES="${ISSUES}
- localStorage/sessionStorage access in render path. Storage APIs are not available during SSR. Move to useEffect() or useState with lazy initializer."
  fi
fi

# 4. Check for Date.now()/new Date() used directly in JSX or variable initialization (not in useEffect)
if echo "$NEW_CODE" | grep -qE '(=\s*(Date\.now\(\)|new Date\(\))|\{.*Date\.now\(\).*\}|\{.*new Date\(\).*\})' 2>/dev/null; then
  if ! echo "$NEW_CODE" | grep -qE 'useEffect|useLayoutEffect|useMemo|getServerSideProps|getStaticProps|generateMetadata|server action' 2>/dev/null; then
    ISSUES="${ISSUES}
- Date.now()/new Date() in render path. Server and client timestamps differ, causing hydration mismatch. Use useEffect() + useState()."
  fi
fi

# 5. Check for Math.random() in render
if echo "$NEW_CODE" | grep -qE 'Math\.random\(\)' 2>/dev/null; then
  if ! echo "$NEW_CODE" | grep -qE 'useEffect|useLayoutEffect|useMemo|useState|useId' 2>/dev/null; then
    ISSUES="${ISSUES}
- Math.random() in render path. Random values differ between server and client. Use useId() or move to useEffect()."
  fi
fi

# 6. Check for block elements inside <p> tags (common hydration error)
if echo "$NEW_CODE" | grep -qiE '<p[^>]*>[^<]*<(div|section|article|header|footer|main|aside|nav|ul|ol|table|form|fieldset|figure|blockquote|details|summary|h[1-6])\b' 2>/dev/null; then
  ISSUES="${ISSUES}
- Block-level element nested inside <p> tag. Browsers fix this during parsing, causing server/client HTML mismatch. Use <div> instead of <p> as the wrapper."
fi

# 7. Check for nested <a> tags
if echo "$NEW_CODE" | grep -qiE '<a\b[^>]*>([^<]|<(?!/a>))*<a\b' 2>/dev/null; then
  ISSUES="${ISSUES}
- Nested <a> tags detected. This is invalid HTML and causes hydration errors. Restructure to avoid anchor nesting."
fi

# 8. Check for interactive elements inside <button>
if echo "$NEW_CODE" | grep -qiE '<button[^>]*>([^<]|<(?!/button>))*<(a|button|input|select|textarea)\b' 2>/dev/null; then
  ISSUES="${ISSUES}
- Interactive element nested inside <button>. This is invalid HTML and causes hydration errors."
fi

if [ -n "$ISSUES" ]; then
  echo "HYDRATION CHECK (pre-edit): Potential hydration issues in code being written to $FILE_PATH:$ISSUES

Fix these issues before writing the code. Use 'use client' + useEffect/useState pattern for browser-only APIs." >&2
  exit 2
fi

exit 0
