import { SkillCategory } from '@/types/skill';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React', level: 'advanced' },
      { name: 'React Native', level: 'advanced' },
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'HTML/CSS', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Flutter', level: 'intermediate' },
      { name: 'Dart', level: 'intermediate' }
    ]
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Firebase', level: 'advanced' },
      { name: 'Firestore', level: 'advanced' },
      { name: 'REST APIs', level: 'intermediate' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Cloud Functions', level: 'intermediate' }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 'advanced' },
      { name: 'GitHub', level: 'advanced' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'Vercel', level: 'intermediate' },
      { name: 'VS Code', level: 'advanced' }
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'intermediate' },
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'Dart', level: 'intermediate' }
    ]
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'Data Analysis', level: 'intermediate' },
      { name: 'Project Management', level: 'intermediate' },
      { name: 'Agile/SDLC', level: 'intermediate' },
      { name: 'Requirements Engineering', level: 'intermediate' }
    ]
  }
];
