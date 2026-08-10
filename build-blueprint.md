# Build Blueprint

## Source Files

This blueprint combines the confirmed planning files:

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-status.md`

The chat is not the source of truth. These files are the source of truth.

## Project Identity

- Project name: Machine Learning Engineer Portfolio
- Owner: Bashar
- Public email: `abulithbisha@gmail.com`
- GitHub: `https://github.com/Bashar-ml-en`
- Location: Malaysia
- Role: Machine Learning Engineer & MLOps Practitioner

One-sentence concept: a powerful professional one-page portfolio that helps hiring managers and recruiters quickly see Bashar's machine learning skills, project work, and fit for machine learning engineer roles.

Bio:

> I build end-to-end machine learning systems — from raw data ingestion and model training to production-grade APIs and interactive dashboards. I specialize in predictive modeling, time-series forecasting, NLP sentiment analysis, and full-stack MLOps pipelines.

## Build Shape

Content-led site.

The main value is reading, navigating, and evaluating portfolio content. The site does not create, save, or sync user data.

## Version-One Promise

Version one will be a premium, professional, one-page portfolio that lets recruiters and hiring managers understand Bashar's ML engineering fit in under two minutes.

It must include:

- Hero section
- About Me section
- Tech Stack section
- Featured Projects section
- Contact / Footer section
- Clear project links
- Clear contact action
- Responsive mobile-first layout

## Scope Lock

### Now

- Build one powerful professional one-page portfolio.
- Focus the message on ML Engineer job fit.
- Show skills and projects clearly.
- Include one clear contact path through GitHub and `abulithbisha@gmail.com`.
- Use static front-end content only.
- Keep project filter state in React state only.

### Later

- Add additional pages.
- Add deep-dive project case studies.
- Add a blog.
- Add downloadable resume.
- Add live demo embeds beyond simple links.

### Never

- No login.
- No payments.
- No database.
- No backend.
- No live API integration.
- No admin system.
- No hidden complex features.
- No fabricated metrics, testimonials, projects, employers, or experience.
- No multi-page scope creep for version one.

## Architecture Summary

Stack:

- Vite
- React
- Plain CSS
- Static build
- No server-side rendering

Page sections in order:

1. Hero
2. About Me
3. Tech Stack
4. Featured Projects
5. Contact / Footer

Main components expected during implementation:

- `HeroSection`
- `AboutSection`
- `TechStackSection`
- `ProjectsSection`
- `ProjectCard`
- `ContactFooter`

Optional behavior:

- Intersection Observer for scroll reveal animations.
- Typing effect in the hero.
- Project filter buttons using React state.

## Data / State / Storage Rules

All content is static front-end data.

No `localStorage`, backend, database, API key, or secret is needed.

Temporary UI state allowed:

- active project filter
- typing effect phrase index
- scroll reveal visibility state if needed

Developer identity data:

- Name: Bashar
- Title: Machine Learning Engineer & MLOps Practitioner
- Location: Malaysia
- GitHub: `https://github.com/Bashar-ml-en`
- Public email: `abulithbisha@gmail.com`

Tech stack groups:

- Languages: Python, JavaScript, TypeScript, SQL
- ML & Data Science: Scikit-Learn, Pandas, NumPy, Pandera, MLflow, ARIMA, Random Forest, Logistic Regression, TF-IDF, LinearSVC
- Backend & APIs: FastAPI, Uvicorn, SQLite, REST APIs
- Frontend & Web: React, Vite, HTML5, CSS3, Glassmorphism, SVG Data Visualization
- DevOps & Deployment: Git, GitHub Actions, Vercel, Render, Docker (familiar)

Project filters:

- All
- Full-Stack ML
- Classification
- NLP
- Time Series
- FinTech
- Web App

Featured projects:

- Malaysian Hourly Rain Prediction System: repo `RainToday-Prediction`, live demo `https://rain-today-prediction.vercel.app`, category Full-Stack ML System, flagship metrics F1-Score 77.23%, Accuracy 83.15%, ROC-AUC 88.33%.
- Iris-Diabetes AI Diagnostic System: repo `Iris-Diabetes-AI-system-`, category Healthcare ML.
- KSIS-TEAPS: repo `KSIS-TEAPS`, category Full-Stack Application.
- Titanic Survival Prediction: repo `Taitanic-Survival-Prediction-`, category Classification.
- Amazon Sentiment Analysis: repo `Amazon-Sentiment-Analysis-`, category NLP & Text Analytics.
- Sales Trend Forecasting Analysis: repo `Salse_Trend_Forcasting_Analysis-`, category Time Series Forecasting.
- Credit Scoring Classification Model: repo `CodeAlpha_Credit_Scoring.Classification-model`, category FinTech ML.
- Event Management System: repo `event-management-system`, category Web Application.

GitHub links should use this pattern:

`https://github.com/Bashar-ml-en/<repo>`

## Design Direction Summary

