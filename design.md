# Design Direction

## Design Inspiration URL

No `designmd.ai` URL was used. The learner confirmed the Master Build Prompt as the design inspiration.

Inspiration source: premium dark glassmorphism developer portfolio for Bashar, focused on machine learning engineer job fit.

## What We Borrow

- Premium dark glassmorphism visual language.
- Deep space background with subtle cyan and blue energy.
- Full-viewport hero that immediately states Bashar's name, role, and value.
- Smooth scroll-snap feeling between major sections without hurting usability.
- Animated typing line in the hero with these phrases:
  - "I build ML Pipelines"
  - "I build Real-Time Dashboards"
  - "I build Production APIs"
- Glassmorphic project cards with subtle glow borders on hover.
- Grouped badge grid for technical skills.
- Filterable project grid that helps recruiters scan Bashar's work quickly.
- Clean recruiter-focused content hierarchy: who Bashar is, what he can build, what projects prove it, and how to contact him.

## What We Do Not Copy

- No copied brand, logo, layout identity, private content, or third-party portfolio identity.
- No fake testimonials.
- No invented job experience.
- No fabricated project metrics beyond the listed project metrics.
- No stock claims like "world-class" or "trusted by companies" unless Bashar provides proof.
- No extra pages or case-study routes in version one.

## Visual Mood

The site should feel premium, technical, focused, and recruiter-ready.

Mood words:

- Deep-space
- Professional
- High-signal
- Confident
- Futuristic but readable
- Machine-learning oriented

The design should avoid looking like a generic template. It should feel like a polished ML engineer portfolio with strong project evidence.

## Layout Rules

- Use one page with sections in this exact order:
  1. Hero
  2. About Me
  3. Tech Stack
  4. Featured Projects
  5. Contact / Footer
- Hero occupies the first full viewport on desktop when practical.
- Hero first screen includes:
  - large heading: "Hi, I'm Bashar"
  - subtitle: "Machine Learning Engineer & MLOps Practitioner"
  - animated typing line
  - primary CTA: "View My Work ↓"
  - subtle animated gradient mesh or particle-like background
- About section pairs the bio with the GitHub stats card image.
- Tech Stack section uses grouped badge rows or grids with clear category labels.
- Featured Projects section uses category filter buttons above the project grid.
- Project cards must show title, category badge, description, tech pills, GitHub link, and optional live demo link.
- The flagship rain prediction project should receive stronger visual emphasis than the other cards.
- Contact/Footer section should keep the final action simple: GitHub profile and the confirmed public email `abulithbisha@gmail.com`.

## Color / Contrast Rules

- Main background: `#07080f`.
- Primary cyan accent: `#00f2fe`.
- Secondary blue accent: `#4facfe`.
- Use white or near-white text for main headings.
- Use muted blue-gray text for secondary copy, but keep contrast readable on dark backgrounds.
- Glass cards use translucent dark surfaces with border `rgba(255,255,255,0.07)`.
- Hover glow may use cyan/blue shadows but must not overpower text readability.
- Avoid low-contrast gray text on glass panels.
- Do not use too many accent colors; cyan and blue are the signature colors.

## Typography Feel

- Headings: `Space Grotesk` from Google Fonts.
- Body text: `Outfit` from Google Fonts.
- Headings should feel bold, technical, and premium.
- Body text should be clean, modern, and easy to scan.
- Use large hero type on desktop and carefully scaled type on mobile.
- Avoid long line lengths in paragraphs.

## Component Style

- Cards: glassmorphic with `backdrop-filter: blur(24px)`, subtle border, rounded corners, and soft internal highlight.
- Project cards: hover scale transform and glow border, but keep motion subtle.
- Buttons: pill-shaped or rounded glowing buttons with cyan/blue gradients.
- CTA: the primary hero CTA should be visually stronger than secondary links.
- Tech badges: shields.io `style=for-the-badge` badges or custom badge pills if shields become visually noisy.
- Project tech pills: smaller custom pills for compact scanning.
- Category buttons: active state should be obvious through filled gradient, glow, or brighter border.
- GitHub stats card: use the provided image URL and present it inside or near a glass panel.
- Scrollbar: thin, rounded, with cyan/blue accent styling.

## Mobile Rules

- Mobile first screen must show Bashar's name, role, typing line, and CTA without requiring awkward horizontal scrolling.
- Sections stack vertically on small screens.
- Project cards become one column on mobile.
- Tech badge groups wrap cleanly and remain readable.
- Filter buttons wrap into multiple rows if needed.
- GitHub stats image must scale within the viewport.
- Hover-only effects must not be required for understanding content.
- Touch targets for buttons and links should be comfortable.
- Avoid fixed elements that cover content on small screens.

## Accessibility Basics

- Use semantic section structure and meaningful headings.
- Buttons and links must have clear text labels.
- Maintain strong color contrast on dark backgrounds.
- Do not rely only on color to show active filter state.
- Respect reduced-motion users where practical by keeping animations subtle and non-blocking.
- All external links should be obvious and keyboard-accessible.
- Images and embeds should have useful alt text.

## Anti-Slop Rules

- No fake logos.
- No fake testimonials.
- No fake stats unless clearly marked sample.
- No "lorem ipsum" in final proof.
- One clear primary action.
- Readable on phone width.
- No invented metrics, projects, employers, certificates, or experience.
- Do not overfill the hero with buzzwords.
- Do not hide important recruiter content behind complex animations.
- Do not make the design look like a generic SaaS landing page unrelated to Bashar's ML work.

## Design Verification Checklist

- Hero clearly says "Hi, I'm Bashar" and "Machine Learning Engineer & MLOps Practitioner".
- The first screen has one obvious "View My Work ↓" CTA.
- Bio uses the confirmed Bashar bio.
- GitHub stats card uses `https://github-readme-stats.vercel.app/api?username=Bashar-ml-en&show_icons=true&theme=tokyonight`.
- Tech stack is grouped by category.
- Featured Projects section includes all eight listed projects.
- Rain Prediction project is visually identifiable as the flagship project.
- Project filter buttons include All, Full-Stack ML, Classification, NLP, Time Series, FinTech, and Web App.
- Contact section uses GitHub profile and the confirmed public email `abulithbisha@gmail.com`.
- Desktop, tablet, and mobile layouts remain readable.
- Styling uses deep-space dark, cyan, and blue as the main palette.
- The result does not copy a third-party brand or visual identity.
