import { useCallback, useState } from "react";
import { Project } from "../utils/types";

export function useProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelect = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);
  const handleClose = useCallback(() => setSelectedProject(null), []);
  return { handleSelect, handleClose, selectedProject };
}
