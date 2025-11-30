# GitHub Copilot Instructions for ChunkHub Frontend

## Project Context
React + TypeScript SPA for ChunkHub - Minecraft mod/modpack registry. Uses Vite, TailwindCSS, React Router, TanStack Query, Axios.

## Code Style
- Functional components with hooks
- TypeScript for all files
- Tailwind utility classes (no CSS modules)
- Named exports for components, default for pages
- Async/await over .then()
- Use `@/` alias for imports from src/

## Patterns
- API calls in `src/lib/api.ts` as named exports
- Custom hooks in `src/hooks/` (useApi, useDebounce)
- TanStack Query for data fetching (queries in useApi hooks)
- Search inputs use debounce (300ms)
- Pagination over infinite scroll
- Loading/error states for all queries

## Components
- Keep components small and focused
- Props with explicit TypeScript interfaces
- Heroicons for all icons
- Use chunk brand colors: `chunk-green`, `chunk-brown`, `chunk-dark`

## API Integration
- Base URL: `/api` (proxied to localhost:8000)
- Auth token in localStorage as `auth_token`
- All endpoints return JSON
- Use interceptors for auth headers

## Testing
- Use Vitest when adding tests
- Focus on component logic, not UI snapshots

## Don't
- No inline styles
- No prop drilling (use context if needed)
- No any types
- No console.logs in production code
