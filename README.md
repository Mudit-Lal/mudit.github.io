# The Office of Mudit Lal - Website Files

## File Structure

```
/
├── index.html          # Homepage
├── press.html          # Press/Media page (or /press/index.html for clean URLs)
├── style.css           # Main stylesheet
├── images/
│   └── press/
│       ├── chronicle-mudit-lal.jpg
│       ├── qs-international-students.jpg
│       ├── asu-mudit-lal.jpg
│       └── shoutout-mudit-lal.jpg
```

## Setup Instructions

### 1. Download & Host Images

The press page requires 4 images to be hosted on your server. Download from these URLs and save to `/images/press/`:

| File Name | Download From |
|-----------|---------------|
| `chronicle-mudit-lal.jpg` | https://chronicle.brightspotcdn.com/dims4/default/d454abe/2147483647/strip/true/crop/5400x3600+0+0/resize/1680x1120!/format/webp/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.us-east-1.amazonaws.com%2F44%2Fba%2F846d59f749f89a961c34baa03196%2Ffischerasu-ponders-1761.jpg |
| `qs-international-students.jpg` | https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/49580/loic-furhoff-qeiamqp_xqe-unsplash.0de397087dae.jpg |
| `asu-mudit-lal.jpg` | https://news.asu.edu/sites/g/files/litvpz161/files/styles/block_image_16_9_lge/public/2025-12/20251125%20MuditLalPolyCampus_1801.jpg |
| `shoutout-mudit-lal.jpg` | https://cdn.shoutoutmiami.com/wp-content/uploads/2025/07/c-1751826335218-personal_1751826334682_1751826334682_mudit_lal_mudit-lal-chat-image.jpg |

### 2. URL Routing

For clean URLs (e.g., `muditlal.com/press` instead of `muditlal.com/press.html`):

**Option A: Rename files**
- Create folder `/press/`
- Rename `press.html` to `/press/index.html`

**Option B: Server configuration**
- If using Apache, add to `.htaccess`:
  ```
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ $1.html [L]
  ```

- If using Nginx:
  ```
  location / {
    try_files $uri $uri/ $uri.html =404;
  }
  ```

- If using Netlify/Vercel, this is handled automatically.

### 3. Update Navigation Links

If using Option A (folder structure), update the nav links in both HTML files:
- Change `href="/press"` to `href="/press/"` (with trailing slash)

### 4. Deployment

Upload all files to your web server or hosting platform (Netlify, Vercel, GitHub Pages, etc.)

## Customization

### Colors
All colors are defined as CSS variables in `style.css` under `:root`. Key brand colors:
- `--burgundy: #722F37` - Primary accent
- `--gold: #C9A227` - Secondary accent  
- `--cream: #FAF8F5` - Background
- `--charcoal: #1a1a1a` - Text

### Adding New Press Items

**Featured Coverage (with image):**
Add a new `.press-card` block in the featured grid.

**News Coverage (text only):**
Add a new `.press-news-item` block in the news list.

## Contact

For questions about this website: office@muditlal.com
