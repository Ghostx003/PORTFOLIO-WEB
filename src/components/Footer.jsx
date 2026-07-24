import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
            DN
          </div>
          <div>
            <h4 className="font-bold text-white text-base">DEVI NAYAK</h4>
            <p className="text-xs text-slate-400 font-mono">Full Stack Dev &amp; DevOps Enthusiast</p>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <button onClick={onOpenResume} className="hover:text-white transition-colors">Resume</button>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: Social & Scroll to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ghostx003"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:nayakdevi8@gmail.com"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-400/30 transition-all hover:scale-105"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Devi Nayak. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> using React, Tailwind CSS &amp; Glassmorphism UI
        </span>
      </div>
    </footer>
  );
};

export default Footer;
