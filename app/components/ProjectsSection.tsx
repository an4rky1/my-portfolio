'use client';

import { useState, useEffect } from 'react';
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

function AnimatedCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
        transition: 'opacity 0.35s ease-out, transform 0.35s ease-out',
      }}
    >
      {children}
    </div>
  );
}

export default function ProjectsSection({ projects, initialCount }: Props) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, initialCount);

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p, i) => (
          i >= initialCount ? (
            <AnimatedCard key={p.title} delay={(i - initialCount) * 80}>
              <ProjectCard {...p} />
            </AnimatedCard>
          ) : (
            <div key={p.title}>
              <ProjectCard {...p} />
            </div>
          )
        ))}
      </div>
      {projects.length > initialCount && (
        <div className="flex justify-center mt-10">
          <button
            onClick={toggleShow}
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
