# Migration report

## Source status

`https://reminiscencecloud.com/` returned an access block to both browser and direct inspection on September 19, 2026. The practice subsequently supplied English and Simplified Chinese source copy, direct public links, and ten mobile screenshots. These now serve as the content and visual evidence for this build. The booking form implementation and several practice policies were not supplied.

## Migrated assets

- Supplied Reminiscence Cloud logo
- Supplied therapist headshot
- Supplied coastal portrait used as environmental brand imagery
- Ten supplied mobile screenshots used as visual references only; screenshots are not published

No third-party platform code, tracking identifiers, or unverified external images were copied. The rebuilt visual system uses pale blue/lavender gradients, editorial serif headings, rounded cards, a compact cloud wordmark, and the spacing and crops evidenced in the screenshots.

## Route map

| Source route | New route | Status |
|---|---|---|
| Home | `/` and `/zh/` | English and Chinese built |
| About | `/about/` and `/zh/about/` | English and Chinese built |
| Services | `/services/` and `/zh/services/` | English and Chinese built |
| FAQ | `/faq/` and `/zh/faq/` | English and Chinese built |
| Blog | `/resources/` and `/zh/resources/` | Collection ready; no public posts supplied |
| Reach Out | `/contact/` and `/zh/contact/` | Built; secure request link still required |
| Legacy English home | `/en/` | Retained as a redirect to `/` |
| Legacy English pages | `/en/about/`, `/en/services/`, `/en/faq/`, `/en/blog/` | Retained as redirects |
| Consultation request | `/en/book/` and `/zh/book/` | Routes retained; approved form/service still required |
| Website privacy policy | `/privacy-policy/` and `/zh/privacy-policy/` | Bilingual draft added; operational review required |
| HIPAA notice | `/hipaa-notice/` and `/zh/hipaa-notice/` | Bilingual review draft added using current HHS model structure |

## CMS map

- Site identity, contact, service area, and CTA: `src/content/settings.json`
- Stable English and Chinese page copy: `src/content/pages/` and `src/content/pages/zh/`
- Articles/resources: `src/content/posts/*.md`
- Visual system, navigation, templates, and deployment remain administrator-controlled.

## Before cutover

Connect the approved secure consultation form or scheduling service; confirm fees, insurance, payment, cancellation, and rescheduling policies; review testimonials for compliance; complete legal review of both privacy notices; test the bilingual preview; record existing DNS and email records; and keep the current service active. After launch, verify the domain, HTTPS, all primary routes, language links, sitemap, contact actions, and rollback path.
