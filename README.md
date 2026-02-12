# The Jira Chronicles ⚔️

A tale of two timelines. An interactive click-through comic exploring what project management could look like if we reimagined it with AI.

> **Disclaimer:** This is a creative thought exercise and conversation piece, not a real product or product proposal. It's meant to spark discussion about how AI might change the way teams work together.

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Lint and format

```bash
npm run lint
npm run format
```

## Deploy to GitHub Pages

1. Create a repo called `jira-chronicles` on GitHub
2. Update `base` in `vite.config.js` if your repo name is different:
   ```js
   base: '/your-repo-name/',
   ```
3. Push your code to the repo
4. Deploy:
   ```bash
   npm run deploy
   ```
5. In your repo settings, make sure GitHub Pages source is set to the `gh-pages` branch
6. Your site will be live at `https://yourusername.github.io/jira-chronicles/`
