import React, { useState } from 'react';
import { Wrench } from 'lucide-react';
import type { SkillItem } from '../data/portfolioData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

const TechItemCard: React.FC<{ item: SkillItem }> = ({ item }) => {
  return (
    <div className="flex items-center space-x-2.5 sm:space-x-3 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-surface-elevated hover:bg-surface border border-surface-border hover:border-primary/40 rounded-lg shadow-sm hover:shadow-glow-violet/20 transition-all duration-200 select-none shrink-0 group">
      <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
        <TechIcon id={item.id} className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <span className="text-xs sm:text-sm font-medium text-text-primary whitespace-nowrap group-hover:text-primary transition-colors">
        {item.name}
      </span>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  // Duplicated exactly once (list + duplicate) for the CSS translate3d(-50%) infinite marquee
  const row1Items = [...PORTFOLIO_DATA.skillsRow1, ...PORTFOLIO_DATA.skillsRow1];
  const row2Items = [...PORTFOLIO_DATA.skillsRow2, ...PORTFOLIO_DATA.skillsRow2];

  return (
    <section id="skills" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary-light text-xs font-mono font-semibold uppercase tracking-wider mb-2">
          <Wrench className="w-3.5 h-3.5" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
          Skills & Technologies
        </h2>
      </div>

      {/* CENTERED Marquee Track — contained within max-w-7xl, equal padding both sides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full space-y-3.5 sm:space-y-4">
          
          {/* Left and Right Vignette Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* ROW 1: Continuously moving LEFT to RIGHT */}
          <div
            className="overflow-x-auto overflow-y-hidden w-full no-scrollbar touch-pan-x"
            onMouseEnter={() => setIsPausedRow1(true)}
            onMouseLeave={() => setIsPausedRow1(false)}
            onTouchStart={() => setIsPausedRow1(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPausedRow1(false), 800);
            }}
          >
            <div
              className={`flex flex-nowrap space-x-3 sm:space-x-4 w-max py-1 animate-marquee-rtl ${
                isPausedRow1 ? '[animation-play-state:paused]' : ''
              }`}
            >
              {row1Items.map((item, idx) => (
                <TechItemCard key={`row1-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* ROW 2: Continuously moving RIGHT to LEFT */}
          <div
            className="overflow-x-auto overflow-y-hidden w-full no-scrollbar touch-pan-x"
            onMouseEnter={() => setIsPausedRow2(true)}
            onMouseLeave={() => setIsPausedRow2(false)}
            onTouchStart={() => setIsPausedRow2(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPausedRow2(false), 800);
            }}
          >
            <div
              className={`flex flex-nowrap space-x-3 sm:space-x-4 w-max py-1 animate-marquee-ltr ${
                isPausedRow2 ? '[animation-play-state:paused]' : ''
              }`}
            >
              {row2Items.map((item, idx) => (
                <TechItemCard key={`row2-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};