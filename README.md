# PideDirecto API Documentation

Static documentation site for the **PideDirecto External API**, built with [VitePress](https://vitepress.dev/) (Vue 3).

The published site includes integration guides, endpoint reference pages, webhook events, and changelog.

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
├── pidedirecto.yaml              # OpenAPI 3.1 spec (optional machine-readable reference)
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts             # Site config, nav, sidebar
│   │   └── theme/                # Custom theme
│   ├── public/                   # Static assets served at site root
│   │   └── images/
│   ├── guide/                    # Integration guides
│   ├── api/                      # Endpoint reference pages
│   ├── webhooks/                 # Webhook event reference pages
│   ├── index.md                  # Getting Started (home page)
│   └── changelog.md
└── package.json
```

### Markdown pages

Edit files under `docs/`. VitePress picks up changes automatically in dev mode.

| Section                       | Location                    |
| ----------------------------- | --------------------------- |
| Getting started, auth, errors | `docs/guide/`               |
| API endpoints                 | `docs/api/`                 |
| Webhook events                | `docs/webhooks/`            |
| Changelog                     | `docs/changelog.md`         |
| Navigation / sidebar          | `docs/.vitepress/config.ts` |

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

For full request/response details, see the documentation site or `pidedirecto.yaml`.
