'use client';

import { useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  color: string;
  status: string;
  statusBg: string;
  description: string;
  tags: string[];
  hoverBg: string;
  video?: string;
  codeLink?: string;
  demoLink?: string;
}

const TRUNCATE_LENGTH = 100;

export default function ProjectCard({
  title, color, status, statusBg, description, tags, hoverBg, video, codeLink, demoLink,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [expanded, setExpanded] = useState(false);
  const truncated = description.length > TRUNCATE_LENGTH;
  const displayDesc = truncated && !expanded ? description.slice(0, TRUNCATE_LENGTH) + '...' : description;

  const play = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
  };

  const pause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="neo-card border-4 border-text-dark bg-bg-light shadow-neo overflow-hidden flex flex-col"
      onMouseEnter={play}
      onMouseLeave={pause}
    >
      {video ? (
        <div className="relative bg-black overflow-hidden" style={{ height: '200px' }}>
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="relative bg-bg-light overflow-hidden flex items-center justify-center border-b-2 border-text-dark" style={{ height: '200px' }}>
          <div className={`absolute top-0 left-0 w-full ${color} h-3`}></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%), linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
          <div className="flex flex-col items-center gap-2 z-10">
            <i className="fas fa-code text-4xl text-text-dark/20"></i>
            <span className="text-[10px] font-bold text-text-dark/20 uppercase tracking-widest">no preview</span>
          </div>
        </div>
      )}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base sm:text-lg font-bold text-text-dark break-all leading-tight">
            <i className={`fas fa-folder ${color} mr-2`}></i>
            {title}
          </h3>
          <span className={`inline-block px-2 py-1 border-2 border-text-dark text-[10px] font-bold ${statusBg} shadow-neo-sm shrink-0 ml-2 leading-tight`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-text-dark/70 leading-relaxed">
          {displayDesc}
          {truncated && (
            <button
              onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
              className="ml-1 text-acid-green font-bold hover:underline"
            >
              {expanded ? 'show_less()' : 'show_more()'}
            </button>
          )}
        </p>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t} className="px-2 py-1 border-2 border-text-dark text-[10px] font-bold bg-bg-light leading-tight">{t}</span>
            ))}
          </div>
          <div className="flex gap-3">
            {codeLink && codeLink !== '#' ? (
              <a href={codeLink} target="_blank" rel="noopener noreferrer" className={`neo-btn flex-1 text-center py-2 border-2 border-text-dark bg-bg-light text-sm font-bold shadow-neo-sm ${hoverBg}`}>
                <i className="fab fa-github mr-1"></i>code
              </a>
            ) : (
              <span className="neo-btn flex-1 text-center py-2 border-2 border-text-dark bg-bg-light text-sm font-bold shadow-neo-sm opacity-50 cursor-not-allowed">
                <i className="fab fa-github mr-1"></i>code
              </span>
            )}
            {demoLink ? (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className={`neo-btn flex-1 text-center py-2 border-2 border-text-dark bg-bg-light text-sm font-bold shadow-neo-sm ${hoverBg}`}>
                <i className="fas fa-external-link-alt mr-1"></i>demo
              </a>
            ) : (
              <span className="neo-btn flex-1 text-center py-2 border-2 border-text-dark bg-bg-light text-sm font-bold shadow-neo-sm opacity-50 cursor-not-allowed">
                <i className="fas fa-external-link-alt mr-1"></i>demo
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
