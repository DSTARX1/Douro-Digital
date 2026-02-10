#!/bin/bash
# PostToolUse hook: After editing a React file, check the FULL file for hydration issues
# This provides more accurate detection than pre-hook since it sees full file context

INPUT=$(cat)

FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Only check React component files
if [[ ! "$FILE_PATH" =~ \.(tsx|jsx)$ ]]; then
  exit 0
fi

# Check if file exists
if [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

FILE_CONTENT=$(cat "$FILE_PATH" 2>/dev/null)
if [ -z "$FILE_CONTENT" ]; then
  exit 0
fi

ISSUES=""

# Determine if this is a client component
IS_CLIENT=false
if echo "$FILE_CONTENT" | head -5 | grep -qE "^['\"]use client['\"]"; then
  IS_CLIENT=true
fi

# --- Server Component checks (no 'use client' directive) ---
if [ "$IS_CLIENT" = false ]; then

  # Server components cannot use hooks
  if echo "$FILE_CONTENT" | grep -qE '\b(useState|useEffect|useLayoutEffect|useRef|useCallback|useMemo|useReducer|useContext)\b' 2>/dev/null; then
    # Check it's actually a hook call, not just a type/import
    if echo "$FILE_CONTENT" | grep -qE '\b(useState|useEffect|useLayoutEffect|useRef|useCallback|useMemo|useReducer|useContext)\s*\(' 2>/dev/null; then
      ISSUES="${ISSUES}
- React hooks used in a Server Component (no 'use client' directive). Add 'use client' at the top of the file, or extract the interactive parts into a separate Client Component."
    fi
  fi

  # Server components cannot use browser APIs
  if echo "$FILE_CONTENT" | grep -qE '\b(window\.|document\.|localStorage|sessionStorage|navigator\.|addEventListener)' 2>/dev/null; then
    # Ignore if it's in a type annotation or comment
    if echo "$FILE_CONTENT" | grep -vE '^\s*(//|/?\*|\*/)' | grep -qE '\b(window\.|document\.|localStorage|sessionStorage|navigator\.)' 2>/dev/null; then
      ISSUES="${ISSUES}
- Browser APIs used in a Server Component. Server Components run only on the server where window/document don't exist. Add 'use client' or move browser API usage to a Client Component."
    fi
  fi

  # Server components cannot use event handlers
  if echo "$FILE_CONTENT" | grep -qE '\bon(Click|Change|Submit|MouseEnter|MouseLeave|MouseMove|KeyDown|KeyUp|Focus|Blur|Scroll|Resize|Load|Error|TouchStart|TouchEnd|TouchMove)\s*=' 2>/dev/null; then
    ISSUES="${ISSUES}
- Event handlers used in a Server Component. Event handlers require interactivity. Add 'use client' at the top of the file."
  fi
fi

# --- Client Component checks ('use client') ---
if [ "$IS_CLIENT" = true ]; then

  # Check for browser API usage outside useEffect (potential hydration mismatch)
  # Extract lines with browser APIs, exclude lines inside useEffect/event handlers
  # This is a simplified check - looks for top-level browser API usage

  # Check for window/document in what appears to be direct render logic
  # Look for patterns like: const x = window.something (outside useEffect)
  if echo "$FILE_CONTENT" | grep -vE '^\s*(//|/?\*|\*/)' | grep -qE '(const|let|var)\s+\w+\s*=\s*(window\.|document\.|localStorage\.|sessionStorage\.)' 2>/dev/null; then
    # Make sure it's not inside a useEffect or function
    # Count if there are more browser API accesses than useEffect calls
    BROWSER_COUNT=$(echo "$FILE_CONTENT" | grep -cE '(const|let|var)\s+\w+\s*=\s*(window\.|document\.|localStorage\.|sessionStorage\.)' 2>/dev/null || echo "0")
    EFFECT_COUNT=$(echo "$FILE_CONTENT" | grep -cE 'useEffect\s*\(' 2>/dev/null || echo "0")

    if [ "$BROWSER_COUNT" -gt "$EFFECT_COUNT" ]; then
      ISSUES="${ISSUES}
- Browser API assignment detected outside useEffect. Variables initialized from window/document/localStorage at module or component scope run during SSR where these APIs don't exist. Move to useEffect() + useState()."
    fi
  fi

  # Check for conditional rendering based on typeof window (causes mismatch)
  if echo "$FILE_CONTENT" | grep -qE "typeof window\s*(!==|===|!=|==)\s*['\"]undefined['\"]" 2>/dev/null; then
    if echo "$FILE_CONTENT" | grep -qE '(return|&&|\?|:).*typeof window' 2>/dev/null; then
      ISSUES="${ISSUES}
- Conditional rendering based on 'typeof window' detected. This causes hydration mismatch because the server renders one version and the client renders another. Use useEffect() + useState() with a mounted/isClient flag instead."
    fi
  fi
fi

# --- Universal checks (both server and client) ---

# Block elements inside <p>
if echo "$FILE_CONTENT" | grep -qiE '<p[^>]*>[^<]*<(div|section|article|header|footer|main|aside|nav|ul|ol|table|form|fieldset|figure|blockquote|details|summary|h[1-6])\b' 2>/dev/null; then
  ISSUES="${ISSUES}
- Block-level element nested inside <p> tag. This is invalid HTML and browsers auto-correct it, causing hydration mismatch."
fi

# Nested <a> tags
if echo "$FILE_CONTENT" | grep -qiE '<a\b[^>]*>([^<]|<(?!/a>))*<a\b' 2>/dev/null; then
  ISSUES="${ISSUES}
- Nested anchor (<a>) tags detected. Invalid HTML that causes hydration errors."
fi

# Interactive elements inside <button>
if echo "$FILE_CONTENT" | grep -qiE '<button[^>]*>([^<]|<(?!/button>))*<(a|button|input|select|textarea)\b' 2>/dev/null; then
  ISSUES="${ISSUES}
- Interactive element nested inside <button>. Invalid HTML that causes hydration errors."
fi

# Check for dangerouslySetInnerHTML misuse
if echo "$FILE_CONTENT" | grep -qE 'dangerouslySetInnerHTML' 2>/dev/null; then
  if echo "$FILE_CONTENT" | grep -qE 'dangerouslySetInnerHTML.*children' 2>/dev/null || \
     echo "$FILE_CONTENT" | grep -cE 'dangerouslySetInnerHTML' 2>/dev/null | grep -qE '^[2-9]'; then
    ISSUES="${ISSUES}
- dangerouslySetInnerHTML used alongside children or used multiple times. Components with dangerouslySetInnerHTML must not have children props."
  fi
fi

if [ -n "$ISSUES" ]; then
  echo "HYDRATION CHECK (post-edit): Issues found in $FILE_PATH after edit:$ISSUES

These issues will cause React hydration errors at runtime. Please fix them." >&2
  exit 2
fi

exit 0
