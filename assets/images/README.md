# Project Media Directory

This directory stores the preview screenshots and UI images for each project in your portfolio.

## Current Setup
Each project in `index.html` is configured with a 16:9 media frame loading an SVG placeholder.

| Project ID | Project Name | Current Placeholder |
|---|---|---|
| PRJ-01 | ReelForge: Episodic AI Video Studio | `assets/images/prj-01-reelforge.svg` |
| PRJ-02 | Collabo: Local-First Office Suite | `assets/images/prj-02-collabo.svg` |
| PRJ-03 | Lumina: Native AI Voice Assistant | `assets/images/prj-03-lumina.svg` |
| PRJ-04 | Private LLM Code Review Service | `assets/images/prj-04-private-llm.svg` |
| PRJ-05 | Pulse: Geospatial Event Discovery | `assets/images/prj-05-pulse.svg` |
| PRJ-06 | Trackr: Job Pipeline Analytics | `assets/images/prj-06-trackr.svg` |
| PRJ-07 | Swazi-Uber: Real-Time Transit Platform | `assets/images/prj-07-swazi-uber.svg` |
| PRJ-08 | Hybrid Semantic Search Engine | `assets/images/prj-08-semantic-search.svg` |
| PRJ-09 | Distributed Web Scraping Service | `assets/images/prj-09-web-scraper.svg` |
| PRJ-10 | SplitFare: Shared Expense Ledger | `assets/images/prj-10-splitfare.svg` |
| PRJ-11 | Nexus: Search & Ingestion Dashboard | `assets/images/prj-11-nexus.svg` |
| PRJ-12 | Weather: Global Forecast Dashboard | `assets/images/prj-12-weather.svg` |
| PRJ-13 | NovaCalc Pro: Desktop GUI Calculator | `assets/images/prj-13-novacalc.svg` |
| PRJ-14 | CodeInterview: Live Technical Interview Platform | `assets/images/prj-14-codeinterview.svg` |
| PRJ-15 | Online Shop: Modern Apparel & EDC Storefront | `assets/images/prj-15-shop.svg` |

---

## How to Add Your Own Screenshots

### Method 1: Drop your image and update `index.html` (Recommended)
1. Save your screenshot (PNG, JPG, or WebP) into this folder (`assets/images/`).
   - Example: `assets/images/reelforge-ui.png`
2. Open `index.html` and search for the project ID (e.g., `PRJ-01`).
3. Update the `src` attribute inside the `.project-media-frame`:
   ```html
   <div class="project-media-frame">
     <img src="assets/images/reelforge-ui.png" alt="ReelForge project preview" class="project-media-img" loading="lazy">
   </div>
   ```

### Method 2: Replace with matching file name
If you name your screenshot with the exact matching filename, just update the extension in `index.html`:
- Example: Save `prj-01-reelforge.png` and change `.svg` to `.png` in `index.html`.

### Image Recommendation
- **Aspect Ratio:** 16:9 (e.g., 1200x675, 1280x720, or 1920x1080)
- **Format:** PNG or WebP for sharp UI screenshots

---

## How to Add Your Profile Photo (About Section)

1. Save your headshot or portrait photo into `assets/images/` (e.g., `assets/images/my-profile.jpg` or `.png`).
2. Open `index.html` and locate `.profile-media-frame` inside the About section:
   ```html
   <div class="profile-media-frame">
     <img src="assets/images/my-profile.jpg" alt="Profile photo" class="profile-media-img" loading="lazy">
   </div>
   ```
3. Recommended aspect ratio: 1:1 square (e.g., 600x600) or portrait (4:5). The frame uses `object-fit: cover` to gracefully fit any portrait dimensions without distortion.
