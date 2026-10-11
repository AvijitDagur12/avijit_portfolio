import React from 'react';
import { ArrowUp, Mail, Heart, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  const socials = [
    {
      name: 'GitHub',
      handle: '@AvijitDagur12',
      href: 'https://github.com/AvijitDagur12',
      Icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      handle: 'in/avijit-dagur',
      href: 'https://www.linkedin.com/in/avijit-dagur-ab28b2362',
      Icon: LinkedinIcon,
    },
  ];

  return (
    <footer className="relative bg-surface border-t border-surface-border overflow-hidden transition-colors">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 blur-3xl pointer-events-none" />

      {/* Top subtle gradient highlight line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

        {/* TOP: 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 items-start">

          {/* COLUMN 1 — Brand info */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent-blue flex items-center justify-center text-white font-bold text-base shadow-md shadow-primary/20">
                AD
              </div>
              <div>
                <div className="text-base font-bold text-text-primary tracking-tight leading-tight">
                  {PORTFOLIO_DATA.profile.name}
                </div>
                <div className="text-xs text-text-muted font-mono">
                  Software Developer & B.Tech Student
                </div>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              Computer Science and Engineering student dedicated to crafting reliable software, clean backend architectures, and impactful web solutions.
            </p>

            {/* Location + Live Status */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted">
                <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                Kolkata, India
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* COLUMN 2 — Connect & Fast links */}
          <div className="md:col-span-5 space-y-3 md:text-right">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-text-muted">
              Connect With Me
            </h3>

            {/* Social links row */}
            <div className="flex flex-wrap md:justify-end gap-3 pt-1">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-elevated border border-surface-border hover:border-primary/50 text-text-secondary hover:text-text-primary transition-all text-xs font-semibold shadow-sm"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{name}</span>
                </a>
              ))}

              <a
                href={`mailto:${PORTFOLIO_DATA.profile.links.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-elevated border border-surface-border hover:border-accent-blue/50 text-text-secondary hover:text-text-primary transition-all text-xs font-semibold shadow-sm"
              >
                <Mail className="w-4 h-4 text-accent-blue" />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-surface-border mb-6" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <div className="text-xs text-text-muted text-center sm:text-left">
            © {year} {PORTFOLIO_DATA.profile.name}. All rights reserved.
          </div>

          {/* Built with */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated border border-surface-border hover:border-primary/50 text-text-secondary hover:text-text-primary transition-all text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>

        </div>

      </div>
    </footer>
  );
};