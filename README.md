# Medford Rehabilitation & Nursing Center — Demo Site

This is a sanitized demo showcasing interaction patterns and state handling.

Polished marketing and utility experience for **Medford Rehabilitation & Nursing Center**, built as a frontend-only showcase (no real payments, email, or PHI storage).

## Stack

- **Next.js** (App Router)
- **React** + **TypeScript**
- **Tailwind CSS** v4
- **React Hook Form** + **Zod** for client-side form validation (mock submit handlers)

## Fully implemented pages (match Figma direction)

1. **Home** (`/`) — utility bar, header, hero, trust metrics, services grid, why families, testimonials, life in the community, CTA band, footer  
2. **Online Bill Pay** (`/pay-online`) — internal hero, reassurance row, stepped cards, sidebar summary / help / info, mock pay flow with success and simulated decline  
3. **Contact a Resident** (`/families/contact-a-resident`) — hero, intro line, form + sidebar support modules, mock success state  

## Other routes

All routes below are real pages using a shared **internal template** (hero, intro, body copy, CTA block). Copy is original (no lorem ipsum), aligned with the same design system.

| Path | Description |
| --- | --- |
| `/about-us` | About overview |
| `/about-us/mission-values` | Mission & values |
| `/about-us/our-team` | Our team |
| `/about-us/location-community` | Location & community |
| `/services` | Services overview |
| `/services/short-term-rehabilitation` | Short-term rehabilitation |
| `/services/long-term-care` | Long-term care |
| `/services/memory-care` | Memory care |
| `/services/skilled-nursing` | Skilled nursing |
| `/services/physical-therapy` | Physical therapy |
| `/services/occupational-therapy` | Occupational therapy |
| `/services/speech-therapy` | Speech therapy |
| `/services/post-acute-care` | Post-acute care |
| `/families` | Families overview |
| `/families/visiting-information` | Visiting information |
| `/families/faqs` | FAQs |
| `/admissions` | Admissions overview |
| `/admissions/request-information` | Request information |
| `/admissions/schedule-a-tour` | Schedule a tour |
| `/careers` | Careers (footer / secondary nav) |
| `/contact` | Contact |
| `/privacy-policy` | Privacy policy (demo placeholder) |
| `/terms-of-service` | Terms of service (demo placeholder) |
| `/accessibility` | Accessibility statement (demo placeholder) |

## Navigation

- **Utility bar:** Call Now, Get Directions, Pay Online (Careers is **not** in the utility bar).  
- **Main nav:** About Us, Services, Families, Admissions — each with desktop dropdowns and a mobile accordion menu.  
- **Primary header CTA:** Schedule a Tour.  
- **Footer:** quick links (includes Careers), services teaser, contact, legal links.

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Demo limitations

- **No real payment processing** — bill pay is UI + validation + mock success/error only; structured so a provider SDK can replace the submit handler.  
- **No email or messaging backend** — contact/resident form shows a demo confirmation only; nothing is persisted.  
- **No PHI/PII storage** — do not submit real protected health information.  
- **Imagery** — production images are stored under `public/images/`; the app has no runtime dependency on temporary Figma export URLs.

## Project structure (high level)

- `app/` — App Router pages and layouts  
- `components/` — layout, sections, UI primitives, feature forms  
- `data/` — site config, navigation, footer links, page copy, homepage content  
- `lib/` — utilities and internal page helpers  
- `public/images/` — permanent brand and content imagery used by the site

## Repository

Upstream demo target: [github.com/LoHiDi-Dev/medfordrnc](https://github.com/LoHiDi-Dev/medfordrnc.git)
