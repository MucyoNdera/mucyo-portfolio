# Deploy to Vercel Guide

## 🚀 Option 1: Quick Deploy via Vercel Dashboard (Easiest)

### Step 1: Connect GitHub Repository
1. Go to https://vercel.com
2. Click **"New Project"**
3. Select your GitHub account
4. Search for **"mucyo-portfolio"** repository
5. Click **"Import"**

### Step 2: Configure Project
1. **Framework Preset:** Vite (should auto-detect)
2. **Root Directory:** `project` (or `/` if the repo root is the project folder)
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`

### Step 3: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build
3. **Your site is live!** 🎉

You'll get a URL like: `https://your-site.vercel.app`

---

## 🔗 Option 2: Update Custom Domain
If you have a custom domain:

1. In Vercel dashboard, go to your project
2. **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records (Vercel will show instructions)

---

## ⚙️ Important: Environment Variables

If you're using Formspree, you might want to add the form ID as an environment variable:

1. In Vercel dashboard → **Settings** → **Environment Variables**
2. Add:
   ```
   Name: VITE_FORMSPREE_ID
   Value: f/abc123xyz
   ```
3. Update Contact.tsx to use it:
   ```tsx
   const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_ID;
   ```

---

## ✅ Verify Deployment

After deployment:
1. Visit your Vercel URL
2. Test the contact form
3. Check that images load
4. Test mobile navigation
5. Submit a test message

---

## 📱 Compare: GitHub Pages vs Vercel

| Feature | GitHub Pages | Vercel |
|---------|---|---|
| **Speed** | Good | ⭐⭐⭐ Excellent |
| **Automatic Deploys** | Manual `npm run deploy` | Auto on git push |
| **Serverless Functions** | ❌ No | ✅ Yes |
| **Preview Deployments** | ❌ No | ✅ Yes (for PRs) |
| **Custom Domain** | ✅ Yes | ✅ Yes |
| **Setup** | Easy | ⭐ Easiest |

**Recommendation:** Use **Vercel** - it's faster, more reliable, and deploys automatically.

---

## 🔄 Auto-Deployment

After this initial setup, **every git push to main automatically deploys!**

```bash
git add -A
git commit -m "Update portfolio"
git push origin main
# Vercel auto-deploys in 2-3 minutes
```

---

## 🎯 Next Steps

1. Go to https://vercel.com → **New Project**
2. Import your GitHub repo
3. Deploy
4. Test everything
5. Share your live portfolio! 🎉

Questions? Let me know!
