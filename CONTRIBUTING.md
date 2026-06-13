# Project Maintenance Guide
**Fokrul Islam Bhuiyan — Portfolio Website**
Live site: https://FokrulBhuiyan.github.io

---

## Quick Reference

| Task | Command |
|---|---|
| Check status | `git status` |
| Pull latest | `git pull` |
| Stage all changes | `git add -A` |
| Commit | `git commit -m "your message"` |
| Push | `git push` |
| Stage + Commit + Push | see [One-liner](#one-liner-workflow) |

---

## Setup (First Time on a New Machine)

```bash
git clone https://github.com/FokrulBhuiyan/FokrulBhuiyan.github.io.git
cd FokrulBhuiyan.github.io
```

---

## Daily Workflow

### 1. Always pull before making changes
```bash
git pull
```

### 2. Make your edits to the files

### 3. Check what changed
```bash
git status
```

### 4. Stage your changes
```bash
# Stage everything
git add -A

# Or stage a specific file
git add index.html
git add css/main.css
```

### 5. Commit with a clear message
```bash
git commit -m "short description of what you changed"
```

**Good commit message examples:**
```
git commit -m "Add new portfolio project: Django e-commerce app"
git commit -m "Update resume: add new job experience"
git commit -m "Fix contact form validation bug"
git commit -m "Update profile photo"
```

### 6. Push to GitHub
```bash
git push
```

### One-liner Workflow
Stage, commit, and push in one go:
```bash
git add -A && git commit -m "your message" && git push
```

---

## Common Tasks

### Add a New Portfolio Project
1. Create `portfolios/portfolio-yourproject.html` (copy an existing one as template)
2. Add portfolio image to `img/portfolio/`
3. Add the new entry in `index.html` under the portfolio grid section
4. Commit and push

### Add a New Research/Blog Post
1. Create `blog-post-yourpost.html` (copy `blog-post-yolov8.html` as template)
2. Add blog image to `img/blog/`
3. Add the new card in `index.html` under the Research section
4. Commit and push

### Update CV / Resume
1. Replace `Fokrul Islam Bhuiyan-CV 2026.pdf` with the new PDF (keep the same filename)
2. Or add a new file and update the `href` in these files:
   - `index.html` (line ~120)
   - `blog-post-yolov8.html`
   - `blog-post-whymedqa.html`
3. Commit and push

### Update Profile Photo
1. Replace `img/main_photo.jpg` with your new photo (keep the same filename)
2. Commit and push

### Update Skills or Experience
- Edit `index.html` — Resume section (search for `timeline-item`)

### Update Contact Form
- The form sends to Formspree endpoint in `js/main.js`
- Formspree form ID is set in the `url` variable
- Log in at formspree.io to view submissions

---

## File Structure

```
/
├── index.html                  ← Main single-page site
├── blog-post-yolov8.html       ← YOLOv8 research post
├── blog-post-whymedqa.html     ← WhyMedQA research post
├── Fokrul Islam Bhuiyan-CV 2026.pdf
├── css/
│   └── main.css                ← All custom styles
├── js/
│   └── main.js                 ← Main JS (form, portfolio filter, etc.)
├── img/
│   ├── main_photo.jpg          ← Profile photo
│   ├── mylogo-1.png            ← Favicon / logo
│   ├── portfolio/              ← Portfolio thumbnail images
│   └── blog/                   ← Blog/research images
├── portfolios/                 ← Individual portfolio detail pages
│   ├── portfolio-yolov8-safety.html
│   ├── portfolio-whymedqa.html
│   ├── portfolio-marginedge-testing.html
│   ├── portfolio-dropshipping-app.html
│   ├── portfolio-iot-line-follower.html
│   └── portfolio-us-crime-analysis.html
└── .gitignore                  ← Excluded files (memory/, OS files)
```

---

## Undo Changes

### Undo unstaged changes to a file
```bash
git restore index.html
```

### Undo last commit (keep changes in files)
```bash
git reset --soft HEAD~1
```

### See history of commits
```bash
git log --oneline
```

### See what changed in a specific commit
```bash
git show <commit-hash>
```

---

## View Site Locally

Run a local server before pushing to preview changes:
```bash
python -m http.server 8765
```
Then open http://localhost:8765 in your browser.

---

## GitHub Pages

The site auto-deploys on every push to `main` branch.
- Deployment takes ~1–2 minutes after each push
- Check deployment status: github.com/FokrulBhuiyan/FokrulBhuiyan.github.io/actions

---

## Security Notes

- **Email** is XOR-encrypted in HTML (`data-cfemail`) — never appears in plain text
- **memory/** folder is gitignored — never committed to GitHub
- **Formspree** handles contact form submissions securely
- Never commit `.env` files or API keys
