# Contoso Travel

[![Status Checks](https://github.com/uplandprojects/MergeQueue/actions/workflows/status-checks.yml/badge.svg)](https://github.com/uplandprojects/MergeQueue/actions/workflows/status-checks.yml)


Contoso Travel is a fictitious travel product catalog built with React, TypeScript, Vite, and Material UI.

The app lets users browse curated travel products, view details for a selected product, and add or remove items from a shopping cart.

## Features

- Product catalog with destination-based travel offerings
- Click-to-view product details panel
- Shopping cart with add and remove item actions
- Running cart total and quantity tracking
- Responsive, travel-themed modern UI built with Material UI

## Tech Stack

- React 19
- TypeScript
- Vite
- Material UI (+ Emotion)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The local URL will be shown in the terminal (typically `http://localhost:5173`).

## Lint Code

```bash
npm run lint
```

## Build for Production

```bash
npm run build
```

## Run Tests

```bash
npm run test
```

For watch mode while developing:

```bash
npm run test:watch
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

- `src/App.tsx`: Main UI and cart state management
- `src/data/products.ts`: Product catalog data
- `src/theme/travelTheme.ts`: Material UI theme configuration
- `src/App.test.tsx`: Integration tests using Vitest + React Testing Library
- `src/test/setup.ts`: Test environment configuration
- `src/index.css`: Global styles and font imports
- `src/main.tsx`: App bootstrap

## Development Tips

- The app uses React hooks for state management—no external store needed
- Material UI components are pre-configured with a travel-themed color palette (ocean blues + sunset oranges)
- Tests run with jsdom and can be run in watch mode for TDD workflows
- The CI/CD pipeline (`.github/workflows/status-checks.yml`) runs build + tests on all PRs and merge group checks
