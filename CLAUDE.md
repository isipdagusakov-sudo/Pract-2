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

`pr1` is currently the unmodified output of `npm create vite@latest -- --template react`:
- `src/main.jsx` mounts `<App />` from `src/App.jsx` into `#root` (see `index.html`).
- `src/App.jsx` is the single-component app (the default Vite/React starter counter + links section).
- Static assets referenced by `App.jsx` live in `src/assets/`; files served as-is (e.g. `icons.svg`, `favicon.svg`) live in `public/`.
- No router, state library, or backend is wired in yet — this is a bare scaffold awaiting actual coursework.
