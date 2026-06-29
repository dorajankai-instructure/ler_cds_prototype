// Sample data for the LER prototype — Maria Reyes
// All records target the Healthcare Administration Manager role at Stanford Health Care.

// ─── Learner ───────────────────────────────────────────────────────────────────

export const learner = {
  name: 'Maria Reyes',
  email: 'maria.reyes@email.com',
  initials: 'MR',
  role: 'student',
  institution: 'California Community College System',
}

// ─── Records list ──────────────────────────────────────────────────────────────

export const records = [
  {
    id: 'record-1',
    name: 'Healthcare Administration Application',
    target: 'Healthcare Administration Manager',
    status: 'Public',
    lastEdited: '2 days ago',
    credentialCount: 5,
    skillCount: 12,
    summaryExcerpt:
      'Experienced healthcare professional with a nursing certificate from San José City College and verified competencies in patient care coordination...',
  },
  {
    id: 'record-2',
    name: 'Graduate School — Public Health',
    target: null,
    status: 'Private',
    lastEdited: '3 weeks ago',
    credentialCount: 3,
    skillCount: 7,
    summaryExcerpt:
      'Associate degree graduate with clinical experience and community health coursework, applying for MPH programs...',
  },
  {
    id: 'record-3',
    name: 'General professional profile',
    target: null,
    status: 'Public',
    lastEdited: '1 month ago',
    credentialCount: 4,
    skillCount: 9,
    summaryExcerpt:
      'Versatile healthcare professional with a background in direct patient care, data analysis, and community health outreach...',
  },
]

// ─── Record detail — record 1 ──────────────────────────────────────────────────

export const recordDetail = {
  name: 'Healthcare Administration Application',
  target: 'Healthcare Administration Manager',
  employer: 'Stanford Health Care',
  status: 'Public',
  lastEdited: '2 days ago',
  views: 47,
}

// ─── Record at a glance ────────────────────────────────────────────────────────

export const recordGlance = {
  credentials: 5,
  skills: 12,
  achievements: 3,
  employmentEntries: 3,
  credentialTypes: [
    { label: 'Diploma', count: 1, color: '#27AE60' },
    { label: 'Certificate', count: 2, color: '#0770A3' },
    { label: 'Badge', count: 2, color: '#D97706' },
  ],
}

// ─── AI summary ────────────────────────────────────────────────────────────────

export const aiSummary = `Experienced healthcare professional with a nursing certificate from San José City College and verified competencies in patient care coordination and health data analysis. Holds an Associate of Science degree with academic honours and a workforce development badge in Health Information Systems from the California Workforce Development Board. Coursera certification in Data Analysis for Healthcare demonstrates applied data skills relevant to health systems management. Co-curricular record documents leadership in community health outreach across two years, including bilingual community engagement in English and Spanish. Currently seeking a transition into healthcare administration to improve the coordination and data systems that directly affect patient outcomes.`

export const aiSummaryAlternatives = [
  'Healthcare professional with three years of direct patient care experience at Valley Medical Center, transitioning into administration with verified data analysis and health information systems credentials. Bilingual in English and Spanish.',
  'Associate of Science graduate with nursing certification and two workforce development badges in Health Information Systems and Community Health Outreach. Published community health researcher with demonstrated EHR and care coordination experience.',
]

// ─── Credentials ───────────────────────────────────────────────────────────────

