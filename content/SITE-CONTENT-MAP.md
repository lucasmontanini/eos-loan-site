# Site content map — what goes live, where

Source: `eos-produtos-e-ofertas.PT.md` (record) · `eos-products-and-offerings.EN.md` (formal translation).
Site copy is **English-first**. PT/ES are planned; see "Portuguese plan" at the end.

---

## Priority decided with Lucas (Aug 2026)

1. **Consumer Financing is the product.** It leads the Home and gets the most surface.
2. **Battery is one page, not a pillar.** All battery content lives on `Battery.dc.html`. The Home
   carries a **single** battery block that links there — nothing more.
3. **Commercial Financing is secondary.** A short section, never presented as a main offering.
4. **Partners get a signup section on the Home** (`#partners`) — see spec below.

---

## Facts cleared for public copy

These come from the briefing and may be stated on the site as written.

| Fact | Use |
|---|---|
| Eos Solar, Inc. · licensed lender · NMLS #2744537 | Footer + compliance lines (already on site) |
| Direct lender — originates, approves and funds with its own capital | Financing pages, partner section |
| Unsecured personal loan — **the home is never collateral**; no HEA / HELOC / home equity | Financing page hero + FAQ |
| APR around 10%, varies by product and partner | Always labelled illustrative / "varies" |
| Terms from 6 to 240 months (category-dependent) | Financing page |
| No dealer fee · no prepayment penalty · no hidden fees | Financing + partner sections |
| Credit decision in minutes · 100% digital | Home, financing, partner |
| Average funding in 48 hours after approval | Already on Home ("Funding in 48 hours") |
| Soft pull — no credit score impact | Already on Home |
| SSN or ITIN accepted | Already on Home |
| Financeable categories: energy storage, water filtration, roofing, HVAC, home improvement/repair, energy efficiency | Financing page category grid |
| Partner: no credit risk, full margin, dashboard, resume-link, onboarding = apply + approve + one training session | Partner section |
| Service in English and Portuguese | Contact / footer |
| 4.7 stars on Google | Social proof band (needs a live link before publishing) |
| Spring, TX HQ · 1401 Lake Plaza Drive · Mon–Fri 8am–6pm CST · +1 833-989-3737 · contact@eosloan.com | Contact (already on site) |
| Battery: <20 ms transfer · <25 dB · no fuel, no CO · 10-yr warranty @ 70% retention · 9–45 kWh residential (6–30 h) · 135 kWh commercial · 3–6 weeks contract to energization · from ~$87/mo | **Battery page only** |

## Facts to keep OFF the site

- **Sigenergy / SigenStor by name**, and the internal platform evaluation. Vendor names from
  internal decks are internal (existing CLAUDE.md rule). Describe the hardware generically:
  "LFP battery modules", "hybrid inverter", "smart panel", "bidirectional 25 kW V2X charger".
- **My Pure Filter** as a named client — needs their written consent before it becomes a logo
  or a case study. Until then: "water filtration partners".
- The commercial-financing line "less developed, less expanded" — that is internal positioning
  guidance, not copy.
- "Solar is not a priority vertical" — internal. On the site, solar is simply **absent** from the
  category list. Note: `SiteHeader.dc.html` currently says "Solar, batteries, HVAC and filtration"
  under Energy & water — **that mention of solar must be removed.**
- Any APR or monthly payment shown as if it were an offer. All numbers stay labelled illustrative.

---

## Page architecture

| Page | File | Status | Role |
|---|---|---|---|
| Home | `Home.dc.html` | exists — needs the partner section (done) + battery block + product realignment | Consumer financing leads; one battery block; partner signup |
| Personal financing | `Financing.dc.html` | **to build** | The main product page: unsecured personal loan |
| Battery & home backup | `Battery.dc.html` | **to build** | Everything battery, self-contained |
| Business financing | `Business.dc.html` | **to build (short)** | Commercial credit, secondary weight |
| For partners | `Partners.dc.html` | **to build** | Long-form version of the Home `#partners` section |
| Real estate | `RealEstate.dc.html` | exists | See "open question" below |
| Contact | `Contact.dc.html` | exists | Add an "interest" value per new product |
| Get started | `GetStarted.dc.html` | exists | Application entry point |

---

## Page specs

### A. `Financing.dc.html` — Personal financing (PRIMARY)

- **H1**: Credit for what's essential.
- **Sub**: A personal loan from the lender itself — approved in minutes, funded in about 48 hours,
  and your home is never the collateral.
- **Proof strip**: Decision in minutes · Funding in ~48h · Soft pull, no score impact · SSN or ITIN
- **Section — We are the lender, not a marketplace.** Eos originates, approves and funds with its
  own capital under NMLS #2744537. One team from application to funding. No auction between banks,
  no intermediary adding cost.
- **Section — Your home stays out of it.** This is an unsecured personal loan. No HELOC, no home
  equity loan, no lien on the property. You finance the project without putting the house at risk,
  and without the timeline and closing costs of a mortgage.
- **Section — What you can finance** (card grid, one card each):
  Energy storage & backup · Water filtration · Roofing · HVAC · Home improvement & repair ·
  Energy efficiency. Footnote: availability depends on the partner and the enrolled product.
- **Section — The terms, out loud** (mono spec table, labelled illustrative):
  APR from ~10% (varies by product and partner) · Terms 6–240 months by category ·
  No dealer fee · No prepayment penalty · No hidden fees.
