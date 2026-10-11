import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowUpRight, Sparkles, MapPin, Circle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* PROFILE PHOTO AREA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:col-span-5 flex justify-center order-1"
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[380px] aspect-[4/5] group">
              {/* Subtle glowing backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary/30 via-accent-blue/20 to-primary/10 rounded-2xl blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Main Structural Rectangular Card Container */}
              <div className="relative h-full w-full bg-surface-elevated rounded-2xl border border-surface-border overflow-hidden shadow-2xl flex flex-col">
                
                {/* Photo Container */}
                <div className="relative flex-grow bg-surface overflow-hidden">
                  <img
                    src={imageError ? PORTFOLIO_DATA.profile.avatarPlaceholder : PORTFOLIO_DATA.profile.avatarImage}
                    alt="Avijit Dagur"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => {
                      setImageError(true);
                    }}
                    loading="eager"
                  />

                  {/* Controlled Lighting Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

                  {/* Live Availability Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-md border border-surface-border">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-text-primary tracking-wide">
                      OPEN TO WORK
                    </span>
                  </div>

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-primary pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-primary pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-primary pointer-events-none" />
                </div>

                {/* Bottom Status Card: Name + Age only */}
                <div className="px-4 py-3 bg-surface/95 border-t border-surface-border relative z-20">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-text-primary text-sm sm:text-base font-bold tracking-tight truncate">
                      Avijit Dagur
                    </span>
                    <span className="shrink-0 px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold">
                      Age: 22
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* INTRODUCTION & ACTIONS */}
          <div className="w-full lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 order-2">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-surface-border text-xs font-mono text-text-secondary"
            >
              <Sparkles className="w-3 h-3 text-primary" />
              <span>Available for full-time & freelance</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.14]">
                Engineering Scalable Systems{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-accent-blue">
                  With Precision.
                </span>
              </h1>
            </motion.div>

            {/* Refined Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              A software developer specializing in
              <span className="text-text-primary font-semibold"> backend architecture</span>,
              <span className="text-text-primary font-semibold"> scalable web applications</span>, and
              <span className="text-text-primary font-semibold"> clean user experiences</span> that perform under real-world load.
            </motion.p>

            {/* Desktop-Only Supporting Context */}
            <div className="hidden lg:block space-y-4 pt-1">
              {/* Location + availability meta row */}
              <div className="flex items-center gap-5 pt-2 text-xs font-mono text-text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                  India · Remote-friendly
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                  Replying within 24h
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3.5 pt-2 sm:pt-3"
            >
              {/* Button 1: Download Resume */}
              <a
                href={PORTFOLIO_DATA.profile.links.resume}
                download="Avijit_Dagur_Resume.pdf"
                className="group relative inline-flex items-center justify-center space-x-2.5 px-6 py-3 text-sm font-semibold text-text-primary bg-surface/40 hover:bg-surface-elevated border border-primary/50 hover:border-primary rounded-xl shadow-sm hover:shadow-glow-violet/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Download className="w-4 h-4 text-primary group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Button 2: Get In Touch */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2.5 px-6 py-3 text-sm font-semibold text-text-secondary hover:text-text-primary bg-surface/20 hover:bg-surface border border-surface-border hover:border-accent-blue/50 rounded-xl shadow-sm hover:shadow-glow-blue/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
              >
                <Mail className="w-4 h-4 text-accent-blue group-hover:scale-110 transition-transform" />
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};