export const credentialSections = [
  {
    id: 'cred-section-1',
    name: 'Academic credentials & certifications',
    description: 'Verified credentials from accredited institutions.',
    credentials: [
      {
        id: 'cred-1',
        type: 'Diploma',
        title: 'Associate of Science, Health Sciences',
        issuer: 'San José City College',
        issuedDate: 'May 2024',
        expiresDate: null,
        verified: true,
        description:
          'This Associate of Science degree in Health Sciences from San José City College builds a foundation in human anatomy, physiology, medical terminology, and the structure of the U.S. healthcare system. Graduates are prepared for entry-level allied health roles and for further study in healthcare administration and public health.',
        criteria: [
          'Completion of 60 transferable college credit hours',
          'Minimum cumulative GPA of 2.0',
          'Completion of core health sciences coursework',
          'Fulfilment of general education requirements',
        ],
      },
      {
        id: 'cred-2',
        type: 'Certificate',
        title: 'Nursing Assistant Certificate',
        issuer: 'San José City College',
        issuedDate: 'December 2023',
        expiresDate: 'December 2025',
        verified: true,
        description:
          'This certificate verifies completion of the California-approved Nursing Assistant Training Program at San José City College. Recipients have demonstrated competency in patient care fundamentals, clinical documentation, infection control, and communication with healthcare teams.',
        criteria: [
          'Completion of 60 hours clinical training',
          'Passing written examination (minimum 70%)',
          'Skills demonstration assessment',
          'Background check clearance',
        ],
      },
      {
        id: 'cred-3',
        type: 'Certificate',
        title: 'Data Analysis for Healthcare',
        issuer: 'Coursera / Johns Hopkins University',
        issuedDate: 'March 2024',
        expiresDate: null,
        verified: true,
        description:
          'This certificate verifies completion of the Data Analysis for Healthcare specialization offered by Johns Hopkins University through Coursera. The program covers healthcare data structures, statistical analysis methods, data visualization, and the interpretation of clinical and operational health datasets.',
        criteria: [
          'Completion of all graded course modules',
          'Passing all module quizzes (minimum 80%)',
          'Completion of an applied data analysis capstone project',
          'Peer-reviewed final submission',
        ],
      },
    ],
  },
  {
    id: 'cred-section-2',
    name: 'Workforce badges',
    description: 'Digital badges earned through workforce development programmes.',
    credentials: [
      {
        id: 'cred-4',
        type: 'Badge',
        title: 'Health Information Systems',
        issuer: 'CA Workforce Development Board',
        issuedDate: 'August 2023',
        expiresDate: null,
        verified: true,
        description:
          'This workforce badge recognises demonstrated proficiency in health information systems, including electronic health record (EHR) platforms, health data standards, and the secure handling of patient information in compliance with HIPAA.',
        criteria: [
          'Completion of the health information systems training module',
          'Hands-on EHR platform assessment',
          'HIPAA compliance knowledge check',
          'Supervised practicum sign-off',
        ],
      },
      {
        id: 'cred-5',
        type: 'Badge',
        title: 'Community Health Outreach',
        issuer: 'San José City College',
        issuedDate: 'January 2024',
        expiresDate: null,
        verified: true,
        description:
          'This badge recognises verified participation and leadership in community health outreach programmes, including health education, screening events, and bilingual engagement with underserved populations across Santa Clara County.',
        criteria: [
          'Minimum 80 hours of documented outreach service',
          'Completion of community health education training',
          'Bilingual engagement competency',
          'Program supervisor evaluation',
        ],
      },
    ],
  },
]

// ─── Skills ────────────────────────────────────────────────────────────────────

// Default market-insights block, reused per skill with light variation. Every
// verified skill carries its own copy so the Talent Neuron tray has realistic,
// distinct numbers to render.
function marketData({
  hierarchy,
  relatedSkills,
  supply,
  demand,
  status,
  difficultyScore,
  difficultyLabel,
  popularityChange,
  median,
  p25,
  p75,
  topJobTitles,
}) {
  return {
    hierarchy,
    relatedSkills,
    supplyDemand: { supply, demand, status },
    hiringDifficulty: { score: difficultyScore, max: 10, label: difficultyLabel },
    popularity: { change: popularityChange, trend: 'up' },
    salaryRange: { median, p25, p75 },
    topJobTitles,
  }
}

