# Eos Loan — marketing site

Pages (Design Components, same directory): `Home.dc.html`, `Battery.dc.html`, `Partners.dc.html`, `Business.dc.html`, `Contact.dc.html`, `GetStarted.dc.html`. Shared children: `SiteHeader.dc.html` (prop `active`), `SiteFooter.dc.html`. `_archive/` holds retired pages — not linked, not deployed as navigation.

**Taxonomy (SITE-UPD-01, 26-aug-2026): the site has exactly 3 avenues** — Real estate (`RealEstate.dc.html`), Utilities (`Utilities.dc.html`, with `Battery.dc.html` as the flagship product page) and Mobility & fleet (`Mobility.dc.html`). No page, menu, breadcrumb or filter may create a fourth category; "home improvement" does not exist as a category anywhere. Roofing, HVAC, outdoor and interior are consumer programs INSIDE real estate. When the site and a program document diverge, the document wins — see `content/SITE-UPD-01.2026-08-26.md`.

## Term table (the source for every heading, bullet, dropdown and mockup)
Fix & Flip ≤12 mo · Fix & Keep 36–60 · Fix & Hold 36–60 · Roofing 36–72 · Outdoor 36–72 · HVAC 24–72 · Interior 24–72 · Residential battery 60–72 · Solar+battery 60–72 · Water filtration 36–72 · EV charger 24–60 · Auto 24–72 · Commercial storage 60–84 (business-purpose, outside the consumer cap) · Truck lease-to-own 48 (business) · Invoice trading 30–120 days per invoice (business). **No consumer term above 72 months, ever** (`TERM_CAP`).

## Content rules (SITE-UPD-01 §4)
- **No savings claims** on HVAC, solar or battery, in any variation. The §25D residential energy tax credit ended Dec 2025 and is never mentioned.
- **No discretionary pricing language.** Where a rate appears, this sentence appears: "Rates shown are the rates we lend at. Your rate depends on your credit tier and the term you choose, and it is confirmed after the credit decision. This is not an offer of credit."
- **License formula**: "Eos Loan · Licensed lender in Texas · NMLS #2744537", with the footprint in a separate clause ("Serving Texas and Florida today…"). Never "Texas & Florida" presented as license.
- **HVAC never uses energy language** (no VPP, telemetry, dispatch, bill savings). Its home is the real estate avenue; the utilities page may cross-list it as marketing only.
- **CTA rule**: `live` products get "Check my rate" (Flip, Keep, Hold, residential battery, water filtration); everything else gets "Talk to us".
- Forms capture `contact_initiated_by` (consumer/merchant/unknown, default merchant — it decides the cancellation window, not the product).

## Content source

`content/` holds the business briefing that drives site copy: `eos-produtos-e-ofertas.PT.md` (source of record, Portuguese), `eos-products-and-offerings.EN.md` (formal translation) and `SITE-CONTENT-MAP.md` — which facts are cleared for public copy, which are internal only, and the per-page specs. **Read the map before writing product copy.**

## Language / i18n
- Site copy is **English-first** (TX/FL audience). Portuguese and Spanish are planned but NOT applied yet.
- Header + footer already carry a language switcher stub (EN active; PT/ES marked "soon"). When the user asks to localize: keep one file per page, add a `lang` prop + per-page copy dictionaries in the logic class, and translate copy without changing layout. Keep copy short and idiom-free so it translates cleanly.

## Fixed facts (never invent beyond these)
- ®Eos Loan NMLS #2744537 · DBA of Eos Solar Inc., licensed lender in Texas · applicants use SSN or ITIN.
- Track record: $4B+ originated to date · 30k+ proposals processed.
- Contact: +1 833-989-3737 (phone + WhatsApp) · contact@eosloan.com · 1401 Lake Plaza Drive, Spring, TX 77389 · Mon–Fri 8am–6pm CST.
- Battery (all of it lives on `Battery.dc.html`, one summary block on the Home): under 20 ms transfer · under 25 dB · no fuel, no CO, no maintenance · 10-year warranty at 70% minimum retention · residential 9–45 kWh (6–30 h on essential loads) · commercial to 135 kWh · 3–6 weeks contract to energization · financing from ~$87/mo. The customer OWNS the system — never a subscription.
- Consumer credit is an **unsecured personal loan**: the home is never collateral. Eos does not do HEA, HELOC or home equity. APR around 10%, terms 6–240 months, no dealer fee, no prepayment penalty — all illustrative and varying by partner and product.
- **Products** = Eos delivers credit directly (business: payments, FX, working capital, receivables advance, equipment; personal: real estate, vehicles, energy/water upgrades). **Solutions** = embedded finance, B2B2B/B2B2C (credit button, financing links, cross-border money).
- Legal links: https://eosloan.com/legal · https://nmlsconsumeraccess.org/

## Rules
- Follow the bound Eos Loan design system strictly (Bone/Charcoal/Ember, flat, radii 12/18/999, "Eos" casing). Type (updated Aug 2026): **Inter** for UI + headlines, JetBrains Mono for data, **Archivo 700** (tracking -.045em, mixed case, Ember period the only adornment — never gradient/outline/shadow) for the wordmark only — always via `var(--font-*)` / EosLogo component, never hardcoded family names.
- Never mention the vendor/partner names from the uploaded reference decks in site copy — they are internal references only. This includes the **battery hardware vendor** (describe the hardware generically) and **named client partners**, which need written consent first.
- **Solar is not a financeable vertical** and must not appear in any product or category list. "Solar input" as a capability of the hybrid inverter is fine; "Eos Solar Inc." in the legal line is required.
- Rates/amounts shown in mockups are illustrative; label them as such.
