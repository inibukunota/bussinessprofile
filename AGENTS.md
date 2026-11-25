# AGENTS.md

## Project purpose

This repository is an Astro-based professional services website for a Malaysia-focused business offering:

1. Translation, Editing & Writing
2. Financial Protection Solutions
3. Pusaka Management Planning

The site is intended to be deployed as a static Astro site on Cloudflare Pages.

The primary goal is to preserve the established visual identity and information architecture while keeping the implementation clean, semantic, fast and maintainable.

## Core migration rule

This project is a visual and structural migration, not a redesign.

Preserve the existing look and feel unless explicitly instructed otherwise.

Do not introduce:
- a new colour palette
- a new typography system
- excessive rounded cards
- gradients
- decorative animations
- generic SaaS-style UI
- unnecessary shadows
- excessive JavaScript
- a different visual hierarchy

Prefer semantic HTML, CSS and Astro components.

If a design decision is not documented here, inspect the existing components and global styles before inventing a new pattern.

---

# Design system

## Visual direction

The visual language is warm, editorial and document-oriented rather than corporate or technology-oriented.

The intended feeling is:

- trustworthy
- calm
- established
- thoughtful
- human
- practical
- slightly traditional without feeling old-fashioned

The visual concept combines documents, seals, inheritance and professional advice.

Avoid making the site feel like:
- a fintech landing page
- a generic insurance website
- a startup/SaaS template
- a luxury law firm template

## Colour palette

Use the existing CSS variables as the source of truth.

### Primary colours

- Ink: #1e2a38
- Soft ink: #45566b
- Parchment: #f7f2e7
- Parchment 2: #efe7d6
- Brass: #a97f3f
- Brass dark: #8a6530
- Sage: #4b6358
- Sage tint: #e7ede9
- Line: #dbcfb4
- White: #fffdf9
- Error: #a2402c

### Colour usage

Parchment is the primary page background.

Ink is the primary text colour and primary dark UI colour.

Soft ink is used for secondary text, descriptions and supporting information.

Parchment 2 is used for cards and secondary surfaces.

Brass is the principal accent.

Brass dark is used for darker accent states and hover states.

Sage is used for secondary accents, labels, breadcrumbs and supporting UI.

Sage tint is a subtle supporting background.

Line is used for borders and dividers.

White is used for clean surfaces such as icon/seal backgrounds.

Do not replace these colours with arbitrary framework defaults.

---

# Typography

## Font families

### Display

Fraunces, with Georgia as fallback.

Use for:
- major headings
- brand name
- service titles
- editorial-style headings

### Body

Inter, with -apple-system, BlinkMacSystemFont and Segoe UI as fallbacks.

Use for:
- body copy
- navigation
- buttons
- descriptions
- forms
- general UI

### Monospace / metadata

IBM Plex Mono, with SFMono-Regular and Consolas as fallbacks.

Use for:
- eyebrows
- labels
- breadcrumbs
- small metadata
- service CTA labels
- compact UI text

Do not introduce additional fonts unless explicitly required.

## Existing typography scale

Body:
- base size: 1rem
- line-height: 1.6

Buttons:
- font size: 0.95rem
- weight: 600

Breadcrumb:
- font size: 0.78rem

Section kicker:
- font size: 0.75rem
- letter spacing: 0.12em
- uppercase

Homepage eyebrow:
- font size: 0.78rem
- letter spacing: 0.14em
- uppercase

Homepage H1:
- clamp(1.9rem, 3.6vw, 2.75rem)
- line-height: 1.15
- weight: 600

Section H2:
- clamp(1.5rem, 2.6vw, 1.9rem)
- line-height: 1.2
- weight: 600

Service card H2:
- 1.25rem
- line-height: 1.25
- weight: 600

---

# Spacing and layout

## Container system

Primary content container:
- maximum width: 980px
- horizontal padding: clamp(1.25rem, 4vw, 3rem)

Narrow content container:
- maximum width: 760px
- horizontal padding: clamp(1.25rem, 4vw, 3rem)

Homepage container:
- maximum width: 1180px
- horizontal padding: clamp(1.25rem, 4vw, 3rem)

