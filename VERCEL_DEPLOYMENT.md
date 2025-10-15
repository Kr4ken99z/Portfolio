# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel with secure environment variables.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- EmailJS credentials (Service ID, Template ID, Public Key)

---

## Step 1: Prepare Your Repository

### 1.1 Verify .gitignore

Make sure your `.gitignore` file contains:
```
.env
config.js
```

### 1.2 Update config.js for Local Development

Open `config.js` and replace the placeholder values with your actual credentials for **local testing only**:

```javascript
emailjs: {
    serviceId: 'service_y67pssv',           // Your actual Service ID
    templateId: 'template_f13uyw4',         // Your actual Template ID
    publicKey: '5K3Pqk24YK_Jy1VL1',        // Your actual Public Key
    contactEmail: 'koustavmondal9641@gmail.com'  // Your actual email
}
```

**Important:** These values will be used for local development only. Production will use Vercel environment variables.

---

## Step 2: Push to GitHub

```powershell
# Check what files will be committed (config.js should NOT appear if it's in .gitignore)
git status

# Add all files except config.js
git add .

# Commit your changes
git commit -m "Add EmailJS integration and Vercel configuration"

# Push to GitHub
git push origin main
```

**Verify:** Make sure `config.js` is NOT pushed to GitHub. Only `config.example.js` should be in your repository.

---

## Step 3: Deploy to Vercel

### 3.1 Import Your Repository

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your **Portfolio** repository from GitHub
5. Click **"Import"**

### 3.2 Configure Project Settings

**Before deploying**, you need to add environment variables:

1. In the import screen, expand **"Environment Variables"** section
2. Add the following variables:

| Name | Value |
|------|-------|
| `EMAILJS_SERVICE_ID` | `service_y67pssv` |
| `EMAILJS_TEMPLATE_ID` | `template_f13uyw4` |
| `EMAILJS_PUBLIC_KEY` | `5K3Pqk24YK_Jy1VL1` |
| `CONTACT_EMAIL` | `koustavmondal9641@gmail.com` |

3. Make sure **"Production"**, **"Preview"**, and **"Development"** are all checked for each variable

### 3.3 Deploy

1. Click **"Deploy"**
2. Wait for the deployment to complete (usually 1-2 minutes)
3. Click **"Visit"** to see your live site!

---

## Step 4: Test Your Deployment

1. Visit your deployed site (e.g., `https://your-portfolio.vercel.app`)
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email inbox for the message

---

## Managing Environment Variables Later

If you need to update your environment variables:

1. Go to your project dashboard on Vercel
2. Click **"Settings"**
3. Click **"Environment Variables"**
4. Add, edit, or delete variables as needed
5. **Redeploy** your site for changes to take effect:
   - Go to **"Deployments"**
   - Click the three dots on the latest deployment
   - Click **"Redeploy"**

---

## Automatic Deployments

Vercel automatically deploys your site when you push to GitHub:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```powershell
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Vercel will automatically deploy the new version
4. Check the deployment status in Vercel dashboard

---

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project settings on Vercel
2. Click **"Domains"**
3. Add your domain name
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

---

## Troubleshooting

### Environment variables not working:

1. Check if variables are set correctly in Vercel dashboard
2. Make sure all three environments are checked (Production, Preview, Development)
3. Redeploy your site after adding variables

### Email not sending on production:

1. Open browser console (F12) and check for errors
2. Verify environment variables are set correctly
3. Check EmailJS dashboard for error logs
4. Make sure you haven't exceeded EmailJS free tier limits (200 emails/month)

### Build errors:

1. Check the build logs in Vercel dashboard
2. Make sure all required files are committed to GitHub
3. Verify `vercel.json` is properly formatted

### Config.js accidentally pushed to GitHub:

```powershell
# Remove config.js from Git history
git rm --cached config.js

# Make sure .gitignore includes config.js
echo config.js >> .gitignore

# Commit the changes
git commit -m "Remove config.js from repository"

# Push to GitHub
git push origin main

# Then rotate your EmailJS keys for security!
```

---

## Security Best Practices

✅ **DO:**
- Keep `config.js` in `.gitignore`
- Use environment variables in Vercel
- Rotate keys if accidentally exposed
- Use different keys for development and production

❌ **DON'T:**
- Commit `config.js` with real keys to Git
- Share your keys publicly
- Use production keys in development
- Hardcode sensitive data in your code

---

## Quick Reference

### Local Development:
- Edit `config.js` with your actual credentials
- Test locally before pushing

### Production (Vercel):
- Environment variables are used automatically
- No need to deploy `config.js`
- Keys are secure and hidden

### Commands:
```powershell
# Check git status
git status

# Add files
git add .

# Commit
git commit -m "Your message"

# Push to GitHub (triggers Vercel deployment)
git push origin main
```

---

## Support

- **Vercel Docs:** [https://vercel.com/docs](https://vercel.com/docs)
- **EmailJS Docs:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)

---

## ✅ Deployment Checklist

- [ ] `.gitignore` includes `config.js` and `.env`
- [ ] `config.js` updated for local development
- [ ] Changes committed and pushed to GitHub
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Environment variables added to Vercel
- [ ] Site deployed successfully
- [ ] Contact form tested on production
- [ ] Custom domain configured (optional)

🎉 **Congratulations!** Your portfolio is now live on Vercel!

Your site URL: `https://your-portfolio.vercel.app`