export const skills = {
  // How verified skills are kept in sync with credentials. Surfaced in the
  // skills section edit modal as a radio group.
  syncMode: 'Automatic',
  verified: [
    {
      id: 'skill-1',
      name: 'Patient Care Coordination',
      backedBy: [
        'Nursing Assistant Certificate — San José City College',
        'Health Information Systems — CA Workforce Development Board',
      ],
      talentNeuron: {
        description:
          'Coordinating patient care activities across clinical teams to ensure continuity and quality of care.',
        marketDemand: 'High',
        relatedTitles: [
          'Care Coordinator',
          'Patient Services Manager',
          'Clinical Case Manager',
          'Health Services Coordinator',
        ],
      },
      market: marketData({
        hierarchy: ['Healthcare', 'Clinical Operations', 'Care Delivery', 'Patient Care Coordination'],
        relatedSkills: [
          { name: 'Case Management', count: 1240 },
          { name: 'Care Planning', count: 980 },
          { name: 'Discharge Planning', count: 640 },
          { name: 'Utilization Review', count: 410 },
          { name: 'Patient Advocacy', count: 320 },
        ],
        supply: 38, demand: 66, status: 'Talent shortage',
        difficultyScore: 7, difficultyLabel: 'High',
        popularityChange: '+40%',
        median: '$120k', p25: '$95k', p75: '$115k',
        topJobTitles: [
          { title: 'Care Coordinator', posts: 100 },
          { title: 'Patient Services Manager', posts: 72 },
          { title: 'Clinical Case Manager', posts: 58 },
          { title: 'Health Services Coordinator', posts: 41 },
        ],
      }),
    },
    {
      id: 'skill-2',
      name: 'Health Records Management',
      backedBy: ['Nursing Assistant Certificate — San José City College'],
      talentNeuron: {
        description:
          'Managing electronic and paper health records in compliance with HIPAA and institutional standards.',
        marketDemand: 'High',
        relatedTitles: [
          'Health Information Technician',
          'Medical Records Specialist',
          'EHR Analyst',
        ],
      },
      market: marketData({
        hierarchy: ['Healthcare', 'Health Information', 'Records Management', 'Health Records Management'],
        relatedSkills: [
          { name: 'HIPAA Compliance', count: 1510 },
          { name: 'EHR Systems', count: 1120 },
          { name: 'Medical Coding', count: 870 },
          { name: 'Data Governance', count: 390 },
        ],
        supply: 44, demand: 61, status: 'Talent shortage',
        difficultyScore: 6, difficultyLabel: 'Moderate',
        popularityChange: '+22%',
        median: '$72k', p25: '$58k', p75: '$84k',
        topJobTitles: [
          { title: 'Health Information Technician', posts: 90 },
          { title: 'Medical Records Specialist', posts: 64 },
          { title: 'EHR Analyst', posts: 47 },
          { title: 'HIM Coordinator', posts: 30 },
        ],
      }),
    },
    {
      id: 'skill-3',
      name: 'Data Analysis',
      backedBy: ['Data Analysis for Healthcare — Coursera / Johns Hopkins'],
      talentNeuron: {
        description:
          'Collecting, processing, and performing statistical analysis on healthcare datasets.',
        marketDemand: 'Very High',
        relatedTitles: [
          'Healthcare Data Analyst',
          'Business Intelligence Analyst',
          'Health Systems Analyst',
        ],
      },
      market: marketData({
        hierarchy: ['Technology', 'Data & Analytics', 'Statistical Analysis', 'Data Analysis'],
        relatedSkills: [
          { name: 'SQL', count: 4820 },
          { name: 'Data Visualization', count: 3110 },
          { name: 'Python', count: 2940 },
          { name: 'Statistical Modeling', count: 1650 },
          { name: 'Tableau', count: 1280 },
        ],
        supply: 52, demand: 98, status: 'Severe talent shortage',
        difficultyScore: 8, difficultyLabel: 'High',
        popularityChange: '+61%',
        median: '$98k', p25: '$76k', p75: '$124k',
        topJobTitles: [
          { title: 'Healthcare Data Analyst', posts: 100 },
          { title: 'Business Intelligence Analyst', posts: 88 },
          { title: 'Health Systems Analyst', posts: 67 },
          { title: 'Reporting Analyst', posts: 45 },
        ],
      }),
    },
    {
      id: 'skill-4',
      name: 'Medical Terminology',
      backedBy: ['Nursing Assistant Certificate — San José City College'],
      talentNeuron: {
        description:
          'Proficiency in clinical and administrative medical vocabulary across specialties.',
        marketDemand: 'Medium',
        relatedTitles: [
          'Medical Coder',
          'Clinical Documentation Specialist',
          'Health Information Coordinator',
        ],
      },
      market: marketData({
        hierarchy: ['Healthcare', 'Clinical Foundations', 'Medical Language', 'Medical Terminology'],
        relatedSkills: [
          { name: 'ICD-10 Coding', count: 980 },
          { name: 'CPT Coding', count: 740 },
          { name: 'Anatomy & Physiology', count: 520 },
          { name: 'Pharmacology', count: 310 },
        ],
        supply: 71, demand: 58, status: 'Balanced market',
        difficultyScore: 4, difficultyLabel: 'Low',
        popularityChange: '+9%',
        median: '$54k', p25: '$44k', p75: '$63k',
        topJobTitles: [
          { title: 'Medical Coder', posts: 80 },
          { title: 'Clinical Documentation Specialist', posts: 54 },
          { title: 'Health Information Coordinator', posts: 38 },
          { title: 'Medical Scribe', posts: 26 },
        ],
      }),
    },
    {
      id: 'skill-5',
      name: 'Health Information Systems',
      backedBy: ['Health Information Systems — CA Workforce Development Board'],
      talentNeuron: {
        description:
          'Implementation and management of digital systems for health data, including EHR platforms.',
        marketDemand: 'High',
        relatedTitles: [
          'Health IT Specialist',
          'Clinical Informatics Analyst',
          'EHR Implementation Consultant',
        ],
      },
      market: marketData({
        hierarchy: ['Technology', 'Health IT', 'Clinical Systems', 'Health Information Systems'],
        relatedSkills: [
          { name: 'Epic Systems', count: 2210 },
          { name: 'Cerner', count: 1430 },
          { name: 'HL7 / FHIR', count: 760 },
          { name: 'Clinical Informatics', count: 690 },
          { name: 'Systems Integration', count: 480 },
        ],
        supply: 41, demand: 79, status: 'Talent shortage',
        difficultyScore: 8, difficultyLabel: 'High',
        popularityChange: '+47%',
        median: '$88k', p25: '$69k', p75: '$108k',
        topJobTitles: [
          { title: 'Health IT Specialist', posts: 100 },
          { title: 'Clinical Informatics Analyst', posts: 73 },
          { title: 'EHR Implementation Consultant', posts: 55 },
          { title: 'Systems Administrator', posts: 34 },
        ],
      }),
    },
    {
      id: 'skill-6',
      name: 'Community Health',
      backedBy: ['Community Health Outreach — San José City College'],
      talentNeuron: {
        description:
          'Promoting health and wellness within community settings, with a focus on underserved populations.',
        marketDemand: 'Medium',
        relatedTitles: [
          'Community Health Worker',
          'Health Educator',
          'Public Health Coordinator',
        ],
      },
      market: marketData({
        hierarchy: ['Healthcare', 'Public Health', 'Community Programs', 'Community Health'],
        relatedSkills: [
          { name: 'Health Education', count: 870 },
          { name: 'Program Outreach', count: 540 },
          { name: 'Population Health', count: 460 },
          { name: 'Social Services', count: 290 },
        ],
        supply: 63, demand: 57, status: 'Balanced market',
        difficultyScore: 5, difficultyLabel: 'Moderate',
        popularityChange: '+18%',
        median: '$48k', p25: '$39k', p75: '$58k',
        topJobTitles: [
          { title: 'Community Health Worker', posts: 76 },
          { title: 'Health Educator', posts: 52 },
          { title: 'Public Health Coordinator', posts: 40 },
          { title: 'Outreach Specialist', posts: 28 },
        ],
      }),
    },
    {
      id: 'skill-7',
      name: 'Care Planning',
      backedBy: ['Nursing Assistant Certificate — San José City College'],
      talentNeuron: {
        description:
          'Developing and managing individualised care plans in collaboration with clinical teams.',
        marketDemand: 'High',
        relatedTitles: ['Care Planner', 'Case Manager', 'Clinical Care Coordinator'],
      },
      market: marketData({
        hierarchy: ['Healthcare', 'Clinical Operations', 'Care Delivery', 'Care Planning'],
        relatedSkills: [
          { name: 'Patient Care Coordination', count: 1180 },
          { name: 'Case Management', count: 990 },
          { name: 'Discharge Planning', count: 610 },
          { name: 'Care Transitions', count: 350 },
        ],
        supply: 40, demand: 64, status: 'Talent shortage',
        difficultyScore: 7, difficultyLabel: 'High',
        popularityChange: '+33%',
        median: '$68k', p25: '$55k', p75: '$80k',
        topJobTitles: [
          { title: 'Care Planner', posts: 84 },
          { title: 'Case Manager', posts: 70 },
          { title: 'Clinical Care Coordinator', posts: 49 },
          { title: 'Care Transition Coach', posts: 31 },
        ],
      }),
    },
    {
      id: 'skill-8',
      name: 'Clinical Documentation',
      backedBy: ['Nursing Assistant Certificate — San José City College'],
      talentNeuron: {
        description:
          'Accurate recording of clinical observations, patient interactions, and care interventions.',
        marketDemand: 'High',
        relatedTitles: [
          'Clinical Documentation Specialist',
          'Medical Transcriptionist',
          'Patient Records Coordinator',
        ],
      },
      market: marketData({
        hierarchy: ['Healthcare', 'Health Information', 'Clinical Records', 'Clinical Documentation'],
        relatedSkills: [
          { name: 'EHR Charting', count: 1340 },
          { name: 'CDI', count: 720 },
          { name: 'Medical Terminology', count: 680 },
          { name: 'Coding Compliance', count: 420 },
        ],
        supply: 47, demand: 68, status: 'Talent shortage',
        difficultyScore: 6, difficultyLabel: 'Moderate',
        popularityChange: '+27%',
        median: '$64k', p25: '$52k', p75: '$76k',
        topJobTitles: [
          { title: 'Clinical Documentation Specialist', posts: 92 },
          { title: 'Medical Transcriptionist', posts: 48 },
          { title: 'Patient Records Coordinator', posts: 39 },
          { title: 'CDI Specialist', posts: 33 },
        ],
      }),
    },
    {
      id: 'skill-9',
      name: 'Health Equity',
      backedBy: ['Community Health Outreach — San José City College'],
      talentNeuron: {
        description:
          'Addressing disparities in healthcare access and outcomes across populations.',
        marketDemand: 'High',
        relatedTitles: [
          'Health Equity Coordinator',
          'Public Health Specialist',
          'Community Liaison',
        ],
      },
      market: marketData({
        hierarchy: ['Healthcare', 'Public Health', 'Health Policy', 'Health Equity'],
        relatedSkills: [
          { name: 'Population Health', count: 760 },
          { name: 'Social Determinants of Health', count: 540 },
          { name: 'Community Engagement', count: 480 },
          { name: 'Health Policy', count: 360 },
          { name: 'Program Evaluation', count: 220 },
        ],
        supply: 36, demand: 71, status: 'Talent shortage',
        difficultyScore: 8, difficultyLabel: 'High',
        popularityChange: '+54%',
        median: '$76k', p25: '$60k', p75: '$94k',
        topJobTitles: [
          { title: 'Health Equity Coordinator', posts: 88 },
          { title: 'Public Health Specialist', posts: 61 },
          { title: 'Community Liaison', posts: 44 },
          { title: 'Policy Analyst', posts: 29 },
        ],
      }),
    },
  ],
  selfReported: [
    { id: 'skill-sr-1', name: 'Bilingual — English and Spanish' },
    { id: 'skill-sr-2', name: 'Team leadership' },
    { id: 'skill-sr-3', name: 'Cross-cultural communication' },
  ],
}

