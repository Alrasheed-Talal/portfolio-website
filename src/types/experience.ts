export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  type: 'internship' | 'freelance' | 'full-time';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}
