import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, Building2, Lock, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Category-specific subtle accent icons
const CertificateCategoryIcon: React.FC<{ category: 'java' | 'python' | 'analytics'; className?: string }> = ({
  category,
  className = 'w-4 h-4',
}) => {
  switch (category) {
    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 19c3 1.5 7 1.5 10 0M8 21c2.5 1 5.5 1 8 0" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 3c-1 3-3 4-1 7-2-2-1-4 1-7z" fill="#EF4444" opacity="0.9" />
          <path d="M15 6c-1 2-2 3-0.5 5-1.5-1.5-1-3 0.5-5z" fill="#F97316" opacity="0.9" />
          <path d="M5 14c4 1 10 1 14 0" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M11.9 2c-3.1 0-4.9.4-4.9 2.5v1.8h5v.6H5.2C3.1 6.9 2 8.7 2 11.8c0 3.3 1.3 4.9 3.8 4.9h1.2v-1.9c0-2.3 2-4.2 4.3-4.2h5V9.4c0-2.6-2.1-4.2-4.4-7.4zm-1.8 1.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
            fill="#3B82F6"
          />
          <path
            d="M12.1 22c3.1 0 4.9-.4 4.9-2.5v-1.8h-5v-.6h6.8c2.1 0 3.2-1.8 3.2-4.9 0-3.3-1.3-4.9-3.8-4.9H17v1.9c0 2.3-2 4.2-4.3 4.2h-5v1.2c0 2.6 2.1 4.2 4.4 7.4zm1.8-1.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
            fill="#FACC15"
          />
        </svg>
      );
    case 'analytics':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <circle cx="12" cy="4" r="1.5" fill="#06B6D4" />
        </svg>
      );
  }
};

export const CertificationsExperience: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 text-primary-light text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-primary" />
            <span>Credentials & Practical Exposure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            Certifications &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-accent-blue">
              Experience
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
            Verified knowledge milestones and industry internship exposure.
          </p>
        </div>

        {/* SECTION 1: CERTIFICATIONS GALLERY */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
              <Award className="w-4 h-4 text-primary" />
              <span>Verified Certifications</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy Protected
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-surface-elevated hover:bg-surface border border-surface-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col overflow-hidden"
              >
                <div className="relative w-full aspect-[16/11] bg-surface overflow-hidden border-b border-surface-border">
                  <img
                    src={cert.previewImage}
                    alt={`${cert.name} Preview`}
                    className="w-full h-full object-cover filter blur-[2px] scale-105 transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/50 flex flex-col items-center justify-center p-4 text-center select-none" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 space-y-2">
                    <div className="w-11 h-11 bg-black/75 border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:border-primary group-hover:text-primary-light transition-all duration-300 group-hover:scale-110">
                      <Lock className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 bg-black/85 border border-white/15 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-200 shadow-sm">
                      Protected Certificate
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5 z-20">
                    <div className="p-1.5 bg-black/80 border border-white/15 backdrop-blur-md">
                      <CertificateCategoryIcon category={cert.category} className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow space-y-3 bg-surface-elevated">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors tracking-tight leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-text-muted font-mono mt-1 uppercase tracking-wider">
                      Verified Curriculum Credential
                    </p>
                  </div>

                  <div className="pt-2 border-t border-surface-border flex items-center justify-between text-xs font-mono text-text-muted">
                    <span className="inline-flex items-center gap-1.5 text-emerald-500 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Credential Verified
                    </span>
                    <span className="text-[11px] text-text-muted">
                      Original Kept Private
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: INTERNSHIP EXPERIENCE — now with locked image preview */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
              <Briefcase className="w-4 h-4 text-accent-blue" />
              <span>Internship Experience</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy Protected
            </span>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bg-surface-elevated hover:bg-surface border border-surface-border hover:border-accent-blue/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* LEFT: Locked image preview (node.jpeg from /assets/) */}
                  <div className="lg:col-span-4 relative w-full aspect-[16/11] lg:aspect-auto lg:min-h-[220px] bg-surface overflow-hidden border-b lg:border-b-0 lg:border-r border-surface-border">
                    
                    {/* Blurred rasterized preview image */}
                    <img
                      src="/assets/node.jpeg"
                      alt={`${exp.role} Certificate Preview`}
                      className="w-full h-full object-cover filter blur-[2px] scale-105 transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                      loading="lazy"
                    />

                    {/* Dark translucent privacy overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/50 select-none" />

                    {/* Center Lock + Badge */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 space-y-2">
                      <div className="w-11 h-11 bg-black/75 border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:border-accent-blue group-hover:text-accent-blue transition-all duration-300 group-hover:scale-110">
                        <Lock className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 bg-black/85 border border-white/15 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-200 shadow-sm">
                        Protected Internship Proof
                      </span>
                    </div>

                    {/* Top-right category icon — Node.js style */}
                    <div className="absolute top-2.5 right-2.5 z-20">
                      <div className="p-1.5 bg-black/80 border border-white/15 backdrop-blur-md">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#68A063" opacity="0.9" />
                          <path d="M12 6l-5 3v6l5 3 5-3V9l-5-3z" fill="#0F0F0F" opacity="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Internship meta */}
                  <div className="lg:col-span-8 p-6 sm:p-7 space-y-4">
                    
                    {/* Header: Role, Company & Duration */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-text-secondary mt-1 font-medium">
                          <Building2 className="w-4 h-4 text-accent-blue shrink-0" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue font-mono text-xs font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.duration}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-4xl">
                      {exp.description}
                    </p>

                    {/* Skills tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 bg-surface border border-surface-border text-text-primary font-mono text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Verification footer — matches cert cards */}
                    <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs font-mono text-text-muted">
                      <span className="inline-flex items-center gap-1.5 text-emerald-500 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Internship Verified
                      </span>
                      <span className="text-[11px] text-text-muted">
                        Certificate Kept Private
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};