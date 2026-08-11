export type NavItem = {
  label: string
  href: string
}

export type Profile = {
  name: string
  title: string
  location: string
  email: string
  github: string
  bio: string
  hero: {
    eyebrow: string
    headline: string
    subtitle: string
    intro: string
    typingPhrases: string[]
    primaryCta: string
    secondaryCta: string
  }
  nav: NavItem[]
  proofStats: Array<{ value: string; label: string; numeric?: number; suffix?: string }>
  capabilities: Array<{ title: string; text: string }>
  sections: {
    about: { label: string; title: string }
    systems: { label: string; title: string }
    stack: { label: string; title: string; text: string }
    projects: { label: string; title: string; text: string }
    contact: { label: string; title: string; text: string }
  }
  ui: {
    brandInitial: string
    consoleKicker: string
    consoleTitle: string
    consoleRows: Array<{ term: string; detail: string }>
    viewCodeLabel: string
    liveDemoLabel: string
    expandLabel: string
    collapseLabel: string
    footer: string
    githubStatsAlt: string
    githubStatsFallbackTitle: string
    githubStatsFallbackText: string
  }
}

export const profile: Profile = {
  name: 'Bashar',
  title: 'Machine Learning Engineer & MLOps Practitioner',
  location: 'Malaysia',
  email: 'abulithbisha@gmail.com',
  github: 'https://github.com/Bashar-ml-en',
  bio: 'I build end-to-end machine learning systems — from raw data ingestion and model training to production-grade APIs and interactive dashboards. I specialize in predictive modeling, time-series forecasting, NLP sentiment analysis, and full-stack MLOps pipelines.',
  hero: {
    eyebrow: 'Malaysia based ML portfolio',
    headline: 'Machine learning systems built for production proof.',
    subtitle: "Hi, I'm Bashar — Machine Learning Engineer & MLOps Practitioner.",
    intro:
      'I connect model development, API delivery, validation, and dashboard experience into recruiter-ready systems that show real engineering range.',
    typingPhrases: ['I build ML Pipelines', 'I build Real-Time Dashboards', 'I build Production APIs'],
    primaryCta: 'Review My Systems',
    secondaryCta: 'GitHub Profile',
  },
  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'Systems', href: '#systems' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  proofStats: [
    { value: '8', label: 'Featured Projects', numeric: 8 },
    { value: '7', label: 'Malaysian Cities Forecasted', numeric: 7 },
    { value: '88.33%', label: 'Rain Model ROC-AUC', numeric: 88.33, suffix: '%' },
  ],
  capabilities: [
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
  ],
  sections: {
    about: { label: 'About Me', title: 'I build the bridge between ML experiments and usable products.' },
    systems: {
      label: 'System Strengths',
      title: 'A scalable portfolio structure for ML, MLOps, and full-stack delivery.',
    },
    stack: {
      label: 'Tech Stack',
      title: 'Tools for building, validating, serving, and explaining ML systems.',
      text: 'Grouped by how a production ML workflow moves from raw data to model output, API delivery, interface design, and deployment.',
    },
    projects: {
      label: 'Featured Projects',
      title: 'Project evidence organized for fast recruiter review.',
      text: "Filter Bashar's work by system type and inspect the projects that demonstrate production thinking, modeling, APIs, dashboards, and data workflows.",
    },
    contact: {
      label: 'Contact',
      title: 'Open to Machine Learning Engineer opportunities.',
      text: 'Recruiters and hiring managers can reach Bashar directly by email or review the project repositories on GitHub.',
    },
  },
  ui: {
    brandInitial: 'B',
    consoleKicker: 'Portfolio OS',
    consoleTitle: 'ML Engineer Candidate Signal',
    consoleRows: [
      { term: 'Focus', detail: 'End-to-end ML systems' },
      { term: 'Delivery', detail: 'APIs, dashboards, validation' },
      { term: 'Contact', detail: 'abulithbisha@gmail.com' },
    ],
    viewCodeLabel: 'View Code',
    liveDemoLabel: 'Live Demo',
    expandLabel: 'Expand project details',
    collapseLabel: 'Collapse project details',
    footer: 'Built with care by Bashar',
    githubStatsAlt: 'GitHub stats for Bashar-ml-en',
    githubStatsFallbackTitle: 'GitHub Profile',
    githubStatsFallbackText: 'GitHub stats could not load. Visit Bashar-ml-en on GitHub to review repositories and activity.',
  },
}

export const githubStatsUrl =
  'https://github-readme-stats.vercel.app/api?username=Bashar-ml-en&show_icons=true&theme=tokyonight'