- **Section — How it works**: 01 Apply in minutes (digital) → 02 Decision in minutes →
  03 Funding in about 48 hours.
- **FAQ**: Does checking affect my score? / Can I apply with an ITIN? / Is my home collateral? /
  What can I finance? / Is there a fee to pay it off early?
- **CTA**: Check your rate → `GetStarted.dc.html`

### B. `Battery.dc.html` — Battery & home backup (SELF-CONTAINED)

- **H1**: Never lose power. Even during outages.
- **Sub**: Texas leads the country in grid interruptions. A battery system takes the house over
  automatically in under 20 milliseconds — the family never notices the transition.
- **Section — Not a generator.** Silent (under 25 dB) · No fumes, no carbon monoxide · No fuel ·
  No scheduled maintenance · No friction with the HOA.
- **Section — Own it. Don't rent it.** Not a subscription. The customer owns the system, and it
  appreciates as an improvement to the property.
- **Section — The system** (generic naming, no vendor):
  LFP battery module, 9 kWh nominal (8.76 kWh usable), stackable ·
  Smart controller, 11.5 kW continuous / 17.1 kW surge, hybrid inverter built in ·
  Smart panel with circuit management and load shedding, no separate gateway ·
  Bidirectional 25 kW DC V2X module — the EV becomes the backup battery (60–100 kWh, more than the
  largest fixed plan; CCS1 or NACS) · Monitoring app with outage alerts and remote diagnostics.
  Up to 6 modules per controller (54 kWh per stack, 45 kWh with V2X); stacks combine.
- **Section — Sizing**: residential 9–45 kWh = 6–30 hours on essential loads.
  Commercial to 135 kWh, sized to replace a 50–100 kW diesel standby generator.
- **Section — What we sell**: single battery or multi-module system · controller / load hub ·
  V2X and EV charging · **equipment only, shipped beyond Texas** · **equipment + full installation**
  across the Texas metros, expedited in Greater Houston.
- **Section — End to end**: 01 Free assessment (2-minute planner + remote photo survey) →
  02 In-house sizing and design → 03 Permitting and utility interconnection (2–4 weeks) →
  04 Installation in 1–2 days by licensed, insured local contractors → 05 Commissioning,
  inspection and monitoring, annual inspection included. Contract to energization: 3–6 weeks.
- **Section — Warranty**: 10 years on battery, controller and panel, with a contractual minimum
  of 70% capacity retention at the end of the term.
- **Section — Financing it**: from about $87/month on longer terms; 6 months interest-free up to
  240 months where eligible; checking eligibility does not affect the score; no prepayment penalty;
  or pay in full and own it outright from day one. (Labelled illustrative.)
- **CTA**: Get a free assessment.

### C. Home — the single battery block

One section, `#battery`, nothing more. Charcoal or Bone band, one photo, three specs
(under 20 ms transfer · under 25 dB · 10-year warranty), one line of copy —
"When the grid goes down, the house doesn't. A battery system that takes over automatically,
without fuel, noise or a subscription." — and one link: *Explore home backup →* `Battery.dc.html`.

### D. `Business.dc.html` — Business financing (SECONDARY, short)

- **H1**: Financing for the projects that keep the business running.
- Same rationale as consumer: direct lender, no dealer fee, fast decision, flexible terms.
- Verticals: commercial energy storage · EV charging infrastructure · commercial-scale water
  filtration.
- One CTA to `Contact.dc.html?interest=business`. Keep the page short — it is a complementary
  offering, not a pillar.

### E. Home `#partners` — partner signup (BUILT)

Live in `Home.dc.html`. Copy and structure:

- Eyebrow: FOR PARTNERS · H2: "Sell more. Carry none of the credit risk."
- Value points: customer applies in minutes at the point of sale · decision in minutes ·
  the customer is the borrower — the partner takes no credit risk · full margin, no dealer fee ·
  onboarding is an application, an approval and one training session · a dashboard to track every
  application and to reissue a resume-link to the customer.
- Form fields: company name · contact name · work email · phone · what you sell (select:
  Energy storage & backup / Water filtration / Roofing / HVAC / Home improvement / Energy
  efficiency / Other) · monthly volume (optional).
- Submits to `Contact.dc.html?interest=partner`. **Backend still to be wired** — see open items.
- Reassurance line: no cost to join, no exclusivity, no credit risk to the partner.

---

## Portuguese plan (not applied yet)

Do not fork the pages. When PT is switched on: add a `lang` prop to each page, keep one copy
dictionary per page in the `DCLogic` class, and translate strings without touching the layout —
the approach already documented in `../CLAUDE.md`. `eos-produtos-e-ofertas.PT.md` is the copy
source for that pass. Header and footer already carry the EN · ES · PT switcher stub.

---

## Open items

1. **Header/nav does not match this positioning.** `SiteHeader.dc.html` still presents Payments,
   Foreign exchange, Working capital, Receivables advance, Equipment financing, Real estate,
   Vehicles. None of those appear in this briefing. Needs a decision — see the question raised
   with Lucas.
2. **Solar must come out** of the header's "Energy & water" description.
3. The partner form has no backend; it currently hands off to Contact. Wire it to the real
   destination (CRM / inbox) before launch.
4. The 4.7-star rating needs a link to the live Google profile before it is published as a claim.
5. `My Pure Filter` requires written consent to be named.
