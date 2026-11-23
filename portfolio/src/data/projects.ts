import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'movies',
    file: 'movie_dashboard.twbx',
    name: 'Movie Dashboard Overview',
    question: 'What does the movie and TV catalogue look like?',
    stack: 'Tableau · 2026',
    intro:
      'A Tableau dashboard that breaks a movie and TV catalogue down by content type, rating, genre, country, duration and year added.',
    kpis: [
      { value: '92%', label: 'of titles are movies' },
      { value: '288 min', label: 'longest movie in the catalogue' },
      { value: '536', label: 'titles with no country listed' },
    ],
    tools: ['Tableau', 'Data visualisation'],
    download: "/downloads/movie_dashboard.zip"
  },
  {
    id: 'loan',
    file: 'bank_loan_approval.csv',
    name: 'Bank Loan Approval Analysis',
    question: 'What makes a loan application get approved?',
    stack: 'Data Analysis · 2026',
    intro:
      'An analysis of bank loan applications that looks at which applicant details, such as income, credit history and loan amount, are linked to approval or rejection.',
    kpis: [
      { value: '38,576', label: 'loan applications analysed' },
      { value: '435,8 M', label: 'total funded amount' },
      { value: '473,1 M', label: 'total payments' },
      { value: '12.05%', label: 'average interest rate' },
      { value: '13.31%', label: 'average DTI' },
    ],
    tools: ['Python', 'pandas', 'Data analysis'],
    download:"/donwloads/financial_loan.zip"
  },
  {
    id: 'warehouse',
    file: 'data_warehouse.sql',
    name: 'Data Warehouse',
    question: 'Can scattered source data become one reliable reporting layer?',
    stack: 'SQL · Data Warehouse',
    intro:
      'A data warehouse that pulls data from source systems into a clean, structured model, so reports and dashboards read from one consistent place.',
    kpis: [
      // { value: '—', label: 'source tables loaded' },
      { value: '8', label: 'dimension tables' },
      { value: '4', label: 'fact tables' },
    ],
    tools: ['SQL', 'ETL', 'Dimensional modelling'],
    download:"/donwloads/data_warehouse.zip"
  },
    {
    id: 'warehouse',
    file: 'data_warehouse.sql',
    name: 'Data Warehouse',
    question: 'Can scattered source data become one reliable reporting layer?',
    stack: 'SQL · Data Warehouse',
    intro:
      'A data warehouse that pulls data from source systems into a clean, structured model, so reports and dashboards read from one consistent place.',
    kpis: [
      { value: '—', label: 'source tables loaded' },
      { value: '8', label: 'dimension tables' },
      { value: '4', label: 'data quality checks passed' },
    ],
    tools: ['SQL', 'ETL', 'Dimensional modelling'],
  },
];