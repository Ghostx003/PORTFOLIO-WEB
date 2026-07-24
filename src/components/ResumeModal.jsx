import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Devi Nayak - Resume</h3>
              <p className="text-[10px] text-slate-400 font-mono">B.Tech CSE • Full Stack &amp; DevOps</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.png"
              download="Devi_Nayak_Resume.png"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all"
            >
              <Download className="w-4 h-4" />
              Download PNG
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950/50 flex justify-center items-center">
          <img
            src="/resume.png"
            alt="Devi Nayak Resume"
            className="max-w-full h-auto rounded-xl shadow-2xl border border-white/10 object-contain"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-slate-900 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Email: nayakdevi8@gmail.com</span>
          <a href="https://github.com/Ghostx003" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
            GitHub Portfolio <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
