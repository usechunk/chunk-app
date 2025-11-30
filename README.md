# ChunkHub Frontend

React SPA for ChunkHub - a Minecraft mod and modpack registry.

## Stack

- **Vite** + **React** + **TypeScript**
- **TailwindCSS** for styling
- **React Router** for routing
- **TanStack Query** for data fetching
- **Axios** for API calls

## Development

```bash
npm install
npm run dev
```

Backend API proxy configured to `localhost:8000`.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/    # Reusable UI components
├── pages/         # Route pages
├── hooks/         # Custom React hooks
├── lib/           # API client and utilities
└── utils/         # Helper functions
```

## Features

- Browse and search mods/modpacks
- View detailed mod/modpack information
- Pagination for lists
- GitHub OAuth authentication
- API integration with FastAPI backend

## Environment

Set env vars with `VITE_` prefix in `.env` file.