Borrow from the confirmed design inspiration:

- Premium dark glassmorphism.
- Deep-space background `#07080f`.
- Cyan `#00f2fe` and blue `#4facfe` accents.
- `Space Grotesk` headings.
- `Outfit` body text.
- Full-viewport hero when practical.
- Animated hero typing line.
- Subtle animated background gradient mesh or particles.
- Glass cards with `backdrop-filter: blur(24px)` and border `rgba(255,255,255,0.07)`.
- Hover glow on project cards.
- Smooth scroll reveal animations.
- Thin rounded custom scrollbar with accent color.

Do not copy:

- third-party brands
- fake logos
- testimonials
- invented stats
- invented experience
- exact identity from another portfolio
- generic SaaS landing page patterns that hide the ML portfolio story

Hero requirements:

- Heading: `Hi, I'm Bashar`
- Subtitle: `Machine Learning Engineer & MLOps Practitioner`
- Typing phrases: `I build ML Pipelines`, `I build Real-Time Dashboards`, `I build Production APIs`
- CTA: `View My Work ↓`, scrolling to Projects

About requirements:

- Use confirmed bio exactly or with only light grammar-preserving formatting.
- Include GitHub stats image: `https://github-readme-stats.vercel.app/api?username=Bashar-ml-en&show_icons=true&theme=tokyonight`

Project requirements:

- Filterable grid.
- Category buttons: All, Full-Stack ML, Classification, NLP, Time Series, FinTech, Web App.
- Each card has title, description, tech pills, category badge, View Code button, and optional Live Demo button.
- Flagship rain project should have stronger emphasis.

Contact requirements:

- GitHub profile link.
- Email link for `abulithbisha@gmail.com`.
- Footer text may say `Built with love by Bashar` or `Built by Bashar`. Avoid emoji if implementation style keeps files ASCII-only.

## Implementation Rules

- Implement only after the learner says `Start Work Card 01`.
- Planning phase may edit markdown planning files only.
- Keep the site static.
- Use Vite + React unless a work card explicitly changes the stack.
- Use plain CSS only.
- Do not add Tailwind or other styling frameworks.
- Do not add React Router unless a later approved change requires routes.
- Do not add `vercel.json` unless routing fallback is actually needed.
- Do not install packages during planning.
- Keep content truthful to the blueprint.
- Use honest placeholders only if a future missing value appears.

## File and Folder Expectations

Expected implementation files after build begins:

- `package.json`
- `index.html`
- `src/main.jsx` or equivalent Vite React entry
- `src/App.jsx` or equivalent main app component
- `src/App.css` or equivalent CSS file
- optional `src/assets/` only if needed for local assets

No source files should be created before Work Card 01 starts.

## Work Card Plan

Generate small implementation work cards in this order:

1. Scaffold Vite React app and baseline static page shell.
2. Build the Hero section with premium dark background, CTA, and typing effect.
3. Build About Me and Tech Stack sections with confirmed content and responsive badge groups.
4. Build Featured Projects data, project cards, category filters, GitHub links, and flagship emphasis.
5. Build Contact/Footer and responsive polish.
6. Run verification, fix the smallest useful issue, and prepare proof notes.

Each work card must include:

- goal
- allowed files
- specific tasks
- verification steps
- stop condition

## Review Mirror

After the work cards are implemented, review against these risks:

- missing section
- inaccurate content
- broken GitHub or live demo links
- filters not matching the displayed projects
- mobile overflow
- low contrast on dark glass panels
- animations that hide or delay important recruiter content
- fabricated metrics or claims
- accidental backend, auth, database, or API dependency

The review should make only the single smallest useful fix unless the learner approves more.

## Proof Ladder

Proof levels:

1. Local proof: site runs locally and all sections are visible.
2. Functional proof: project filters work and links are correct.
3. Responsive proof: desktop, tablet, and mobile layouts are readable.
4. Build proof: static production build succeeds.
5. Ship proof: GitHub and Vercel deployment if available, or trainer-approved fallback proof.

## 60-Second Explanation Template

Use this template when explaining the project:

"This is my one-page Machine Learning Engineer portfolio. It is built to help recruiters quickly understand my skills, my strongest ML projects, and how to contact me. The page starts with my role and value, then shows my bio, technical stack, and a filtered project grid. My flagship project is the Malaysian Hourly Rain Prediction System, which demonstrates an end-to-end ML system from model training to API and dashboard. The site is static, responsive, and deployable to Vercel."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing.
- Implement only the current work card.
- Do not jump ahead.
- Stop after verification.
- Update `build-status.md` after each work card.
- Do not add backend, auth, database, payment, live API, or secrets.
- Do not add keys or private credentials to code.
- Do not invent claims, testimonials, logos, employers, certificates, projects, or real numbers.
- Apply the content-led site guardrails.
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping.
- Keep version one to one page.
- Do not implement before the learner says `Start Work Card 01`.
