# 📘 Portfolio Maintenance & Customization Guide

This guide is your complete handbook for maintaining, updating, and deploying your portfolio.

## � Project Structure

```bash
├── public/              # Static assets (images, icons, PDFs)
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components (Her, About, etc.)
│   ├── content/         # ✏️ JSON Content (Edit these!)
│   ├── data/            # ✏️ Resume & Personal Data
│   └── lib/             # Utilities and helpers
├── docs/                # Documentation
└── ...config files      # Root configuration
```

---

## 🚀 Deployment Guide (GitHub Pages)

You can host this portfolio for **free** on GitHub Pages.

### Step 1: Configure `next.config.mjs`
Ensure your configuration enables static export.
*(Already configured in this project)*
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Required for static export
  // basePath: '/repo-name',     // Uncomment if deploying to username.github.io/repo-name
};
```

### Step 2: Push to GitHub
1.  Create a new repository on GitHub.
2.  Push your code:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    git push -u origin main
    ```

### Step 3: Deploy
**Option A: Automated (Recommended)**
1.  Go to your Repository **Settings** > **Pages**.
2.  Under **Build and deployment**, select **Source** as **GitHub Actions**.
3.  Click **Static HTML** (Configure).
4.  Commit the default workflow file provided by GitHub.
5.  Your site will be live at `https://your-username.github.io/repo-name`.

**Option B: Manual Branch**
1.  Run `npm run build`.
2.  This creates an `out/` folder.
3.  Upload the contents of `out/` to a `gh-pages` branch.

---

## 📝 Updating Content

All content is managed via simple JSON/TS files. **No code changes required.**

| Section | File Location | Description |
| :--- | :--- | :--- |
| **Profile** | `src/data/resume.tsx` | Name, links, bio, avatar, contact info |
| **Projects** | `src/content/projects.json` | Project list, images, and links |
| **Experience** | `src/content/opensource.json` | Work & Open Source contributions |
| **Articles** | `src/content/articles.json` | Blog posts or articles |
| **Skills** | `src/content/skills.json` | Tech stack marquee icons |
| **Education** | `src/content/education.json` | Degrees and certifications |

### Example: Adding a Project
Open `src/content/projects.json` and add to the list:
```json
{
  "title": "New Project",
  "description": "Built with Next.js",
  "technologies": ["React", "AI"],
  "href": "https://demo.com",
  "image": "/new-project.png" // Put image in public/ folder
}
```

---

## 🎨 Customization

### Changing the Color Theme
The "Red & Blue" gradient is defined globally. To change it:
1.  Open `src/app/globals.css`.
2.  Search for generic gradient classes or update specific components in `src/components/`.
3.  **Search & Replace**: Replace `from-red-600 to-blue-900` with your preferred colors (e.g., `from-emerald-500 to-teal-900`).

### Updating Images
1.  Place your new image in the `public/` folder.
2.  Update the reference in the JSON/TS file (e.g., `"image": "/new-photo.jpg"`).
3.  **Note**: Always use absolute paths starting with `/`.

---

## ❓ Troubleshooting

### Images not loading?
*   Ensure the file is effectively in the `public/` folder.
*   Path must start with `/` (e.g., `/avatar.png`).
*   Check case sensitivity (`file.PNG` vs `file.png`).

### 404 on Refresh (GitHub Pages)?
*   GitHub Pages is static. If you use dynamic routes, adding a `.nojekyll` file to the `public/` folder often helps specific routing issues.

### Security Updates
*   Run `npm audit` monthly to check for vulnerabilities.
*   Update packages with `npm install package@latest`.
