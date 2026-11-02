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
| Press | `/press` | Speaking, featured coverage, news mentions, conversations |
| Amity lecture | `/amity-guest-lecture` | Guest lecture write-up, photo gallery, podcast player |
| Not found | `/404` | Served by GitHub Pages for any unknown path |

Two pages are reachable by URL but deliberately kept out of search (`noindex, nofollow`
in the page plus a `Disallow` in `robots.txt`): `design-test.html` is a design preview
scratchpad, `og-image-template.html` is the screenshot jig described below.

---

## File Structure

```
mudit.github.io/
├── index.html                  # Homepage
├── about.html                  # About page
├── press.html                  # Recognition / press page
├── amity-guest-lecture.html    # Guest lecture write-up (self-contained <style>)
├── 404.html                    # Not-found page, reuses the site shell
├── design-test.html            # Design preview scratchpad (noindex)
├── og-image-template.html      # Screenshot jig for the OG image (noindex)
├── style.css                   # Main stylesheet (all pages except the lecture)
├── robots.txt                  # Allows everything but the two internal pages
├── sitemap.xml                 # The four public pages
├── CNAME                       # Custom domain (muditlal.com)
├── README.md
│
├── downloads/
│   └── amity-guest-lecture-student-takeaway.pdf
├── media/
│   └── amity-guest-lecture-podcast.m4a
└── images/
    ├── og-image.jpg            # Open Graph image (1200x630)
    ├── about/
    ├── amity-guest-lecture/
    └── press/
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
- **Video lightbox** (press.html): Conversation cards play in-page instead of leaving the site
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

### Adding a Conversation (video) Card

Cards live in `.press-video-grid` on `press.html` and tile two-up above 768px.
A card that should play in-page is a `<button>` carrying the YouTube id; the
optional `data-start` is the entry point in **seconds**:

```html
<button type="button" class="press-video-card video-lightbox-trigger"
        data-youtube="VIDEO_ID" data-start="109">
    <div class="press-video-cover">
        <img src="/images/press/thumbnail.jpg" alt="Description"
             loading="lazy" width="1160" height="652">
        <div class="press-video-cover-overlay"></div>
        <span class="press-video-play" aria-hidden="true"></span>
    </div>
    <div class="press-video-body">
        <p class="press-video-type">Publication &middot; Format</p>
        <h3 class="press-video-title">Title</h3>
        <p class="press-video-guest">One or two sentences of context.</p>
        <div class="press-video-meta">
            <span>Source &middot; Month Day, Year</span>
            <span class="press-video-cta">Play from 1:49 &rarr;</span>
        </div>
    </div>
</button>
```

Thumbnails are **copied into `images/press/`, never hotlinked**. Grab one with
`https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg` and resize to 1160px wide.

Beware: a re-upload of the same footage shifts every timestamp. The FOX 10
segment and ASU's copy of it are the same tape, but ASU drops the studio toss,
so the same moment is 1:49 in one and 1:39 in the other.

---

## Accessibility Rules

Five things here are load-bearing. Breaking them silently regresses the site:

1. **`--gold` is not a text colour on cream.** It lands at 2.28:1, well under
   the 4.5:1 floor. Small type on a light background uses **`--gold-text`**
   (`#856810`, 4.97:1). On the dark cards `--gold` is fine (7.2:1) and is used
   directly. In dark mode `--gold-text` resolves back to the bright gold.
5. **Dark mode has two background surfaces, not one.** `--cream` is `#121212`
   and `--cream-dark` is `#1a1a1a`. A text colour tuned against `#121212`
   alone will miss on `#1a1a1a`, which is the lighter of the two — exactly how
   `--burgundy` shipped at 4.28:1 on `.convocation-section`. Check any new
   dark-mode text colour against **`#1a1a1a`**; clearing it clears both.
2. **Entrance animations start at `opacity: 0`.** The `prefers-reduced-motion`
   block therefore collapses the timeline instead of writing `animation: none`,
   which would strand every revealed element invisible. If you add a reveal,
   add its selector to the opacity reset at the bottom of `style.css`.
3. **Nav controls are visually small on purpose.** `.nav-link`, `.theme-toggle`
   and `.nav-toggle` get a transparent `::before` stretched to 44x44 so the
   touch target meets WCAG 2.5.5 without growing the bar. Don't remove it.
4. **Decorative glyphs carry `aria-hidden="true"`** (the ✦ ornaments, the
   `&middot;` venture separators). They are contrast-exempt only because of it.

---

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