Do not make the content excessively wide.

The site should retain a relatively compact, editorial reading width.

## Responsive spacing

Use fluid spacing with clamp() where appropriate.

Existing patterns include:
- 1.25rem minimum horizontal spacing
- 3rem maximum horizontal spacing
- 1.5rem to 2rem component padding
- 2rem to 3rem section heading spacing
- 2rem to 2.75rem major homepage spacing

Avoid arbitrary one-off spacing values when an existing spacing pattern can be reused.

## Border radius

Primary radius: 6px.

The visual language is intentionally restrained.

Do not use large pill-shaped cards or excessive rounded corners.

Circular elements such as service seals and the brand mark are exceptions.

---

# Header

The header should remain minimal and editorial.

Current structure:
- brand on the left
- navigation on the right
- consultation CTA on the right
- bottom border divider

Desktop:
- padding: 1.25rem clamp(1.25rem, 4vw, 3rem)
- brand and navigation aligned horizontally

Brand:
- Fraunces
- weight 600
- size 1.15rem

Brand mark:
- 30px × 30px
- circular
- 1.5px brass border
- IBM Plex Mono
- approximately 0.7rem

Navigation:
- body font
- 0.95rem
- soft ink by default
- active state uses ink and brass bottom border

Consultation CTA:
- bordered
- compact
- square-ish 6px radius
- dark ink hover state

At widths below 900px, the existing design hides the standard navigation links.

At widths below 560px, header content may wrap.

Do not turn the header into a large mobile navigation system unless explicitly requested.

---

# Footer

Footer is deliberately simple.

Use:
- top border using Line colour
- 1.25rem vertical padding
- responsive horizontal padding matching the header
- small 0.82rem text
- soft ink

Desktop:
- copyright on the left
- navigation on the right

Mobile:
- stack content vertically
- align navigation to the left

---

# Buttons

Shared button styles use:
- font family: body
- font weight: 600
- font size: 0.95rem
- vertical padding: 0.85rem
- horizontal padding: 1.75rem
- radius: 6px
- inline-flex layout
- 0.5rem gap

Primary button:
- background: Ink
- text: White
- border: Ink

Primary hover:
- background: Brass dark
- border: Brass dark

Secondary button:
- transparent background
- Ink text
- Soft ink border

Secondary hover:
- White background
- Ink border

Keep buttons visually restrained.

---

# Cards

Service cards use:
- Parchment 2 background
- Line border
- 6px radius
- responsive padding
- vertical flex layout

Existing padding:
- vertical: clamp(1.5rem, 2.2vw, 2rem)
- horizontal: clamp(1.25rem, 2vw, 1.6rem)

Cards use a small amount of interaction:
- hover movement: translateY(-3px)
- border changes to Brass
- subtle shadow

Do not add heavy shadows or dramatic hover animations.

Service icon/seal:
- 52px × 52px
- circular
- 1.5px Brass border
- White background
- icon in Brass dark

---

# Homepage

The homepage is intentionally compact and centered.

Structure:
1. Hero
2. Service cards
3. CTA

Hero:
- centered
- maximum width: 44rem
- eyebrow above H1
- H1 followed by short supporting paragraph

Hero H1:
- clamp(1.9rem, 3.6vw, 2.75rem)

Hero paragraph:
- clamp(1rem, 1.3vw, 1.1rem)

Service grid:
- 3 equal columns on desktop
- clamp(1rem, 2vw, 1.5rem) gap
- stacked single column below 900px

The homepage is designed to roughly fill one viewport on desktop.

Do not turn the homepage into a long marketing landing page without explicit instruction.

---

# Service pages

There are three service areas.

### Translation

Slug: translation-editing-writing

Category: translation

### Financial Protection

Slug: financial-protection

Category: financial-protection

### Pusaka

Slug: pusaka-management

Category: pusaka

Service pages use reusable sections rather than completely independent page structures.

Existing service components include:
- ServiceHero
- ProblemSection
- ServiceFeatures
- ProcessSection
- WhyChooseUs
- FAQSection
- RelatedArticles
- ServiceCTA

Maintain this component-based approach.

---

# Content taxonomy

Services and article categories are intentionally aligned.

