# ProjectSparks

TypeScript + React app built with Webpack.

## Tech Stack

- React 18
- TypeScript
- Webpack 5
- Babel (TS/React presets)
- Docker + Docker Compose (dev + production-style builds)
- ESLint + Prettier
- Vitest
- Playwright + start-server-and-test
- Husky

## Getting Started

### Requirements

- Node (see `.nvmrc`)
- npm

### Install

```bash
npm ci
```

### Run Dev Server

```bash
npm run dev
```

Open:

- [http://localhost:5173](http://localhost:5173)

### Typecheck

```bash
npm run typecheck
```

### Lint & Format

```bash
npm run lint
npm run format
```

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run build
npm run e2e:ci
```

### Production Build

```bash
npm run build
```

Output is written to dist/

### Preview Production Build Locally

```bash
npm run preview
```

Open:

- [http://localhost:5173](http://localhost:5173)

## Analyze bundle
```bash
npm run analyze
```

## Docker

### Production (Docker Compose)

Run the production nginx container (no dev server):

```bash
docker compose -f docker-compose.yml up --build
```

Open:

- [http://localhost:5173](http://localhost:5173)

### Dev (Docker Compose)

This runs the webpack dev server inside a container and mounts your local source code into it.

```bash
docker compose up --build
```

Open:

- [http://localhost:5173](http://localhost:5173)

Stop:

```bash
docker compose down
```

### Production-style Container

Build the image:

```bash
docker build -t projectsparks-web .
```

Run it:

```bash
docker run --rm -p 8080:80 projectsparks-web
```

Open:

- [http://localhost:8080](http://localhost:8080)

## Git Hooks (Husky)

This repo uses Husky + lint-staged to enforce formatting and linting on commit.

- Prettier runs on staged files
- ESLint runs on staged JS/TS files

If hooks don’t run after cloning, make sure you’ve installed dependencies:

```bash
npm ci
```

## Project Layout

- `src/` — React + TypeScript application source
- `public/` — HTML template and static assets
- `dist/` — production build output (generated)
- `e2e/` — Playwright end-to-end tests

- `webpack.config.cjs` — Webpack configuration (dev + prod)
- `tsconfig.json` — TypeScript compiler settings
- `vitest.config.ts` — Vitest configuration
- `playwright.config.ts` — Playwright configuration

- `Dockerfile` — multi-stage build (Node build → Nginx runtime)
- `nginx.conf` — Nginx SPA routing config
- `docker-compose.yml` — production-style container (Nginx runtime)
- `docker-compose.override.yml` — dev overrides (bind mounts + dev server)
- `docker-compose.e2e.yml` - Playwright end-to-end tests inside docker container

- `.github/` — CI workflow + Dependabot configuration
- `commitlint.config.cjs` — commit message lint rules
- `CHANGELOG.md` — release notes / project history

- `package.json` / `package-lock.json` — dependencies + scripts
- `node_modules/` — installed dependencies (not committed)
- `Makefile` - convenience shortcuts for common tasks 

### Notes

- `dist/` is generated output and should not be committed.
- CI runs `npm ci`, `npm run typecheck`, and `npm run build` on every PR/push.
- Git hooks are managed by Husky and installed automatically on `npm ci`.

