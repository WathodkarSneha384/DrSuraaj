# Dr. Suraaj Clinic & Advanced Wellness Center — website (Next.js)

Next.js 16 (App Router, TypeScript) version of the approved HTML design.
Every page is pre-rendered to static HTML, so it is fast and fully readable by Google.

## Pages

| URL | File |
| --- | --- |
| `/` | `app/page.tsx` — homepage (physician care, credentials, timings, map, booking) |
| `/wellness/` | `app/wellness/page.tsx` — IV therapy, dietician, weight management (drsuraajwellness.com forwards here) |
| `/blog/` | `app/blog/page.tsx` — health library |
| `/type-2-diabetes-symptoms-treatment/` | `app/type-2-diabetes-symptoms-treatment/page.tsx` — article |
| `/sitemap.xml`, `/robots.txt` | `app/sitemap.ts`, `app/robots.ts` |

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # creates the finished site in /out
```

## Deploy

**Shared hosting (Hostinger, GoDaddy, cPanel):** run `npm run build`, then upload the
*contents* of the `out/` folder into `public_html`. No Node.js needed on the server.

**Vercel / Netlify:** import the project; build command `npm run build`, output folder `out`.
(On Vercel you may delete `output: "export"` in `next.config.ts` to enable server features.)

## Wellness domain (drsuraajwellness.com)

drsuraajwellness.com is **only a pointer** to `https://www.drsuraajclinic.com/wellness/` (301, permanent),
so all Google ranking stays on the main site. Set it up in ONE of these ways:

1. **Registrar forwarding** (simplest): forward to `https://www.drsuraajclinic.com/wellness/`, type 301, no masking.
2. **Same hosting (Apache: Hostinger/GoDaddy/cPanel):** add drsuraajwellness.com as an alias/parked domain.
   `public/.htaccess` (copied into `out/`) already redirects it, including short links for ads and print:

| Short link | Goes to |
| --- | --- |
| drsuraajwellness.com | /wellness/ |
| drsuraajwellness.com/iv | /wellness/#iv-hydration |
| drsuraajwellness.com/diet | /wellness/#dietician |
| drsuraajwellness.com/weight | /wellness/#weight-loss |
| drsuraajwellness.com/skin | /wellness/#iv-skin-hair |
| drsuraajwellness.com/book | /wellness/#book |

   UTM tags are kept, e.g. `drsuraajwellness.com/iv?utm_source=instagram&utm_campaign=iv`.
3. **Vercel:** add drsuraajwellness.com to the project; `vercel.json` has the same redirects.

`public/.htaccess` also forces `https://` and `www`, redirects old WordPress pages
(/about-us, /services, /contact, /category/...) to the new sections, enables gzip and caching,
and serves the custom 404 page. These rules were tested on Apache.

## Analytics & Search Console

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 ID. Tracks `click_call`, `click_whatsapp`,
  `click_directions` and `booking_form_submit`; mark them as key events in GA4.
- `NEXT_PUBLIC_GSC_VERIFICATION` — Search Console HTML-tag code (or verify via DNS instead).

Rebuild after changing these.

## SEO checklist (built in)

- Unique title (under 60 characters) and description (under 160) on every page, canonical URLs, Open Graph/Twitter share image (`public/images/og-image.jpg`, 1200×630).
- Structured data: WebSite, MedicalClinic (address, hours, services, area served), Physician (credentials), FAQPage, MedicalWebPage, Article, Blog, BreadcrumbList.
- `sitemap.xml`, `robots.txt`, site icon, Apple touch icon, `lang="en-IN"`, one H1 per page, alt text on every image, noindex 404.
- Lighthouse (mobile, gzip on): Performance 91–94, Accessibility 100, Best Practices 100, SEO 100 on all pages.

## Where to edit

- **Phone, WhatsApp, address, social links, opening hours:** `lib/site.ts` — the top bar,
  footer, "Open now" badge and today's hours all read from here. (The timings table and the
  address text inside `app/page.tsx` also need updating if they change.)
- **Menu links:** `components/PageShell.tsx` (`MAIN_NAV`); home and wellness pass their own.
- **Booking form services:** `components/BookingForm.tsx`.
- **Styles:** `app/globals.css` (colours are CSS variables at the top).
- **Page text, FAQs, structured data (`schema`) and SEO titles (`metadata`):** in each `page.tsx`.
  If you change an FAQ on the page, change the same question in that page's `schema`.
- **Images:** `public/images/`. Certificates there have personal details blurred.

## Adding a new article

1. Copy `app/type-2-diabetes-symptoms-treatment/` to a new folder named after the URL
   (e.g. `app/fatty-liver-masld/`) and replace the text, `metadata` and `schema`.
2. Add a card for it in `app/blog/page.tsx`.
3. Add the URL to `app/sitemap.ts`.

## Before going live

- Replace "Ask for price" on the wellness page with real prices.
- Confirm the wellness safety statements and Thursday–Sunday timings with the clinic.
- The four older blog posts (Zinc, Vitamin C, Magnesium, L. reuteri) still link to the
  WordPress site. Recreate them as pages at the **same URLs** before switching hosting,
  or ask the host to 301-redirect them, so their Google ranking is kept.
- Submit `https://www.drsuraajclinic.com/sitemap.xml` in Google Search Console.

## Notes

- Fonts (Cormorant Garamond, Manrope) are self-hosted in `app/fonts/` (SIL Open Font License); only the weights used are loaded.
- `components/SiteEffects.tsx` adds the scroll animations, counters, open/closed badge,
  certificate viewer and blog filters on top of the server-rendered pages.
