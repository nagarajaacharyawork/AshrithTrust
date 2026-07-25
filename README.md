# Ashrith Group of Institutions

Official website for Ashrith Trust — a premier group of institutions in Nursing, Paramedical and Pre-University education.

## Development

Requires Node.js 18+.

```sh
npm install
npm run dev
```

## Build & Deploy

```sh
npm run build   # outputs to dist/
```

Deploy the `dist/` folder to Vercel as a static site. Add a `vercel.json` for SPA routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Stack

- Vite + React 19
- TanStack Router (client-side)
- Tailwind CSS v4
- TypeScript
