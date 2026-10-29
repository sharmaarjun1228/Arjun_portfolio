/* EDIT THIS FILE to update your portfolio content. Add or remove items in the arrays. */
window.PORTFOLIO = {
  name: 'Arjun Sharma',
  email: 'arjunkumarsharma1228@gmail.com',
  linkedin: 'https://www.linkedin.com/', // Replace with your profile URL
  github: 'https://github.com/', // Replace with your profile URL
  location: 'Bhopal, Madhya Pradesh, India',
  stats: [
    { value: '50+', label: 'production-grade dashboards', note: 'Built for real operational needs' },
    { value: '3', label: 'government domains', note: 'E-commerce, education & e-governance' },
    { value: '30–40%', label: 'less manual reporting', note: 'Through reporting automation' },
    { value: '500K+', label: 'records analysed', note: 'Turning large datasets into insight' }
  ],
  projects: [
    { id: 'aiqc', category: 'Power BI', number: '01', title: 'Agriculture Input Quality Control', subtitle: 'From sample collection to quality insights', description: 'Designed a centralized reporting experience for pesticide quality-control workflows, bringing lab, inspection, dealer, and manufacturer information into one view. Helps teams spot misbranding patterns and monitor compliance.', impact: '10K+ quality test records', tags: ['Power BI', 'SQL', 'Data Modelling'], tone: 'peach', visual: 'quality', size: 'tall' },
    { id: 'university', category: 'Power BI', number: '02', title: 'University Performance Dashboard', subtitle: 'Academic performance, made visible', description: 'Built reporting for 5+ institutions to follow student performance, enrollment patterns, and academic KPIs. Automated recurring reporting to make information easier for stakeholders to access.', impact: '5+ institutions supported', tags: ['Power BI', 'SQL', 'KPI Design'], tone: 'lavender', visual: 'university', size: 'medium' },
    { id: 'customer', category: 'Python', number: '03', title: 'Customer Analytics & Prediction', subtitle: 'Finding patterns behind customer behaviour', description: 'Performed exploratory analysis on datasets with 1M+ records and developed regression and classification models to support data-informed marketing decisions.', impact: '1M+ records explored', tags: ['Python', 'Pandas', 'Machine Learning'], tone: 'mint', visual: 'customer', size: 'medium' },
    { id: 'reporting', category: 'SQL', number: '04', title: 'Reporting Automation', subtitle: 'Less repetitive work. More useful insight.', description: 'Optimized SQL joins, aggregations, and transformations to create reliable datasets for reporting. Worked with business, DBMS, and operations teams to turn unclear requirements into usable analytical solutions.', impact: '30–40% less manual effort', tags: ['SQL Server', 'Power BI', 'Automation'], tone: 'blue', visual: 'reporting', size: 'short' }
  ],
  skills: [
    { title: 'BI & Visualisation', icon: '▥', items: ['Power BI', 'DAX', 'Power Query', 'Tableau', 'Dashboard UX', 'KPI Design'] },
    { title: 'Data & Querying', icon: '⌘', items: ['SQL Server', 'PostgreSQL', 'Data Modelling', 'Joins & CTEs', 'Query Optimisation', 'Excel'] },
    { title: 'Python & Analytics', icon: '⌁', items: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Scikit-learn'] },
    { title: 'Workflow & Tools', icon: '✳', items: ['Jupyter Notebook', 'Google Colab', 'VS Code', 'pgAdmin', 'Git', 'Business Analysis'] }
  ],
  journey: [
    { type: 'EXPERIENCE', date: 'DEC 2024 — PRESENT', title: 'Power BI Developer · IT Consultant · Data Analyst', org: 'Centre for Research & Industrial Staff Performance (CRISP)', place: 'Bhopal, India', description: 'Delivered 50+ production-grade dashboards across government programmes, analysed datasets from 50K to 500K+ records, automated reporting workflows, and partnered with cross-functional teams.' },
    { type: 'EDUCATION', date: 'JAN 2024 — AUG 2024', title: 'Advanced Certification in Full Stack Data Science', org: 'E&ICT Academy, IIT Guwahati · AlmaBetter', place: 'Professional certification', description: 'Focused on data science, analytics, machine learning, and applied problem solving.' },
    { type: 'EDUCATION', date: 'MAR 2020 — JUN 2022', title: 'Master of Computer Applications (MCA)', org: 'University Institute of Technology, Bhopal', place: 'CGPA: 8.6', description: 'Postgraduate foundation in computer applications and software systems.' },
    { type: 'CERTIFICATION', date: 'JAN 2024', title: 'Applied Data Science Capstone', org: 'Coursera', place: 'Certification', description: 'Applied data science concepts to practical analysis and modelling.' },
    { type: 'CERTIFICATION', date: 'SEP 2023', title: 'Complete Web Development Bootcamp (MERN)', org: 'Udemy', place: 'Certification', description: 'Full-stack web development fundamentals and project-based learning.' }
  ]
};
