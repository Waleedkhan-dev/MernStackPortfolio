# Deployment Guide

This portfolio is a standard **Next.js 15** app and deploys best on **Vercel**.

## Option A — Deploy to Vercel from GitHub (recommended)

1. **Push the code** to GitHub (this repo already has a remote):
   ```bash
   git add -A
   git commit -m "Redesign: premium Next.js portfolio"
   git push origin redesign-nextjs        # or merge to main first
   ```
2. Go to **https://vercel.com/new** and **Import** the `MernStackPortfolio` repository.
3. Vercel auto-detects Next.js. Defaults are correct:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output:** (managed automatically)
   - **Install Command:** `npm install`
4. Add **Environment Variables** (Settings → Environment Variables):
   | Key | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | your production URL, e.g. `https://waleed.vercel.app` |
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | from EmailJS dashboard |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | from EmailJS dashboard |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | from EmailJS dashboard |
5. Click **Deploy**. Every push to the branch redeploys automatically (with preview URLs on PRs).

## Option B — Deploy with the Vercel CLI

```bash
npm i -g vercel
vercel login
vercel            # preview deploy (follow prompts)
vercel --prod     # production deploy
```
Set the env vars once via the dashboard or:
```bash
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

## Custom Domain

In Vercel → **Settings → Domains**, add your domain (e.g. `waleedkhan.dev`) and follow the DNS
instructions. Then update `NEXT_PUBLIC_SITE_URL` to match so SEO/OG tags use the right URL.

## Post-Deploy Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` to the live URL (affects sitemap, robots, OG tags).
- [ ] Verify the contact form sends (EmailJS env vars set).
- [ ] Check `/, /sitemap.xml, /robots.txt, /manifest.webmanifest` load.
- [ ] Replace placeholder testimonials in `src/data/testimonials.ts` with real ones.
- [ ] Add real project screenshots to `public/projects/` and GitHub links in `src/data/projects.ts`.
- [ ] (Optional) Add analytics: `npm i @vercel/analytics` then render `<Analytics />` in `app/layout.tsx`.

## Other Hosts

The app also runs on any Node host (Render, Railway, Netlify with the Next runtime):
build `npm run build`, start `npm run start`. Vercel is recommended for the best Next.js support.
