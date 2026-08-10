# Work Card 03 — Core Behaviour

## Goal

Build the Tech Stack section and the Featured Projects section with accurate content, category filters, project cards, and working links.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `architecture.md`
- `design.md`
- `work-cards/02-first-visible-version.md`

## Files likely touched

- `src/App.jsx`
- `src/App.css`
- related existing React/CSS files

## Instructions for the coding agent

- Read `build-status.md`, `build-blueprint.md`, `architecture.md`, `design.md`, and this work card before editing.
- Add the Tech Stack section with grouped badges for:
  - Languages
  - ML & Data Science
  - Backend & APIs
  - Frontend & Web
  - DevOps & Deployment
- Use shields.io `style=for-the-badge` badges or custom styled badges if shields are visually noisy.
- Add all eight Featured Projects from `build-blueprint.md` with accurate names, descriptions, tech pills, category badges, GitHub links, and the rain project live demo link.
- Implement category filters: All, Full-Stack ML, Classification, NLP, Time Series, FinTech, Web App.
- Store the active filter in React state only.
- Give the Malaysian Hourly Rain Prediction System stronger flagship emphasis.
- Update `build-status.md` after verification.

## What not to do

- Do not use `localStorage`.
- Do not fetch GitHub repository data from a live API.
- Do not add backend, auth, database, secret keys, or external services beyond static image/badge/link URLs.
- Do not invent project metrics or additional projects.
- Do not add deep case-study pages.

## Done when

- Tech Stack is grouped and readable.
- All eight projects are present.
- Each project has accurate category, description, tech pills, and View Code link.
- Rain project includes the live demo link and listed metrics.
- Filters correctly show matching projects.
- The layout stays responsive.

## Verification steps

- Run `npm run dev`.
- Confirm each Tech Stack category and item from `build-blueprint.md` appears.
- Confirm all eight project cards appear under `All`.
- Click every filter and confirm only matching projects remain visible.
- Open or inspect GitHub links and confirm they follow `https://github.com/Bashar-ml-en/<repo>`.
- Confirm the rain prediction project has a working `Live Demo` link to `https://rain-today-prediction.vercel.app`.
- Check mobile width and confirm filters, badges, and cards wrap without horizontal overflow.
- Design check: tech badges, filter buttons, project cards, flagship emphasis, hover style, content rhythm, and mobile stacking follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- All Tech Stack categories and all eight projects are visible.
- Each category filter works: All, Full-Stack ML, Classification, NLP, Time Series, FinTech, Web App.
- Project cards and filter buttons are readable and not cut off on mobile.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after Tech Stack, Projects, filters, links, and responsive checks pass, then update `build-status.md`. Do not continue to Work Card 04 until the learner replies `continue`.

## Status

Completed
