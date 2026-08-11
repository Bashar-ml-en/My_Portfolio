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
  status: 'COMPLETED PRODUCTION SYSTEM' | 'COMPLETED ML PIPELINE' | 'COMPLETED TIME SERIES MODEL' | 'COMPLETED FINTECH MODEL' | 'COMPLETED FULL-STACK APP'
  features: string[]
  architecture?: string
}

export const filters = ['All', 'Full-Stack ML', 'Classification', 'NLP', 'Time Series', 'FinTech', 'Web App']

export const projects: Project[] = [
  {
    title: 'Malaysian Hourly Rain Prediction System',
    repo: 'RainToday-Prediction',
    liveDemo: 'https://rain-today-prediction.vercel.app',
    status: 'COMPLETED PRODUCTION SYSTEM',
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
    features: [
      '⚡ Real-Time Hourly Rainfall Probability for 7 Malaysian Cities',
      '🛠️ Modular FastAPI REST Backend Service with Uvicorn worker pool',
      '🔒 Pandera Quality Control Layer enforcing tropical climate boundary bounds',
      '💾 60-Minute SQLite Prediction Caching avoiding external weather API rate-limits',
      '🎨 React + Vite Glassmorphic Dashboard with SVG Probability Timelines'
    ],
    architecture: 'Client Dashboard (React/Vite) ──> FastAPI Service ──> Pandera Quality Gate ──> Random Forest ML Model ──> SQLite Cache'
  },
  {
    title: 'Iris-Diabetes AI Diagnostic System',
    repo: 'Iris-Diabetes-AI-system-',
    status: 'COMPLETED ML PIPELINE',
    description:
      'Two-stage medical AI pipeline with binary classification for diabetes presence and regression for exact blood sugar level, designed for real-time health tracking.',
    details:
      'The project shows applied supervised learning across classification and regression tasks, with healthcare-style input reasoning and a practical diagnostic workflow concept.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'],
    category: 'Healthcare ML',
    filter: 'Classification',
    features: [
      '🩺 Two-Stage Supervised Medical Pipeline (Binary Classification + Regression)',
      '🩸 Simultaneous Diabetes Presence Detection & Fasting Blood Glucose Estimation',
      '📊 Clinical Feature Correlation Analysis (Glucose, BMI, Age, Blood Pressure)',
      '🎯 Hyperparameter-Tuned Supervised Ensemble Model Evaluation'
    ],
    architecture: 'Patient Clinical Input ──> Feature Normalization ──> Stage 1: Diabetes Classifier ──> Stage 2: Blood Sugar Regressor'
  },
  {
    title: 'Amazon Sentiment Analysis',
    repo: 'Amazon-Sentiment-Analysis-',
    status: 'COMPLETED ML PIPELINE',
    description:
      'NLP pipeline using TF-IDF vectorization and LinearSVC to classify Amazon consumer reviews with text cleaning and class balancing for market insights.',
    details:
      'This project proves practical NLP fundamentals: text cleaning, vectorization, class balancing, and sentiment classification with a strong linear model.',
    tech: ['Python', 'Scikit-Learn', 'TF-IDF', 'LinearSVC', 'NLP'],
    category: 'NLP & Text Analytics',
    filter: 'NLP',
    features: [
      '💬 Consumer Review Text Preprocessing, Lowercasing & Stop-Word Filtering',
      '🔤 TF-IDF Vectorization for High-Dimensional Sparse Text Representations',
      '⚡ LinearSVC Classifier Optimized for Fast Sentiment Binary Decisions',
      '⚖️ Balanced Sentiment Precision & Recall Metrics Evaluation'
    ],
    architecture: 'Raw Review Text ──> Regex Cleaning ──> TF-IDF Vectorizer ──> LinearSVC Classifier ──> Sentiment Verdict'
  },
  {
    title: 'Credit Scoring Classification Model',
    repo: 'CodeAlpha_Credit_Scoring.Classification-model',
    status: 'COMPLETED FINTECH MODEL',
    description:
      'FinTech credit scoring model classifying credit risk as good or bad after evaluating Logistic Regression, Decision Tree, and Random Forest.',
    details:
      'The project demonstrates model comparison in a FinTech risk context, including an honest reported Logistic Regression accuracy result.',
    tech: ['Python', 'Scikit-Learn', 'Logistic Regression', 'Decision Tree', 'Random Forest'],
    metrics: [{ label: 'Accuracy', value: 80, suffix: '%' }],
    category: 'FinTech ML',
    filter: 'FinTech',
    features: [
      '💳 Financial Credit Risk Scoring (Good Risk vs Bad Risk Classification)',
      '⚖️ Model Comparison Suite: Logistic Regression vs Decision Tree vs Random Forest',
      '🎯 80.0% Reported Classification Accuracy on Test Evaluation Split',
      '📊 Feature Weight Assessment for Key Applicant Risk Factors'
    ],
    architecture: 'Applicant Data ──> Feature Encoding ──> Model Comparison Suite ──> Risk Score & Classification Verdict'
  },
  {
    title: 'Sales Trend Forecasting Analysis',
    repo: 'Salse_Trend_Forcasting_Analysis-',
    status: 'COMPLETED TIME SERIES MODEL',
    description:
      'EDA and time-series forecasting using ARIMA on retail sales data to identify seasonal patterns and project future revenue.',
    details:
      'This project focuses on exploratory analysis and forecasting logic for retail variables such as venda, estoque, and preco.',
    tech: ['Python', 'ARIMA', 'Pandas', 'Matplotlib'],
    category: 'Time Series Forecasting',
    filter: 'Time Series',
    features: [
      '📈 Seasonal Trend & Stationarity Decomposition (ACF / PACF Plots)',
      '🔮 Auto-Regressive Integrated Moving Average (ARIMA) Sales Projections',
      '🛒 Retail Inventory (Estoque), Sales (Venda), and Pricing Analytics',
      '📊 Visual Sales Trend Graphs and Monthly Revenue Projections'
    ],
    architecture: 'Retail Time Series Data ──> Stationarity Testing (ADF) ──> ARIMA Model Training ──> Revenue Trend Projection'
  },
  {
    title: 'Event Management System',
    repo: 'event-management-system',
    status: 'COMPLETED FULL-STACK APP',
    description: 'A full-stack event management application for organizing, scheduling, and managing events.',
    details:
      'This web application shows general product-building range beyond ML, including organizing and managing structured event workflows.',
    tech: ['Python', 'Django', 'Tailwind CSS', 'SQL'],
    category: 'Web Application',
    filter: 'Web App',
    features: [
      '📅 Event Creation, Scheduling, & Category Management Platform',
      '👤 Dual User Workflows: Event Organizer Admin & Attendee Registration',
      '🛠️ Django ORM Database Models for Relational Event Management',
      '🎨 Tailwind CSS Styled Responsive Web Interface'
    ],
    architecture: 'Browser Interface (Tailwind) ──> Django App Router ──> Relational Database ORM ──> Event State'
  },
  {
    title: 'Titanic Survival Prediction',
    repo: 'Taitanic-Survival-Prediction-',
    status: 'COMPLETED ML PIPELINE',
    description:
      'Optimized ML pipeline forecasting passenger survival using Random Forest and Logistic Regression refined via Grid Search cross-validation.',
    details:
      'A classic classification problem used to demonstrate feature preparation, baseline comparison, model selection, and cross-validation improvement workflow.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Grid Search'],
    category: 'Classification',
    filter: 'Classification',
    features: [
      '🚢 Passenger Feature Engineering (Title Extraction, Family Size, Fare Bins)',
      '🔍 Grid Search Cross-Validation for Hyperparameter Fine-Tuning',
      '📊 Baseline Model vs Optimized Random Forest Performance Benchmark'
    ]
  },
  {
    title: 'KSIS-TEAPS',
    repo: 'KSIS-TEAPS',
    status: 'COMPLETED FULL-STACK APP',
    description: 'A full-stack TypeScript application system.',
    details:
      'This project broadens the portfolio beyond modeling by showing TypeScript application structure and full-stack development familiarity.',
    tech: ['TypeScript', 'Node.js'],
    category: 'Full-Stack Application',
    filter: 'Web App',
    features: [
      '🔷 Modular TypeScript Project Architecture',
      '⚡ Node.js Application Services & Structural Type Definitions'
    ]
  }
]
