export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  domain: string;
  gitLink: string;
}

export interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export interface ProjectLinkBtnProp {
  project: Project;
}

export interface SkillProps {
  skill: string;
}

type Theme = "light" | "dark";

export interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}
