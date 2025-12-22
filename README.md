# Sri Manjunatha Caterers Website

A beautiful, responsive website for Sri Manjunatha Caterers - Pure Vegetarian Catering with 15+ years of experience, specializing in South Indian, North Indian, and Chinese cuisine. Features online ordering via WhatsApp integration.

## Features

- 🎨 Modern, attractive design perfect for catering business
- 📱 Fully responsive (works on PC, tablets, and mobile phones)
- 🛒 Online ordering system with WhatsApp integration
- 🔍 SEO optimized for better search engine visibility
- ⚡ Fast loading and smooth animations
- 💬 Direct WhatsApp contact button

## Setup Instructions

### Prerequisites

- A web browser (Chrome, Firefox, Safari, or Edge)
- Python 3 (for local server) OR Node.js (optional, for npm server)

### Local Hosting (Method 1 - Python)

1. Open terminal/command prompt in this folder
2. Run one of these commands:

   **Python 3:**
   ```bash
   python3 -m http.server 8000
   ```

   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. Open your browser and go to: `http://localhost:8000`

### Local Hosting (Method 2 - Node.js)

1. Install Node.js if you don't have it
2. Install http-server globally:
   ```bash
   npm install -g http-server
   ```
3. Run the server:
   ```bash
   http-server -p 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

### Local Hosting (Method 3 - VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Configuration

Before using the website, update the following in `script.js`:

1. **WhatsApp Number** (line 3):
   ```javascript
   whatsappNumber: '919876543210', // Replace with your actual WhatsApp number
   ```
   Format: Country code + number (no + or spaces)
   Example: For Indian number 9876543210, use '919876543210'

2. **Contact Information** (lines 4-6):
   ```javascript
   contactPhone: '+91 98765 43210', // Your phone number
   contactEmail: 'info@srimanjunathacaterers.com', // Your email
   contactAddress: 'Your Business Address, City, State, PIN Code' // Your address
   ```

3. **Menu Items**: Edit the `menuItems` array in `script.js` to add/remove/modify menu items.

## Customization

### Adding Your Images

Replace the placeholder divs with actual images:

1. Create an `images` folder in the project directory
2. Add your food images
3. Update the HTML to use `<img>` tags instead of placeholders

Example:
```html
<!-- Replace this -->
<div class="image-placeholder">
    <span>Your Catering Image</span>
</div>

<!-- With this -->
<img src="images/your-image.jpg" alt="Catering Service">
```

### Changing Colors

Edit the CSS variables in `styles.css` (lines 6-13):
```css
:root {
    --primary-color: #d4af37; /* Gold color - change to your brand color */
    --primary-dark: #b8941f;
    --secondary-color: #8b4513; /* Brown color */
    /* ... */
}
```

### SEO Optimization

The website includes:
- Meta tags for description and keywords
- Open Graph tags for social media sharing
- Semantic HTML structure
- Proper heading hierarchy

For better SEO:
1. Add your actual business address to Google My Business
2. Get backlinks from local directories
3. Add more content about your services
4. Use actual images with descriptive alt text

## Cloud Hosting Options (Free/Low Cost)

### Free Options:

1. **Netlify** (Recommended)
   - Free tier available
   - Easy deployment via drag & drop or Git
   - Custom domain support
   - HTTPS included
   - Visit: https://www.netlify.com

2. **Vercel**
   - Free tier available
   - Great for static sites
   - Automatic HTTPS
   - Visit: https://vercel.com

3. **GitHub Pages**
   - Completely free
   - Easy setup with GitHub
   - Visit: https://pages.github.com

4. **Firebase Hosting**
   - Free tier available
   - Fast CDN
   - Visit: https://firebase.google.com

### Low-Cost Options:

1. **Namecheap** - ~$1-2/month for hosting
2. **Hostinger** - ~$2-3/month
3. **Bluehost** - ~$3-4/month

## How WhatsApp Ordering Works

1. Customer fills out the order form
2. Clicks "Send Order via WhatsApp"
3. WhatsApp opens with a pre-filled message containing:
   - Customer details
   - Event information
   - Selected menu items
   - Special requirements
4. You receive the message on WhatsApp
5. You can respond directly via WhatsApp

## File Structure

```
cook/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### WhatsApp link not working?
- Check that your WhatsApp number in `script.js` is correct
- Format: Country code + number (no + or spaces)
- Example: For +91 98765 43210, use '919876543210'

### Images not showing?
- Make sure image paths are correct
- Check that images exist in the specified folder
- Use relative paths (e.g., `images/photo.jpg`)

### Form not submitting?
- Check browser console for errors (F12)
- Make sure all required fields are filled
- Ensure JavaScript is enabled in your browser

## Support

For issues or questions, check:
1. Browser console for errors (Press F12)
2. Network tab to see if files are loading
3. Make sure all files are in the same folder

## Next Steps

1. ✅ Update contact information in `script.js`
2. ✅ Add your actual menu items
3. ✅ Replace placeholder images with real photos
4. ✅ Test the WhatsApp ordering feature
5. ✅ Customize colors to match your brand
6. ✅ Deploy to cloud hosting when ready

## License

This website is created for Sri Manjunatha Caterers. Feel free to customize as needed.

---

**Note**: Remember to update the WhatsApp number and contact details before going live!

