# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Update Your Contact Information

Open `script.js` and update these lines (around line 3-6):

```javascript
const CONFIG = {
    whatsappNumber: '919876543210', // YOUR WhatsApp number (no + or spaces)
    contactPhone: '+91 98765 43210', // YOUR phone number
    contactEmail: 'info@srimanjunathacaterers.com', // YOUR email
    contactAddress: 'Your Business Address, City, State, PIN Code' // YOUR address
};
```

**Important**: For WhatsApp number, use format: Country code + number
- Example: If your number is +91 98765 43210, use `919876543210`

### Step 2: Start Local Server

**Option A - Using Python (Easiest):**
```bash
python3 -m http.server 8000
```

**Option B - Using the start script:**
```bash
./start.sh
```

**Option C - Using Node.js:**
```bash
npm install -g http-server
http-server -p 8000
```

### Step 3: Open in Browser

Go to: **http://localhost:8000**

That's it! Your website is now running locally.

---

## 📝 Next Steps

1. **Test the WhatsApp ordering** - Fill the form and see if it opens WhatsApp correctly
2. **Customize menu items** - Edit the `menuItems` array in `script.js`
3. **Add your images** - Replace placeholder divs with actual food images
4. **Test on mobile** - Open the site on your phone to see responsive design

## 🎨 Customization Tips

- **Colors**: Edit CSS variables in `styles.css` (lines 6-13)
- **Menu**: Edit `menuItems` array in `script.js`
- **Content**: Edit text directly in `index.html`

## ☁️ When Ready for Cloud Hosting

See `README.md` for free hosting options like:
- Netlify (Recommended - Free)
- Vercel (Free)
- GitHub Pages (Free)

---

**Need Help?** Check the full `README.md` file for detailed instructions.

