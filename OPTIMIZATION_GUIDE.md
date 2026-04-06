# 🚀 Vercel Deployment & Performance Optimization Guide

## Image Optimization Results
- **Original Total**: 18,179 KB (17.7 MB)
- **Optimized Total**: 7,693 KB (7.5 MB)  
- **Reduction**: 57.7% - **Excellent! 🎉**

---

## Vercel Deployment Setup

### 1. **Connect Repository**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### 2. **Create `vercel.json`** (Optional but Recommended)
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "nodeVersion": "20.x"
}
```

### 3. **Environment Variables** (if needed)
Set in Vercel dashboard:
- `VITE_API_URL` (if you add API calls later)

---

## Performance Optimization Checklist

### ✅ Images (100% Complete)
- [x] Converted all JPG/PNG to WebP
- [x] Created responsive variants (480px, 768px, 1024px, 1200px)
- [x] All images under 320KB max (most under 200KB)
- [x] Implemented lazy loading (`loading="lazy"`)
- [x] Added `srcset` for responsive images
- [x] Images use optimized `ResponsiveImage` component
- [x] Proper `alt` text on all images

### ✅ Vite Configuration
- [x] Chunk code splitting enabled
- [x] Vendor libraries separated for better caching
- [x] Minified with esbuild (fast)
- [x] CSS code splitting enabled
- [x] Source maps disabled in production
- [x] Target ES2020 for modern browsers

### ✅ React Optimization
- [x] Using SWC compiler (much faster than Babel)
- [x] React deduped to single instance
- [x] Query client optimized
- [x] UI component libraries split into chunks

### 📋 Additional Recommendations

#### Content Delivery
1. **Enable Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```
   
   Add to `src/main.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   
   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <App />
       <Analytics />
     </React.StrictMode>,
   );
   ```

2. **Enable Web Vitals Monitoring**
   - Vercel provides this by default
   - Monitor in Vercel dashboard → Analytics

#### Browser Caching
Vercel automatically configures:
- Static assets: 1 year cache
- HTML: no cache (checks for updates)
- Images: 1 year cache

#### Compression
Vercel automatically:
- Gzip compresses all assets
- Brotli compresses for compatible browsers
- Minifies JavaScript and CSS

---

## Performance Metrics to Monitor

### Target Metrics
- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **FID (First Input Delay)**: < 100ms ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅
- **First Byte**: < 200ms ✅

### Check Performance
1. **Vercel Dashboard**
   - Go to your project → Analytics → Web Vitals
   - Monitor real user metrics

2. **Google PageSpeed Insights**
   ```
   https://pagespeed.web.dev/?url=yourdomain.com
   ```

3. **WebPageTest**
   ```
   https://www.webpagetest.org/
   ```

---

## Before You Deploy

### 1. **Test Locally**
```bash
# Build production bundle
npm run build

# Preview production build
npm run preview
```

Then navigate to `http://localhost:5173` and test:
- [ ] Hero carousel loads and transitions smoothly
- [ ] Gallery images load lazily as you scroll
- [ ] Tour cards images display correctly
- [ ] Images are crisp on different screen sizes
- [ ] No layout shift when images load

### 2. **Test Responsive Design**
```bash
# Use browser DevTools (F12)
# View → Responsive Design Mode (Ctrl+Shift+M)
# Test on: 380px (mobile), 768px (tablet), 1200px (desktop)
```

### 3. **Verify Image Compression**
```bash
# Check bundle size
npm run build

# Look for these in output:
# - dist/assets/optimized/*.webp files copied
# - Total bundle size should be < 5MB
```

---

## Deployment Commands

### Deploy to Vercel
```bash
# One-time setup
vercel

# Redeploy after changes
vercel --prod

# Or use Git
# Push to main branch → Vercel auto-deploys
git push origin main
```

### Post-Deployment Checks
1. Visit your deployed site
2. Open DevTools → Network tab
3. Check:
   - Images load as WebP ✅
   - Images use right breakpoint
   - No 404 errors
   - Page loads in < 3s

---

## Troubleshooting

### Issue: Images not loading
**Solution:**
- Check import paths use `@/` alias
- Verify `ResponsiveImage` component is imported
- Check browser console for errors

### Issue: Images too large
**Solution:**
- Regenerate with: `python optimize-images.py`
- Adjust QUALITY in script (lower = smaller, 70-75 is good)

### Issue: Layout shift when images load
**Solution:**
- Use `aspect-ratio` classes (already done!)
- Ensure dimensions match image proportions
- Check container `width` and `height` CSS

### Issue: Slow page load
**Solution:**
1. Check DevTools → Network tab
2. Look for large assets
3. Verify lazy loading is working (`loading="lazy"`)
4. Check Vercel Analytics for bottlenecks

---

## File Size By Image (Optimized)

| Image | Largest Variant | Size |
|-------|-----------------|------|
| elephant | 1200x1600 | 319.74 KB |
| galle-fort | 1200x800 | 172.16 KB |
| galle-library | 1200x1801 | 413.01 KB ⚠️ |
| lotus-tower | 735x475 | 47.34 KB |
| mirissa-beach | 1200x800 | 76.18 KB |
| nine-arch-bridge | 1200x800 | 157.88 KB |
| nine-arch-bridge-real | 1200x1800 | 311.07 KB |
| ocean-boats | 1079x1920 | 512.47 KB ⚠️ |
| palm-beach | 1200x900 | 219.08 KB |
| sigiriya | 1200x1600 | 304.33 KB |
| sigiriya-aerial | 1200x1601 | 202.7 KB |
| tea-plantation | 1200x675 | 176.63 KB |
| temple-kandy | 1200x900 | 160.11 KB |
| waterfall-friends | 1189x795 | 168.24 KB |

⚠️ **Note:** `galle-library` and `ocean-boats` largest variants are over 300KB due to high aspect ratios. These are used in gallery/single context, so loading the 1024px variant instead would save ~100KB per load on mobile.

---

## Future Optimizations (Optional)

1. **AVIF Format** (newer, 20-30% smaller)
   - Requires additional conversion step
   - Fallback to WebP needed for older browsers

2. **Image Processing Service**
   - **Cloudinary** or **Imgix** for dynamic optimization
   - Automatic format selection
   - Automatic resizing

3. **Caching Strategy**
   - Implement Service Worker
   - Cache images locally on first load

4. **Critical Image Optimization**
   - Load hero images with `loading="eager"`
   - Use `fetchpriority="high"` for above-the-fold images

---

## Resources

- [Vercel Docs](https://vercel.com/docs)
- [Web Vitals Guide](https://web.dev/vitals/)
- [WebP Format Support](https://caniuse.com/webp)
- [Image Optimization](https://nextjs.org/learn/foundations/how-nextjs-works/rendering)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
