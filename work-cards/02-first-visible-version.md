# Work Card 02 — First Visible Version

## Goal

Build the premium first-screen experience and core visible page layout so recruiters immediately understand Bashar's role and value.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `design.md`
- `work-cards/01-project-skeleton.md`

## Files likely touched

- `src/App.jsx`
- `src/App.css`
- related existing React/CSS files created in Work Card 01

## Instructions for the coding agent

- Read `build-status.md`, `build-blueprint.md`, `design.md`, and this work card before editing.
- Implement the Hero section with the confirmed content:
  - `Hi, I'm Bashar`
  - `Machine Learning Engineer & MLOps Practitioner`
  - typing phrases: `I build ML Pipelines`, `I build Real-Time Dashboards`, `I build Production APIs`
  - CTA: `View My Work ↓`
- Make the CTA scroll to the Featured Projects section.
- Add the premium dark glassmorphism background direction from `design.md`: deep-space background, cyan/blue accents, subtle gradient mesh or particle-like visual treatment.
- Build the About Me section with the confirmed bio and GitHub stats image.
- Add initial responsive layout rules for desktop, tablet, and mobile.
- Keep the page static and one-page.
- Update `build-status.md` after verification.

## What not to do

- Do not implement the full project data grid yet.
- Do not add project filtering yet.
- Do not add extra pages, routing, backend, auth, database, live API, or secrets.
- Do not invent new identity content or experience.
- Do not make animations so heavy that they hide the content or cause jank.

## Done when

- Hero section looks like the intended premium first screen.
- Hero CTA scrolls to the project section location.
- About Me section includes Bashar's confirmed bio.
- GitHub stats card appears and scales within the layout.
- Mobile first screen remains readable without horizontal overflow.

## Verification steps

- Run `npm run dev`.
- Confirm the hero heading, subtitle, typing line, and CTA are visible.
- Click `View My Work ↓` and confirm it moves to the Featured Projects area.
- Confirm the About Me bio is accurate and not invented.
- Confirm the GitHub stats image URL uses username `Bashar-ml-en`.
- Resize to mobile width and confirm the hero text and CTA are not cut off.
- Design check: hero/first-screen layout, visual mood, background treatment, CTA style, typography feel, and mobile first-screen behavior follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- The first screen looks premium, dark, and professional.
- The `View My Work ↓` button scrolls to the project area.
- The About Me bio and GitHub stats card are visible on desktop and mobile.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after Hero and About are verified and `build-status.md` is updated. Do not continue to Work Card 03 until the learner replies `continue`.

## Status

Completed
