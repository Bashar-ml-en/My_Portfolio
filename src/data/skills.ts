export type SkillItem = {
  name: string
  color: string
  icon?: string
}

export type SkillGroup = {
  category: string
  items: SkillItem[]
}

export const techMetaMap: Record<string, { color: string; icon: string }> = {
  'Python': { color: '#3776AB', icon: '🐍' },
  'Scikit-Learn': { color: '#F7931E', icon: '🤖' },
  'FastAPI': { color: '#009688', icon: '⚡' },
  'React': { color: '#61DAFB', icon: '⚛️' },
  'Vite': { color: '#646CFF', icon: '⚡' },
  'SQLite': { color: '#003B57', icon: '💾' },
  'Pandera': { color: '#FF6B6B', icon: '🛡️' },
  'MLflow': { color: '#0194E2', icon: '📊' },
  'Open-Meteo API': { color: '#00E5FF', icon: '🌦️' },
  'Pandas': { color: '#E70488', icon: '🐼' },
  'NumPy': { color: '#4DABCF', icon: '📐' },
  'Jupyter': { color: '#F37626', icon: '🪐' },
  'TypeScript': { color: '#3178C6', icon: '🔷' },
  'Node.js': { color: '#5FA04E', icon: '🟩' },
  'Grid Search': { color: '#818CF8', icon: '🔍' },
  'TF-IDF': { color: '#A855F7', icon: '🔤' },
  'LinearSVC': { color: '#EC4899', icon: '🎯' },
  'NLP': { color: '#38BDF8', icon: '💬' },
  'ARIMA': { color: '#818CF8', icon: '📈' },
  'Matplotlib': { color: '#11557C', icon: '📊' },
  'Logistic Regression': { color: '#38BDF8', icon: '⚖️' },
  'Decision Tree': { color: '#10B981', icon: '🌲' },
  'Random Forest': { color: '#10B981', icon: '🌲' },
  'Full-Stack Development': { color: '#6366F1', icon: '💻' },
  'Django': { color: '#092E20', icon: '🎸' },
  'Tailwind CSS': { color: '#06B6D4', icon: '🎨' },
  'SQL': { color: '#00758F', icon: '🗄️' },
  'HTML5': { color: '#E34F26', icon: '🌐' },
  'CSS3': { color: '#1572B6', icon: '🎨' },
  'Glassmorphism': { color: '#A855F7', icon: '💎' },
  'SVG Data Visualization': { color: '#F43F5E', icon: '📊' },
  'Git': { color: '#F05032', icon: '🌱' },
  'GitHub Actions': { color: '#2088FF', icon: '⚙️' },
  'Vercel': { color: '#00E5FF', icon: '▲' },
  'Render': { color: '#46E3B7', icon: '🚀' },
  'Docker (familiar)': { color: '#2496ED', icon: '🐳' },
  'Uvicorn': { color: '#7C3AED', icon: '🦄' },
  'REST APIs': { color: '#10B981', icon: '🔌' },
}

export function getTechMeta(techName: string) {
  return techMetaMap[techName] || { color: '#00E5FF', icon: '⚡' }
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
