# Ishwar Lahire — Portfolio Website

> Python Backend Developer · FastAPI · Django · REST APIs · Full Stack

**Live demo:** [Deploy with the steps below and share the URL!]

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Animations | Framer Motion |
| Fonts | Plus Jakarta Sans · Lora · Fira Code · Manrope |
| Icons | Lucide React |
| Typing effect | react-type-animation |

---

## 🚀 Local Development

```bash
# 1. Unzip and enter the project
unzip ishwar-portfolio-v4.zip
cd ishwar-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → Opens at http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🌐 Free Deployment (Step by Step)

### Option 1 — Vercel ⭐ (Recommended, easiest)

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub (free)
2. Push this project to GitHub (see GitHub upload steps below)
3. On Vercel dashboard → **"Add New Project"**
4. Select your `ishwar-portfolio` repo
5. Settings:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **Deploy** → Done! You get a free URL like `ishwar-portfolio.vercel.app`
7. For a custom domain (optional): Settings → Domains → add your domain

**Every time you push to GitHub → Vercel auto-deploys.** 🔄

---

### Option 2 — Netlify (Also free)

1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Click **"Add new site"** → **"Deploy manually"**
3. Run locally:
   ```bash
   npm run build
   ```
4. Drag and drop the **`dist/`** folder onto the Netlify page
5. You instantly get a URL like `ishwar-lahire.netlify.app`
6. To rename: Site Settings → Change site name

**Or connect GitHub for auto-deploy:**
1. "Add new site" → "Import from Git"
2. Connect GitHub → select repo → Deploy

---

### Option 3 — GitHub Pages (Free, needs small config change)

1. In `vite.config.ts`, add the `base` option:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/ishwar-portfolio/',  // ← your repo name
   })
   ```
2. Build: `npm run build`
3. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```
6. On GitHub repo → Settings → Pages → Source: `gh-pages` branch

---

## 📤 How to Upload to GitHub

```bash
# 1. Initialize git (inside the project folder)
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "feat: initial portfolio commit"

# 4. Create a new repo on github.com
#    → Go to github.com → New Repository
#    → Name: ishwar-portfolio
#    → Public
#    → Don't add README (we have one)
#    → Create repository

# 5. Connect and push
git remote add origin https://github.com/ishwarlahire/ishwar-portfolio.git
git branch -M main
git push -u origin main
```

After this, your code is on GitHub and Vercel/Netlify can auto-deploy it.

---

## ✏️ How to Update Your Content

**All content is in one file — edit only this:**

```
src/data/portfolioData.ts
```

This file controls:
- ✅ Personal info (name, email, phone, WhatsApp, LinkedIn, GitHub)
- ✅ Skills (categories + items)
- ✅ Experience (responsibilities, achievements)
- ✅ Projects (name, description, tech stack, GitHub links)
- ✅ Education
- ✅ Certifications
- ✅ Freelance services (title, price, deliverables, WhatsApp message)

**After editing, rebuild:**
```bash
npm run build
```
If on Vercel/Netlify with GitHub connected, just `git push` — it auto-rebuilds.

---

## 📄 Resume

Your latest resume is already in `public/resume.pdf`.

To update it later:
```bash
# Just replace the file (keep the same name)
cp /path/to/your/new-resume.pdf public/resume.pdf
git add public/resume.pdf
git commit -m "update resume"
git push
```

---

## 💬 WhatsApp Integration

Each freelance service card opens WhatsApp with a pre-filled message.
The number is set in `portfolioData.ts`:

```ts
whatsapp: "919067935149",       // Country code + number, no + sign
whatsappMessage: "Hi Ishwar! ..." // Default message
```

Each service also has its own custom message in `freelanceServices[].whatsappMessage`.

---

## 📁 Project Structure

```
ishwar-portfolio/
├── public/
│   ├── resume.pdf          ← Your resume (already included)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        Sticky nav, dark/light toggle
│   │   ├── Hero.tsx          Animated hero + code terminal
│   │   ├── About.tsx         Summary, contact info, goal
│   │   ├── Skills.tsx        Categorized skill cards
│   │   ├── Experience.tsx    Timeline experience
│   │   ├── Projects.tsx      Filterable project cards
│   │   ├── Freelance.tsx     8 services with WhatsApp CTAs
│   │   ├── Education.tsx     Education cards
│   │   ├── Certifications.tsx HackerRank certs
│   │   ├── GitHub.tsx        GitHub stats + repos
│   │   ├── Contact.tsx       Contact form + info
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts  ← EDIT THIS for content changes
│   ├── hooks/
│   │   └── useTheme.ts       Dark/light mode
│   ├── types/
│   │   └── index.ts
│   └── index.css             Design system (colors, fonts, utilities)
├── index.html                SEO meta tags
├── vite.config.ts
└── package.json
```

---

## 🎨 Design System

| Token | Dark Mode | Light Mode |
|---|---|---|
| Background | `#0B0F1A` | `#F8F7F4` |
| Accent (coral-orange) | `#FF6B35` | `#DC4614` |
| Secondary (teal) | `#2DD4BF` | `#0D9488` |
| Display font | Plus Jakarta Sans | — |
| Accent font | Lora (serif, italic) | — |
| Mono font | Fira Code | — |
| Body font | Manrope | — |

**Signature design element:** The name "Ishwar Lahire" in the hero uses
italic Lora (serif) with a coral→teal gradient underline — human warmth
inside a technical portfolio.

---

## 📦 Key Dependencies

```json
{
  "framer-motion": "^11.x",
  "react-type-animation": "^3.x",
  "lucide-react": "^0.x"
}
```

---

*Built with React + TypeScript + Vite · © 2025 Ishwar Lahire*
