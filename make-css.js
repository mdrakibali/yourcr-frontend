const fs = require('fs');

const parts = JSON.parse(fs.readFileSync('css-parts.json', 'utf8'));

// Strip old *, html, body from customCssBetween
let customCSS = parts.customCssBetween;
customCSS = customCSS.replace(/\*\s*\{[\s\S]*?\}/g, '');
customCSS = customCSS.replace(/html\s*\{[\s\S]*?\}/g, '');
customCSS = customCSS.replace(/body\s*\{[\s\S]*?\}/g, '');

const newCSS = `@import 'tailwindcss';
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Colors */
  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  --color-primary-soft: var(--primary-soft);
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-soft: var(--surface-soft);
  --color-border: var(--border);
  --color-text: var(--text);
  --color-muted: var(--muted);
  --color-teal: var(--teal);
  --color-teal-soft: var(--teal-soft);
  --color-rose: var(--rose);
  --color-rose-soft: var(--rose-soft);
  --color-amber: var(--amber);
  --color-amber-soft: var(--amber-soft);
  --color-indigo: var(--indigo);
  --color-indigo-soft: var(--indigo-soft);
  --color-green: var(--green);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  /* Shadows & Radius */
  --shadow-default: var(--shadow);
  --radius-md: var(--radius);

  /* Fonts */
  --font-sans: var(--font-bangla), 'Hind Siliguri', var(--font-inter), sans-serif;
}

:root {
  ${parts.rootVars.trim()}
}

.dark {
  ${parts.darkVars.trim()}
}

@layer base {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
    background-color: var(--bg);
    color-scheme: light;
  }
  body {
    margin: 0;
    background-color: var(--bg);
    color: var(--text);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-button {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 9999px;
  }

  /* From exit project (Tiptap etc) */
  .tiptap mark:not([data-color]) {
    color: var(--teal);
    background-color: var(--teal-soft);
    text-decoration-line: underline;
    text-decoration-color: var(--teal);
    cursor: pointer;
    position: relative;
    border-radius: 0.125rem;
  }

  .tiptap.ProseMirror,
  .tiptap,
  .ProseMirror {
    min-height: 100%;
    flex: 1 1 0%;
    outline: none;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1536px) {
    .tiptap.ProseMirror,
    .tiptap,
    .ProseMirror {
      font-size: 1rem;
      line-height: 1.75rem;
    }
  }

  .tiptap p,
  .ProseMirror p {
    font-weight: 400;
    font-size: inherit;
    line-height: inherit;
  }

  .tiptap span:not([class*="font-"]),
  .tiptap div:not([class*="font-"]) {
    font-weight: 400;
  }
}

${customCSS}

${parts.remainingCss}
`;

fs.writeFileSync('src/app/globals.css', newCSS);
