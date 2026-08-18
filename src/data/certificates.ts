export type Certificate = {
  id: string
  title: string
  issuer: 'IBM' | 'KodeKloud' | 'Coursera'
  category: 'Machine Learning & Deep Learning' | 'MLOps & Model Tracking' | 'Data Engineering & SQL'
  verifyUrl: string
  imageUrl: string
  description: string
  skills: string[]
  pdfPath?: string
  date?: string
}

export const certificateCategories = [
  'All',
  'Machine Learning & Deep Learning',
  'MLOps & Model Tracking',
  'Data Engineering & SQL',
]

export const certificates: Certificate[] = [
  {
    id: 'WB4CTI3FHT5P',
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    category: 'Machine Learning & Deep Learning',
    verifyUrl: 'https://coursera.org/verify/WB4CTI3FHT5P',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WB4CTI3FHT5P/CERTIFICATE_LANDING_PAGE~WB4CTI3FHT5P.jpeg',
    description: 'Verified completion of IBM’s Machine Learning with Python course on Coursera, covering supervised and unsupervised algorithms, classification, regression, clustering, and Scikit-Learn evaluation.',
    skills: ['Machine Learning', 'Python', 'Scikit-Learn', 'Classification', 'Regression', 'Clustering'],
    pdfPath: '/Coursera/Coursera WB4CTI3FHT5P.pdf'
  },
  {
    id: '22M00JV3SZ98',
    title: 'Introduction to Deep Learning & Neural Networks with Keras',
    issuer: 'IBM',
    category: 'Machine Learning & Deep Learning',
    verifyUrl: 'https://coursera.org/verify/22M00JV3SZ98',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~22M00JV3SZ98/CERTIFICATE_LANDING_PAGE~22M00JV3SZ98.jpeg',
    description: 'Verified completion of IBM’s Deep Learning & Keras course, covering artificial neural networks, activation functions, backpropagation, and multi-layer perceptron model building.',
    skills: ['Deep Learning', 'Neural Networks', 'Keras', 'TensorFlow', 'Artificial Intelligence'],
    pdfPath: '/Coursera/Intru_Deap_learning.pdf'
  },
  {
    id: 'S6GPUQ3LSXE5',
    title: 'ML Model Development and Tracking: Hands-on Guide',
    issuer: 'KodeKloud',
    category: 'MLOps & Model Tracking',
    verifyUrl: 'https://coursera.org/verify/S6GPUQ3LSXE5',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~S6GPUQ3LSXE5/CERTIFICATE_LANDING_PAGE~S6GPUQ3LSXE5.jpeg',
    description: 'Verified completion of KodeKloud’s MLOps Model Tracking course, covering machine learning experiment logging, model versioning, artifact registration, and production model lifecycle management.',
    skills: ['MLOps', 'Model Tracking', 'MLflow', 'Experiment Logging', 'Model Lifecycle'],
    pdfPath: '/Coursera/Coursera S6GPUQ3LSXE5 traking ml model.pdf'
  },
  {
    id: 'HQC516DPB9JK',
    title: 'Data Engineering Essentials',
    issuer: 'KodeKloud',
    category: 'Data Engineering & SQL',
    verifyUrl: 'https://coursera.org/verify/HQC516DPB9JK',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HQC516DPB9JK/CERTIFICATE_LANDING_PAGE~HQC516DPB9JK.jpeg',
    description: 'Verified completion of KodeKloud’s Data Engineering Essentials course, covering data pipeline construction, ETL workflows, data validation, and database management.',
    skills: ['Data Engineering', 'ETL Pipelines', 'Data Pipelines', 'Pandera', 'Data Quality'],
    pdfPath: '/Coursera/Coursera HQC516DPB9JK(Data Engineer).pdf'
  },
  {
    id: 'LH6Z63ORZ6CL',
    title: 'Databases and SQL for Data Science with Python',
    issuer: 'IBM',
    category: 'Data Engineering & SQL',
    verifyUrl: 'https://coursera.org/verify/LH6Z63ORZ6CL',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LH6Z63ORZ6CL/CERTIFICATE_LANDING_PAGE~LH6Z63ORZ6CL.jpeg',
    description: 'Verified completion of IBM’s Databases and SQL for Data Science course, mastering relational database queries, joins, aggregations, and Python DB-API integration.',
    skills: ['SQL', 'Relational Databases', 'Python DB-API', 'SQLite', 'Data Analysis'],
    pdfPath: '/Coursera/Coursera LH6Z63ORZ6CL.pdf'
  }
]
