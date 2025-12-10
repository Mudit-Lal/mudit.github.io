# The Office of Mudit Lal

Official website for Mudit Lal — Founder, Engineer, Strategist.

**Live:** [muditlal.com](https://muditlal.com)

---

## Overview

A minimal, elegant personal website built with vanilla HTML, CSS, and JavaScript. Features a light/dark theme toggle, responsive design, and comprehensive SEO optimization.

### Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Introduction, ventures, convocation event, social links |
| About | `/about` | Biography, education, current work, recognition |
| Press | `/press` | Featured coverage, news mentions, conversations |

---

## File Structure

```
mudit.github.io/
├── index.html              # Homepage
├── about.html              # About page
├── press.html              # Press coverage page
├── style.css               # Main stylesheet (all pages)
├── CNAME                   # Custom domain (muditlal.com)
├── og-image-template.html  # Template for generating OG images
├── test-livestream.html    # Testing tool for livestream states
├── README.md
│
└── images/
    ├── og-image.png        # Open Graph image (1200x630)
    ├── about/
    │   └── piera-mudit-candid.jpg
    └── press/
        ├── asu-mudit-lal.jpg
        ├── chronicle-mudit-lal.jpg
        ├── qs-international-students.jpg
        └── shoutout-mudit-lal.jpg
```

---

## Features

### Design
- **Minimal aesthetic** with serif typography (Georgia)
- **Brand colors:** Burgundy (#722F37), Gold (#C9A227), Cream (#FAF8F5)
- **Light/Dark theme** with system preference detection and manual toggle
- **Responsive design** for mobile, tablet, and desktop

### SEO & Social
- Open Graph meta tags for rich previews on social platforms
- Twitter Card support with large image format
- Canonical URLs for domain consolidation (mdtl.in, mlal.me → muditlal.com)
- Theme color meta tags for mobile browser UI

### Analytics
- Google Analytics 4 (GA4) integration
- Custom event tracking for:
  - Theme toggles
  - Venture clicks
  - Press article clicks
  - Contact clicks
  - Video card clicks

### Special Features
- **Convocation Section** (index.html): Time-based display logic for pre-event countdown, livestream link, and post-event message
- **Venture Cards**: Links to Devalok, Oshm, and upcoming ventures with brand-specific accent colors

---

## Development

### Local Development

Simply open any HTML file in a browser. No build process required.

```bash
# Clone the repository
git clone https://github.com/Mudit-Lal/mudit.github.io.git

# Open in browser
open index.html
```

### Deployment

Hosted on GitHub Pages with custom domain. Push to `master` branch to deploy.

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

---

## Customization

### Brand Colors

All colors are CSS custom properties in `style.css`:

```css
:root {
    --burgundy: #722F37;    /* Primary accent */
    --gold: #C9A227;        /* Secondary accent */
    --cream: #FAF8F5;       /* Light background */
    --charcoal: #1a1a1a;    /* Dark text/background */
}
```

### Adding Press Items

**Featured Coverage** (with image):
```html
<a href="URL" target="_blank" rel="noopener" class="press-card">
    <div class="press-card-cover">
        <img src="/images/press/filename.jpg" alt="Description">
        <div class="press-card-overlay"></div>
        <span class="press-card-credit">Photo: Photographer / Publication</span>
    </div>
    <div class="press-card-body">
        <p class="press-card-publication">Publication Name</p>
        <h2 class="press-card-headline">Article Headline</h2>
        <p class="press-card-excerpt">"Pull quote from article"</p>
        <div class="press-card-meta">
            <span class="press-card-date">Month Day, Year</span>
            <span class="press-card-arrow">→</span>
        </div>
    </div>
</a>
```

**News Coverage** (text only):
```html
<a href="URL" target="_blank" rel="noopener" class="press-news-item">
    <span class="press-news-source">Publication Name</span>
    <div class="press-news-content">
        <h3 class="press-news-headline">Article Headline</h3>
        <p class="press-news-desc">Brief description</p>
    </div>
    <span class="press-news-date">Month Day, Year</span>
</a>
```

### Generating OG Image

1. Open `og-image-template.html` in Chrome/Edge
2. Press `F12` → Toggle device toolbar (`Ctrl+Shift+M`)
3. Set dimensions to `1200 x 630`
4. Right-click → "Capture screenshot"
5. Save as `images/og-image.png`

---

## Domain Configuration

| Domain | Purpose |
|--------|---------|
| muditlal.com | Primary domain (CNAME) |
| mdtl.in | Redirect to primary |
| mlal.me | Redirect to primary |

Canonical URLs point to muditlal.com to consolidate SEO.

---

## Contact

**Website inquiries:** [office@muditlal.com](mailto:office@muditlal.com)

---

## License

All rights reserved. Content and design are proprietary.
