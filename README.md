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

- `src/App.tsx`: Main UI and application logic (catalog, selected product, cart state)
- `src/index.css`: Global styles and font imports
- `src/main.tsx`: App bootstrap
