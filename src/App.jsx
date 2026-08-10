import { useEffect, useState } from 'react'

const sections = [
  { label: 'Hero', href: '#hero' },
  { label: 'About Me', href: '#about' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Featured Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const typingPhrases = [
  'I build ML Pipelines',
  'I build Real-Time Dashboards',
  'I build Production APIs',
]

const bio =
  'I build end-to-end machine learning systems — from raw data ingestion and model training to production-grade APIs and interactive dashboards. I specialize in predictive modeling, time-series forecasting, NLP sentiment analysis, and full-stack MLOps pipelines.'

const skillGroups = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'ML & Data Science',
    items: [
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Pandera',
      'MLflow',
      'ARIMA',
      'Random Forest',
      'Logistic Regression',
      'TF-IDF',
      'LinearSVC',
    ],
  },
  {
    category: 'Backend & APIs',
    items: ['FastAPI', 'Uvicorn', 'SQLite', 'REST APIs'],
  },
  {
    category: 'Frontend & Web',
    items: ['React', 'Vite', 'HTML5', 'CSS3', 'Glassmorphism', 'SVG Data Visualization'],
  },
  {
    category: 'DevOps & Deployment',
    items: ['Git', 'GitHub Actions', 'Vercel', 'Render', 'Docker (familiar)'],
  },
]

const filters = ['All', 'Full-Stack ML', 'Classification', 'NLP', 'Time Series', 'FinTech', 'Web App']

const projects = [
  {
    title: 'Malaysian Hourly Rain Prediction System',
    repo: 'RainToday-Prediction',
    demo: 'https://rain-today-prediction.vercel.app',
    description:
      'Production-grade hourly rainfall forecasting system for 7 Malaysian cities with a Random Forest ML pipeline, FastAPI backend, SQLite caching, Pandera validation, and React + Vite dashboard.',
    tech: ['Python', 'Scikit-Learn', 'FastAPI', 'React', 'Vite', 'SQLite', 'Pandera', 'MLflow', 'Open-Meteo API'],
    metrics: ['F1-Score 77.23%', 'Accuracy 83.15%', 'ROC-AUC 88.33%'],
    category: 'Full-Stack ML System',
    filter: 'Full-Stack ML',
    flagship: true,
  },
  {
    title: 'Iris-Diabetes AI Diagnostic System',
    repo: 'Iris-Diabetes-AI-system-',
    description:
      'Two-stage medical AI pipeline with binary classification for diabetes presence and regression for exact blood sugar level, designed for real-time health tracking.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'],
    category: 'Healthcare ML',
    filter: 'Classification',
  },
  {
    title: 'KSIS-TEAPS',
    repo: 'KSIS-TEAPS',
    description: 'A full-stack TypeScript application system.',
    tech: ['TypeScript', 'Node.js'],
    category: 'Full-Stack Application',
    filter: 'Web App',
  },
  {
    title: 'Titanic Survival Prediction',
    repo: 'Taitanic-Survival-Prediction-',
    description:
      'Optimized ML pipeline forecasting passenger survival using Random Forest and Logistic Regression refined via Grid Search cross-validation.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Grid Search'],
    category: 'Classification',
    filter: 'Classification',
  },
  {
    title: 'Amazon Sentiment Analysis',
    repo: 'Amazon-Sentiment-Analysis-',
    description:
      'NLP pipeline using TF-IDF vectorization and LinearSVC to classify Amazon consumer reviews with text cleaning and class balancing for market insights.',
    tech: ['Python', 'Scikit-Learn', 'TF-IDF', 'LinearSVC', 'NLP'],
    category: 'NLP & Text Analytics',
    filter: 'NLP',
  },
  {
    title: 'Sales Trend Forecasting Analysis',
    repo: 'Salse_Trend_Forcasting_Analysis-',
    description:
      'EDA and time-series forecasting using ARIMA on retail sales data to identify seasonal patterns and project future revenue.',
    tech: ['Python', 'ARIMA', 'Pandas', 'Matplotlib'],
    category: 'Time Series Forecasting',
    filter: 'Time Series',
  },
  {
    title: 'Credit Scoring Classification Model',
    repo: 'CodeAlpha_Credit_Scoring.Classification-model',
    description:
      'FinTech credit scoring model classifying credit risk as good or bad after evaluating Logistic Regression, Decision Tree, and Random Forest.',
    tech: ['Python', 'Scikit-Learn', 'Logistic Regression', 'Decision Tree', 'Random Forest'],
    metrics: ['80% accuracy with Logistic Regression'],
    category: 'FinTech ML',
    filter: 'FinTech',
  },
  {
    title: 'Event Management System',
    repo: 'event-management-system',
    description: 'A full-stack event management application for organizing, scheduling, and managing events.',
    tech: ['Full-Stack Development'],
    category: 'Web Application',
    filter: 'Web App',
  },
]

