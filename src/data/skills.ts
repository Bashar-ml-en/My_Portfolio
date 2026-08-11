export type SkillGroup = {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
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
