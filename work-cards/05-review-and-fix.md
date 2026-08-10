# Work Card 05 — Review And Fix

## Goal

Run a focused review mirror against the finished one-page portfolio and make only the single smallest useful fix.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `design.md`
- `work-cards/04-save-or-polish.md`
- `prompts/07-review-mirror.md`

## Files likely touched

- Existing app files only if the review finds one clear fix
- `build-status.md`

## Instructions for the coding agent

- Read `build-status.md`, `build-blueprint.md`, `design.md`, this work card, and `prompts/07-review-mirror.md` before editing.
- Review the portfolio for the risks listed in `build-blueprint.md`:
  - missing section
  - inaccurate content
  - broken GitHub or live demo links
  - filters not matching displayed projects
  - mobile overflow
  - low contrast
  - animations hiding recruiter content
  - fabricated claims
  - accidental backend/auth/database/API dependency
- If one clear issue exists, make the single smallest useful fix.
- If no clear issue exists, do not make unnecessary changes.
- Run verification again.
- Update `build-status.md` after verification.

## What not to do

- Do not redesign the site.
- Do not add new features.
- Do not make multiple speculative fixes.
- Do not add backend, auth, database, API, secrets, fake metrics, testimonials, or logos.
- Do not jump to deployment work.

## Done when

- Review findings are checked.
- At most one smallest useful fix is made.
- The app still runs locally.
- Build-status records the review result.

## Verification steps

- Run `npm run dev` for local visual check.
- Run the available production build command, usually `npm run build`.
- Confirm all five sections are present.
- Confirm filters and links still work.
- Confirm mobile layout has no obvious overflow.
- Design check: the final reviewed page still follows `design.md` mood, section rhythm, cards, CTA style, accessibility basics, and anti-slop rules.

## Localhost test before continuing

After this card, the learner should test:

- The reviewed site still loads locally.
- The one smallest fix, if any, improved the site without changing scope.
- The production build command succeeds.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after review, smallest useful fix if needed, verification, and `build-status.md` update. Do not continue to Work Card 06 until the learner replies `continue`.

## Status

Completed
