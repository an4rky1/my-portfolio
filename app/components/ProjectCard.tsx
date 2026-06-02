'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

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

function posterFromVideo(video?: string): string | undefined {
  if (!video) return undefined;
  const match = video.match(/\/(\d+)\.mp4$/);
  return match ? `/projects/posters/${match[1]}.webp` : undefined;
}

export default function ProjectCard({
  title, color, status, statusBg, description, tags, hoverBg, video, codeLink, demoLink,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const preloadedRef = useRef(false);
  const canplayHandlerRef = useRef<(() => void) | null>(null);
  const [expanded, setExpanded] = useState(false);
  const poster = posterFromVideo(video);
  const [showPoster, setShowPoster] = useState(true);

  // start preloading video when card enters viewport
  useEffect(() => {
    if (!video || !cardRef.current || preloadedRef.current) return;
    const el = cardRef.current;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !preloadedRef.current) {
        preloadedRef.current = true;
        if (videoRef.current) {
          videoRef.current.preload = 'auto';
          videoRef.current.load();
        }
        // also preload via <link> for faster discovery
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = video;
        document.head.appendChild(link);
        obs.disconnect();
      }
    }, { rootMargin: '200px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [video]);

  const tryPlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => {
      setShowPoster(false);
    }).catch(() => {
      // video not ready yet — wait for canplay
      const onCanPlay = () => {
        v.removeEventListener('canplay', onCanPlay);
        v.play().then(() => setShowPoster(false)).catch(() => {});
      };
      v.addEventListener('canplay', onCanPlay);
      canplayHandlerRef.current = onCanPlay;
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!video) return;
    tryPlay();
  }, [video, tryPlay]);

  const handleMouseLeave = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setShowPoster(true);
    // clean up pending canplay handler
    if (canplayHandlerRef.current) {
      v.removeEventListener('canplay', canplayHandlerRef.current);
      canplayHandlerRef.current = null;
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="neo-card border-4 border-text-dark bg-bg-light shadow-neo overflow-hidden flex flex-col group h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* video / preview — fixed height */}
      {video ? (
        <div className="relative bg-black overflow-hidden border-b-4 border-text-dark shrink-0" style={{ height: '200px' }}>
          <div className={`absolute top-0 left-0 w-full h-1 z-10 ${color}`}></div>
          {/* poster — shown instantly, hidden when video plays */}
          {showPoster && poster && (
            <img
              src={poster}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-[1]"
            />
          )}
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
        <div className="relative bg-bg-light overflow-hidden flex items-center justify-center border-b-4 border-text-dark shrink-0" style={{ height: '200px' }}>
          <div className={`absolute top-0 left-0 w-full ${color} h-1`}></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%), linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
          <div className="flex flex-col items-center gap-2 z-10">
            <i className="fas fa-code text-4xl text-text-dark/20"></i>
            <span className="text-[10px] font-bold text-text-dark/20 uppercase tracking-widest">no preview</span>
          </div>
        </div>
      )}

      {/* content — fills remaining space evenly */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-2">
        {/* title + status */}
        <div className="flex items-start justify-between gap-3 shrink-0">
          <h3 className="text-base sm:text-lg font-bold text-text-dark break-all leading-tight flex items-center gap-2">
            <span className={`w-3 h-3 border-2 border-text-dark ${color} shadow-neo-sm shrink-0`}></span>
            {title}
          </h3>
          <span className={`inline-block px-2 py-1 border-2 border-text-dark text-[10px] font-bold ${statusBg} shadow-neo-sm shrink-0 leading-tight`}>
            {status}
          </span>
        </div>

        {/* description — fills available space, clamped at 3 lines */}
        <div className="flex-1 min-h-0">
          <p className={`text-xs sm:text-sm text-text-dark/70 leading-relaxed ${!expanded ? 'line-clamp-3' : ''}`}>
            {description}
          </p>
          {description.length > 130 && (
            <button
              onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
              className="text-acid-green font-bold text-[11px] hover:underline mt-0.5"
            >
              {expanded ? 'show_less()' : 'show_more()'}
            </button>
          )}
        </div>

        {/* tags — pinned to bottom, compact */}
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {tags.map((t, i) => {
            const tagColors = [
              'bg-blue-50 text-blue-700 border-blue-300',
              'bg-green-50 text-green-700 border-green-300',
              'bg-yellow-50 text-yellow-700 border-yellow-300',
              'bg-purple-50 text-purple-700 border-purple-300',
              'bg-pink-50 text-pink-700 border-pink-300',
              'bg-orange-50 text-orange-700 border-orange-300',
            ];
            const tc = tagColors[i % tagColors.length];
            return (
              <span
                key={t}
                className={`skill-tag inline-flex items-center gap-1 px-2 py-1 border-2 border-text-dark ${tc} text-[10px] font-bold shadow-neo-sm leading-tight cursor-default`}
              >
                <i className="fas fa-hashtag text-[8px] opacity-50"></i>
                {t}
              </span>
            );
          })}
        </div>

        {/* buttons — always at the bottom */}
        <div className="flex gap-3 shrink-0 pt-2 border-t-2 border-text-dark/10">
          {codeLink && codeLink !== '#' ? (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className={`neo-btn flex-1 text-center py-2.5 border-2 border-text-dark bg-bg-light text-sm font-bold shadow-neo-sm ${hoverBg} transition-all`}>
              <i className="fab fa-github mr-1.5"></i>code
            </a>
          ) : (
            <span className="neo-btn flex-1 text-center py-2.5 border-2 border-text-dark bg-gray-100 text-sm font-bold shadow-neo-sm opacity-50 cursor-not-allowed">
              <i className="fab fa-github mr-1.5"></i>code
            </span>
          )}
          {demoLink ? (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className={`neo-btn flex-1 text-center py-2.5 border-2 border-text-dark bg-bg-light text-sm font-bold shadow-neo-sm ${hoverBg} transition-all`}>
              <i className="fas fa-external-link-alt mr-1.5"></i>demo
            </a>
          ) : (
            <span className="neo-btn flex-1 text-center py-2.5 border-2 border-text-dark bg-gray-100 text-sm font-bold shadow-neo-sm opacity-50 cursor-not-allowed">
              <i className="fas fa-external-link-alt mr-1.5"></i>demo
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
