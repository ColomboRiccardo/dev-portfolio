# dev-portfolio-next

Next.js 15 (App Router) port of `dev-portfolio-react`.

## Stack

- Next.js 15 with React 19
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Supabase JS for the contact form
- TanStack Query, sonner, lucide-react, zod

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. The `.env.local` file at the repo root provides the Supabase credentials as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Project layout

- `src/app/` - App Router entrypoints (`layout.tsx`, `page.tsx`, `providers.tsx`, `error.tsx`, `not-found.tsx`, `globals.css`)
- `src/components/` - `PortfolioSidebar`, `ProjectCard`, `ContactForm`, plus `ui/sonner`
- `src/lib/supabase/` - Supabase client and generated types
- `public/` - Project images served as `/project-*.jpg`

## Notes on the conversion

- TanStack Router was replaced with Next.js App Router. `__root.tsx` became `layout.tsx` plus a client `providers.tsx` wrapping `QueryClientProvider` and the sonner `Toaster`.
- Route metadata (`head`) was migrated to the Next `metadata` export and head-level `<link>` tags for the Geist font.
- The Supabase client now reads from `NEXT_PUBLIC_*` env vars (instead of Vite `import.meta.env`).
- Project images moved from `src/assets/` to `public/` and are referenced by absolute path strings.
