# Product Requirements Document (PRD)

## Crystalign Aligners — Interactive Trade Show Website

**Document status:** Product brief for design and implementation  
**Brand:** Crystalign Aligners (`crystalign.aligners`)  
**Reference:** [Precisalign](https://precisalign.com/)  
**Primary use:** A branded, interactive website displayed at a physical exhibition booth and usable on visitors’ phones via QR code.

---

## 1. Product summary

Create a polished clear-aligner showcase site for Crystalign Aligners, using the reference site’s visual language and section order as the design baseline. Preserve the overall UI structure, spacing, typography, color treatment, card patterns, and visual hierarchy as closely as practical. Replace Precisalign branding, copy, contact information, product names, and assets with approved Crystalign material. Remove identifiable people/patient photographs from the reference treatment: use approved product photography, abstract dental/3D visuals, diagrams, or neutral placeholders. The site must explain the product, show common use cases and why treatment matters, and turn booth interest into a submitted lead form.

The site is a product and lead-generation experience, not a diagnostic or treatment recommendation tool. All clinical claims, case suitability statements, statistics, testimonials, and before/after material require Crystalign clinical/legal approval before publication.

## 2. Goals and success measures

### Goals

1. Explain what clear aligners are and how the treatment journey works.
2. Show the relevance of aligners for common alignment concerns: crowding, spacing, overjet, crossbite, and open bite, using careful, qualified language.
3. Communicate practical benefits: discreet appearance, removable wear, comfort, hygiene, and clinician-supervised planning (subject to product validation).
4. Capture qualified exhibition leads with a short, mobile-friendly form.
5. Work well on a shared booth display and on a visitor’s phone after scanning a QR code.
6. Preserve the reference site’s recognizable UI structure while making the controls and content meaningfully interactive.

### Success measures

- Form completion rate and valid contact rate.
- Number of leads captured per event, with event/source attribution.
- CTA engagement: “Book a consultation” / “Talk to our team” clicks.
- Use-case tab engagement and average engaged time.
- Successful QR landing and form completion on mobile.
- No critical accessibility, layout, or performance failures on the booth device and current mobile browsers.

Targets should be set after the first event establishes a baseline.

## 3. Audiences and context

- **Prospective patients / caregivers:** Need a quick, understandable overview and an easy way to request follow-up.
- **Dental professionals / clinic partners:** Need to understand the workflow, product range, and how to contact the Crystalign team.
- **Booth staff:** Need a kiosk-friendly page that can be reset between visitors and clearly signals new leads.

Assume many visitors are standing, distracted, and using a phone or a shared touchscreen. Prioritize scannability, visible CTAs, large touch targets, short explanations, and fast loading.

## 4. Scope

### In scope

- One responsive, long-form landing page that follows the reference site’s content sequence.
- Interactive treatment-step cards, condition selector, product cards, gallery/media controls, testimonials if approved, FAQs if approved, lead form, contact actions, and sticky/anchor navigation.
- Brand and asset replacement for Crystalign.
- Lead submission integration to an agreed CRM, inbox, or secure database, with event attribution.
- Analytics for key actions, subject to consent and applicable privacy requirements.
- Kiosk and QR-code use.

### Out of scope unless separately approved

- Online diagnosis, eligibility decisions, treatment simulation using a visitor’s face/teeth, or individualized medical advice.
- E-commerce, pricing/financing checkout, patient portal, clinician dashboard, or treatment management.
- Publishing unverified clinical claims, patient imagery, testimonials, or outcome statistics.

## 5. Information architecture and page requirements

The reference crawler shows duplicated content blocks and placeholder copy in places. The Crystalign version should retain the broad visual rhythm but present each section once, with final approved content only.

| Order | Section | Requirements and interactions |
|---|---|---|
| 1 | Header / navigation | Crystalign logo; compact anchor navigation to How it works, Concerns, Benefits, Products, FAQ, and Contact; prominent “Get a consultation” CTA; click-to-call on mobile when number is approved. Sticky header may condense on scroll. Mobile menu opens/closes accessibly. |
| 2 | Hero | Short eyebrow, clear headline, one-paragraph value proposition, primary consultation CTA, secondary “Explore how it works” anchor. Preserve reference composition. Use abstract/product imagery or 3D aligner render; no identifiable person photo. If a hero video is supplied, show poster first and provide explicit play/pause. |
| 3 | Benefit highlights | Four concise cards matching the reference’s numbered benefit row: advanced planning, comfortable/smooth fit, removable/lifestyle-friendly, fewer in-person visits where clinically appropriate. Cards may reveal short supporting copy on tap/keyboard; no hover-only content. |
| 4 | About / why aligners | Explain Crystalign’s approach and distinguish the product from fixed braces in neutral terms. Include approved care standards and trust evidence. Counters only if verified; otherwise omit rather than display zero or invented figures. |
| 5 | Treatment journey | Six steps based on reference: 3D scan/records, X-rays/clinical assessment, digital/CAD planning, personalized plan, model/aligner production, delivery and supervised follow-up. Each numbered step is selectable; selection updates detail text/media and selected state. “Read more” opens an inline detail or accessible dialog. Confirm actual Crystalign workflow before copy is finalized. |
| 6 | Treatable concerns / use cases | Five tabs or segmented controls: Crowding, Spacing, Overjet, Crossbite, Open bite. Selecting a concern updates its explanation and a non-identifying clinical illustration. Include benefit/importance and a clear caveat that suitability varies and a dental professional must assess the case. Tabs work by click, touch, keyboard, and screen reader. |
| 7 | Results / smile examples | Preserve the reference’s results-gallery position and visual treatment, but do not reuse identifiable people or patient images. Prefer approved anonymized dental models, synthetic diagrams, or omit until consented assets are supplied. If before/after sliders are used, label the control, support keyboard/touch, and avoid implying typical or guaranteed outcomes. |
| 8 | Why Crystalign | Three feature blocks for precision/planning, preview/expectation-setting, and comfort/materials, using only substantiated claims. Optional stats panel requires verified source and date. Use decorative product/technology visuals, not people. |
| 9 | Product range | Product cards for the Crystalign offerings approved by the client. Each card includes product name, who it is for (only if clinically approved), short differentiator, verified inclusions/features, and CTA. Replace reference placeholder bullet text. CTA routes to lead form with product interest preselected. Hide section if range details are not approved. |
| 10 | Video / animation feature | Showcase product/treatment process video or loop. Requirements in Section 6. For the expo, provide a silent loop mode and clear user-initiated audio controls. |
| 11 | Event / gallery | Reference has an exhibition gallery. Use Crystalign booth, product, lab, scanner, or manufacturing imagery. Horizontal carousel with previous/next controls, dots, swipe, and pause for auto-rotation if enabled. No reference-brand event photos. |
| 12 | Main CTA | Strong invitation to start a consultation or speak to a Crystalign representative. CTA scrolls to form or opens a short form panel. Repeat after major decision sections without excessive popups. |
| 13 | Testimonials | Include only real, consented testimonials with permissions and accurate context. Carousel is manually controllable and does not autoplay by default. Omit if content is unavailable. |
| 14 | Articles / education | Optional educational cards on aligners, care, and treatment expectations. Remove the reference’s default “Hello world” post. Each card links to a real Crystalign article or is excluded. |
| 15 | FAQ | Recommended interactive accordion covering wear, eating/drinking, cleaning, appointments, discomfort, eligibility, and next steps. Answers require clinical approval and must not promise outcomes. |
| 16 | Lead form and footer | Form and contact details described below. Include privacy notice, consent language, social links, and event-specific contact information only after supplied/approved. |

## 6. Video, animation, and motion requirements

The public text crawl does not expose actual video files, animation timelines, or precise transition durations. The items below define the complete motion/media behavior needed for the Crystalign site, while exact reference-site timings and assets must be confirmed by direct visual inspection or client-provided originals.

### Video

- Support a hero or process explainer video and section-level product/process clips where assets are provided.
- Use poster images and lazy loading; do not download/load every video on initial page view.
- Booth default: muted autoplay loop only when browser policy permits, with a visible pause control. Keep the essential message understandable without sound.
- Provide play/pause and mute/unmute controls; show captions/subtitles for spoken content and a transcript where practical.
- On mobile and reduced-data settings, default to poster/manual playback or a lightweight video rendition.
- Avoid flashing, rapid cuts, or autoplay audio.
- If no approved Crystalign footage exists, use a restrained product render/diagram animation rather than reference patient footage.

### Interface motion

- Hero artwork may use a subtle entrance or slow product rotation/parallax; keep text stable and readable.
- Benefit cards and treatment steps use short opacity/position transitions on entry or selection.
- Concern selection crossfades the illustration and swaps explanatory copy without shifting the whole page unexpectedly.
- Counters, if backed by verified metrics, animate once when visible and respect reduced-motion preferences.
- Gallery transitions are short and controllable; carousel must stop on focus/hover and expose manual controls.
- Accordion/dialog transitions should be brief and must not trap focus incorrectly.
- All nonessential motion is disabled or greatly reduced under `prefers-reduced-motion: reduce`.
- Never make motion the only way to understand a state change.

Exact durations, easing curves, scroll-trigger thresholds, looping rules, and asset crops are implementation details to validate against the reference’s actual live presentation and Crystalign design approval.

## 7. Lead capture requirements

### Form fields

Required:
- Full name.
- Mobile number, with country code selection/default suitable for the event location.
- Consent checkbox for Crystalign to contact the visitor about their enquiry.

Recommended:
- Email address (optional unless the client requires it).
- City/location.
- Interest: personal treatment / parent or caregiver / dental professional / clinic partnership / other.
- Concern of interest (optional multi-select aligned to the five use cases).
- Preferred contact method/time (optional).
- Hidden source metadata: campaign/event, booth/QR identifier, landing page, timestamp, and UTM parameters.

Do not collect health records, photos, or detailed medical history in the exhibition lead form.

### Behavior

- Inline labels, clear required/optional status, country-code aware phone validation, and helpful field-level errors.
- Submit button has loading state and prevents duplicate submission.
- Success confirmation explains next step and expected response window only if Crystalign provides one.
- Failure state preserves entered values and offers retry or an alternate contact route.
- Consent text links to a Crystalign privacy notice; consent is not prechecked.
- Lead payload is sent over HTTPS to the approved endpoint and stored only in approved systems. Restrict access and define retention/deletion policy with the client.
- Include spam protection that does not obstruct booth use (honeypot/rate limit; CAPTCHA only if necessary).

## 8. Visual and brand requirements

- Use the Precisalign page as a visual reference for section order, generous spacing, card styling, CTA placement, rounded shapes, and editorial hierarchy.
- Keep the reference UI’s visual character, but all logos, colors, fonts, copy, icons, photography, videos, and product names must be replaced or licensed for Crystalign.
- Remove all identifiable Precisalign patients, staff, clinicians, and people photography. Do not reuse third-party assets without rights.
- Use approved Crystalign aligner/product photography, 3D dental models, scanner/printing visuals, abstract gradients, or simple vector illustrations.
- Do not reproduce competitor branding or make the finished page look affiliated with Precisalign.
- Use `Crystalign Aligners` as the displayed brand; confirm whether `crystalign.aligners` is the exact wordmark/social handle styling.

## 9. Functional requirements

- Responsive layout for desktop, tablet, mobile, and a large-format booth display.
- Sticky/anchor navigation with correct scroll offset and visible active section where feasible.
- All buttons, cards, tabs, sliders, accordions, and carousel controls work with keyboard and touch.
- CTA actions route to the form and optionally prefill interest.
- Contact links use `tel:` and `mailto:` only with client-approved details.
- Form data includes event/source attribution and has a clear success/failure result.
- Kiosk idle/reset mode can return to the hero after a configurable inactivity period, with a warning before reset; do not erase a lead during submission.
- QR code resolves to a mobile-optimized URL with event attribution.
- Analytics records page view, CTA clicks, section interactions, video starts/completions, and form starts/submissions without sending sensitive form fields to analytics.

## 10. Non-functional requirements

- Mobile-first, readable at arm’s length on booth screens; large touch targets (target at least 44 CSS px).
- Meet WCAG 2.2 AA as a target: contrast, focus visibility, labels, semantic headings, keyboard support, captions, and reduced motion.
- Optimize images/video, use responsive formats, lazy load below-fold media, and reserve media aspect ratios to prevent layout shifts.
- Provide stable behavior on current Chrome, Safari, Edge, Android Chrome, and iOS Safari.
- Handle network interruptions gracefully; booth device should have a tested offline fallback or locally available static content if connectivity is uncertain.
- No console errors or broken links in release acceptance.

## 11. Content and clinical governance

Crystalign must supply or approve:
- Correct brand kit, logo, color/font guidance, and product names.
- Accurate workflow and product descriptions.
- Supported conditions and suitability wording.
- Benefit/material claims and any statistics.
- Price/financing details if they will appear.
- Patient stories and consented images if desired.
- Testimonials and permissions.
- Contact details, privacy policy, consent wording, and lead response workflow.
- Event name, booth details, QR destinations, and event attribution labels.

Use cautious language such as “may help address” and “suitability is determined by a dental professional.” Do not imply every case is eligible or that results are guaranteed. A qualified Crystalign clinician should review all clinical copy before launch.

## 12. Acceptance criteria

1. The page follows the reference’s major section sequence and visual hierarchy while carrying Crystalign branding and approved content.
2. No Precisalign marks, contact details, placeholder copy, unlicensed assets, or identifiable people from the reference remain.
3. All five use-case controls update the selected state and associated content accessibly.
4. The six treatment steps are explorable by touch, keyboard, and pointer; selected detail is apparent.
5. All visible CTAs lead to the correct form or contact action.
6. Valid form submission reaches the approved destination with source/event attribution and produces a clear success state; invalid and failed submissions show actionable errors.
7. Videos are controllable, captioned when spoken, usable muted, and respect reduced-motion/data constraints.
8. Carousel/gallery and testimonial interactions have manual controls and keyboard access; auto-motion, if used, can be paused.
9. Responsive layouts work at agreed booth display and mobile dimensions without horizontal overflow.
10. Clinical claims, figures, testimonials, privacy text, and assets have documented Crystalign approval before production publication.
11. Kiosk reset and event QR flows are verified on the actual booth device before the event.

## 13. Risks and dependencies

- Brand and clinical assets may not be available before design/build; use clearly marked neutral placeholders until supplied.
- CRM/lead destination, privacy policy, consent language, and lead ownership must be agreed before form launch.
- Exhibition Wi-Fi may be unreliable; test cellular and offline/fallback behavior.
- Reference copy includes duplicated sections, zero-value counters, and placeholder product bullets/blog content; these must not be carried over.
- Case outcomes vary; legal/clinical review is required for condition descriptions and before/after presentation.
- A large booth screen can be viewed at a distance while visitors interact on mobile; test both contexts separately.

## 14. Open decisions

- Which Crystalign products/tiers should be displayed?
- What CRM, email, or database receives leads, and who follows up?
- Which event and campaign details should be encoded into the QR URL?
- Will booth visitors use a shared touchscreen, personal phones, or both?
- Are approved product, lab, clinical illustration, video, testimonial, and results assets available?
- Should the site show pricing, clinic locations, or a professional/clinic-partner path?
- What response-time promise can be made after a lead is submitted?

## 15. Reference analysis notes

The public page presents a long homepage with a phone header, hero, four benefit highlights, about/quality content, six-step process, five treatable cases, before/after results, trust/technology claims and metrics, three product cards, an exhibition gallery, repeated CTA, testimonials, blog/article area, and footer/contact links. Its crawler output repeats some sections and exposes zero counters, generic product bullets, and a default WordPress post; these are treated as content defects/placeholders, not requirements. The crawler confirms content labels but does not reveal exact responsive styling, video sources, transition durations, or animation choreography.

Source reviewed: [Precisalign homepage](https://precisalign.com/).
