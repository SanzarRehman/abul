# abulfatharifat.com — Portfolio

Personal portfolio for **S. M. Abul Fatha Rifat**, Mechanical Engineer
(M. Prof. Eng, Curtin University). Design language: the engineering drawing sheet —
drafting frame, title block, dimension lines, and a bill-of-materials tool inventory.

## Stack
Plain HTML / CSS / JavaScript. No build step. Fonts via Google Fonts.

## Files
- `index.html` — page content
- `styles.css` — all styling
- `script.js` — scroll reveals + stat counters (progressive enhancement)
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Run locally
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a repo and push these files to the `main` branch.
2. Repo **Settings → Pages** → Source: **Deploy from a branch** → `main` / `root`.
3. Site goes live at `https://<username>.github.io/<repo>/`.
4. To use the custom domain `abulfatharifat.com`, add a `CNAME` file containing
   the domain and configure DNS at the registrar.
