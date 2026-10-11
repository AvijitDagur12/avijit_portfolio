import React from 'react';
import { motion } from 'framer-motion';
import { Server, Target, Sparkles, Terminal, Code2, Database, GitBranch, Layers, Compass, Zap, Brain, GraduationCap, Rocket } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary-light text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
            How I think, what I build, and where I'm heading next.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-surface-elevated rounded-xl border border-surface-border p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl"
          >
            {/* Section label inside card */}
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
              <Compass className="w-3.5 h-3.5 text-primary" />
              <span>The Story</span>
            </div>

            {/* Bio Paragraphs (perfect, clean, professional) */}
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm sm:text-base">
              {PORTFOLIO_DATA.about.bio.map((paragraph, index) => (
                <p key={index} className="text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Principles / Focus highlights */}
            <div className="pt-6 border-t border-surface-border space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                <Zap className="w-3.5 h-3.5 text-accent-blue" />
                <span>What I Focus On</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-surface border border-surface-border hover:border-primary/30 transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Backend Engineering</h4>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                      Designing reliable APIs, structured data layers, and services that scale cleanly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-surface border border-surface-border hover:border-accent-blue/30 transition-colors">
                  <div className="p-2 rounded-md bg-accent-blue/10 text-accent-blue shrink-0">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">AI-Assisted Development</h4>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                      Using modern AI tools daily to build faster, debug smarter, and ship better code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-surface border border-surface-border hover:border-primary/30 transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">System Thinking</h4>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                      Breaking problems into clean, maintainable components before writing code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-surface border border-surface-border hover:border-accent-blue/30 transition-colors">
                  <div className="p-2 rounded-md bg-accent-blue/10 text-accent-blue shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Craft & Clarity</h4>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                      Writing code that reads well, not just runs — because teams scale on clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics & Objectives Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {PORTFOLIO_DATA.about.keyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-surface-elevated p-4 sm:p-5 rounded-xl border border-surface-border flex flex-col justify-between hover:border-primary/30 transition-colors shadow-lg"
                >
                  <span className="text-xs font-mono font-medium text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-text-primary mt-2">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Education Timeline Card (NEW) */}
            <div className="bg-surface-elevated p-5 rounded-xl border border-surface-border space-y-3 shadow-lg">
              <div className="flex items-center space-x-2 text-accent-blue">
                <GraduationCap className="w-4 h-4" />
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider font-mono">Education</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3 text-xs">
                  <div>
                    <p className="text-text-primary font-semibold text-sm">B.Tech — Computer Science & Engineering</p>
                    <p className="text-text-muted mt-0.5">Pursuing · Focus on software & AI systems</p>
                  </div>
                  <span className="shrink-0 px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-semibold">
                    2025 – 2028
                  </span>
                </div>

                <div className="h-px bg-surface-border" />

                <div className="flex items-start justify-between gap-3 text-xs">
                  <div>
                    <p className="text-text-primary font-semibold text-sm">Diploma — Computer Science</p>
                    <p className="text-text-muted mt-0.5">Completed with strong programming foundation</p>
                  </div>
                  <span className="shrink-0 px-2 py-0.5 rounded bg-accent-blue/10 border border-accent-blue/20 text-accent-blue font-mono text-[10px] font-semibold">
                    2022 – 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Objective Banner */}
            <div className="bg-surface-elevated p-6 rounded-xl border-l-4 border-l-primary border-t border-r border-b border-surface-border flex flex-col justify-between flex-grow space-y-3 shadow-lg">
              <div className="flex items-center space-x-2 text-primary">
                <Target className="w-5 h-5" />
                <h3 className="text-base font-bold text-text-primary">Career Target</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Open to any role where I can build, learn, and create real impact — whether it's
                software development, AI engineering, backend systems, or AI-assisted product work.
                I care more about the problem than the title.
              </p>

              {/* Role tags — broad, not narrow */}
              <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono font-medium">
                <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                  <Rocket className="w-3 h-3 text-primary" />
                  <span>Software Dev</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                  <Brain className="w-3 h-3 text-accent-blue" />
                  <span>AI / ML</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                  <Server className="w-3 h-3 text-primary" />
                  <span>Backend</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                  <Code2 className="w-3 h-3 text-accent-blue" />
                  <span>Frontend</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                  <Terminal className="w-3 h-3 text-primary" />
                  <span>Internships</span>
                </span>
              </div>

              {/* Toolbelt */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                  <Terminal className="w-3 h-3 text-primary" />
                  <span>Core Toolbelt</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono font-medium">
                  <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                    <Terminal className="w-3 h-3 text-primary" />
                    <span>Java · Spring Boot</span>
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                    <Database className="w-3 h-3 text-accent-blue" />
                    <span>SQL · DB Design</span>
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                    <GitBranch className="w-3 h-3 text-primary" />
                    <span>Git Workflows</span>
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface border border-surface-border text-text-primary flex items-center space-x-1.5 hover:border-primary/40 transition-colors">
                    <Brain className="w-3 h-3 text-accent-blue" />
                    <span>AI Tools (Daily)</span>
                  </span>
                </div>
              </div>

              {/* Availability micro-row */}
              <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs font-mono text-text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Open to opportunities
                </span>
                <span>Remote · On-site</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};