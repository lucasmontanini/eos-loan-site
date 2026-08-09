# Eos Loan · Design System

Eos Loan is the consumer-lending brand of **Eos Solar Inc.** — a licensed lender in Texas (NMLS #2744537) financing residential solar for homeowners in Texas and Florida, including a strong Brazilian community. Product is in **English**; applicants can use **SSN or ITIN**. The brand: Eos, goddess of dawn. The icon is the **Sol Rasgado** (torn sun) in motion — the instant the day breaks.

**Writing rule (non-negotiable):** always "Eos" — capital E, lowercase os. Never EOS, never eos. Short signature is **"Eos."** with the period always in Ember. Full lockup is **"Eos Loan"** (no period, "Loan" in a light weight).

## Sources
- `uploads/eos-design-system-brief.md` — consolidated brand decisions by Lucas Montanini (Aug 2026). Ground truth for everything here.
- `uploads/eos-sol-rasgado-versoes_1.html` — icon construction showcase (5 versions + micro rule). V3 "Deslizado" is the chosen mark.
- Referenced but not provided: eos-heros, eos-ember-variacoes, eos-benchmark-cores showcases.

## Content fundamentals
- **Tone:** bold and direct, with the confidence of a licensed institution. Matter-of-fact, no hype, no fine-print games.
- **Language:** product and site copy in English (TX/FL audience); internal brand docs in Portuguese.
- **Person:** speak to the borrower as "you"; Eos is "we".
- **Emoji:** never, unless explicitly requested. Social copy always carries hashtags.
- **Compliance line** on investor/customer material footers: `Eos Loan · NMLS #2744537`.
- **Casing:** sentence case for headlines and UI. Eyebrows/labels in uppercase with wide tracking (.18em).
- **Data is voice:** lead with concrete numbers (APR, $0 down, terms) set large in Inter — "dados como protagonistas".
- Example headline vibe: "The day starts here." / "Solar, owned. Not leased." Short, declarative, dawn-adjacent.

## Visual foundations
- **Palette (Ember direction):** Charcoal `#17120E` (text, dark sections) · Bone `#F7F2EA` (default background of everything) · Ember `#E8401F` (CTAs, wordmark dot, icon, achievement) · White (cards over Bone). Derived tints only — Ember 12% `#FBDCD4` for pills/chips, secondary text `rgba(23,18,14,.62)`, borders `rgba(23,18,14,.10)`. **Never new colors.**
- **Proportion:** Bone ~70%, Charcoal ~20%, Ember ~8%, tints ~2%. Ember is rare on purpose: when it appears it means action or achievement. Discipline: 1 brand color + ink + paper; never two strong colors competing.
- **Flat, always:** zero gradients, anywhere. Light-first (opposite of Brex's dark-first). Dark Charcoal sections are reserved for impact moments (hero, CTA band).
- **Type:** Archivo 700 for the wordmark only (tracking -.045em; stand-in until custom lettering; stepped down from Archivo Black, Aug 2026 — too heavy at small sizes). Inter is the primary face — 600 for headlines, 700 for big numbers, 400–800 for UI/body. JetBrains Mono for numbers, data, code. Hero ≥56px desktop / ≥36px mobile. Never Roboto/Arial. *(Decision Aug 2026: Inter replaces Fraunces + Manrope, superseding the brief’s "never Inter" line.)*
- **Backgrounds:** flat Bone; no textures, patterns, or illustrations. Dark sections are flat Charcoal.
- **Photography (added Aug 2026, photos provided by Lucas):** documentary and warm — real families, homes, and work in TX/FL. Library in `assets/photos/` (family-ranch, family-kitchen, family-backyard, home-florida, home-suburban, home-interior-living, home-interior-stairs, work-paint, work-drill, community-night). Presentation is flat: bordered containers (1px `var(--line)`), radius 12 inside cards / 18 standalone, `object-fit: cover`. Never place text over photos; never tint, duotone, or gradient-scrim them.
- **Cards:** white on Bone, 1px border `rgba(23,18,14,.10)`, radius 18, no shadow — elevation comes from border + contrast. Overlays (dialogs) may use one soft large shadow.
- **Radii:** 12 (buttons, inputs) · 18 (cards) · 999 (pills). Nothing else.
- **Spacing:** 8pt system.
- **Buttons:** weight 800. Ember = primary action, Charcoal = secondary, ghost with border = tertiary. Big, confident sizes (hero CTAs can be huge, ref Ziosk).
- **Interaction states (system decisions, not in brief — flag before changing):** hover darkens flat fills (Ember→`#CF3819`, Charcoal→`#2A221C`), ghost hover adds a faint ink wash; press nudges 1px down; focus is a 2px Ember ring at 45%. No bounces; transitions ~150ms ease.
- **Animation:** restrained. Fades and small translates only; nothing springy.
- **Transparency/blur:** not part of the language. Only the defined rgba inks for text/borders/overlay scrim.
- **Approved hero styles:** (1) dark premium with a card as object (ref Brex, but the site overall stays light-first); (2) light with data as protagonist and a flat highlight block behind a word (ref Ramp); (3) full-bleed flat color with giant type and huge buttons (ref Ziosk).

## Iconography
- **The only brand mark is the Sol Rasgado.** No icon font, no illustration system, no emoji, no decorative SVG set is defined. UI chrome is text-first; the few functional glyphs (chevrons, check, close) are minimal inline strokes matching Inter's weight.
- Official icon: **V3 Deslizado** — solid disc cut at ~36°, halves slid 5 units in opposite directions along the cut (grid 100, disc r42, channel 8). `assets/sol-rasgado.svg` (Charcoal), `-bone`, `-ember` variants.
- **Micro version** (mandatory below 24px): channel 14, no slide — `assets/sol-rasgado-micro.svg`, `-micro-bone`. Validated at 16px favicon render.
- Rules: light backgrounds → Charcoal or Ember icon; dark or flat-Ember backgrounds → Bone icon. Never rotate, mirror, gradient, or outline it. App tile: icon at ~56% of tile width on Charcoal or Ember tile.
- Lockup: icon left of wordmark, icon height = cap height of the "E", gap ~0.3em.
- **There is no drawn logo file for the wordmark** — it is pure typography (Archivo 700), rendered live wherever needed.

## Components
`components/<group>/` — standard set authored for the brand (no component inventory existed in the sources):
- `brand/` — SolRasgado (auto-switches to micro <24px), EosLogo (sign "Eos." / lockup "Eos Loan" / icon+sign)
- `actions/` — Button (primary/secondary/ghost × sm/md/lg), IconButton
- `forms/` — Input, Select, Checkbox, Radio, Switch
- `display/` — Card, Badge (pill), Stat (Inter big number)
- `navigation/` — Tabs
- `feedback/` — Dialog, Toast, Tooltip

**Intentional additions:** SolRasgado + EosLogo (the brand marks as code); Stat (the brief names big-number data display as a core motif). Error states use Ember (the palette defines no semantic colors — flagged as an open item).

## UI kits
- `ui_kits/website/` — marketing site landing page (light-first, approved hero styles). Interactive: rate-check dialog.
- `ui_kits/app/` — borrower portal (English): sign-in → dashboard, payments, autopay, make-a-payment flow. These are constructed from the brief's rules — no product screens existed in the sources.

## Index
- `styles.css` → imports `tokens/` (fonts, colors, typography, spacing, base)
- `assets/` — sol-rasgado SVGs (standard/bone/ember/micro/micro-bone); `assets/photos/` — brand photo library
- `guidelines/` — specimen cards (brand, colors, type, spacing)
- `components/`, `ui_kits/` — see above
- `SKILL.md` — agent-facing usage guide

## Open items (from the brief)
1. Final Ember hex: running with Vermillion `#E8401F`; Tangerine `#FF7A1A` and Copper `#C2551F` still on the table.
2. Designer pass on the icon's curve tapering/optical weight before trademark registration.
3. Custom wordmark lettering to be commissioned from the Archivo 700 base.
4. Fonts load from Google Fonts CDN (all families are Google Fonts); no binaries vendored — provide files to self-host.
