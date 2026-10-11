import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send, Phone, MapPin, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const EMAIL = 'avijitdagur80@gmail.com';
  const PHONE = '+91 8167-XXXX-48';
  const LOCATION = 'Kolkata, West Bengal, India';
  const GITHUB = 'https://github.com/AvijitDagur12';
  const LINKEDIN = 'https://www.linkedin.com/in/avijit-dagur-ab28b2362';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient lighting effects matching system colors */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-accent-blue/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-surface-elevated rounded-2xl border border-surface-border overflow-hidden shadow-xl transition-colors">

          {/* Top subtle bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-surface-border bg-surface/80 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary-light" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
              <span className="ml-3 text-[11px] font-mono font-bold uppercase tracking-widest text-text-muted">
                contact.sh
              </span>
            </div>
            <span className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              ACTIVE
            </span>
          </div>

          <div className="px-6 sm:px-12 py-10 sm:py-14 space-y-10">

            {/* HEADER BLOCK */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-primary-light">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-text-primary">
                Let's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-accent-blue">
                  Connect & Build
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Whether you have an opportunity, want to collaborate on a software project, or simply
                talk about technology — feel free to reach out directly.
              </p>
            </div>

            {/* CONTACT CHANNELS — 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* EMAIL CARD */}
              <div className="group relative bg-surface rounded-xl border border-surface-border hover:border-primary/50 p-5 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
                    aria-label="Copy email address"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-text-muted mb-1.5">
                  Direct Email
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-bold text-text-primary break-all hover:text-primary transition-colors block"
                >
                  {EMAIL}
                </a>
                {copied && (
                  <div className="mt-2 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500">
                    ✓ Copied to clipboard
                  </div>
                )}
              </div>

              {/* PHONE CARD */}
              <div className="group relative bg-surface rounded-xl border border-surface-border hover:border-primary/50 p-5 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-accent-blue group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    Available
                  </span>
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-text-muted mb-1.5">
                  Mobile Contact
                </div>
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="text-sm font-bold text-text-primary hover:text-primary transition-colors block"
                >
                  {PHONE}
                </a>
              </div>

              {/* LOCATION CARD */}
              <div className="group relative bg-surface rounded-xl border border-surface-border hover:border-primary/50 p-5 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted">
                    IST (UTC+5:30)
                  </span>
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-text-muted mb-1.5">
                  Location
                </div>
                <div className="text-sm font-bold text-text-primary leading-snug">
                  {LOCATION}
                </div>
              </div>

            </div>

            {/* PRIMARY CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${EMAIL}`}
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary rounded-xl shadow-md shadow-primary/25 hover:shadow-glow-violet transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>Send Direct Email</span>
              </a>
            </div>

            {/* SOCIAL CHANNELS */}
            <div className="pt-8 border-t border-surface-border">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-text-muted">
                  — Connect On Social Networks —
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">

                {/* GitHub */}
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 bg-surface rounded-xl border border-surface-border hover:border-primary/50 transition-all shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-surface-elevated border border-surface-border group-hover:bg-primary group-hover:text-white transition-colors">
                      <GithubIcon className="w-5 h-5 text-text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-text-primary tracking-wide">GitHub</div>
                      <div className="text-[10px] font-mono font-medium text-text-muted">
                        @AvijitDagur12
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* LinkedIn */}
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 bg-surface rounded-xl border border-surface-border hover:border-primary/50 transition-all shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-surface-elevated border border-surface-border group-hover:bg-accent-blue group-hover:text-white transition-colors">
                      <LinkedinIcon className="w-5 h-5 text-accent-blue group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-text-primary tracking-wide">LinkedIn</div>
                      <div className="text-[10px] font-mono font-medium text-text-muted">
                        in/avijit-dagur-ab28b2362
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};