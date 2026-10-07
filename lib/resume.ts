export const profile = {
  name: 'Nadia Lavigne',
  title: 'IT and Cybersecurity Professional',
  linkedin: 'https://www.linkedin.com/in/cyberspaniard',
  linkedinLabel: 'linkedin.com/in/cyberspaniard',
  github: 'https://github.com/cyberspaniard/',
  githubLabel: 'github.com/cyberspaniard',
  resumeUrl: '',
  summary:
    'IT and Cybersecurity professional with 20 years of experience planning and executing technical initiatives and software development projects across federal and enterprise. Proven team leader managing individual contributors and multi-program portfolios spanning scope, timelines, resources, and risk. Hands-on software engineering background (Java, .NET, SQL) supports translating complex technical concepts into clear specifications and delivery plans for business stakeholders.',
}

export const stats = [
  { value: '20', label: 'Years of experience' },
  { value: '5', label: 'DARPA cybersecurity programs managed' },
  { value: '1,000+', label: 'Users on platforms supported' },
  { value: 'M.S.', label: 'Cybersecurity' },
  { value: 'Secret', label: 'Security clearance' },
  { value: 'Bilingual', label: 'English and Spanish' },
]

export const experience = [
  {
    role: 'IT Specialist (INFOSEC)',
    org: 'Naval Information Warfare Center Pacific (NIWC PAC)',
    location: 'San Diego, CA',
    period: '02/2024 – 09/2025',
    highlights: [
      'Developed, coordinated, and maintained Risk Management Framework (RMF) authorization packages and security compliance documentation aligned with NIST, CMMC, and OWASP requirements, supporting system Authority to Operate (ATO).',
      'Monitored CVEs and Information Assurance Vulnerability Assessments (IAVA), ensuring required software and hardware security patches were applied and promulgated to appropriate systems.',
      'Designed, developed, integrated, tested, and maintained a secure Java cryptographic application; performed component integration testing (CIT) and user acceptance testing (UAT).',
      "Managed a portfolio of five DARPA cybersecurity programs (~$300K each) as Contracting Officer's Representative (COR), owning scope, timelines, resources, and risk.",
      'Spearheaded department-wide adoption of JIRA and Agile practices as Deputy IPT Lead; mentored junior engineers and interns.',
    ],
  },
  {
    role: 'Analyst Programmer III',
    org: 'General Dynamics NASSCO',
    location: 'San Diego, CA',
    period: '10/2018 – 02/2024',
    highlights: [
      'Applied a security-first approach to permission models and access controls across the enterprise JIRA/Confluence platform, aligning configurations with corporate compliance and audit standards.',
      'Configured and supported SSO/authentication integrations between Active Directory/Azure and enterprise applications (PeopleSoft HR/payroll, Jira/Confluence).',
      'Engineered SQL and REST API integrations, stored procedures, and data models supporting an enterprise platform serving 1,000+ users.',
      'Managed a team of 5 engineers as Team Lead and Scrum Master; executed 9 new implementations and supported 15+ projects through the full SDLC.',
      'Directed five process improvement initiatives as a Lean Specialist that increased operational efficiency by 25–50%.',
    ],
  },
  {
    role: 'Application Developer',
    org: 'San Diego Metropolitan Transit System (MTS)',
    location: 'San Diego, CA',
    period: '08/2015 – 02/2018',
    highlights: [
      'Redesigned a core enterprise application (est. $300K) independently at no external cost using ASP.NET, JavaScript, and Bootstrap; reduced technical support demand by 50%.',
      'Designed SSRS audit and operational reporting enabling managers, VPs, board members, and the CEO to monitor KPIs and make data-informed decisions.',
    ],
  },
]

export const skills = [
  {
    group: 'Cybersecurity & Compliance',
    items: ['RMF / ATO', 'NIST', 'OWASP', 'Vulnerability Awareness & Triage'],
  },
  {
    group: 'Identity & Access Management',
    items: ['Active Directory Administration', 'Azure AD', 'SSO / Authentication Integration', 'User/Group Provisioning'],
  },
  {
    group: 'Programming & Development',
    items: ['Java', 'C#', 'ASP.NET', 'JavaScript', 'SQL', 'Groovy (ScriptRunner)', 'Python', 'PowerShell'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS (foundational/coursework)', 'Azure', 'Jenkins', 'GitHub'],
  },
  {
    group: 'Databases & Reporting/BI',
    items: ['SQL Server', 'SSRS', 'SSIS', 'Tableau'],
  },
  {
    group: 'Program & Project Management',
    items: ['Scrum Master', 'Product Owner', 'COR', 'Deputy IPT Lead', 'Team Lead', 'Risk Management'],
  },
]

export const education = [
  { degree: 'Master of Science (M.S.), Cybersecurity', school: 'National University, San Diego, CA', year: '2023' },
  { degree: 'Bachelor of Science (B.S.), Information Systems', school: 'National University, San Diego, CA', year: '2020' },
]

export const certifications = [{ name: 'Google AI Fundamentals', issuer: 'Coursera', year: '2026' }]

export const languages = ['Spanish (native)']
