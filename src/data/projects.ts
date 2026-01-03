import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'kfupm-smart-bus',
    title: 'KFUPM Smart Bus Application',
    description: 'Real-time bus tracking system for university transportation with GPS tracking, arrival predictions, and crowdedness monitoring.',
    longDescription: 'Led a 6-person team to develop a comprehensive mobile application for KFUPM transportation department. The app provides real-time GPS tracking with 20m accuracy, bus arrival time estimation, crowdedness prediction using historical data, and event bus scheduling.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Dart', 'Firestore', 'Cloud Functions'],
    imageUrl: '/images/projects/smart-bus-cover.png',
    githubUrl: 'https://github.com/MalikAlharbi/kfupm_smart_bus_system',
    highlights: [
      'Real-time GPS tracking with 20m accuracy',
      'Bus arrival time estimation algorithm',
      'Crowdedness prediction using historical data',
      'Event bus scheduling system',
      'Comprehensive SRS and SDD documentation',
      'Integration with KFUPM Transportation Department APIs',
      'Led team through complete SDLC as Team Lead'
    ],
    category: 'mobile',
    date: '2024'
  },
  {
    id: 'anb-announcements',
    title: 'ANB Employee Announcements App',
    description: 'Business-critical announcement management system with role-based authentication, analytics dashboard, and real-time notifications.',
    longDescription: 'Developed during summer internship at Arab National Bank. Built a comprehensive announcement management system for internal communications with admin analytics, read status tracking, and advanced search capabilities.',
    technologies: ['React Native', 'React.js', 'Firebase', 'Firestore', 'REST APIs', 'JavaScript'],
    imageUrl: '/images/projects/ANB_logo.png',
    highlights: [
      'Role-based authentication system (Admin/User)',
      'Announcement management with pinning functionality',
      'Read status tracking for all employees',
      'Statistics dashboard for admins',
      'Search and filter capabilities',
      'Hijri/Gregorian calendar integration',
      'Improved system efficiency by 30%',
      'Delivered production-ready features'
    ],
    category: 'mobile',
    date: 'Jul-Aug 2024'
  },
  {
    id: 'excel-pdf-automation',
    title: 'Excel-to-PDF Automation System',
    description: 'Automated reporting system converting Excel data to professionally formatted PDF reports with Arabic RTL support.',
    longDescription: 'Freelance project to automate daily report generation for a client. Developed a Python-based system with GUI for converting Excel spreadsheets into formatted PDF reports with full Arabic language support and right-to-left text rendering.',
    technologies: ['Python', 'ReportLab', 'Tkinter', 'Pandas', 'arabic_reshaper', 'bidi'],
    imageUrl: '/images/projects/excel-pdf.svg',
    highlights: [
      'Arabic PDF generation with RTL support',
      'Data cleansing and aggregation from Excel',
      'User-friendly Tkinter interface',
      'Dynamic table sizing and formatting',
      'Reduced manual report generation time by 75%',
      'Eliminated formatting errors',
      'Automated daily operations tasks'
    ],
    category: 'automation',
    date: 'Aug-Oct 2025'
  }
];