Use these exact category identifiers:
- translation
- financial-protection
- pusaka

Human-readable service labels:
- Translation, Editing & Writing
- Financial Protection Solutions
- Pusaka Management Planning

Do not create duplicate category names for the same service.

Article content should live under:

src/content/articles/

with category directories:
- translation/
- financial-protection/
- pusaka/

---

# Article design

Articles should remain editorial and readable.

Use the existing narrow content width where appropriate.

Prioritise:
- readable line length
- clear heading hierarchy
- generous vertical spacing
- strong metadata hierarchy
- restrained use of accent colours

Do not make articles look like product cards or sales landing pages.

---

# Motion

Motion is subtle.

Existing transition: 200ms ease.

Respect prefers-reduced-motion.

When reduced motion is requested, transitions should become effectively instantaneous.

Do not introduce scroll-triggered animations, parallax or excessive motion unless explicitly requested.

---

# Accessibility

Maintain:
- semantic HTML
- visible keyboard focus
- focus-visible states
- skip link
- accessible navigation labels
- meaningful heading hierarchy
- descriptive link text
- appropriate form labels

Existing focus outline:
- 2px
- Sage
- 3px offset

Do not remove focus states for visual reasons.

---

# Responsive behaviour

Primary breakpoint: 900px.

At 900px:
- service grid becomes one column
- standard navigation links are hidden

Secondary breakpoint: 560px.

At 560px:
- header may wrap
- footer stacks vertically
- mobile spacing should remain comfortable

Use fluid typography and spacing before adding additional breakpoints.

Avoid designing desktop and mobile as two unrelated experiences.

---

# CSS implementation rules

Use the existing CSS variables as the design-token source of truth.

Prefer:
- CSS custom properties
- scoped Astro styles
- semantic class names
- reusable components
- clamp() for fluid values

Avoid:
- inline style duplication
- arbitrary colour values
- arbitrary spacing values
- huge utility-class strings
- unnecessary CSS frameworks
- duplicated component styles

Component-specific styles should remain close to the component where practical.

Global design tokens belong in:

src/styles/global.css

---

# Astro architecture

Use Astro's static-first architecture.

Current intended structure:
- src/components/ for reusable UI
- src/layouts/ for page layouts
- src/pages/ for routes
- src/content/articles/ for editorial content
- src/config/site.ts for business/site configuration
- src/styles/global.css for global design tokens

Use Astro Content Layer / content collections for articles.

Prefer static generation.

Do not introduce a client-side framework unless there is a clear functional requirement.

---

# SEO and technical principles

The site should be:
- statically generated
- fast
- semantic
- crawlable
- accessible
- mobile friendly

Preserve clean URLs.

Page titles should follow the existing convention:

Page Title — Business Name

unless the page is the homepage.

Every indexable page should have:
- unique title
- unique meta description
- canonical URL
- appropriate heading structure
- Open Graph metadata where applicable

Implement appropriate structured data without inventing claims or business information.

---

# Content and business information

Business details are centralised in:

src/config/site.ts

Do not hard-code business contact details throughout components.

Keep these values configurable:
- business name
- email
- phone
- WhatsApp
- response time
- description
- booking URL
- enquiry endpoint
- social profiles

Replace placeholder values before production launch.

---

# External integrations

The current project uses:
- Google Calendar Appointment Schedule for consultation booking
- Google Apps Script for enquiry submission
- WhatsApp for direct contact

Do not replace these integrations with unnecessary backend infrastructure.

---

# Things to preserve

When modifying or rebuilding the site, preserve:

1. Warm parchment / ink / brass / sage palette.
2. Fraunces + Inter + IBM Plex Mono typography combination.
3. Compact editorial layout.
4. Restrained 6px border radius.
5. Thin borders rather than heavy shadows.
6. Brass circular seals/icons.
7. Minimal navigation and footer.
8. Three-service information architecture.
9. Service-to-article taxonomy relationship.
10. Static-first Astro architecture.
11. Accessible focus states.
12. Subtle motion only.

If there is a conflict between adding a new visual pattern and preserving this system, preserve the existing system unless the user explicitly asks for a redesign.
