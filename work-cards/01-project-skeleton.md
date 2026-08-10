# Work Card 01 — Project Skeleton

## Goal

Create the Vite + React project skeleton and show the first minimal portfolio shell in the browser.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `project-brief.md`
- `architecture.md`
- `design.md`

## Files likely touched

- `package.json`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/App.css`
- optional Vite default files that are created by the scaffold command

## Instructions for the coding agent

- Read `build-status.md`, `build-blueprint.md`, and this work card before editing.
- Scaffold a Vite + React app in this project folder.
- Keep styling plain CSS.
- Remove default Vite demo content that does not belong to Bashar's portfolio.
- Create a simple single-page shell with semantic sections for Hero, About Me, Tech Stack, Featured Projects, and Contact/Footer.
- Add the confirmed project identity: Bashar, Machine Learning Engineer & MLOps Practitioner, Malaysia, GitHub, and public email.
- Add basic dark theme tokens matching `design.md` without trying to finish the premium polish yet.
- Make sure the app starts locally with `npm run dev`.
- Update `build-status.md` after verification.

## What not to do

- Do not build the full final design in this card.
- Do not implement project filtering yet.
- Do not add backend, auth, database, API keys, payments, or live API integration.
- Do not add Tailwind or styling frameworks.
- Do not add fake projects, fake stats, fake testimonials, or fake logos.
- Do not create extra pages.

## Done when

- Vite + React app exists and starts locally.
- The page shows a basic Bashar portfolio shell.
- All five planned sections exist as visible placeholders or simple content blocks.
- No source content contradicts `build-blueprint.md`.

## Verification steps

- Run `npm run dev`.
- Open the local URL shown by Vite.
- Confirm the page loads without runtime errors.
- Confirm the visible page names Bashar and the ML Engineer role.
- Confirm the five section anchors or blocks exist: Hero, About Me, Tech Stack, Featured Projects, Contact/Footer.
- Design check: base background, typography direction, spacing, CTA presence, and mobile readability should start following `design.md`, even if full polish comes later.

## Localhost test before continuing

After this card, the learner should test:

- The development server starts with `npm run dev`.
- The app shell loads in the browser and does not show the default Vite starter page.
- Bashar's name, role, GitHub, public email, and the five planned sections are visible.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the skeleton runs locally, verification is complete, and `build-status.md` is updated. Do not continue to Work Card 02 until the learner replies `continue`.

## Status

Completed
