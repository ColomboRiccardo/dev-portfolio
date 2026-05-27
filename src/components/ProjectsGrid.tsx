"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} onClick={() => setSelected(p)} />
      ))}

      <ProjectModal
        open={selected !== null}
        onClose={() => setSelected(null)}
        project={selected}
      />
    </>
  );
}
