# Anchor Digital Solutions — Complete Agency Website

## Goal
Rebuild the current site into a polished multi-page agency experience that clearly presents Anchor’s three offers—website development, digital marketing, and practical AI automation—and directs qualified prospects toward consultation, WhatsApp, or a detailed enquiry.

## Pages and visitor journey
- Rebuild Home with the selected corporate-modern graphite, off-white, and teal direction: a clear “Build. Grow. Automate.” opening, service overview, recognizable business problems, automation demonstrations, process, selected concepts, trust points, and final enquiry prompt.
- Expand Services and create dedicated pages for Website Design & Development, Digital Marketing, and AI Automation, each with relevant deliverables, process, package preview, and CTA.
- Rebuild Pricing with centrally configurable “From KES…” values, three categories, concise comparison tables, scope caveats, and consultation guidance.
- Rebuild Portfolio around six honest Demo Projects and add a reusable detail route/template driven by structured project data; never generate a project URL where none exists.
- Rebuild About, add FAQ, Contact, Privacy Policy, and Terms & Conditions pages.
- Keep the visitor path consistent: understand Anchor → identify a problem → inspect solutions and demonstrations → compare pricing → enquire.

## Brand and interface
- Use the newly uploaded official logo exactly as supplied, preserving its proportions in the sticky header and footer; derive only the favicon and sharing artwork from that same brand asset.
- Apply the selected corporate-modern system: graphite surfaces, warm off-white backgrounds, restrained teal accents, Instrument Serif headings, Work Sans body copy, modular grids, subtle borders, controlled shadows, and limited motion.
- Build a responsive header with desktop navigation, accessible mobile drawer, consultation CTA, and discreet WhatsApp access.
- Use reusable page sections and controls for headings, service cards, pricing cards, comparison tables, project cards/details, automation workflows, FAQs, CTAs, social links, and the enquiry form.
- Maintain keyboard access, visible focus states, semantic landmarks, useful image text, reduced-motion support, and no horizontal overflow.

## Content and configuration
- Centralize business details, WhatsApp, email, booking, social, Google Business Profile, analytics placeholders, budget bands, and all package prices.
- Preserve the verified WhatsApp number and configured business email. Unprovided social, booking, and Google profile URLs remain inactive configuration values and will not render as fake links.
- Use conservative editable starting prices in one configuration because price questions were skipped; clearly label every amount “From” and explain scope-dependent final pricing.
- Structure portfolio records with title, slug, industry, category, description, services, features, technologies, image, URL, demo status, and featured status.
- Add only factual positioning. No invented clients, testimonials, results, team size, history, credentials, awards, or social statistics.

## Enquiry and automation readiness
- Build the full validated contact form with all requested fields and configurable budget options.
- Because this project must remain static, submit enquiries through a clearly disclosed WhatsApp handoff using the configured number rather than pretending a CRM/database capture succeeded.
- Represent the future lead pipeline and automation sequence as an explicitly labeled Demo / Concept; prepare a typed lead payload and analytics hooks so a real CRM, notifications, acknowledgements, categorization, and follow-up can be connected later.
- Route consultation buttons to Contact until a real booking URL is supplied.

## SEO and sharing
- Add route-specific titles, descriptions, self-referencing canonicals, Open Graph fields, and appropriate structured data using client-side head management, while retaining accurate sitewide static fallbacks.
- Create/update sitemap and robots files for all public routes using the known Anchor domain, with no synthetic last-modified dates.
- Create a branded 1200×630 sharing image based on the official logo without testimonials or client imagery.
- Add analytics-ready event hooks for form submission, WhatsApp, booking, phone, and email interactions without inventing tracking IDs.

## Validation
- Verify desktop, tablet, and mobile layouts; logo proportions; sticky navigation and mobile drawer; every internal route and CTA; external demo links; form validation and WhatsApp handoff; package comparisons; demo labeling; metadata, sitemap, robots, favicon, and sharing image.
- Check for broken images, missing routes, placeholder copy, unsupported claims, horizontal scrolling, and browser console errors.
- Run the project’s existing automated tests after implementation and visually inspect key pages in the live preview.

## Technical details
- Continue with React, TypeScript, React Router, Tailwind, and existing design components; no server, authentication, database, or secret credentials.
- Add route metadata support and a small typed content/config layer; keep page modules focused and reusable.
- Keep Netlify’s existing SPA fallback and add the complementary public redirect file requested previously.
- The static architecture can demonstrate the intended CRM pipeline but cannot honestly store leads or trigger private notifications until a backend/CRM is connected.
