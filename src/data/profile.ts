export type NavItem = {
  label: string
  href: string
}

export type Profile = {
  name: string
  title: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  resumePath: string
  bio: string
  hero: {
    eyebrow: string
    headline: string
    subtitle: string
    intro: string
    typingPhrases: string[]
    primaryCta: string
    secondaryCta: string
    resumeCta: string
  }
  nav: NavItem[]
  proofStats: Array<{ value: string; label: string; numeric: number; suffix?: string }>
  capabilities: Array<{ title: string; text: string; icon: string }>
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
  phone: '+60179598610',
  github: 'https://github.com/Bashar-ml-en',
  linkedin: 'https://www.linkedin.com/in/bashar-ibrahem-24a8b8296',
  resumePath: '/Bashar_Ibrahem_MLEngineer.pdf',
  bio: 'I build end-to-end machine learning systems — from raw data ingestion and model training to production-grade APIs and interactive dashboards. I specialize in predictive modeling, time-series forecasting, NLP sentiment analysis, and full-stack MLOps pipelines.',
  hero: {
    eyebrow: 'Malaysia-based ML Engineer',
    headline: 'Machine learning systems built for production proof.',
    subtitle: "Hi, I'm Bashar — Machine Learning Engineer & MLOps Practitioner.",
    intro:
      'I connect model development, API delivery, validation, and dashboard experience into recruiter-ready systems that show real engineering range.',
    typingPhrases: ['I build ML Pipelines', 'I build Real-Time Dashboards', 'I build Production APIs', 'I ship End-to-End Systems'],
    primaryCta: 'Review My Systems',
    secondaryCta: 'GitHub Profile',
    resumeCta: 'Download Resume',
  },
  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Systems', href: '#systems' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  proofStats: [
    { value: '8', label: 'End-to-End ML Systems', numeric: 8 },
    { value: '5', label: 'Specialized ML Domains', numeric: 5 },
    { value: '10', label: 'Production Stack Tools', numeric: 10, suffix: '+' },
    { value: '100', label: 'Reproducible Code Evidence', numeric: 100, suffix: '%' },
  ],
  capabilities: [
    {
      title: 'Modeling Layer',
      text: 'Predictive modeling, classification, time-series forecasting, NLP pipelines, and metric-driven evaluation.',
      icon: '🧠',
    },
    {
      title: 'Serving Layer',
      text: 'FastAPI services, REST endpoints, validation workflows, caching decisions, and production-aware data flow.',
      icon: '⚡',
    },
    {
      title: 'Experience Layer',
      text: 'React dashboards, glassmorphic interfaces, SVG data visualization, and recruiter-friendly project proof.',
      icon: '🎨',
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
      label: 'Get In Touch',
      title: 'Open to Machine Learning Engineer opportunities.',
      text: 'Recruiters and hiring managers can reach Bashar directly by email, phone, or LinkedIn — or review the project repositories on GitHub.',
    },
  },
  ui: {
    brandInitial: 'B',
    consoleKicker: '> system.status()',
    consoleTitle: 'ML Engineer — Live Signal',
    consoleRows: [
      { term: 'FOCUS', detail: 'End-to-end ML Systems' },
      { term: 'STACK', detail: 'Python · FastAPI · React · Scikit-Learn' },
      { term: 'DELIVERY', detail: 'APIs, Dashboards, Validation, MLOps' },
      { term: 'STATUS', detail: '● Open to Opportunities' },
    ],
    viewCodeLabel: 'View Code',
    liveDemoLabel: 'Live Demo',
    expandLabel: 'Expand details ↓',
    collapseLabel: 'Collapse details ↑',
    footer: '© 2025 Bashar Ibrahem — Built with care.',
    githubStatsAlt: 'GitHub stats for Bashar-ml-en',
    githubStatsFallbackTitle: 'GitHub Profile',
    githubStatsFallbackText: 'GitHub stats could not load. Visit Bashar-ml-en on GitHub to review repositories and activity.',
  },
}

export const githubStatsUrl =
  'https://github-readme-stats.vercel.app/api?username=Bashar-ml-en&show_icons=true&theme=tokyonight'
