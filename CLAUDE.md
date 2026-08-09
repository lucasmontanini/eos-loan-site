# Eos Loan — marketing site

Pages (Design Components, same directory): `Home.dc.html`, `RealEstate.dc.html`, `Contact.dc.html`, `GetStarted.dc.html`. Shared children: `SiteHeader.dc.html` (prop `active`), `SiteFooter.dc.html`. Future LPs: vehicles, equipment, business credit, embedded solutions.

## Language / i18n
- Site copy is **English-first** (TX/FL audience). Portuguese and Spanish are planned but NOT applied yet.
- Header + footer already carry a language switcher stub (EN active; PT/ES marked "soon"). When the user asks to localize: keep one file per page, add a `lang` prop + per-page copy dictionaries in the logic class, and translate copy without changing layout. Keep copy short and idiom-free so it translates cleanly.

## Fixed facts (never invent beyond these)
- ®Eos Loan NMLS #2744537 · DBA of Eos Solar Inc., licensed lender in Texas · applicants use SSN or ITIN.
- Track record: $4B+ originated to date · 30k+ proposals processed.
- Contact: +1 833-989-3737 (phone + WhatsApp) · contact@eosloan.com · 1401 Lake Plaza Drive, Spring, TX 77389 · Mon–Fri 8am–6pm CST.
- Cross-border collateral countries (real estate): Brazil, Mexico, Colombia, Argentina, Peru, Ecuador, Paraguay, Chile.
- Real estate strategies: Fix & Flip (buy-renovate-sell, ≤12 mo) · Fix & Keep (buy-renovate-rent, sell 12–60 mo) · Fix & Hold (buy-renovate-rent, financing 48–72 mo, wealth in dollars).
- **Products** = Eos delivers credit directly (business: payments, FX, working capital, receivables advance, equipment; personal: real estate, vehicles, energy/water upgrades). **Solutions** = embedded finance, B2B2B/B2B2C (credit button, financing links, cross-border money).
- Legal links: https://eosloan.com/legal · https://nmlsconsumeraccess.org/

## Rules
- Follow the bound Eos Loan design system strictly (Bone/Charcoal/Ember, flat, radii 12/18/999, "Eos" casing). Type (updated Aug 2026): **Inter** for UI + headlines, JetBrains Mono for data, **Archivo 700** (tracking -.045em, mixed case, Ember period the only adornment — never gradient/outline/shadow) for the wordmark only — always via `var(--font-*)` / EosLogo component, never hardcoded family names.
- Never mention the vendor/partner names from the uploaded reference decks in site copy — they are internal references only.
- Rates/amounts shown in mockups are illustrative; label them as such.
