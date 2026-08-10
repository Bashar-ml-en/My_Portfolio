# Work Card 04 — Polish And Contact

## Goal

Complete the Contact/Footer section and polish the one-page portfolio so it feels premium, responsive, and recruiter-ready.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `design.md`
- `work-cards/03-core-behaviour.md`

## Files likely touched

- `src/App.jsx`
- `src/App.css`
- related existing React/CSS files

## Instructions for the coding agent

- Read `build-status.md`, `build-blueprint.md`, `design.md`, and this work card before editing.
- Build the Contact/Footer section with:
  - GitHub profile link: `https://github.com/Bashar-ml-en`
  - public email link: `mailto:abulithbisha@gmail.com`
  - footer credit for Bashar
- Improve responsive polish across all sections.
- Add or refine smooth scroll behavior.
- Add or refine scroll reveal animations using Intersection Observer if useful.
- Add custom scrollbar styling matching cyan/blue accent colors.
- Tighten spacing, contrast, card hover effects, and mobile wrapping.
- Keep all content truthful and aligned with `build-blueprint.md`.
- Update `build-status.md` after verification.

## What not to do

- Do not add new sections beyond the approved one-page structure.
- Do not add a contact form that pretends to submit anywhere.
- Do not add backend, database, auth, payments, live API, or secrets.
- Do not add testimonials, logos, or unverified claims.
- Do not add heavy animation that hurts readability.

## Done when

- Contact/Footer is complete and accurate.
- GitHub and email links are visible and usable.
- Visual polish matches the premium glassmorphism direction.
- Mobile, tablet, and desktop layouts are clean.
- No content is cut off or hidden behind effects.

## Verification steps

- Run `npm run dev`.
- Confirm Contact/Footer shows GitHub and `abulithbisha@gmail.com`.
- Click the email link and confirm it uses `mailto:abulithbisha@gmail.com`.
- Confirm smooth scrolling works between sections.
- Check desktop, tablet, and mobile widths for overflow or cramped content.
- Confirm text contrast remains readable on all glass panels.
- Design check: contact action, footer, scroll behavior, card polish, custom scrollbar, color contrast, and mobile layout follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- GitHub and email contact links are visible and correct.
- The site feels polished, premium, and professional on desktop.
- The full page is readable on mobile with no horizontal scrolling.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after Contact/Footer and polish verification pass, then update `build-status.md`. Do not continue to Work Card 05 until the learner replies `continue`.

## Status

Completed
