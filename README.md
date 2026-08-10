# Eos Loan — marketing site

Static site (no build step). Pages are Design Components (`.dc.html`) that render with
React at runtime via `support.js`; `_ds/` holds the Eos Loan design system tokens and
component bundle. Source of truth for the design is the Claude Design project
"Eos Loan website project".

## Branches — read this first

| Branch | Deploys to | Who pushes |
|---|---|---|
| `dev` | staging preview URL | anyone working on the site |
| `main` | **production** (eos-loan-site.vercel.app) | nobody directly — only via approved Pull Request |

**Never push to `main`.** Work on `dev` (or a branch off `dev`), push, check your preview
URL, then open a Pull Request into `main` for review. Merging the PR is what ships to
production.

```bash
git checkout dev
git pull
# ...edit...
git commit -am "what changed and why"
git push
# then open a PR: dev -> main
```

Every push to `dev` gets a preview URL on Vercel (password-protected — ask Lucas for it).
The Vercel bot also comments the preview link on each Pull Request.

## Running locally

Pages fetch the shared header/footer at runtime, so `file://` will not work — you need a
server. Video seeking also needs HTTP Range support, which `python -m http.server` does
**not** implement, so use a server that does (any of: `npx serve`, `caddy file-server`,
`php -S`).

```bash
npx serve . -l 8437
# open http://localhost:8437/Home.dc.html
```

## Layout

```
Home.dc.html  RealEstate.dc.html  Contact.dc.html  GetStarted.dc.html
SiteHeader.dc.html  SiteFooter.dc.html      shared, imported by the pages
_ds/…                                       design system: tokens + component bundle
uploads/                                    photos, films and their poster frames
favicon.svg  favicon-32.png  apple-touch-icon.png  icon-192.png  icon-512.png
vercel.json                                 rewrites / -> Home.dc.html
```

## Conventions that are not optional

- **Design system only.** Colors, type, spacing and radii come from `var(--…)` tokens.
  Never hardcode a hex or a font family. Brand rules live in `_ds/…/readme.md`.
- **Always write "Eos"** — capital E, lowercase os. Never EOS, never eos.
- **Ember (`--eos-ember`) is rare on purpose** (~8% of a page): it means action or
  achievement. Never a second strong color competing with it.
- **Flat, no gradients.** Cards are white on Bone with a 1px border, radius 18, no shadow.
- **Films never autoload.** Each player is one `<video preload="none">` with a `poster`
  image; the click handler calls `play()`. Do not use `src="video.mp4#t=1.5"` as a poster —
  it makes the browser stream megabytes of video on every page load.
- **New videos must be remuxed faststart** (moov atom before mdat) or playback stalls
  while the browser fetches the tail of the file.
- **Compress images before committing.** Nothing above ~1600px wide or a few hundred KB.
- Photos: never put text over them, never tint or gradient-scrim them.

## Compliance

The footer compliance line is fixed: `®Eos Loan NMLS #2744537`. Rates and amounts shown
anywhere on the site are illustrative and must stay labelled as such.
