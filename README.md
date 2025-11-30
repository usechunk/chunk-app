# ChunkHub Frontend

> **Part of the [Chunk ecosystem](https://github.com/usechunk/chunk-docs) - see [Architecture](https://github.com/usechunk/chunk-docs/blob/main/ARCHITECTURE.md)**

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

## 📚 Documentation

- [Architecture](https://github.com/usechunk/chunk-docs/blob/main/ARCHITECTURE.md) - Understanding the Chunk platform
- [API Reference](https://github.com/usechunk/chunk-docs/blob/main/API.md) - ChunkHub API docs
- [Contributing](https://github.com/usechunk/chunk-docs/blob/main/CONTRIBUTING.md) - Contribution guidelines

## 🔗 Related Projects

- [chunk-docs](https://github.com/usechunk/chunk-docs) - Central documentation
- [chunk-api](https://github.com/usechunk/chunk-api) - Registry backend
- [chunk-cli](https://github.com/usechunk/chunk-cli) - CLI tool
