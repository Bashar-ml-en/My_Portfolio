# Work Card 06 — GitHub Vercel Proof

## Goal

Prepare shipping proof for GitHub and Vercel, or record trainer-approved fallback proof if deployment is not available.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `work-cards/05-review-and-fix.md`
- `prompts/08-github-vercel-proof.md`

## Files likely touched

- `build-status.md`
- existing project config files only if needed for build/deploy proof

## Instructions for the coding agent

- Read `build-status.md`, `build-blueprint.md`, this work card, and `prompts/08-github-vercel-proof.md` before editing.
- Confirm the app builds successfully as a static site.
- Confirm GitHub and Vercel accounts are ready from Setup Gate.
- If the learner explicitly requests GitHub setup, commit, push, or Vercel deploy, follow the repo's Git/GitHub safety rules before doing so.
- If deployment is not completed in the current session, record honest fallback proof notes in `build-status.md`.
- Do not create secrets or add unnecessary configuration.
- Since this is a single-page app without React Router, do not add `vercel.json` unless a real routing fallback is needed.
- Update `build-status.md` with final proof status.

## What not to do

- Do not deploy without learner permission.
- Do not commit or push unless explicitly requested.
- Do not initialize Git unless the learner asks and the setup is ready.
- Do not add backend, auth, database, live API, or secrets.
- Do not claim deployment succeeded unless it actually did.

## Done when

- Production build succeeds.
- GitHub/Vercel readiness or fallback proof is recorded.
- Final status is clear in `build-status.md`.

## Verification steps

- Run the production build command, usually `npm run build`.
- If available, preview the production build locally using the project's preview command.
- Confirm the built page still shows the five sections.
- Confirm no backend, database, or secret configuration was added.
- Design check: production build still presents the portfolio according to `design.md` and does not lose styling or responsive behavior.

## Localhost test before continuing

After this card, the learner should test:

- The production build succeeds without errors.
- The preview or deployed page shows the full portfolio correctly.
- GitHub/Vercel proof or fallback proof is recorded honestly.

If all tests pass, reply `done`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after proof is recorded. Do not add new features or continue beyond the approved KDBM Lite loop.

## Status

Completed
