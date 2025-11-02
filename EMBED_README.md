# Embed Background Remover Widget

## Overview

This embeddable widget allows other websites to integrate our AI-powered background removal tool into their pages without any API keys or authentication.

## What's Included

### 1. Embed Component (`components/bg-remover-embed.tsx`)
- Standalone React component with minimal dependencies
- Self-contained styling (no external CSS required)
- Dark/light theme support with auto-detection
- Fully responsive design
- Zero external dependencies (except React)

### 2. Embed Page (`app/embed/bg-remover/page.tsx`)
- Full-page version of the widget
- Can be embedded via iframe
- Optimized for external embedding

### 3. Documentation Page (`app/embed-docs/page.tsx`)
- Complete integration guide
- Code examples
- Live demo
- FAQ section
- Use case examples

### 4. CORS Configuration
- Added CORS headers to `/api/bg-remover` endpoint
- Enabled OPTIONS preflight requests
- Allows cross-origin embedding

### 5. Iframe Headers
- Configured Next.js headers to allow embedding
- Added `X-Frame-Options: ALLOWALL` for `/embed/*` routes

### 6. Example Files
- `public/embed-example.html` - Standalone example showing how to embed
- `EMBED_README.md` - This documentation file

## How to Use

### For Website Owners

#### Method 1: Simple Iframe Embed (Recommended)

```html
<iframe 
  src="https://www.fasttools.store/embed/bg-remover" 
  width="100%" 
  height="700" 
  frameborder="0"
  style="border: none; border-radius: 8px;"
  title="AI Background Remover"
></iframe>
```

#### Method 2: Responsive Iframe

```html
<div style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe
    src="https://www.fasttools.store/embed/bg-remover"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="camera; microphone"
    title="AI Background Remover"
  ></iframe>
</div>
```

### For Developers

#### Custom Styling

You can customize the appearance by wrapping the iframe:

```html
<iframe 
  src="https://www.fasttools.store/embed/bg-remover"
  width="100%"
  height="700"
  frameborder="0"
  style="border: 2px solid #e5e7eb; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
  title="AI Background Remover"
></iframe>
```

#### Custom Dimensions

```html
<iframe 
  src="https://www.fasttools.store/embed/bg-remover"
  width="800"
  height="600"
  frameborder="0"
  title="AI Background Remover"
></iframe>
```

## Features

✅ **Free Forever** - No cost, no hidden charges  
✅ **No API Keys** - Works immediately without authentication  
✅ **No Limits** - Use as many times as you want  
✅ **Fast Processing** - AI-powered neural network  
✅ **Privacy First** - Secure processing on our servers  
✅ **Mobile Responsive** - Works on all devices  
✅ **Auto Theme** - Matches user's system preferences  
✅ **Professional Quality** - Perfect for e-commerce, portfolios, and more  

## URLs

- **Embed Documentation**: https://www.fasttools.store/embed-docs
- **Live Embed**: https://www.fasttools.store/embed/bg-remover
- **Example HTML**: /public/embed-example.html
- **API Endpoint**: https://www.fasttools.store/api/bg-remover

## Technical Details

### Supported Formats
- Input: PNG, JPG, JPEG, WebP
- Output: PNG (transparent background)

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### File Size Limits
- Recommended: Under 10MB
- Supported: Up to 50MB

### Processing Time
- Typically: 2-5 seconds
- Depends on image size and complexity

## Security

- All processing happens on our secure servers
- Images are not stored permanently
- HTTPS encryption for all transfers
- CORS properly configured
- No tracking cookies

## Support

- Documentation: /embed-docs
- Main tool page: /image-tools/image-background-remover
- Contact: /contact

## License

Free for commercial and personal use. Attribution appreciated but not required.

## Updates

The widget is maintained and improved regularly. Changes are backward compatible and won't break existing embeds.

---

Made with ❤️ by [FastTools](https://www.fasttools.store)

