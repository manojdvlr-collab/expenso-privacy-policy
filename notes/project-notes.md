# Expenso — Privacy Policy Page Notes

---


website link :  https://manojdvlr-collab.github.io/expenso-privacy-policy


## Why This Website Exists

Google Play Store **requires** every app that collects user data to have a publicly accessible
Privacy Policy URL. Without it, your app will be rejected or removed from the Play Store.

Expenso collects:
- User data via Google Sign-In (name, email, profile photo)
- Financial data entered by the user (expenses, income, trips, bills)
- Ad-related data via Google AdMob

Because of this, a Privacy Policy is **mandatory**. Instead of using a generic third-party
generator, we built a dedicated React page that accurately describes exactly what Expenso
does — making it Google Play compliant and trustworthy for users.

The live URL of this page is what you paste into the Google Play Console under
**App Content → Privacy Policy**.

---

## What Was Built

A single-page React app (TypeScript) with:

- Clean white design, green accent color (#16a34a) — matches the finance/money theme
- 9 privacy policy sections covering everything Google Play requires
- Fully responsive — works on mobile and desktop
- Hosted for free on GitHub Pages

### Files in this project

| File | What it does |
|------|-------------|
| `src/App.tsx` | The entire page — all 9 policy sections as React components |
| `src/App.css` | All the styling — layout, colors, cards, responsiveness |
| `src/index.tsx` | React entry point (standard boilerplate) |
| `public/index.html` | HTML shell with SEO meta tags and page title |
| `public/manifest.json` | PWA manifest (theme color, app name) |
| `package.json` | Project config, dependencies, deploy scripts |
| `tsconfig.json` | TypeScript configuration |
| `README.md` | Deployment instructions |

---

## What Was Customized / Changed

### 1. Contact Email — `src/App.tsx`
In Section 9 (Contact Us), replace the placeholder with your real email:

```
your-email@example.com  →  your actual email address
```

This email must be real and monitored — Google Play reviewers may check it.

### 2. GitHub Username — `package.json`
The `homepage` field was updated to point to your actual GitHub Pages URL:

```
Before:  https://your-github-username.github.io/expenso-privacy-policy
After:   https://manojdvlr-collab.github.io/expenso-privacy-policy
```

### 3. Privacy Policy Content
All 9 sections were written specifically for Expenso based on how the app actually works:

- **Section 2** — Lists exactly what data Expenso collects (transactions, Google Sign-In,
  AdMob, on-device counters via AsyncStorage)
- **Section 3** — Explains how data is used (core features, Firebase sync, AdMob ads once/day)
- **Section 4** — Names the three third-party services: Google Sign-In, Firebase, AdMob
- **Section 5** — Explains AsyncStorage (local) + Firestore (cloud) storage model
- **Section 6** — Explains Settings → Clear All Data and how to request cloud deletion
- **Section 7** — COPPA compliance (children under 13)

---

## How It Was Deployed

### Platform: GitHub Pages (free hosting)

GitHub Pages hosts static websites directly from a GitHub repository. The `gh-pages`
npm package automates pushing the built files to the right branch.

### Step-by-step

**1. Created the GitHub repository**
- Repo name: `expenso-privacy-policy`
- URL: https://github.com/manojdvlr-collab/expenso-privacy-policy
- Visibility: Public (required for free GitHub Pages)

**2. Updated `package.json`**
Set the `homepage` field so React builds assets with the correct URL paths:
```json
"homepage": "https://manojdvlr-collab.github.io/expenso-privacy-policy"
```

Also added deploy scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

**3. Installed dependencies**
```bash
npm install
```
This installed React, TypeScript, react-scripts, and `gh-pages`.

**4. Pushed source code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/manojdvlr-collab/expenso-privacy-policy.git
git push -u origin main
```

**5. Deployed to GitHub Pages**
```bash
npm run deploy
```
This command:
1. Runs `npm run build` → creates an optimized production build in the `build/` folder
2. Pushes the `build/` folder contents to the `gh-pages` branch on GitHub
3. GitHub Pages automatically serves that branch as a live website

**6. Live URL**
```
https://manojdvlr-collab.github.io/expenso-privacy-policy
```

---

## Where to Use This URL

Paste the live URL into Google Play Console:

> **Google Play Console → Your App → App Content → Privacy Policy → paste URL → Save**

---

## How to Update the Policy in the Future

1. Edit `src/App.tsx` — update whatever section changed
2. Update the "Effective Date" at the top of the page (in `App.tsx`)
3. Run:
   ```bash
   npm run deploy
   ```
   That's it — the live page updates automatically.

---

## Quick Reference

| Item | Value |
|------|-------|
| Live URL | https://manojdvlr-collab.github.io/expenso-privacy-policy |
| GitHub Repo | https://github.com/manojdvlr-collab/expenso-privacy-policy |
| Android Package | com.expenso.expensetracker |
| Effective Date | September 13, 2026 |
| Tech Stack | React 18, TypeScript, plain CSS, gh-pages |
