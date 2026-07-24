import React, { useState } from 'react';
import { ExternalLink, Layers, Play, Monitor, CheckCircle, Sparkles, X, Eye, Maximize2, RotateCw, Lock, ShieldCheck } from 'lucide-react';
import GithubIcon from './GithubIcon';

const VercelLiveCard = ({ project, onExpand }) => {
  const [key, setKey] = useState(0);
  const isVercelLive = project.liveUrl.includes('vercel.app');

  const handleRefresh = (e) => {
    e.stopPropagation();
    setKey((prev) => prev + 1);
  };

  return (
    <div className="relative glass-card rounded-2xl p-1.5 border border-white/20 shadow-2xl overflow-hidden group/card bg-slate-950">
      
      {/* Vercel Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 rounded-t-xl border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          {/* Vercel Triangle Icon */}
          <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 76 65">
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
          <div className="flex items-center gap-1.5 ml-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
        </div>

        {/* URL Bar */}
        <div className="flex-1 max-w-xs mx-2">
          <div className="flex items-center justify-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[11px] font-mono text-slate-300 truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-1.5">
          {isVercelLive && (
            <button
              onClick={handleRefresh}
              className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Refresh Live Demo"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={() => onExpand(project)}
            className="p-1 rounded-md bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white transition-colors"
            title="Expand Fullscreen Preview"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Embedded Live Frame / Card Body */}
      <div className="relative h-80 sm:h-96 w-full bg-slate-950 overflow-hidden rounded-b-xl">
        {isVercelLive ? (
          <iframe
            key={key}
            src={project.liveUrl}
            title={project.title}
            className="w-full h-full border-0 rounded-b-xl"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          ></iframe>
        ) : (
          /* Vercel Deployment Card for GitHub repo project */
          <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <h5 className="text-sm font-bold text-white">Vercel Deployment</h5>
                  <p className="text-[10px] text-slate-400 font-mono">Production • main branch</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Ready
              </span>
            </div>

            <div className="space-y-3 py-4">
              <span className="text-xs text-amber-400 font-mono uppercase tracking-wider block">Real Business E-Commerce</span>
              <h4 className="text-2xl font-extrabold text-white">{project.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{project.tagline}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View Code on GitHub
              </a>
              <button
                onClick={() => onExpand(project)}
                className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold hover:underline"
              >
                Full Details <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Floating Vercel Status Badge Overlay */}
        {isVercelLive && (
          <div className="absolute bottom-3 right-3 glass-panel px-3 py-1.5 rounded-xl border border-white/20 text-[11px] font-medium text-slate-200 shadow-xl flex items-center gap-2 backdrop-blur-md pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Interactive Demo</span>
          </div>
        )}
      </div>

    </div>
  );
};

const Projects = ({ onIframeToggle }) => {
  const [activeIframe, setActiveIframe] = useState(null);

  const openIframe = (project) => {
    setActiveIframe(project);
    if (onIframeToggle) onIframeToggle(true);
  };

  const closeIframe = () => {
    setActiveIframe(null);
    if (onIframeToggle) onIframeToggle(false);
  };

  const projectsList = [
    {
      id: 'courseflix',
      title: 'CourseFlix - Smart Learning Platform',
      tagline: 'Modern course viewing website & learner analytics platform',
      description: 'A feature-packed learning management hub designed to streamline online course consumption, track completion rates, and manage notes efficiently.',
      problemSolved: 'Solves disorganized online course study by aggregating scattered lessons, enabling progress tracking, custom bookmarks, and personalized study workflows.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Interactive Course Dashboard & Analytics',
        'Video Progress Tracking & Chapter Markers',
        'Personalized Bookmarks & Note-taking',
        'Custom Productivity Keyboard Shortcuts'
      ],
      liveUrl: 'https://courceflix-live.vercel.app/#dashboard-view',
      githubUrl: 'https://github.com/Ghostx003',
      badge: 'Featured EdTech',
      gradient: 'from-blue-600 to-indigo-600',
      accentColor: 'blue'
    },
    {
      id: 'testflix',
      title: 'TestFlix Pro - Test Analysis Platform',
      tagline: 'Intelligent exam performance analytics & diagnostic dashboard',
      description: 'An advanced analytics dashboard built for students to visualize test performance across subjects, topics, and difficulty levels.',
      problemSolved: 'Transforms raw exam scores into actionable diagnostic insights, helping learners instantly pinpoint weak chapters and track accuracy over time.',
      techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Data Analytics', 'Recharts'],
      features: [
        'Subject, Topic & Chapter Accuracy Visualization',
        'Comprehensive Test Performance Analytics',
        'Historical Score Trend Analysis',
        'Actionable Diagnostic Improvement Reports'
      ],
      liveUrl: 'https://testflix-pro.vercel.app/app',
      githubUrl: 'https://github.com/Ghostx003',
      badge: 'Analytics Suite',
      gradient: 'from-purple-600 to-pink-600',
      accentColor: 'purple'
    },
    {
      id: 'softpix',
      title: 'SoftPix - Photo Viewer & Shuffler',
      tagline: 'Lightning-fast, lightweight Google Photos alternative',
      description: 'A modern, high-aesthetic web photo gallery and smart shuffler that lets users view, organize, and present their media with fluid transitions.',
      problemSolved: 'Provides a privacy-friendly, zero-bloat photo viewing experience with instant image previewing, smart album shuffling, and smooth layout grids.',
      techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Web APIs'],
      features: [
        'Fluid Responsive Image Grid & Lightbox',
        'Smart Photo Shuffler & Slide Animations',
        'Instant Full-Screen High-Res Previewer',
        'Ultra-Fast Loading & Zero-Lag Media Navigation'
      ],
      liveUrl: 'https://softpix.vercel.app/',
      githubUrl: 'https://github.com/Ghostx003',
      badge: 'Google Photos Alternative',
      gradient: 'from-emerald-600 to-teal-600',
      accentColor: 'emerald'
    },
    {
      id: 'moofresh',
      title: 'Moo Fresh - Pure Dairy E-Commerce Platform',
      tagline: 'Real business platform delivering 100% unadulterated cow milk directly to homes',
      description: 'A purpose-built, accessible e-commerce platform designed to streamline daily doorstep milk subscriptions for middle-aged families with zero interface bloat.',
      problemSolved: 'Eliminates milk adulteration & water mixing, ensures reliable doorstep morning delivery, and provides transparent, fair, and consistent daily pricing.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'E-Commerce APIs'],
      features: [
        '100% Pure Unadulterated Farm Milk Guarantee (0% Water)',
        'Direct Home-to-Home Reliable Morning Delivery',
        'Family-Friendly Accessible UI (Simple & Zero Clutter)',
        'Flexible Subscription & Transparent Daily Pricing'
      ],
      liveUrl: 'https://moo-fresh.vercel.app/',
      githubUrl: 'https://github.com/Ghostx003/mooFresh',
      badge: 'Real Business E-Commerce',
      gradient: 'from-amber-500 via-orange-500 to-emerald-600',
      accentColor: 'amber'
    }
  ];

  return (
    <section id="projects" className="py-24 relative px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Projects &amp; <span className="text-gradient">Live Applications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Explore live production applications featuring modern architectures, intuitive glass UI, and real-world problem solving.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-blue-400/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header Pills */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-md`}>
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Web App
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description & Problem Solved */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>{project.description}</p>
                  <div className="p-4 rounded-2xl glass-card border border-white/10 bg-white/5">
                    <span className="text-xs font-mono font-bold text-blue-300 block mb-1">
                      💡 PROBLEM SOLVED:
                    </span>
                    <p className="text-xs text-slate-300">{project.problemSolved}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Features</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-500/25 hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Website
                  </a>

                  <button
                    onClick={() => openIframe(project)}
                    className="flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-200 glass-card hover:bg-white/10 rounded-xl border border-white/15 hover:scale-105 transition-all"
                  >
                    <Maximize2 className="w-4 h-4 text-purple-400" />
                    Expand Fullscreen Demo
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-xs font-bold text-slate-400 hover:text-white transition-colors ml-auto"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Repo
                  </a>
                </div>

              </div>

              {/* Right Column: Vercel Live Preview Card Simulator */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <VercelLiveCard project={project} onExpand={openIframe} />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Fullscreen Embedded Iframe Modal */}
      {activeIframe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-7xl h-[92vh] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Browser Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-white/10">
              <div className="flex items-center gap-3">
                {/* Vercel Icon */}
                <svg className="w-4 h-4 fill-white" viewBox="0 0 76 65">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
                <div className="flex items-center gap-1.5">
                  <button onClick={closeIframe} className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80"></button>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-bold text-white hidden sm:inline ml-2">{activeIframe.title}</span>
              </div>

              <div className="flex-1 max-w-xl mx-4">
                <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-xs font-mono text-slate-300 px-4 py-1.5 rounded-xl text-center truncate">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate">{activeIframe.liveUrl}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeIframe.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open New Tab</span>
                </a>
                <button
                  onClick={closeIframe}
                  className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Fullscreen Embedded Iframe */}
            <div className="flex-1 w-full bg-white relative">
              <iframe
                src={activeIframe.liveUrl}
                title={activeIframe.title}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