// ─── Rich text block ───────────────────────────────────────────────────────────

export const richTextBlock = {
  id: 'rich-text-1',
  title: 'Why healthcare administration',
  content: `After three years working as a Certified Nursing Assistant at Valley Medical Center, I saw the same problems repeat themselves: care coordination failures, outdated paper records sitting next to unused EHR systems, and patients falling through the gaps between departments. The clinical staff wanted to do their jobs well — the systems were getting in the way.

I want to move into administration to fix those systems from the inside. My data analysis certification and Health Information Systems badge give me the technical foundation to understand what's broken. My time on the floor gives me the context most administrators don't have — I know what a care transition looks like from the patient's bed, not just from a spreadsheet.

This record is targeted at healthcare administration roles where operational improvement, health data literacy, and equity-focused service delivery are central to the work.`,
}

// ─── Completions (Canvas Learning Achievements) ────────────────────────────────

export const completions = {
  id: 'completions-1',
  sectionName: 'Learning achievements',
  description: 'Completed programmes, courses, and outcomes from San José City College.',
  items: [
    {
      id: 'comp-1',
      type: 'Program completion',
      name: 'Health Sciences — Associate of Science pathway',
      institution: 'San José City College',
      completionDate: 'May 2024',
      creditHours: 60,
    },
    {
      id: 'comp-2',
      type: 'Course completion',
      name: 'Health Information Systems 201',
      institution: 'San José City College',
      completionDate: 'March 2025',
      creditHours: 3,
    },
    {
      id: 'comp-3',
      type: 'Outcome mastery',
      name: 'Electronic Health Record accuracy and compliance',
      institution: 'San José City College',
      completionDate: 'February 2025',
      proficiencyLevel: 'Exceeds standard',
    },
  ],
  // Candidate items the learner has earned but not yet added to this section.
  availableItems: [
    {
      id: 'comp-a1',
      type: 'Course completion',
      name: 'Medical Office Administration',
      institution: 'San José City College',
      completionDate: 'October 2024',
      creditHours: 3,
    },
    {
      id: 'comp-a2',
      type: 'Outcome mastery',
      name: 'Patient confidentiality and HIPAA practices',
      institution: 'San José City College',
      completionDate: 'September 2024',
      proficiencyLevel: 'Meets standard',
    },
    {
      id: 'comp-a3',
      type: 'Course completion',
      name: 'Introduction to Public Health',
      institution: 'San José City College',
      completionDate: 'June 2024',
      creditHours: 3,
    },
  ],
}

