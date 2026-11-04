# Syed Afnan Ahmed — Personal Resume Website

Next.js 14 (App Router) · React 18 · Tailwind CSS 3 · Framer Motion · TypeScript

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Editing content
- `lib/data.ts` — all resume content (experience, skills, tools, platforms, education)
- `lib/site.ts` — contact details, site URL, resume file path, and the `links` array
  (add LinkedIn etc. there and they appear in the Contact section and SEO schema automatically)
- `public/Syed_Afnan_Ahmed_Resume.pdf` — the downloadable resume (replace the file to update it)

## Deploy to Vercel (public URL)

### Option A: GitHub + Vercel dashboard (recommended)
1. Create a new GitHub repository and push this folder:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, sign in, and **Import** the repository.
3. Framework Preset is detected as **Next.js**. Leave the defaults and click **Deploy**.
4. In about a minute you get a public URL like `https://<project>.vercel.app`.
5. In **Project → Settings → Environment Variables**, add
   `NEXT_PUBLIC_SITE_URL` = your final URL (e.g. `https://<project>.vercel.app`), then **Redeploy**.
   This makes the canonical URL, sitemap, and social preview links correct.

### Option B: Vercel CLI (no GitHub)
```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment, prints your public URL
```

### Custom domain (optional)
Project → Settings → Domains → add your domain and follow the DNS instructions.
Update `NEXT_PUBLIC_SITE_URL` to match.
