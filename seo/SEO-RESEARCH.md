# SEO research and site discovery

**Research date:** 2026-11-15

**Project:** Stripchat India Agency website
**Evidence standard:** Separate code-verified facts, public autocomplete observations, and hypotheses. No Search Console or paid keyword data was available.

## Business and website facts found in the project

- **Brand:** Stripchat India Agency.
- **Website:** Next.js 14 App Router application. `SITE_URL` is required for production builds and must be an HTTPS origin controlled by the organization publishing the site.
- **Service described by the site:** onboarding and guidance for adult creators using Stripchat, with a stated focus on India and Hindi-language support.
- **Audience:** adults 18+ in India, according to the website's visible content.
- **Conversion paths:** `/apply` and WhatsApp/contact links. `/help` provides safety, privacy, payment, and contact information.
- **Public routes:** `/`, `/apply`, `/help`. Older routes redirect through `next.config.mjs`.
- **Contact:** phone and email values are in `lib/site.ts`; the contact email can be set using `NEXT_PUBLIC_CONTACT_EMAIL`.
- **Address and public social profiles:** not found in the project. No physical office or LocalBusiness schema is assumed.
- **Business objective:** creator enquiries/applications, inferred from the page CTAs; actual lead/conversion data is not available.
- **Current search visibility:** unknown. No Search Console, analytics, rank tracking, or backlink dataset was supplied.

## Research performed

1. Reviewed the website source, routes, page copy, metadata, structured data, sitemap, robots policy, deployment configuration, and existing SEO implementation.
2. Queried Google Autocomplete with `en-IN`/`hi-IN` and India targeting for several branded and broad work-from-home queries.
3. Queried Bing RSS search results for Stripchat agency and webcam-model-agency queries. Google search pages were not readable by the available automated fetcher; DuckDuckGo presented a human verification challenge.
4. Reviewed Google's SEO starter guidance, AI-search guidance, and Search spam policies. See sources below.

## Findings and caveats

- Autocomplete returned suggestions for broad work-from-home searches and Hindi queries, but did not return suggestions for tested Stripchat-specific phrases. Suggestion presence is not search volume, and absence is not evidence that no one searches a phrase.
- Broad work-from-home queries can describe very different jobs and may attract mismatched visitors. The website should clearly state the adult-creator nature of the work and 18+ requirement; do not disguise it as a generic job.
- The code contains strong claims about verification, privacy, earnings, payment, and tax. Those claims need documentary/business-owner confirmation before publication. This audit cannot verify them.
- Public SERP results included Stripchat information and sign-up pages, but did not reliably identify a like-for-like Indian agency competitor. A search result is not proof of official platform affiliation or a valid business.
- No reliable keyword volume, organic difficulty, CPC, backlink metrics, ranking, or conversion data was available. None is invented in this workspace.
- The production domain must belong to or be controlled by the publishing organization. Search Console verification cannot confer ownership of another party's domain.

## Sources

- Google Search Central, SEO Starter Guide: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide>
- Google Search Central, AI features and your website: <https://developers.google.com/search/docs/appearance/ai-features>
- Google Search Central, spam policies: <https://developers.google.com/search/docs/essentials/spam-policies>
- Google Search Central, structured data policies: <https://developers.google.com/search/docs/appearance/structured-data/sd-policies>
- Google Search Console property guide: <https://support.google.com/webmasters/answer/34592>
- Google Search Console URL Inspection: <https://support.google.com/webmasters/answer/9012289>
- Google Autocomplete endpoint used for observations: <https://suggestqueries.google.com/complete/search>
- Bing RSS search: <https://www.bing.com/search?format=rss&q=Stripchat+agency+India>
- Bing RSS search: <https://www.bing.com/search?format=rss&q=webcam+model+agency+India>
- Google Ads Keyword Planner, for volume research after account access: <https://ads.google.com/home/tools/keyword-planner/>

## Research confidence

| Area | Confidence | Reason |
|---|---|---|
| Current technical implementation | High | Inspected source and validated generated build output |
| Brand, routes, contact, and visible offer | High | Verified in project files |
| Search phrase suggestions | Medium | Direct autocomplete observations; suggestions are volatile and not volume data |
| Search demand and ranking potential | Low / unknown | No Search Console, Trends export, or keyword planner data |
| Competitor positioning | Low | Search access was limited; no verified Indian agency set found |
| Current traffic and conversions | Unknown | No authorized analytics or Search Console property |
