# Formspree Setup Guide (5 Minutes)

## ✅ Step 1: Create Formspree Account
1. Go to https://formspree.io
2. Click **"Sign Up"** (use email or GitHub)
3. Verify your email

## ✅ Step 2: Create a Form
1. Click **"New Form"**
2. Give it a name: `Portfolio Contact Form`
3. You'll get a **Form ID** like: `f/abc123xyz`
4. **Copy this ID**

## ✅ Step 3: Update Contact.tsx
Open `src/components/sections/Contact.tsx` and replace:

```tsx
const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_ID';
```

With your actual Form ID:

```tsx
const FORMSPREE_FORM_ID = 'f/abc123xyz'; // Replace with your ID
```

## ✅ Step 4: Test It!
```bash
npm run dev
```

1. Open http://localhost:5173
2. Scroll to Contact section
3. Fill in the form
4. Click "Send Message"
5. **Check your email inbox!** ✅

## 🎉 Done!

That's it! Your contact form now works with Formspree.

**Free plan:** 50 submissions/month (perfect for a portfolio)

---

## 📝 What Happens Next

When someone submits the form:
1. Message goes to **Formspree's servers**
2. Formspree forwards it to **your email** (ndera0021@gmail.com)
3. You receive an email with the message

---

## ❓ FAQ

**Q: Where do I find my Formspree Form ID?**
A: After you create a form, it's displayed in the dashboard. Looks like: `f/abc123xyz`

**Q: What email will I receive messages at?**
A: The email you signed up with on Formspree.

**Q: How do I upgrade beyond 50/month?**
A: Go to Formspree pricing page - paid plans start at $25/month.

**Q: Can I change the email recipient?**
A: Yes, in Formspree dashboard under form settings.

---

## 🚀 Next: Deploy!

```bash
npm run build
npm run deploy
```

Your portfolio is now live with a working contact form! 🎉