// ─── Coursework & artifacts (Evidence and Projects) ────────────────────────────

export const evidenceSection = {
  id: 'evidence-1',
  sectionName: 'Coursework & artifacts',
  description: 'Work produced during my studies and clinical training.',
  items: [
    {
      id: 'ev-1',
      type: 'Assignment',
      title: 'Patient Data Quality Audit',
      courseName: 'Health Information Systems 201',
      institution: 'San José City College',
      submissionDate: 'February 2025',
      source: 'Canvas',
    },
    {
      id: 'ev-2',
      type: 'Research',
      title: 'Health Outcome Disparities Across Santa Clara County Zip Codes',
      courseName: 'Community Health Research',
      institution: 'San José City College',
      submissionDate: 'April 2024',
      source: 'Canvas',
    },
    {
      id: 'ev-3',
      type: 'Portfolio item',
      title: 'Community Health Needs Assessment — Sacred Heart Service Area',
      courseName: null,
      institution: 'San José City College',
      submissionDate: 'April 2025',
      source: 'Canvas Portfolio',
    },
    {
      id: 'ev-4',
      type: 'Presentation',
      title: 'Patient Handoff Process Redesign — Quality Improvement Proposal',
      courseName: 'Healthcare Administration Fundamentals',
      institution: 'San José City College',
      submissionDate: 'November 2024',
      source: 'Canvas',
    },
  ],
  // Candidate items produced but not yet added to this section.
  availableItems: [
    {
      id: 'ev-a1',
      type: 'Assignment',
      title: 'Infection Control Protocol Review',
      courseName: 'Nursing Fundamentals',
      institution: 'San José City College',
      submissionDate: 'October 2023',
      source: 'Canvas',
    },
    {
      id: 'ev-a2',
      type: 'Presentation',
      title: 'Telehealth Adoption in Rural Clinics',
      courseName: 'Healthcare Administration Fundamentals',
      institution: 'San José City College',
      submissionDate: 'March 2025',
      source: 'Canvas',
    },
    {
      id: 'ev-a3',
      type: 'Portfolio item',
      title: 'Volunteer Reflection — Mobile Health Clinic',
      courseName: null,
      institution: 'San José City College',
      submissionDate: 'May 2025',
      source: 'Canvas Portfolio',
    },
  ],
}

