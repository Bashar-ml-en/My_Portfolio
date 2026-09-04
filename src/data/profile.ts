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
    certificates: { label: string; title: string; text: string }
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
  title: 'AI & Machine Learning Engineer | Autonomous Agentic Systems Specialist',
  location: 'Malaysia',
  email: 'abulithbisha@gmail.com',
  phone: '+60179598610',
  github: 'https://github.com/Bashar-ml-en',
  linkedin: 'https://www.linkedin.com/in/bashar-ibrahem-24a8b8296',
  resumePath: '/Bashar_Ibrahem_MLEngineer.pdf',
  bio: 'I architect and ship autonomous multi-agent systems and production-grade machine learning pipelines. My work spans frontier LLM red-teaming, evolutionary prompt hardening, Google Cloud Run microservices, and end-to-end predictive intelligence platforms.',
  hero: {
    eyebrow: 'Malaysia-based Autonomous AI & ML Engineer',
    headline: 'Autonomous AI agent systems & machine learning built for production proof.',
    subtitle: "Hi, I'm Bashar — Autonomous AI & Machine Learning Engineer.",
    intro:
      'I architect autonomous multi-agent taskmasters, LLM security & prompt hardening toolchains, and full-stack ML products with verified reproducible metrics.',
    typingPhrases: [
      'I build Autonomous Multi-Agent DAGs',
      'I build AI Red-Teaming & SecOps Tools',
      'I build Google Cloud Run Microservices',
      'I ship End-to-End Production ML Systems'
    ],
    primaryCta: 'Explore Featured Systems',
    secondaryCta: 'GitHub Profile',
    resumeCta: 'Download Resume',
  },
  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Systems', href: '#systems' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  proofStats: [
    { value: '98.6%', label: 'AI Safety Benchmark (AutoGuard AI)', numeric: 98.6, suffix: '%' },
    { value: '14/14', label: 'Automated Tests (100% Pass)', numeric: 14, suffix: '/14' },
    { value: '9+', label: 'Production AI & ML Systems', numeric: 9, suffix: '+' },
    { value: '30s', label: 'Autonomous Self-Healing Speed', numeric: 30, suffix: 's' },
  ],
  capabilities: [
    {
      title: 'Autonomous Agentic Layer',
      text: 'Multi-agent DAG state machines, Gemini 3.7 Flash reasoning, parallel sandboxed probing, and evolutionary prompt self-healing.',
      icon: '🤖',
    },
    {
      title: 'Modeling & ML Layer',
      text: 'Predictive modeling, classification, time-series forecasting, NLP pipelines, and metric-driven evaluation.',
      icon: '🧠',
    },
    {
      title: 'Serving & Cloud Layer',
      text: 'Google Cloud Run, FastAPI REST services, Docker microservices, Firestore persistence, and automated CI/CD GitHub Actions.',
      icon: '⚡',
    },
    {
      title: 'Experience Layer',
      text: 'React + Vite dashboards, glassmorphic interfaces, live SSE telemetry streams, and recruiter-friendly project proof.',
      icon: '🎨',
    },
  ],
  sections: {
    about: { label: 'About Me', title: 'I build the bridge between frontier AI models and production systems.' },
    systems: {
      label: 'System Strengths',
      title: 'Scalable architecture for autonomous AI agents, MLOps, and full-stack delivery.',
    },
    stack: {
      label: 'Tech Stack',
      title: 'Tools for building, securing, serving, and validating AI & ML systems.',
      text: 'Grouped by how modern AI engineering moves from agentic orchestration and model reasoning to API delivery, UI design, and cloud deployment.',
    },
    projects: {
      label: 'Featured Projects',
      title: 'Production AI & ML systems organized for fast recruiter review.',
      text: "Filter Bashar's work by system type and inspect the projects that demonstrate autonomous agentic workflows, LLM security, predictive modeling, APIs, and dashboards.",
    },
    certificates: {
      label: 'Certifications & Credentials',
      title: 'Verified IBM, DeepLearning.AI & Coursera Certifications.',
      text: 'Verified professional certifications covering Machine Learning, Deep Learning & Keras, MLOps Model Tracking, Data Engineering, and SQL Databases.',
    },
    contact: {
      label: 'Get In Touch',
      title: 'Open to AI & Machine Learning Engineer opportunities.',
      text: 'Recruiters and engineering leaders can reach Bashar directly by email, phone, or LinkedIn — or review the project repositories on GitHub.',
    },
  },
  ui: {
    brandInitial: 'B',
    consoleKicker: '> system.status()',
    consoleTitle: 'AI Engineer — Live Signal',
    consoleRows: [
      { term: 'FOCUS', detail: 'Autonomous AI Agents & ML Systems' },
      { term: 'FLAGSHIP', detail: 'AutoGuard AI (Google Hackathon Agent)' },
      { term: 'STACK', detail: 'Gemini 3.7 Flash · Cloud Run · FastAPI · React' },
      { term: 'STATUS', detail: '● Open to Global AI/ML Roles' },
    ],
    viewCodeLabel: 'View Code',
    liveDemoLabel: 'Live Demo',
    expandLabel: 'Expand details ↓',
    collapseLabel: 'Collapse details ↑',
    footer: '© 2026 Bashar Ibrahem — Built with care.',
    githubStatsAlt: 'GitHub stats for Bashar-ml-en',
    githubStatsFallbackTitle: 'GitHub Profile',
    githubStatsFallbackText: 'GitHub stats could not load. Visit Bashar-ml-en on GitHub to review repositories and activity.',
  },
}

export const githubStatsUrl =
  'https://github-readme-stats.vercel.app/api?username=Bashar-ml-en&show_icons=true&theme=tokyonight'
