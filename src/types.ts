export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  featured: boolean;
  image: string;
  mockupType: 'laptop' | 'phone' | 'dashboard';
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  type: string; // 'Full-time' | 'Contract' | 'Remote'
  duration: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logoText: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gradeOrFocus: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
}
