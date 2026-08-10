# Architecture

## Build Shape

Content-led site.

This is a single-page professional developer portfolio for Bashar, a Machine Learning Engineer and MLOps practitioner based in Malaysia. The main user action is reading, scanning projects, judging job fit, and clicking a contact or GitHub link.

## Stack Decision

- Vite
- React
- Plain CSS
- Static build only
- No server-side rendering
- Deployable later to Vercel or GitHub Pages

No backend, authentication, database, payments, secret keys, or live API integration are part of version one.

## Structure Overview

The one-page site will use smooth in-page navigation and this section order:

1. Hero
2. About Me
3. Tech Stack
4. Featured Projects
5. Contact / Footer

The page should feel like a premium dark glassmorphism portfolio, not a plain resume page. The structure must stay readable for recruiters and hiring managers on desktop, tablet, and mobile.

## Component Map

- `HeroSection`: full viewport intro with animated headline, subtitle, typing phrases, call-to-action button, and animated background treatment.
- `AboutSection`: professional bio and GitHub stats card embed.
- `TechStackSection`: grouped skill badge grids by category.
- `ProjectsSection`: filterable project grid with category buttons and glassmorphic project cards.
- `ProjectCard`: title, category badge, description, metric highlights when available, tech pills, GitHub link, and optional live demo link.
- `ContactFooter`: GitHub profile link, public email link, and footer credit.
- `ScrollReveal`: reusable scroll reveal behavior can be handled with Intersection Observer if useful during implementation.

## Data / State Model

All content is static front-end data held in React constants or simple arrays.

### Developer Identity

- Name: Bashar
- Title: Machine Learning Engineer & MLOps Practitioner
- Location: Malaysia
- GitHub: `https://github.com/Bashar-ml-en`
- Public email: `abulithbisha@gmail.com`
- Bio: "I build end-to-end machine learning systems — from raw data ingestion and model training to production-grade APIs and interactive dashboards. I specialize in predictive modeling, time-series forecasting, NLP sentiment analysis, and full-stack MLOps pipelines."

### Tech Stack Groups

- Languages: Python, JavaScript, TypeScript, SQL
- ML & Data Science: Scikit-Learn, Pandas, NumPy, Pandera, MLflow, ARIMA, Random Forest, Logistic Regression, TF-IDF, LinearSVC
- Backend & APIs: FastAPI, Uvicorn, SQLite, REST APIs
- Frontend & Web: React, Vite, HTML5, CSS3, Glassmorphism, SVG Data Visualization
- DevOps & Deployment: Git, GitHub Actions, Vercel, Render, Docker (familiar)

### Featured Projects

- Malaysian Hourly Rain Prediction System: flagship full-stack ML system with GitHub repo `RainToday-Prediction` and live demo `https://rain-today-prediction.vercel.app`.
- Iris-Diabetes AI Diagnostic System: healthcare ML pipeline with repo `Iris-Diabetes-AI-system-`.
- KSIS-TEAPS: full-stack TypeScript application with repo `KSIS-TEAPS`.
- Titanic Survival Prediction: classification pipeline with repo `Taitanic-Survival-Prediction-`.
- Amazon Sentiment Analysis: NLP text analytics pipeline with repo `Amazon-Sentiment-Analysis-`.
- Sales Trend Forecasting Analysis: ARIMA time-series forecasting project with repo `Salse_Trend_Forcasting_Analysis-`.
- Credit Scoring Classification Model: FinTech ML classification project with repo `CodeAlpha_Credit_Scoring.Classification-model`.
- Event Management System: full-stack event management app with repo `event-management-system`.

### Project Filters

- All
- Full-Stack ML
- Classification
- NLP
- Time Series
- FinTech
- Web App

## Storage Logic

No browser storage is needed for this content-led site.

Project filter state may exist only in React component state during the session. It does not need `localStorage`.

## User Flow

1. Visitor lands on the Hero section and understands Bashar's role immediately.
2. Visitor clicks `View My Work` or scrolls to see the portfolio sections.
3. Visitor reads the About section and sees GitHub stats.
4. Visitor scans grouped technical skills.
5. Visitor filters or browses featured projects.
6. Visitor opens GitHub repositories or the live demo for the flagship rain prediction project.
7. Visitor reaches Contact/Footer and uses GitHub or `abulithbisha@gmail.com` to contact Bashar.

## File Expectations

During implementation, the app can be kept simple:

- Main React entry file for rendering the page.
- Main CSS file for layout, glassmorphism, responsive behavior, animations, and theme.
- Static arrays for skills and projects.
- Optional `vercel.json` only if routing fallback is needed later. Since this is a single static page without React Router, it is not required for version one.

No implementation files should be created during planning.

## Constraints

- Single-page or very small content-led site scope.
- Must remain static and deploy-ready.
- Must be responsive for desktop, tablet, and mobile.
- Must use honest portfolio claims and project details.
- Must not require backend services or secret environment variables.
- GitHub stats embed is allowed as an external image URL.
- Shields.io badges are allowed as external image URLs or can be replaced with styled text badges if needed.

## Technical Non-Goals

- No login or authentication.
- No database.
- No backend API.
- No payment flow.
- No admin dashboard.
- No multi-user behavior.
- No real-time data updates.
- No package installation during planning.

## Verification Notes

Implementation verification later should check:

- The site runs locally after the app is scaffolded in the Build phase.
- Hero, About, Tech Stack, Featured Projects, and Contact/Footer sections are present.
- Project filters work for all categories.
- GitHub links point to `https://github.com/Bashar-ml-en/<repo>`.
- The live demo button appears for the rain prediction project.
- Layout works on mobile, tablet, and desktop.
- The site remains static and deployable to Vercel or GitHub Pages.
