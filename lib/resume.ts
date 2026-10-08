export const profile = {
  name: 'Nadia Lavigne',
  title: 'IT and Cybersecurity Professional',
  linkedin: 'https://www.linkedin.com/in/cyberspaniard',
  linkedinLabel: 'linkedin.com/in/cyberspaniard',
  github: 'https://github.com/cyberspaniard/',
  githubLabel: 'github.com/cyberspaniard',
  calendly: 'https://calendly.com/cyberspaniard',
  calendlyLabel: 'calendly.com/cyberspaniard',
  resumeUrl:
    'https://docs.google.com/document/d/1jO_I6RGd-7Fft2GCkiNu1JdLXXHHrFV5/edit?usp=sharing&ouid=115535276284648056759&rtpof=true&sd=true',
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
    sections: [
      {
        title: 'Cybersecurity & Compliance',
        highlights: [
          'Developed, coordinated, and maintained Risk Management Framework (RMF) authorization packages and security compliance documentation aligned with NIST, CMMC, and OWASP requirements, supporting system Authority to Operate (ATO).',
          'Monitored Common Vulnerabilities and Exposures (CVE) and Information Assurance Vulnerability Assessments (IAVA), ensuring required software and hardware security patches were applied and promulgated to appropriate systems.',
          'Ensured security requirements and practices were incorporated throughout the systems development life cycle (SDLC) for a secure Java cryptographic application, including code, testing, and configuration decisions.',
          'Assessed systems for shortcomings related to functionality and policy compliance; developed and documented mitigation steps and corrective action plans.',
        ],
      },
      {
        title: 'Programming & Engineering',
        highlights: [
          'Applied advanced software engineering principles to design, develop, integrate, test, and maintain a secure Java cryptographic application; performed component integration testing (CIT) and user acceptance testing (UAT).',
          'Used PowerShell and GitHub in support of Java-based cryptographic application testing and continuous integration/user acceptance testing (CIT/UAT), coordinating with developers to validate functionality prior to deployment.',
          'Performed peer code reviews and supported adherence to security and maintainability standards throughout development.',
        ],
      },
      {
        title: 'Program & Project Management',
        highlights: [
          'Directed planning and execution of technical initiatives affecting multiple teams and business processes as Deputy IPT Lead, ensuring alignment across engineering, product, and business stakeholders.',
          "Managed a portfolio of five DARPA cybersecurity programs (~$300K each) as Contracting Officer's Representative (COR), owning scope, timelines, resources, and risk; reviewed and approved deliverables, invoices, and travel against contract terms.",
          'Spearheaded department-wide adoption of JIRA and Agile practices to improve delivery visibility and accountability; evaluated competing technical approaches and recommended process enhancements to management.',
          'Mentored junior engineers and interns, assigning priorities and evaluating work products; communicated program status, financial operations, and risk to leadership through briefings, dashboards, and metrics-driven updates.',
        ],
      },
    ],
  },
  {
    role: 'Analyst Programmer III',
    org: 'General Dynamics NASSCO',
    location: 'San Diego, CA',
    period: '10/2018 – 02/2024',
    sections: [
      {
        title: 'Cybersecurity & Compliance',
        highlights: [
          'Applied a security-first approach to permission models and access controls across the enterprise JIRA/Confluence platform, aligning configurations with corporate compliance and audit standards.',
          'Vetted, installed, and governed third-party applications for platform stability, performance, and security compliance; evaluated platform reliability and security, prioritizing a corrective backlog to address technical debt and configuration drift.',
          'Configured and supported SSO/authentication integrations between Active Directory/Azure and enterprise applications (PeopleSoft HR/payroll, Jira/Confluence), resolving login, access, and permissions issues for business stakeholders.',
        ],
      },
      {
        title: 'Programming & Engineering',
        highlights: [
          'Engineered SQL and REST API integrations, stored procedures, and data models supporting an enterprise platform serving 1,000+ users, integrating JIRA workflows with PeopleSoft HR and payroll systems.',
          'Developed automation rules and ScriptRunner/Groovy scripts that eliminated manual work and improved data quality across the enterprise JIRA/Confluence platform.',
          'Developed test strategies (CIT/UAT) ensuring data integrity and compliance across interconnected systems.',
          'Wrote PowerShell scripts to support account administration and operational tasks, reducing manual effort on recurring IT and application-support processes.',
          'Collaborated with new modules for an internal .NET MVC application, investigating and troubleshooting issues, and peer reviewing code.',
        ],
      },
      {
        title: 'Program & Project Management',
        highlights: [
          'Managed a team of 5 engineers as Team Lead and Scrum Master, facilitating Sprint Planning, Daily Stand-ups, Sprint Reviews, and Retrospectives; set priorities, coached performance, and removed impediments to keep delivery on track.',
          'Collaborated with product owners and stakeholders across HR, payroll, finance, and operations to maintain groomed, prioritized backlogs; executed 9 new implementations and supported 15+ projects through the full SDLC.',
          'Directed an enterprise ERP evaluation and selection as co-lead, coordinating vendor deliverables, performance expectations, and cost-benefit analysis, presenting recommendations to executive leadership.',
          'Streamlined operations as a Lean Specialist, directing five process improvement initiatives that increased operational efficiency by 25–50%.',
          'Created dashboards and project plans tracking delivery metrics, compliance status, and operational performance, providing timely status updates and actionable recommendations to leadership.',
        ],
      },
    ],
  },
  {
    role: 'Application Developer',
    org: 'San Diego Metropolitan Transit System (MTS)',
    location: 'San Diego, CA',
    period: '08/2015 – 02/2018',
    sections: [
      {
        title: 'Programming & Engineering',
        highlights: [
          'Redesigned a core enterprise application (est. $300K) independently at no external cost using ASP.NET, JavaScript, and Bootstrap across front-end, back-end, and database layers; reduced technical support demand by 50%.',
          'Designed SSRS audit and operational reporting enabling managers, VPs, board members, and the CEO to monitor KPIs and make data-informed decisions.',
        ],
      },
      {
        title: 'Program & Project Management',
        highlights: [
          'Collaborated with stakeholders and business analysts to define business and technical requirements, translating them into technical designs, implementation plans, and process documentation.',
          'Partnered with architects, DBAs, and infrastructure teams to deliver secure, reliable, scalable solutions compliant with enterprise standards; authored documentation and training for technical and non-technical users.',
        ],
      },
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
