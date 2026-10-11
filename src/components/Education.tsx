import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle, Award, Building, Image as ImageIcon } from 'lucide-react';
import type { EducationItem } from '../data/portfolioData';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const EducationCard: React.FC<{ edu: EducationItem; index: number }> = ({ edu, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative bg-surface-elevated rounded-xl border overflow-hidden shadow-xl transition-all duration-300 ${
        edu.isCurrent
          ? 'border-primary shadow-lg'
          : 'border-surface-border hover:border-primary/50'
      }`}
    >
      {/* Top Academic Distinction Badge */}
      <div className="px-6 py-4 border-b border-surface-border bg-surface/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <span
            className={`px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest rounded-md border ${
              edu.isCurrent
                ? 'bg-emerald-500 text-white border-emerald-600 dark:bg-emerald-500 dark:text-white dark:border-emerald-400'
                : 'bg-primary text-white border-primary-dark dark:bg-primary dark:text-white dark:border-primary-light'
            }`}
          >
            {edu.status}
          </span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-text-secondary dark:text-text-primary flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary dark:text-primary-light" />
            {edu.period}
          </span>
        </div>

        <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-text-secondary dark:text-text-primary flex items-center">
          <Building className="w-3.5 h-3.5 mr-1.5 text-accent-blue dark:text-accent-blue" />
          <span>{edu.institution}</span>
        </div>
      </div>

      {/* Main Grid: Content + Campus Photography space */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
        
        {/* Left Information Panel */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            {/* BIG BOLD DEGREE TITLE */}
            <h3 className="text-2xl sm:text-[28px] lg:text-3xl font-black text-text-primary tracking-tight leading-[1.15]">
              {edu.degree}
            </h3>

            {/* Institution row */}
            <div className="flex items-center space-x-2 mt-2.5">
              <Award className="w-4 h-4 text-primary dark:text-primary-light shrink-0" />
              <span className="text-sm font-bold text-text-primary tracking-wide">
                {edu.institution}
              </span>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="pt-2">
            {/* Editorial micro-label — solid color, no opacity */}
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary dark:text-primary-light mb-3.5">
              // Curriculum Scope
            </h4>

            <ul className="space-y-3">
              {edu.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-start space-x-3 group/li">
                  <CheckCircle className="w-4 h-4 text-primary dark:text-primary-light shrink-0 mt-0.5 transition-transform group-hover/li:scale-110" />
                  <span className="text-[13.5px] leading-[1.7] text-text-secondary dark:text-text-primary tracking-[0.01em] group-hover/li:text-primary dark:group-hover/li:text-primary-light transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Campus Photography Showcase Panel */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border-2 border-primary/30 dark:border-primary/50 bg-surface shadow-lg group">
            <img
              src={imgError ? edu.imagePlaceholder : edu.image}
              alt={edu.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between z-10">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white flex items-center drop-shadow-md">
                <ImageIcon className="w-3 h-3 text-primary-light mr-1.5" />
                Campus Visual
              </span>
              <span className="text-[10px] font-mono font-bold tracking-wider text-white bg-black/80 px-2.5 py-1 rounded border border-white/30 backdrop-blur-sm">
                {edu.institution}
              </span>
            </div>
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-primary text-white border border-primary-dark dark:bg-primary/15 dark:text-primary-light dark:border-primary/40 text-[11px] font-mono font-bold uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-text-primary tracking-tight leading-[1.1]">
            Education{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent-blue dark:from-primary-light dark:via-primary dark:to-accent-blue">
              Pathway
            </span>
          </h2>
        </div>

        {/* Education Timeline Panels */}
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {PORTFOLIO_DATA.education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};