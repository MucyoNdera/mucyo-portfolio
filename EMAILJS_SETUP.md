# EmailJS Setup Guide

## Quick Start (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com
2. Click "Sign Up Free"
3. Complete registration (can use Google/GitHub)

### Step 2: Add Email Service
1. In dashboard, go to **Email Services**
2. Click **"Add Service"**
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - Outlook
   - SendGrid
   - Custom SMTP
4. Follow the provider-specific setup

**For Gmail:**
- You'll need to [generate an app password](https://support.google.com/accounts/answer/185833)
- Don't use your regular Gmail password

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Configure template:
   ```
   Template Name: Contact Form Reply
   
   To Email: {{to_email}}
   Subject: New Message from {{from_name}}
   
   Body:
   ---
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ---
   ```
4. Click "Save"
5. Copy your **Template ID** (e.g., `template_abc123`)

### Step 4: Get Your Credentials
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (starts with "abc123def456...")
3. Go back to **Email Services**
4. Copy your **Service ID** (e.g., `service_abc123`)

### Step 5: Update Your Code
In `src/components/sections/Contact.tsx`, replace:

```tsx
// Line 6
emailjs.init('YOUR_PUBLIC_KEY');  // ← Paste Public Key here

// Lines 43-48 (in handleSubmit function)
await emailjs.send(
  'YOUR_SERVICE_ID',      // ← Paste Service ID here
  'YOUR_TEMPLATE_ID',     // ← Paste Template ID here
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'ndera0021@gmail.com'
  }
);
```

### Step 6: Test
```bash
npm run dev
```

1. Open http://localhost:5173
2. Scroll to Contact section
3. Fill in form and submit
4. Check your email inbox
5. Success! ✅

---

## Troubleshooting

### "Service not recognized"
- Check Service ID spelling
- Make sure email service is **enabled** (green toggle)

### "Template not found"
- Check Template ID spelling
- Verify template exists in Email Templates

### "Invalid public key"
- Make sure it's the **Public Key**, not Private Key
- Copy entire key including prefix

### Form submits but no email received
- Check spam/junk folder
- Verify email template is correct
- Check EmailJS dashboard for delivery logs

### CORS errors
- Make sure you're using **Public Key** (not Secret Key)
- `emailjs.init()` must be called at top of component

---

## Free Plan Limits

- **200 emails/month** (free tier)
- No credit card required
- Perfect for portfolio contact form

Need more? Upgrade to paid plan for unlimited emails.

---

## Common Variables for Template

Use these in your email template:

| Variable | Source |
|----------|--------|
| `{{from_name}}` | formData.name |
| `{{from_email}}` | formData.email |
| `{{message}}` | formData.message |
| `{{to_email}}` | recipient email |

Example template:
```
Hello {{to_email}},

You have a new message from {{from_name}} ({{from_email}}):

{{message}}

---
Sent via Mucyo Ndera Portfolio
```

---

## Alternative Services (if EmailJS doesn't work)

- **Formspree** - https://formspree.io (simple, 50 submissions/month free)
- **Netlify Forms** - https://www.netlify.com/products/forms/ (if deploying to Netlify)
- **Backend solution** - Create Node.js server with nodemailer

For now, **EmailJS is recommended** - no backend needed, easy setup, free tier included.

---

## Questions?

- EmailJS Docs: https://www.emailjs.com/docs/
- Contact Support: support@emailjs.com
- Community: https://github.com/emailjs-com/emailjs-sdk/issues
