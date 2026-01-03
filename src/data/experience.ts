import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
  {
    id: 'anb-internship',
    company: 'Arab National Bank (ANB)',
    position: 'Frontend Developer',
    duration: '2 months',
    startDate: 'July 2024',
    endDate: 'August 2024',
    location: 'Riyadh, Saudi Arabia',
    type: 'internship',
    description: 'Summer internship developing business-critical applications and analytical dashboards for internal operations.',
    responsibilities: [
      'Developed employee announcement management application using React Native',
      'Created analytical dashboards for performance metrics using React.js',
      'Collaborated with cross-functional teams on feature implementation',
      'Documented technical specifications and user guides',
      'Participated in code reviews and agile development processes'
    ],
    achievements: [
      'Improved system efficiency by 30% through optimization',
      'Delivered production-ready features within tight deadlines',
      'Implemented role-based authentication system',
      'Created comprehensive admin analytics dashboard',
      'Successfully integrated with existing backend APIs'
    ],
    technologies: ['React Native', 'React.js', 'Firebase', 'REST APIs', 'JavaScript', 'Git']
  },
  {
    id: 'freelance-developer',
    company: 'Freelance',
    position: 'Software Developer',
    duration: '3 months',
    startDate: 'August 2025',
    endDate: 'October 2025',
    location: 'Remote',
    type: 'freelance',
    description: 'Custom software development focusing on automation and data processing solutions.',
    responsibilities: [
      'Developed custom Excel-to-PDF reporting system',
      'Implemented data cleansing and transformation pipelines',
      'Created user-friendly GUI for non-technical users',
      'Provided technical support and documentation',
      'Gathered requirements and delivered iterative improvements'
    ],
    achievements: [
      'Reduced manual report generation time by 75%',
      'Eliminated formatting errors in daily reports',
      'Successfully implemented Arabic RTL text rendering',
      'Delivered project ahead of schedule',
      'Received positive client feedback and testimonials'
    ],
    technologies: ['Python', 'ReportLab', 'Tkinter', 'Pandas', 'Excel Automation']
  }
];
