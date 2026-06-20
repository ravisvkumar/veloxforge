# Velox Forge — Website Bundle

**Velocity Meets Precision**

A premium digital studio website for Velox Forge. Modern, fast, and fully customizable.

---

## **Project Structure**

```
velox-forge/
├── index.html         # Main HTML markup
├── styles.css         # All styling
├── script.js          # JavaScript (scroll, animations, forms)
└── README.md          # This file
```

---

## **Quick Start**

### **1. Local Preview**
Simply open `index.html` in your browser:
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or run a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then visit: `http://localhost:8000`

---

## **Deployment Options**

### **Option 1: Netlify (Recommended)**
1. Create a free account at [netlify.com](https://netlify.com)
2. Drag & drop the entire folder into Netlify
3. Get a live URL instantly

### **Option 2: Vercel**
1. Create a free account at [vercel.com](https://vercel.com)
2. Connect your Git repo or drag & drop
3. Deploy in seconds

### **Option 3: GitHub Pages**
1. Create a GitHub repo named `velox-forge`
2. Push these files to the repo
3. Go to Settings → Pages → Select `main` branch
4. Your site is live at `https://yourusername.github.io/velox-forge`

### **Option 4: Self-Hosted (Nginx, Apache, etc.)**
1. Upload all files to your web server's public directory
2. Configure your domain to point to that directory
3. Done!

---

## **Customization Guide**

### **Email Address**
Find and replace `hello@veloxforge.studio` with your actual email:
- `index.html` (line ~380, in contact section)
- `script.js` (line ~44, in form handler)

### **Brand Colors**
Edit the CSS color variables in `styles.css` (`:root` section, lines 1–17):
```css
:root {
    --forge: #E8743B;           /* Warm copper accent */
    --accent: #6C8CFF;          /* Electric azure */
    --base: #0B0E16;            /* Dark graphite background */
    /* ... other colors ... */
}
```

### **Tagline & Copy**
Edit text in `index.html`:
- **Main headline:** Line ~97 (`<h1>Velocity Meets Precision</h1>`)
- **Tagline:** Line ~98
- **Service descriptions:** Lines ~152–177
- **Approach steps:** Lines ~206–239
- **Contact section:** Lines ~310–330

### **Navigation Links**
Update the nav menu (line ~78):
```html
<ul>
    <li><a href="#services">Services</a></li>
    <li><a href="#approach">Approach</a></li>
    <li><a href="#capabilities">Capabilities</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

### **Logo & Branding**
The "VF" logo is pure CSS (gradient + text). To use an image logo instead:
1. Replace the `.vf-logo` div (line ~285) with an `<img>` tag:
   ```html
   <img src="path/to/logo.png" alt="Velox Forge" class="vf-logo" style="width: 140px; height: auto;">
   ```

### **Domain**
Update the domain in the footer and contact sections:
- Replace `veloxforge.studio` with your actual domain
- Update `hello@veloxforge.studio` to your email

---

## **Features**

✅ **Dark theme** (graphite + forge copper + electric azure)  
✅ **Fully responsive** (mobile, tablet, desktop)  
✅ **Scroll animations** (elements fade in as you scroll)  
✅ **Sticky header** with scroll effects  
✅ **Contact form** (composes email on submit)  
✅ **No dependencies** (no jQuery, no build tools)  
✅ **Google Fonts** (Syne, Manrope, Space Mono)  
✅ **Optimized performance** (fast load times)  

---

## **Browser Support**

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

## **Font Attribution**

- **Syne** — Display font (headers)
- **Manrope** — Body font (text)
- **Space Mono** — Monospace (technical details)

All fonts are loaded from Google Fonts. No local files needed.

---

## **SEO & Meta Tags**

Update these in `index.html` `<head>`:
```html
<title>Velox Forge — Your Tagline Here</title>
<meta name="description" content="Your company description for search engines">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## **Analytics & Tracking**

To add Google Analytics or Hotjar:
1. Get your tracking ID
2. Paste the tracking script before `</head>` or after `<body>` in `index.html`

Example (Google Analytics):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## **Troubleshooting**

**Q: The form isn't sending emails**
A: The form uses `mailto:` links. For proper email backend, you'll need a service like:
- [Formspree](https://formspree.io)
- [Basin](https://usebasin.com)
- [AWS SES](https://aws.amazon.com/ses/)

Update the form's `onsubmit` handler in `script.js`.

**Q: Fonts look different locally**
A: The site uses Google Fonts, which require internet connection. Offline, system fonts are used.

**Q: Mobile menu isn't working**
A: The hamburger menu (☰) is shown on mobile but currently just a visual. To add a working mobile menu, see the CSS media query at line ~450.

**Q: How do I add a dark mode toggle?**
A: Add a button that toggles the `:root` colors via JavaScript. Or use `prefers-color-scheme` CSS media query.

---

## **Performance Tips**

1. **Minify CSS/JS** for production (optional, but improves load speed)
2. **Compress images** if you add any (use TinyPNG or similar)
3. **Use a CDN** for fast global delivery (Cloudflare, Bunny CDN, etc.)
4. **Enable caching** on your server

---

## **File Sizes**

- `index.html`: ~17 KB
- `styles.css`: ~15 KB
- `script.js`: ~1.5 KB
- **Total:** ~33.5 KB (very lightweight)

---

## **Support & Issues**

For bugs or questions:
1. Check the browser console (`F12 → Console`) for errors
2. Verify all file paths are correct
3. Clear browser cache (`Ctrl+Shift+Delete` or `Cmd+Shift+Delete`)
4. Try a different browser

---

## **License**

This website template is provided as-is for use by Velox Forge. Modify freely for your needs.

---

**Built for speed. Crafted with precision.**

Velox Forge © 2026
