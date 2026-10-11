import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, Layers, ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

// Minimalist Card Component: Image, Name, GitHub Link and Live Demo Link
const ProjectCard: React.FC<{
  project: Project;
  onCardClick: () => void;
}> = ({ project, onCardClick }) => {
  const [imgError, setImgError] = useState(false);

  const getFallbackSvg = (id: string) => {
    switch (id) {
      case 'digital-panchayat-portal':
        return '/assets/projects/panchayat-preview.svg';
      case 'ztag':
        return '/assets/projects/ztag-preview.svg';
      default:
        return '/assets/projects/moneytrack-preview.svg';
    }
  };

  return (
    <div
      onClick={onCardClick}
      className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 bg-surface-elevated rounded-xl border border-surface-border hover:border-primary/50 shadow-lg overflow-hidden flex flex-col transition-all duration-300 group select-none cursor-pointer"
    >
      {/* High-quality Project Screenshot/Preview */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-surface border-b border-surface-border">
        <img
          src={imgError ? getFallbackSvg(project.id) : (project.imagePath || getFallbackSvg(project.id))}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Content: Project Name + GitHub Link & Live Demo Link */}
      <div className="p-4 flex items-center justify-between gap-3 bg-surface-elevated">
        <h3 className="text-base sm:text-lg font-bold text-text-primary tracking-tight truncate group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Action Links: GitHub and Live Demo */}
        <div className="flex items-center space-x-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary bg-surface hover:bg-surface-elevated border border-surface-border hover:border-primary/40 transition-colors"
              title="View GitHub Repository"
              aria-label={`View ${project.title} GitHub Repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary-dark transition-colors px-3 py-1.5 rounded-lg shadow-sm"
              title="Open Live Demo"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Detect if content overflows — only then enable auto-scroll
  useEffect(() => {
    const checkOverflow = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const hasOverflow = container.scrollWidth > container.clientWidth + 4;
      setShouldAutoScroll(hasOverflow);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  // Continuous Right-to-Left auto-scrolling ticker — ONLY if content overflows
  useEffect(() => {
    if (prefersReducedMotion || !shouldAutoScroll) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      const container = scrollContainerRef.current;
      if (container && !isPaused && !isInteractingRef.current) {
        // Continuous smooth movement: ~42px per second
        container.scrollLeft += delta * 0.042;

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, prefersReducedMotion, shouldAutoScroll]);

  // Pause on click with smooth resume after 3.5 seconds
  const handleCardClick = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 3500);
  };

  // NO duplication — show each project exactly once
  const displayProjects = PORTFOLIO_DATA.projects;

  const handleScrollManual = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Header — inside the max-width container so it stays aligned */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary-light text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-text-muted max-w-xl">
              A few things I've designed, built, and shipped — from backend systems to full products.
            </p>
          </div>

          {/* Carousel Controls — only show Play/Pause if auto-scroll is active */}
          <div className="flex items-center space-x-2.5 self-start sm:self-auto">
            {shouldAutoScroll && !prefersReducedMotion && (
              <button
                onClick={() => setIsPaused(!isPaused)}
                type="button"
                className="px-3 py-1.5 rounded-lg bg-surface-elevated hover:bg-surface border border-surface-border text-xs font-mono text-text-secondary hover:text-text-primary flex items-center space-x-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={isPaused ? 'Resume scroll' : 'Pause scroll'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-primary" />}
                <span>{isPaused ? 'Play' : 'Pause'}</span>
              </button>
            )}

            <button
              onClick={() => handleScrollManual('left')}
              type="button"
              className="p-1.5 rounded-lg bg-surface-elevated hover:bg-surface border border-surface-border text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollManual('right')}
              type="button"
              className="p-1.5 rounded-lg bg-surface-elevated hover:bg-surface border border-surface-border text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CENTERED Carousel Track — contained within max-w-7xl, equal padding both sides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => {
            setIsPaused(true);
            isInteractingRef.current = true;
          }}
          onMouseLeave={() => {
            setIsPaused(false);
            isInteractingRef.current = false;
          }}
          onTouchStart={() => {
            isInteractingRef.current = true;
          }}
          onTouchEnd={() => {
            setTimeout(() => {
              isInteractingRef.current = false;
            }, 1000);
          }}
          className="flex space-x-5 overflow-x-auto py-2 cursor-grab active:cursor-grabbing no-scrollbar touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};