# barcia.dev

Personal site of Iván Barcia, UI Engineer. Static [Astro](https://astro.build)
build, served from [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).

Live at **[barcia.dev](https://barcia.dev)**.

## Stack

Astro 7 · Tailwind CSS 4 · Biome (lint) · Prettier (format) · Node 24 · pnpm 12

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs on <http://localhost:4321>.

Node and pnpm are both pinned: `.nvmrc` selects Node 24 (`fnm use`), and the
`packageManager` field in `package.json` makes pnpm switch itself to the exact
version this repo expects.

## Commands

| Command               | What it does                                       |
| :-------------------- | :------------------------------------------------- |
| `pnpm install`        | Install dependencies                               |
| `pnpm dev`            | Dev server on `localhost:4321`                     |
| `pnpm dev:host`       | Same, exposed on the local network                 |
| `pnpm build`          | Production build into `./dist/`                    |
| `pnpm preview`        | Serve the build with Astro's preview server        |
| `pnpm preview:worker` | Serve the build on the real Workers runtime        |
| `pnpm check`          | Types, lint and formatting — read-only, used in CI |
| `pnpm format`         | Apply lint fixes and formatting                    |
| `pnpm run deploy`     | Check, build and deploy to Cloudflare Workers      |

> `pnpm deploy` is a reserved pnpm command. Always use `pnpm run deploy`.

## Structure

| Path                       | What lives there                                 |
| :------------------------- | :----------------------------------------------- |
| `src/pages/*.md`           | The pages themselves — home, about, now, uses    |
| `src/pages/404.astro`      | Not-found page                                   |
| `src/site.config.ts`       | Routes and navigation entries                    |
| `src/components/layouts/`  | `main.astro` shell, `page.astro` Markdown layout |
| `src/components/sections/` | Navbar and footer                                |
| `src/assets/styles/`       | Tailwind entry point and theme                   |

Pages are plain Markdown. Each one points at the layout through front matter and
carries a `title`, plus an optional `updatedDate` rendered under the heading:

```yaml
---
layout: "@/components/layouts/page.astro"
title: "Uses"
updatedDate: 2026-05-01
---
```

To add a page, drop the Markdown file in `src/pages/` and register its path in
`ROUTES` in `src/site.config.ts` so navigation and links stay type-checked.

## Deployment

The repository is connected to the Worker, so **a push to `main` is a release**.
Cloudflare clones the repo, runs `pnpm install --frozen-lockfile`, then
`pnpm run build`, then `wrangler deploy`. It takes the Node version from
`.nvmrc` and the pnpm version from the `packageManager` field.

> `packageManager` must be a bare semver — `pnpm@12.3.4`. Cloudflare's build
> image rejects the Corepack integrity suffix (`pnpm@12.3.4+sha512-…`) with
> "expected a semver version", and the build fails before it installs anything.

To deploy by hand — a rollback, or a release that should not wait on a push:

```bash
pnpm dlx wrangler login   # once
pnpm run deploy
```

The Worker is named `barcia-dev`. Build settings live in the Cloudflare dashboard
under **Workers & Pages → barcia-dev → Settings → Build**, and the custom domain
under the same panel's **Domains & Routes**.

## Conventions

- Dependencies are pinned to exact versions. `saveExact` in
  `pnpm-workspace.yaml` keeps `pnpm add` from writing `^` ranges.
- `minimumReleaseAge` blocks packages published less than 24 hours ago, as a
  guard against compromised releases.
- Only `esbuild` and `workerd` may run install scripts (`allowBuilds`).
- Prettier formats every file type, including Astro templates. Biome only lints
  — its formatter is off so the two never disagree.
