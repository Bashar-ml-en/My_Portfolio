import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Systems', href: '#systems' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const typingPhrases = [
  'I build ML Pipelines',
  'I build Real-Time Dashboards',
  'I build Production APIs',
]

const bio =
  'I build end-to-end machine learning systems — from raw data ingestion and model training to production-grade APIs and interactive dashboards. I specialize in predictive modeling, time-series forecasting, NLP sentiment analysis, and full-stack MLOps pipelines.'

const proofStats = [
  { value: '8', label: 'Featured Projects' },
  { value: '7', label: 'Malaysian Cities Forecasted' },
  { value: '88.33%', label: 'Rain Model ROC-AUC' },
]

const systemCapabilities = [
  {
    title: 'Modeling Layer',
    text: 'Predictive modeling, classification, time-series forecasting, NLP pipelines, and metric-driven evaluation.',
  },
  {
    title: 'Serving Layer',
    text: 'FastAPI services, REST endpoints, validation workflows, caching decisions, and production-aware data flow.',
  },
  {
    title: 'Experience Layer',
    text: 'React dashboards, glassmorphic interfaces, SVG data visualization, and recruiter-friendly project proof.',
  },
]

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
    <>
      <header className="site-header">
        <a className="brand-mark" href="#hero" aria-label="Bashar portfolio home">
          <span>B</span>
          <strong>Bashar</strong>
        </a>
        <nav aria-label="Portfolio navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="portfolio-shell">
        <section className="hero-section reveal" id="hero" aria-labelledby="hero-title">
          <div className="hero-orb hero-orb-cyan" aria-hidden="true" />
          <div className="hero-orb hero-orb-blue" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">Malaysia based ML portfolio</p>
            <h1 id="hero-title">Machine learning systems built for production proof.</h1>
            <p className="subtitle">Hi, I'm Bashar — Machine Learning Engineer & MLOps Practitioner.</p>
            <p className="typing-line">
              <span>{typingPhrases[phraseIndex]}</span>
            </p>
            <p className="intro-copy">
              I connect model development, API delivery, validation, and dashboard experience into recruiter-ready systems that show real engineering range.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#projects">
                Review My Systems
              </a>
              <a className="secondary-cta" href="https://github.com/Bashar-ml-en" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>

          <aside className="hero-console" aria-label="Portfolio system summary">
            <div className="console-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="console-body">
              <p className="console-kicker">Portfolio OS</p>
              <h2>ML Engineer Candidate Signal</h2>
              <dl>
                <div>
                  <dt>Focus</dt>
                  <dd>End-to-end ML systems</dd>
                </div>
                <div>
                  <dt>Delivery</dt>
                  <dd>APIs, dashboards, validation</dd>
                </div>
                <div>
                  <dt>Contact</dt>
                  <dd>abulithbisha@gmail.com</dd>
                </div>
              </dl>
            </div>
          </aside>
        </section>

        <section className="proof-strip reveal" aria-label="Portfolio proof metrics">
          {proofStats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="section-panel about-section reveal" id="about" aria-labelledby="about-title">
          <div className="section-copy">
            <p className="section-label">About Me</p>
            <h2 id="about-title">I build the bridge between ML experiments and usable products.</h2>
            <p>{bio}</p>
          </div>
          <div className="github-card" aria-label="Bashar GitHub stats preview">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Bashar-ml-en&show_icons=true&theme=tokyonight"
              alt="GitHub stats for Bashar-ml-en"
            />
          </div>
        </section>

        <section className="section-panel systems-section reveal" id="systems" aria-labelledby="systems-title">
          <div className="section-heading">
            <p className="section-label">System Strengths</p>
            <h2 id="systems-title">A scalable portfolio structure for ML, MLOps, and full-stack delivery.</h2>
          </div>
          <div className="capability-grid">
            {systemCapabilities.map((capability, index) => (
              <article className="capability-card" key={capability.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel stack-section reveal" id="stack" aria-labelledby="stack-title">
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">Tech Stack</p>
              <h2 id="stack-title">Tools for building, validating, serving, and explaining ML systems.</h2>
            </div>
            <p>
              Grouped by how a production ML workflow moves from raw data to model output, API delivery, interface design, and deployment.
            </p>
          </div>
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

        <section className="section-panel projects-section reveal" id="projects" aria-labelledby="projects-title">
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">Featured Projects</p>
              <h2 id="projects-title">Project evidence organized for fast recruiter review.</h2>
            </div>
            <p>
              Filter Bashar's work by system type and inspect the projects that demonstrate production thinking, modeling, APIs, dashboards, and data workflows.
            </p>
          </div>
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
                  {project.flagship && <span className="flagship-badge">Flagship System</span>}
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

        <section className="contact-section reveal" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-label">Contact</p>
            <h2 id="contact-title">Open to Machine Learning Engineer opportunities.</h2>
            <p>
              Recruiters and hiring managers can reach Bashar directly by email or review the project repositories on GitHub.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:abulithbisha@gmail.com">abulithbisha@gmail.com</a>
            <a href="https://github.com/Bashar-ml-en" target="_blank" rel="noreferrer">
              github.com/Bashar-ml-en
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Built with care by Bashar</p>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </footer>
    </>
  )
}

export default App
