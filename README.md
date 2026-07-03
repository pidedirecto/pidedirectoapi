# PideDirecto API Documentation

Static documentation site for the **PideDirecto External API**, built with [VitePress](https://vitepress.dev/) (Vue 3).

The published site includes integration guides, endpoint reference pages, webhook events, shared type definitions, and a changelog.

## Prerequisites

- **Node.js** 18+
- **npm**

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start local dev server with hot reload       |
| `npm run build`   | Build static site to `docs/.vitepress/dist/` |
| `npm run preview` | Preview the production build locally         |

## Project structure

```text
pidedirectoapi/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts             # Site config, nav, sidebar
│   │   └── theme/
│   │       ├── index.ts          # Custom theme + redirects
│   │       └── custom.css        # Brand colors, table layout
│   ├── public/
│   │   └── images/               # Static assets (logo, diagrams)
│   ├── guide/                    # Integration guides
│   ├── api/                      # Endpoint reference pages
│   │   ├── products/
│   │   ├── orders/
│   │   ├── payment-links/
│   │   ├── promo-codes/
│   │   ├── store-catalog/
│   │   └── pos-business-day/
│   ├── webhooks/                 # Webhook event reference pages
│   ├── types/                    # Shared enums/types (included in pages)
│   ├── index.md                  # Getting Started (home page)
│   └── changelog.md
├── package.json
└── tsconfig.json                 # TypeScript config for VitePress theme
```

### Documentation sections

| Section                       | Location                    |
| ----------------------------- | --------------------------- |
| Getting started, auth, errors | `docs/guide/`               |
| API endpoints                 | `docs/api/`                 |
| Webhook events                | `docs/webhooks/`            |
| Shared types and enums        | `docs/types/`               |
| Changelog                     | `docs/changelog.md`         |
| Navigation / sidebar          | `docs/.vitepress/config.ts` |

### Editing pages

Edit Markdown files under `docs/`. VitePress picks up changes automatically in dev mode.

**API and webhook pages** follow a consistent layout:

- `## Request` / `## Response` — parameter tables
- `## Types` — shared definitions pulled in via `@include`
- `## Errors` — endpoint-specific error codes
- `### Example` — request/response JSON samples

**Nested parameter tables** use visual indentation instead of flat dot-notation paths. Show only the field name in the first column, indented with `&nbsp;` (2 per nesting level). Array items use `[i]`, `[j]`, etc.

```markdown
| orderItems | Array | All order items |
| &nbsp;&nbsp;[i] | Object | An order item |
| &nbsp;&nbsp;&nbsp;&nbsp;productId | string (UUID) | Product id |
| &nbsp;&nbsp;&nbsp;&nbsp;modifierGroups | Array | All modifiers |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | Object | A modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this modifier group |
```

**Shared types** live in `docs/types/` and are included in endpoint pages:

```markdown
<!--@include: ../../types/order-status.md-->
```

## Build output

```bash
npm run build
```

Static files are generated in:

```text
docs/.vitepress/dist/
```

## Tech stack

- **[VitePress](https://vitepress.dev/)** — static site generator (Vue 3)
- **[Vue 3](https://vuejs.org/)** — custom theme