// ─── Work history ──────────────────────────────────────────────────────────────

export const workHistory = {
  id: 'work-1',
  sectionName: 'Employment & experience',
  entries: [
    {
      id: 'work-entry-1',
      type: 'Employment',
      role: 'Certified Nursing Assistant',
      organisation: 'Valley Medical Center',
      startDate: 'January 2022',
      endDate: 'Present',
      description:
        'Provide direct patient care for a 30-bed medical-surgical unit. Coordinate with nursing staff on care plans and patient records. Trained two new CNAs on EHR documentation protocols. Reduced documentation errors by 18% through a peer feedback system I proposed and implemented.',
      link: null,
    },
    {
      id: 'work-entry-2',
      type: 'Internship',
      role: 'Medical Records Clerk',
      organisation: 'San José City College Health Clinic',
      startDate: 'September 2021',
      endDate: 'December 2022',
      description:
        'Maintained and updated patient records across paper and EHR systems. Assisted with insurance verification and data entry. Identified a filing backlog issue and designed a catch-up workflow that cleared 400+ outstanding records in six weeks.',
      link: null,
    },
    {
      id: 'work-entry-3',
      type: 'Volunteering',
      role: 'Community Health Outreach Volunteer',
      organisation: 'Sacred Heart Community Service',
      startDate: 'March 2023',
      endDate: 'Present',
      description:
        'Provide health information and referrals to community members in English and Spanish. Run monthly blood pressure screening clinics. Co-authored the 2025 community health needs assessment submitted to Santa Clara County Public Health Department.',
      link: null,
    },
  ],
}