function App() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.filter === activeFilter)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPhraseIndex((currentIndex) => (currentIndex + 1) % typingPhrases.length)
    }, 2200)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('.reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="portfolio-shell">
      <section className="hero-section reveal" id="hero" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb-cyan" aria-hidden="true" />
        <div className="hero-orb hero-orb-blue" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Malaysia based ML portfolio</p>
          <h1 id="hero-title">Hi, I'm Bashar</h1>
          <p className="subtitle">Machine Learning Engineer & MLOps Practitioner</p>
          <p className="typing-line">
            <span>{typingPhrases[phraseIndex]}</span>
          </p>
          <p className="intro-copy">
            I turn data, models, APIs, and dashboards into practical machine
            learning systems that recruiters can evaluate quickly.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#projects">
              View My Work ↓
            </a>
            <a className="secondary-link" href="https://github.com/Bashar-ml-en" target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      <section className="content-section about-section reveal" id="about" aria-labelledby="about-title">
        <div className="section-copy">
          <div className="section-label">About Me</div>
          <h2 id="about-title">ML systems with production thinking.</h2>
          <p>{bio}</p>
        </div>
        <div className="github-card" aria-label="Bashar GitHub stats preview">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Bashar-ml-en&show_icons=true&theme=tokyonight"
            alt="GitHub stats for Bashar-ml-en"
          />
        </div>
      </section>

      <section className="content-section stack-section reveal" id="stack" aria-labelledby="stack-title">
        <div className="section-label">Tech Stack</div>
        <h2 id="stack-title">Core skills for ML engineering roles.</h2>
        <p>
          A focused stack for building, validating, serving, and presenting machine
          learning systems.
        </p>
        <div className="skill-groups" aria-label="Grouped technical skills">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="badge-row">
                {group.items.map((item) => (
                  <span className="skill-badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section projects-section reveal" id="projects" aria-labelledby="projects-title">
        <div className="section-label">Featured Projects</div>
        <h2 id="projects-title">Project evidence for recruiters.</h2>
        <p>
          Filter Bashar's work by ML system type and review the projects that
          demonstrate production thinking, modeling, APIs, dashboards, and data
          workflows.
        </p>
        <div className="filter-row" aria-label="Project category filters">
          {filters.map((filter) => (
            <button
              className={filter === activeFilter ? 'filter-button active' : 'filter-button'}
              key={filter}
              type="button"
              aria-pressed={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <article
              className={project.flagship ? 'project-card flagship-card' : 'project-card'}
              key={project.repo}
            >
              <div className="project-card-topline">
                <span className="category-badge">{project.category}</span>
                {project.flagship && <span className="flagship-badge">Flagship</span>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.metrics && (
                <div className="metric-row" aria-label={`${project.title} metrics`}>
                  {project.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
              )}
              <div className="tech-pills" aria-label={`${project.title} technologies`}>
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={`https://github.com/Bashar-ml-en/${project.repo}`} target="_blank" rel="noreferrer">
                  View Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section contact-section reveal" id="contact" aria-labelledby="contact-title">
        <div className="section-label">Contact / Footer</div>
        <h2 id="contact-title">Ready to review the portfolio?</h2>
        <p>
          Recruiters and hiring managers can reach Bashar directly by email or review
          the project repositories on GitHub.
        </p>
        <div className="contact-links">
          <a href="https://github.com/Bashar-ml-en" target="_blank" rel="noreferrer">github.com/Bashar-ml-en</a>
          <a href="mailto:abulithbisha@gmail.com">abulithbisha@gmail.com</a>
        </div>
      </section>

      <footer>
        <p>Built with care by Bashar</p>
        <nav aria-label="Portfolio sections">
          {sections.map((section) => (
            <a key={section.href} href={section.href}>{section.label}</a>
          ))}
        </nav>
      </footer>
    </main>
  )
}

export default App
