export type ProjectMetric = {
  label: string
  value: number
  suffix?: string
}

export type Project = {
  title: string
  repo: string
  liveDemo?: string
  description: string
  details: string
  tech: string[]
  metrics?: ProjectMetric[]
  category: string
  filter: string
  flagship?: boolean
}

export const filters = ['All', 'Full-Stack ML', 'Classification', 'NLP', 'Time Series', 'FinTech', 'Web App']

export const projects: Project[] = [
  {
    title: 'Malaysian Hourly Rain Prediction System',
    repo: 'RainToday-Prediction',
    liveDemo: 'https://rain-today-prediction.vercel.app',
    description:
      'Production-grade hourly rainfall forecasting system for 7 Malaysian cities with a Random Forest ML pipeline, FastAPI backend, SQLite caching, Pandera validation, and React + Vite dashboard.',
    details:
      'This flagship system demonstrates an end-to-end ML product path: climate data ingestion, validation, model training, service delivery, caching, and a polished probability-timeline dashboard for practical review.',
    tech: ['Python', 'Scikit-Learn', 'FastAPI', 'React', 'Vite', 'SQLite', 'Pandera', 'MLflow', 'Open-Meteo API'],
    metrics: [
      { label: 'F1-Score', value: 77.23, suffix: '%' },
      { label: 'Accuracy', value: 83.15, suffix: '%' },
      { label: 'ROC-AUC', value: 88.33, suffix: '%' },
    ],
    category: 'Full-Stack ML System',
    filter: 'Full-Stack ML',
    flagship: true,
  },
  {
    title: 'Iris-Diabetes AI Diagnostic System',
    repo: 'Iris-Diabetes-AI-system-',
    description:
      'Two-stage medical AI pipeline with binary classification for diabetes presence and regression for exact blood sugar level, designed for real-time health tracking.',
    details:
      'The project shows applied supervised learning across classification and regression tasks, with healthcare-style input reasoning and a practical diagnostic workflow concept.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'],
    category: 'Healthcare ML',
    filter: 'Classification',
  },
  {
    title: 'KSIS-TEAPS',
    repo: 'KSIS-TEAPS',
    description: 'A full-stack TypeScript application system.',
    details:
      'This project broadens the portfolio beyond modeling by showing TypeScript application structure and full-stack development familiarity.',
    tech: ['TypeScript', 'Node.js'],
    category: 'Full-Stack Application',
    filter: 'Web App',
  },
  {
    title: 'Titanic Survival Prediction',
    repo: 'Taitanic-Survival-Prediction-',
    description:
      'Optimized ML pipeline forecasting passenger survival using Random Forest and Logistic Regression refined via Grid Search cross-validation.',
    details:
      'A classic classification problem used to demonstrate feature preparation, baseline comparison, model selection, and cross-validation improvement workflow.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Grid Search'],
    category: 'Classification',
    filter: 'Classification',
  },
  {
    title: 'Amazon Sentiment Analysis',
    repo: 'Amazon-Sentiment-Analysis-',
    description:
      'NLP pipeline using TF-IDF vectorization and LinearSVC to classify Amazon consumer reviews with text cleaning and class balancing for market insights.',
    details:
      'This project proves practical NLP fundamentals: text cleaning, vectorization, class balancing, and sentiment classification with a strong linear model.',
    tech: ['Python', 'Scikit-Learn', 'TF-IDF', 'LinearSVC', 'NLP'],
    category: 'NLP & Text Analytics',
    filter: 'NLP',
  },
  {
    title: 'Sales Trend Forecasting Analysis',
    repo: 'Salse_Trend_Forcasting_Analysis-',
    description:
      'EDA and time-series forecasting using ARIMA on retail sales data to identify seasonal patterns and project future revenue.',
    details:
      'This project focuses on exploratory analysis and forecasting logic for retail variables such as venda, estoque, and preco.',
    tech: ['Python', 'ARIMA', 'Pandas', 'Matplotlib'],
    category: 'Time Series Forecasting',
    filter: 'Time Series',
  },
  {
    title: 'Credit Scoring Classification Model',
    repo: 'CodeAlpha_Credit_Scoring.Classification-model',
    description:
      'FinTech credit scoring model classifying credit risk as good or bad after evaluating Logistic Regression, Decision Tree, and Random Forest.',
    details:
      'The project demonstrates model comparison in a FinTech risk context, including an honest reported Logistic Regression accuracy result.',
    tech: ['Python', 'Scikit-Learn', 'Logistic Regression', 'Decision Tree', 'Random Forest'],
    metrics: [{ label: 'Accuracy', value: 80, suffix: '%' }],
    category: 'FinTech ML',
    filter: 'FinTech',
  },
  {
    title: 'Event Management System',
    repo: 'event-management-system',
    description: 'A full-stack event management application for organizing, scheduling, and managing events.',
    details:
      'This web application shows general product-building range beyond ML, including organizing and managing structured event workflows.',
    tech: ['Full-Stack Development'],
    category: 'Web Application',
    filter: 'Web App',
  },
]