// ─── Portfolio links ───────────────────────────────────────────────────────────

export const portfolioLinks = {
  id: 'portfolio-1',
  sectionName: 'Portfolio links',
  entries: [
    {
      id: 'link-1',
      title: 'Health Equity Data Analysis — Capstone project',
      type: 'External portfolio site',
      url: 'maria-reyes-portfolio.notion.so/health-equity-analysis',
      description:
        'Capstone project analysing health outcome disparities across zip codes in Santa Clara County using CDC public data.',
    },
    {
      id: 'link-2',
      title: 'Patient Handoff Redesign — Process improvement proposal',
      type: 'Case study',
      url: 'maria-reyes-portfolio.notion.so/handoff-redesign',
      description:
        'A process improvement proposal submitted to Valley Medical Center quality team. Estimated 12-minute reduction in average handoff time.',
    },
    {
      id: 'link-3',
      title: 'Community Health Needs Assessment 2025',
      type: 'Publication',
      url: 'publichealthscv.org/community-assessment-2025',
      description:
        'Co-authored assessment for Sacred Heart Community Service area, submitted to and cited by Santa Clara County Public Health Department.',
    },
  ],
}

// ─── Matching opportunities ────────────────────────────────────────────────────

export const matchingOpportunities = [
  {
    id: 'opp-1',
    role: 'Healthcare Administration Manager',
    organisation: 'Stanford Health Care',
    matchSignal: 'Strong match',
    matchNote: 'Health Information Systems badge and Data Analysis cert directly match 8 of 11 required skills.',
  },
  {
    id: 'opp-2',
    role: 'Health Systems Operations Manager',
    organisation: 'Sutter Health',
    matchSignal: 'Strong match',
    matchNote: 'CNA clinical background and EHR documentation skills align with operational requirements.',
  },
  {
    id: 'opp-3',
    role: 'Patient Services Director',
    organisation: 'Santa Clara Valley Medical Center',
    matchSignal: 'Good match',
    matchNote: 'Care coordination and community health skills match 6 of 10 required competencies.',
  },
]

// ─── Applied with this record ──────────────────────────────────────────────────

export const appliedOpportunities = [
  {
    id: 'applied-1',
    role: 'Healthcare Program Coordinator',
    organisation: 'Santa Clara Valley Health',
    dateApplied: 'June 2, 2026',
    link: '#',
  },
  {
    id: 'applied-2',
    role: 'Health Information Specialist',
    organisation: 'Kaiser Permanente',
    dateApplied: 'May 28, 2026',
    link: '#',
  },
  {
    id: 'applied-3',
    role: 'Healthcare Administration Manager',
    organisation: 'Stanford Health Care',
    dateApplied: 'June 10, 2026',
    link: '#',
  },
]
