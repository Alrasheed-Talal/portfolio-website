export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  category: 'mobile' | 'web' | 'automation';
  date: string;
}
