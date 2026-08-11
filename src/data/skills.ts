export type SkillItem = {
  name: string
  color: string
  icon?: string
}

export type SkillGroup = {
  category: string
  items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', color: '#3776AB', icon: '🐍' },
      { name: 'JavaScript', color: '#F7DF1E', icon: '⚡' },
      { name: 'TypeScript', color: '#3178C6', icon: '🔷' },
      { name: 'SQL', color: '#00758F', icon: '🗄️' },
    ],
  },
  {
    category: 'ML & Data Science',
    items: [
      { name: 'Scikit-Learn', color: '#F7931E', icon: '🤖' },
      { name: 'Pandas', color: '#E70488', icon: '🐼' },
      { name: 'NumPy', color: '#4DABCF', icon: '📐' },
      { name: 'Pandera', color: '#FF6B6B', icon: '🛡️' },
      { name: 'MLflow', color: '#0194E2', icon: '📊' },
      { name: 'ARIMA', color: '#818CF8', icon: '📈' },
      { name: 'Random Forest', color: '#10B981', icon: '🌲' },
      { name: 'Logistic Regression', color: '#38BDF8', icon: '⚖️' },
      { name: 'TF-IDF', color: '#A855F7', icon: '🔤' },
      { name: 'LinearSVC', color: '#EC4899', icon: '🎯' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'FastAPI', color: '#009688', icon: '⚡' },
      { name: 'Uvicorn', color: '#7C3AED', icon: '🦄' },
      { name: 'SQLite', color: '#003B57', icon: '💾' },
      { name: 'REST APIs', color: '#10B981', icon: '🔌' },
    ],
  },
  {
    category: 'Frontend & Web',
    items: [
      { name: 'React', color: '#61DAFB', icon: '⚛️' },
      { name: 'Vite', color: '#646CFF', icon: '⚡' },
      { name: 'HTML5', color: '#E34F26', icon: '🌐' },
      { name: 'CSS3', color: '#1572B6', icon: '🎨' },
      { name: 'Glassmorphism', color: '#A855F7', icon: '💎' },
      { name: 'SVG Data Visualization', color: '#F43F5E', icon: '📊' },
    ],
  },
  {
    category: 'DevOps & Deployment',
    items: [
      { name: 'Git', color: '#F05032', icon: '🌱' },
      { name: 'GitHub Actions', color: '#2088FF', icon: '⚙️' },
      { name: 'Vercel', color: '#00E5FF', icon: '▲' },
      { name: 'Render', color: '#46E3B7', icon: '🚀' },
      { name: 'Docker (familiar)', color: '#2496ED', icon: '🐳' },
    ],
  },
]
