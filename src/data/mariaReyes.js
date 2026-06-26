// Sample data for the LER prototype — Maria Reyes
// All records target the Healthcare Administration Manager role at Stanford Health Care.

// ─── Learner ───────────────────────────────────────────────────────────────────

export const learner = {
  name: 'Maria Reyes',
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
        verified: true,
      },
      {
        id: 'cred-2',
        type: 'Certificate',
        title: 'Nursing Assistant Certificate',
        issuer: 'San José City College',
        issuedDate: 'December 2023',
        verified: true,
      },
      {
        id: 'cred-3',
        type: 'Certificate',
        title: 'Data Analysis for Healthcare',
        issuer: 'Coursera / Johns Hopkins University',
        issuedDate: 'March 2024',
        verified: true,
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
        verified: true,
      },
      {
        id: 'cred-5',
        type: 'Badge',
        title: 'Community Health Outreach',
        issuer: 'San José City College',
        issuedDate: 'January 2024',
        verified: true,
      },
    ],
  },
]

// ─── Skills ────────────────────────────────────────────────────────────────────

export const skills = {
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
  sectionName: 'Canvas coursework',
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
