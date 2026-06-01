'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  color: string;
  status: string;
  statusBg: string;
  description: string;
  tags: string[];
  hoverBg: string;
  video?: string;
}

interface Props {
  projects: Project[];
  initialCount: number;
}

const colors = ['bg-acid-green', 'bg-acid-yellow', 'bg-acid-purple'] as const;
const statuses = [
  { status: '[status: production]', bg: 'bg-acid-green' },
  { status: '[status: in_development]', bg: 'bg-acid-yellow' },
  { status: '[status: refactoring]', bg: 'bg-purple-200 text-purple-900' },
] as const;
const hovers = ['hover:bg-acid-green', 'hover:bg-acid-yellow', 'hover:bg-purple-200'] as const;

export default function ProjectsSection({ projects, initialCount }: Props) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, initialCount);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
      {projects.length > initialCount && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="neo-btn inline-flex items-center gap-2 px-8 py-3 border-4 border-text-dark bg-bg-light text-text-dark font-bold shadow-neo text-sm hover:bg-acid-green"
          >
            {showAll ? (
              <>show_less() <i className="fas fa-chevron-up"></i></>
            ) : (
              <>show_more() ({projects.length - initialCount}) <i className="fas fa-chevron-down"></i></>
            )}
          </button>
        </div>
      )}
    </>
  );
}
