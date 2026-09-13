# Expenso — Privacy Policy Page

A clean, minimal React (TypeScript) single-page app hosting the Privacy Policy for **Expenso**, a personal expense tracker app available on Android.

---

## Deploy to GitHub Pages (3 steps)

### Step 1 — Configure your details

Before deploying, open these files and replace the placeholder values:

| File | What to change |
|------|---------------|
| `src/App.tsx` | Replace `your-email@example.com` with your real contact email (appears twice) |
| `package.json` | Replace `your-github-username` in the `homepage` field with your actual GitHub username |

### Step 2 — Install dependencies & set up the remote

```bash
# Install all dependencies (including gh-pages)
npm install

# Initialize git and push to GitHub (if not already done)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-github-username/expenso-privacy-policy.git
git push -u origin main
```

### Step 3 — Deploy

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then pushes the built output to the `gh-pages` branch of your repository. GitHub Pages will automatically serve it at:

```
https://your-github-username.github.io/expenso-privacy-policy
```

> **Tip:** After the first deploy, GitHub Pages may take 1–2 minutes to go live. Check the **Pages** settings in your repo (Settings → Pages) to confirm the source is set to the `gh-pages` branch.

---

## Local Development

```bash
npm install
npm start
```

Opens the page at `http://localhost:3000`.

---

## Tech Stack

- React 18 + TypeScript
- Plain CSS (no external UI framework needed)
- `gh-pages` for deployment

---

## Google Play Compliance

This page is suitable as a Privacy Policy URL for Google Play Console. It covers:
- Data collected (transactions, Google Sign-In, AdMob)
- Third-party services (Firebase, AdMob, Google Sign-In)
- Data storage and security
- Data deletion instructions
- Children's privacy (COPPA)
- Contact information
