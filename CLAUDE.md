# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This git repository is rooted at the Windows user profile directory (`C:\Users\Гусь`), but `.gitignore`
restricts tracked content to `Desktop/УП/` (plus this file, `README.md`, and `.gitignore` themselves).
Everything else in the profile (AppData, Documents, Downloads, etc.) is ignored and must stay that way —
never remove or narrow the root `.gitignore` rules that exclude the rest of the home directory.

`Desktop/УП/` ("учебная практика") contains:
- `pr1/` — a Vite + React app, the only actual code in the repo.
- `лекции/` — lecture slides (`.pptx`), not code.
- `шаблон/` — a report template (`.docx`), not code.

## Commands (`pr1/`)

Run from `Desktop/УП/pr1`:
- `npm run dev` — start the Vite dev server with HMR.
- `npm run build` — production build.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint (flat config in `eslint.config.js`).

There is no test suite configured in this project.

## Architecture

`pr1` is a small product-catalog demo built on the Vite/React starter:
- `src/main.jsx` mounts `<App />` from `src/App.jsx` into `#root` (see `index.html`).
- `src/App.jsx` owns the product data as a local array (`products`, hardcoded id/name/price/image) and renders one `ProductCard` per item, passing fields down as props.
- `src/components/ProductCard.jsx` renders a single product and owns its own `useState` cart-quantity counter — the count is local to each card, not lifted to `App`.
- Component-scoped styles live next to their component (`App.css`, `src/components/ProductCard.css`); `index.css` holds global styles.
- No router, global state library, or backend — product data is static in-source and there is no cart total/shared cart state across cards.
