# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive click-through comic built with React + Vite, exploring project management reimagined with AI. Deployed to GitHub Pages.

## Commands

- `npm run dev` — Start local dev server
- `npm run build` — Production build to dist/
- `npm run preview` — Preview production build locally
- `npm run deploy` — Build and deploy to GitHub Pages via gh-pages
- `npm run lint` — Run ESLint on src/
- `npm run format` — Run Prettier on src/

## Architecture

Single-page React app. State lives in the top-level `App.jsx` component; scene content and presentational components are split into their own files.

### File structure

```
src/
  App.jsx                  — Main component (state + scene routing)
  main.jsx                 — Entry point, renders App into root div
  data/
    scenes.js              — Scene content array (all comic dialogue and metadata)
  components/
    NowBadge.jsx           — "JIRA TIMELINE" badge
    FutureBadge.jsx        — "AI-NATIVE TIMELINE" badge
    DialogueBubble.jsx     — Single dialogue bubble (speaker + text)
    Panel.jsx              — Renders a scene's dialogue panel (uses DialogueBubble)
    TitleScene.jsx          — Title screen
    VsScene.jsx            — Comparison scenes (uses Panel, NowBadge, FutureBadge)
    MetaScene.jsx          — Meta/reflection scene
    FinaleScene.jsx        — Finale scene
    Navigation.jsx         — Fixed bottom back/next buttons
    ProgressBar.jsx        — Fixed top progress bar + scene counter
```

- **Scene data**: The `scenes` array in `src/data/scenes.js` defines all content. Each scene has `id`, `type` (`title`, `vs`, `meta`, `finale`), and type-specific fields.
- **Cast**: The `cast` object in `src/data/scenes.js` defines each character as a display string (`"Name emoji"`). Dialogue entries reference `cast.dev1`, `cast.ai`, etc. — change the string once and it updates everywhere. No lookup logic needed; `DialogueBubble` renders the speaker value directly.

| Key | Display | Personality |
|-----|---------|-------------|
| `scrumMaster` | Scrum Master 😅 | Earnest, doing their best with a bad system |
| `dev1` | Dev 1 🤓 | The reliable everyperson coder |
| `dev2` | Dev 2 🫠 | Melting under chaos, secretly wants structure |
| `dev3` | Dev 3 😶 | Quiet — pays off in the invisible work reveal |
| `manager` | Manager 🧐 | Sees the world through dashboards |
| `jira` | JIRA ⚙️ | The machine. No soul. |
| `ai` | AI ✨ | Warm, clear, helpful |
- **State**: `useState` for `current` (active scene index) and `panelVisible` (animation toggle). No external state management.
- **Styling**: All CSS is inline (style objects). Animations use CSS transitions with cubic-bezier easing. Typography uses `clamp()` for fluid scaling.
- **Fonts**: Space Mono, IBM Plex Sans, Playfair Display loaded via Google Fonts CDN in `index.html`.

## Deployment

GitHub Pages via the `gh-pages` package. The `base` path in `vite.config.js` must match the repo name (`/jira-chronicles/`).
