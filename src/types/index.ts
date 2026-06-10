export interface Skill {
  category: string;
  icon: string;
  color: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string | null;
  category: string;
  highlight: boolean;
}

export interface Education {
  degree: string;
  shortDeg: string;
  institution: string;
  period: string;
  score: string;
  highlight: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  id: string;
  icon: string;
  color: string;
  url: string;
}
