import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLivePreviewOpen, setIsLivePreviewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 selection:bg-blue-500 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* Sticky Glass Navbar - Automatically hidden during full screen live previews */}
      {!isLivePreviewOpen && (
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Timeline />
        <Projects onIframeToggle={(isOpen) => setIsLivePreviewOpen(isOpen)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Download / Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export default App;
