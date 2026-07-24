import React from 'react';
import { ArrowRight, Download, Sparkles, Terminal, Code2, Server, Award, ChevronDown } from 'lucide-react';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Glowing Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide shadow-lg shadow-blue-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>GATE Prep 2026–2027 • Target: IIT Bombay 🏛️</span>
          </div>

          {/* Main Title & Role */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-gradient">Devi Nayak</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-gradient-cyan tracking-wide">
              Full Stack Dev &amp; DevOps Enthusiast
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Building <span className="text-white font-medium underline decoration-blue-500/50 underline-offset-4">scalable web applications</span> and solving real world problems with clean code, automated pipelines, and cloud-native solutions.
          </p>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Docker', 'AWS', 'Python', 'Kubernetes'].map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-blue-400/50 hover:text-blue-300 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              Explore My Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-200 glass-card hover:bg-white/10 rounded-xl border border-white/15 hover:border-blue-400/40 hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4 text-blue-400" />
              Download Resume
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 w-full">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">9+</span>
              <span className="text-xs text-slate-400 font-medium">Production Apps</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan">7.23</span>
              <span className="text-xs text-slate-400 font-medium">CGPA (KIIT CSE)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient">IIT Bombay</span>
              <span className="text-xs text-slate-400 font-medium">GATE Goal '27</span>
            </div>
          </div>
        </div>

        {/* Right Column: Photo & Clean Glass Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Main Photo Card */}
          <div className="relative group">
            
            <div className="relative glass-panel rounded-3xl p-3 sm:p-4 border border-white/10 shadow-2xl overflow-hidden">
              
              {/* Photo Frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="/profile.jpg"
                  alt="Devi Nayak"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 ease-out"
                />
                
                {/* Overlay Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Devi Nayak</p>
                    <p className="text-[10px] text-blue-400 font-mono">@Ghostx003</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center border border-blue-400/40">
                    <Code2 className="w-4 h-4 text-blue-300" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <a href="#about" className="mt-16 text-slate-400 hover:text-white transition-colors animate-bounce p-2">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
