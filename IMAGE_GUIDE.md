# Image Guide for Sri Manjunatha Caterers Website

## Where Images Are Needed

Your website has **3 main sections** that need images:

### 1. About Section (1 image)
**Location:** Right side of "About Us" section
**Recommended:** Professional catering setup or team photo

### 2. Gallery Section (6 images)
**Location:** Gallery section showing your work
**Recommended:** Photos of your actual catering events/food

### 3. Menu Items (32+ images)
**Location:** Each menu item card
**Recommended:** Individual food dish photos

---

## Recommended Images

### ✅ Best Images to Use:

#### **About Section:**
- **Option 1:** Professional catering setup at an event
- **Option 2:** Your team serving food
- **Option 3:** Well-arranged food platter/buffet setup
- **Option 4:** Kitchen/preparation area (if professional)

#### **Gallery Section (6 images):**
1. **Wedding Catering Setup** - Beautiful buffet arrangement
2. **South Indian Food Spread** - Dosa, idli, sambar, etc.
3. **North Indian Food Display** - Biryani, curries, naan
4. **Chinese Food Presentation** - Noodles, manchurian, etc.
5. **Event Setup** - Large event with multiple dishes
6. **Dessert Display** - Gulab jamun, kheer, etc.

#### **Menu Item Images (for each dish):**
- **South Indian:** Masala Dosa, Idli Sambar, Vada, Uttapam, etc.
- **North Indian:** Veg Biryani, Paneer Butter Masala, Dal Makhani, etc.
- **Chinese:** Veg Fried Rice, Gobi Manchurian, Noodles, etc.
- **Desserts:** Gulab Jamun, Kheer, Ice Cream, etc.

---

## Where to Get Images

### Option 1: Your Own Photos (BEST - Recommended)
**Why:** Authentic, shows your actual work, builds trust

**What to Photograph:**
- Your actual catering events
- Food you've prepared
- Buffet setups
- Team photos
- Happy customers at events

**Tips for Good Photos:**
- Use natural lighting (daylight is best)
- Clean background
- Focus on the food
- Take photos from different angles
- Use a smartphone camera (modern phones work great!)

### Option 2: Free Stock Photos
**Sites:**
- **Unsplash** (https://unsplash.com) - Search "vegetarian food", "catering", "indian food"
- **Pexels** (https://www.pexels.com) - Free high-quality images
- **Pixabay** (https://pixabay.com) - Free images

**Search Terms:**
- "vegetarian catering"
- "indian food"
- "south indian food"
- "north indian cuisine"
- "vegetarian buffet"
- "catering service"

### Option 3: Professional Photography
**Cost:** ₹5,000 - ₹15,000
- Hire a local photographer
- Get professional food photography
- Best quality but costs money

---

## Image Requirements

### Size & Format:
- **Format:** JPG or PNG
- **Size:** 
  - About section: 800x600px (or similar ratio)
  - Gallery: 1200x800px (or similar ratio)
  - Menu items: 600x400px (or similar ratio)
- **File Size:** Keep under 500KB per image (for fast loading)

### Quality Tips:
- ✅ High resolution (clear, not blurry)
- ✅ Good lighting
- ✅ Clean presentation
- ✅ Professional appearance
- ❌ Avoid: Dark, blurry, or low-quality images

---

## How to Add Images to Website

### Step 1: Create Images Folder
```bash
mkdir images
```

### Step 2: Add Your Images
Put all images in the `images` folder:
```
cook/
├── images/
│   ├── about-catering.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   ├── gallery-6.jpg
│   ├── masala-dosa.jpg
│   ├── veg-biryani.jpg
│   └── ... (other menu item images)
```

### Step 3: Update HTML

**For About Section:**
Replace in `index.html`:
```html
<div class="image-placeholder">
    <span>Your Catering Image</span>
</div>
```

With:
```html
<img src="images/about-catering.jpg" alt="Sri Manjunatha Caterers - Professional Catering Service" class="about-img">
```

**For Gallery Section:**
Replace each gallery placeholder:
```html
<div class="gallery-placeholder">
    <span>Food Image 1</span>
</div>
```

With:
```html
<img src="images/gallery-1.jpg" alt="Catering Event" class="gallery-img">
```

**For Menu Items:**
Update `script.js` - in the `menuItems` array, update the `image` property:
```javascript
{
    name: 'Masala Dosa',
    price: '₹80',
    description: '...',
    category: 'southindian',
    image: 'images/masala-dosa.jpg' // Add path here
}
```

Then update the rendering function to use actual images instead of placeholders.

---

## Quick Start (Using Stock Photos)

### If you want to start quickly with free stock photos:

1. **Go to Unsplash.com**
2. **Search for:**
   - "vegetarian indian food"
   - "catering buffet"
   - "south indian cuisine"
   - "north indian food"
   - "chinese vegetarian food"

3. **Download 6-10 images** you like
4. **Save them** in an `images` folder
5. **Rename them** descriptively:
   - `about-catering.jpg`
   - `gallery-1.jpg`, `gallery-2.jpg`, etc.
   - `masala-dosa.jpg`, `veg-biryani.jpg`, etc.

---

## Image Naming Convention

Use clear, descriptive names:
- ✅ `about-catering-setup.jpg`
- ✅ `gallery-wedding-event.jpg`
- ✅ `masala-dosa.jpg`
- ✅ `veg-biryani.jpg`
- ❌ `IMG_1234.jpg` (not descriptive)
- ❌ `photo.jpg` (too generic)

---

## Pro Tips

1. **Consistent Style:** Use images with similar lighting/color tone
2. **Show Variety:** Include different types of events (weddings, corporate, etc.)
3. **Food Focus:** Make sure food looks appetizing
4. **Professional Look:** Clean, well-presented food
5. **Update Regularly:** Add new photos from recent events

---

## Need Help Adding Images?

Once you have your images ready, I can help you:
1. Update the HTML to use your images
2. Update the JavaScript for menu item images
3. Optimize images for web
4. Add proper alt text for SEO

Just let me know when you have your images ready! 📸

