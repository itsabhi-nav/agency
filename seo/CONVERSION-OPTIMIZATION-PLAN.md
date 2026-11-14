# Conversion optimization plan

## Existing conversion paths

- Primary CTA: WhatsApp conversation.
- Secondary CTA: `/apply` form that continues through WhatsApp.
- Support path: `/help` with WhatsApp, phone, and email.

## Measurement plan (requires owner approval)

1. Decide whether GA4 is appropriate for this adult-services context and review applicable analytics, consent, privacy, and platform policies.
2. If approved, set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the deployment environment.
3. Define privacy-safe events such as `apply_form_started`, `apply_form_completed`, and `contact_click`; never send names, phone numbers, cities, messages, IDs, or other form contents as analytics parameters.
4. Test events in a non-production environment and document retention/access controls before enabling.
5. Compare qualified leads and response outcomes, not just clicks.

## UX review after launch

- Test the full application and WhatsApp flow on iOS/Android and desktop.
- Confirm field labels, age confirmation, validation, privacy disclosure, and error/recovery behavior are clear.
- Measure CTA completion and drop-off using consent-compliant aggregate analytics.
- Interview actual users only with informed consent; do not invent testimonials or use sensitive personal details.

## Not done

No analytics account or measurement ID was provided, and no new conversion event instrumentation was added. Existing GA integration remains optional via environment configuration.
