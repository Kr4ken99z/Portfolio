# 🎨 Portfolio 2.0

A modern, responsive portfolio website with integrated contact form functionality using EmailJS.

## 📚 Documentation

This project includes comprehensive guides for setup and deployment:

1. **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete EmailJS setup instructions
2. **[VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)** - Deploy to Vercel with environment variables
3. **[PUSH_TO_GITHUB.md](PUSH_TO_GITHUB.md)** - Git commands and workflow

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/Kr4ken99z/Portfolio.git
   cd Portfolio
   ```

2. **Set up configuration:**
   ```powershell
   # Copy the example config file
   copy config.example.js config.js
   ```

3. **Add your EmailJS credentials:**
   - Open `config.js`
   - Replace placeholder values with your actual credentials
   - See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed instructions

4. **Open in browser:**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```powershell
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

### Production Deployment

Deploy to Vercel with secure environment variables:

1. Follow the [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) guide
2. Add your EmailJS credentials as environment variables in Vercel
3. Deploy and enjoy!

## 📁 Project Structure

```
Portfolio2.0/
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── swiper-bundle.min.css
│   ├── img/
│   └── js/
│       ├── main.js                    # Main JavaScript with contact form handler
│       ├── scrollreveal.min.js
│       └── swiper-bundle.min.js
├── lib/
│   └── emailServices.js               # EmailJS integration
├── .gitignore                         # Protects config.js and .env
├── config.js                          # Your credentials (git-ignored)
├── config.example.js                  # Template for setup
├── index.html                         # Main HTML file
├── styles.css                         # Main stylesheet
├── vercel.json                        # Vercel configuration
├── SETUP_GUIDE.md                     # EmailJS setup guide
├── VERCEL_DEPLOYMENT.md               # Deployment guide
├── PUSH_TO_GITHUB.md                  # Git workflow guide
└── README.md                          # This file
```

## 🔒 Security

- **config.js** is git-ignored to protect your API keys
- **Environment variables** are used in production (Vercel)
- **Never commit** sensitive credentials to Git

### Files that are safe to commit:
- ✅ `config.example.js` (placeholder values)
- ✅ All HTML, CSS, JS files
- ✅ Documentation files
- ✅ `.gitignore`

### Files that should NEVER be committed:
- ❌ `config.js` (contains your keys)
- ❌ `.env` (contains sensitive data)

## 📧 Contact Form Features

- Real-time form validation
- Email sending via EmailJS
- Success/Error notifications
- Responsive design
- Spam protection
- Professional email templates

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Functionality
- **EmailJS** - Email service
- **ScrollReveal** - Scroll animations
- **Swiper** - Touch slider
- **Vercel** - Deployment and hosting

## 📖 Documentation Guides

### 📋 [SETUP_GUIDE.md](SETUP_GUIDE.md)
Complete guide for:
- EmailJS account setup
- Creating email service
- Creating email template
- Getting your credentials
- Local development setup
- Testing the contact form

### 🚀 [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)
Complete guide for:
- Preparing your repository
- Pushing to GitHub
- Deploying to Vercel
- Adding environment variables
- Managing deployments
- Custom domain setup
- Troubleshooting

### 📤 [PUSH_TO_GITHUB.md](PUSH_TO_GITHUB.md)
Complete guide for:
- Git workflow
- Common Git commands
- Verification steps
- Emergency procedures
- Best practices

## 🎯 Setup Checklist

### For Local Development:
- [ ] Clone repository
- [ ] Copy `config.example.js` to `config.js`
- [ ] Get EmailJS credentials from [emailjs.com](https://www.emailjs.com/)
- [ ] Update `config.js` with your credentials
- [ ] Test contact form locally
- [ ] Verify `.gitignore` includes `config.js`

### For Production (Vercel):
- [ ] Push code to GitHub (without `config.js`)
- [ ] Create Vercel account
- [ ] Import repository to Vercel
- [ ] Add environment variables in Vercel:
  - `EMAILJS_SERVICE_ID`
  - `EMAILJS_TEMPLATE_ID`
  - `EMAILJS_PUBLIC_KEY`
  - `CONTACT_EMAIL`
- [ ] Deploy site
- [ ] Test contact form on production
- [ ] (Optional) Configure custom domain

## 🐛 Troubleshooting

### Contact form not working:
1. Check browser console for errors
2. Verify EmailJS credentials are correct
3. Check EmailJS dashboard for usage limits
4. Ensure template variables match

### Deployment issues:
1. Check Vercel build logs
2. Verify environment variables are set
3. Make sure all files are committed to GitHub
4. Check `vercel.json` is valid JSON

### Git issues:
1. Verify `.gitignore` includes sensitive files
2. Run `git status` to check tracked files
3. Use `git rm --cached` to untrack files

## 📞 Support & Resources

- **EmailJS Docs:** [emailjs.com/docs](https://www.emailjs.com/docs/)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Git Docs:** [git-scm.com/doc](https://git-scm.com/doc)

## 📝 License

MIT License - Feel free to use this project for your own portfolio!

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 👨‍💻 Author

**Koustav Mondal**
- Email: koustavmondal9641@gmail.com
- GitHub: [@Kr4ken99z](https://github.com/Kr4ken99z)

---

## 🎓 Learning Resources

If you want to learn more about the technologies used:

- **EmailJS Tutorial:** [emailjs.com/docs/tutorial](https://www.emailjs.com/docs/tutorial/)
- **Vercel Deployment:** [vercel.com/docs/concepts/deployments](https://vercel.com/docs/concepts/deployments)
- **Git Basics:** [git-scm.com/book/en/v2/Getting-Started](https://git-scm.com/book/en/v2/Getting-Started)

---

**Made with ❤️ and ☕**

🌟 **Star this repo if you found it helpful!**
