import React from 'react';
import { Target, Compass, Brain, Layers, Cpu, Award, Rocket, CheckCircle2 } from 'lucide-react';

const About = () => {
  const strengths = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Analytical Thinking & Problem Solving',
      description: 'Break down complex technical requirements into modular, scalable solutions with strong algorithmic backing.',
    },
    {
      icon: <Layers className="w-6 h-6 text-teal-400" />,
      title: 'Full-Stack Web Engineering',
      description: 'Expertise in modern frontend design systems (React/Tailwind) coupled with robust RESTful APIs & database models.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: 'DevOps & Cloud-Native Mindset',
      description: 'Hands-on experience with Docker, Kubernetes, AWS, CI/CD pipelines, and Linux server environments.',
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      title: 'Research & Product Strategy',
      description: 'A data-driven approach to product development, competitive analysis, and optimizing user workflows.',
    },
  ];

  const milestones = [
    "Computer Science & Engineering graduate from KIIT (2021-2025) with 7.23/10 CGPA.",
    "Built and deployed 9+ high-performance production apps and real business platforms (Moo Fresh, CourseFlix, TestFlix Pro, SoftPix).",
    "Actively preparing for GATE (2026-2027) with the target goal of joining IIT Bombay for M.Tech.",
    "Deep focus on DevOps tools, microservices, container orchestrations, and distributed systems."
  ];

  return (
    <section id="about" className="py-24 relative px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            Discover My Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Passionate engineer focused on engineering high-impact software, mastering distributed systems, and pursuing advanced research.
          </p>
        </div>

        {/* Top Story & IIT Bombay Goal Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Glass Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Rocket className="w-6 h-6 text-cyan-400" />
                Who I Am &amp; What Drives Me
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I am a Computer Science graduate from <span className="text-white font-semibold">KIIT (Kalinga Institute of Industrial Technology)</span> with a passion for software development and cloud operations. My technical journey spans across constructing scalable full-stack web applications, designing intuitive user experiences with modern glassmorphism UI, and setting up efficient DevOps workflows.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Whether it's building real business platforms like <span className="text-amber-300 font-mono">Moo Fresh</span>, interactive course viewers like <span className="text-cyan-300 font-mono">CourseFlix</span>, test analytics dashboards like <span className="text-teal-300 font-mono">TestFlix Pro</span>, or lightweight media platforms like <span className="text-emerald-300 font-mono">SoftPix</span>, I take pride in delivering production-ready, clean, and user-centric software.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              {milestones.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Goal Spotlight Card: Target IIT Bombay */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 border border-teal-500/30 bg-gradient-to-b from-teal-950/20 to-slate-950/60 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-500/30 transition-all"></div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-600/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
                <Award className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Next Destination</span>
                <h4 className="text-3xl font-extrabold text-white mt-1">
                  IIT Bombay Goal 🏛️
                </h4>
                <p className="text-xs text-teal-300 font-medium mt-1">GATE Preparation (2026–2027)</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Currently dedicating rigorous preparation for <span className="text-white font-semibold">GATE CS</span> to secure a Master's at <span className="text-teal-300 font-semibold">IIT Bombay</span>. My objective is to dive deeper into Advanced Systems Architecture, Distributed Cloud Systems, and Scalable Infrastructure Engineering.
              </p>
            </div>

            {/* Progress / Status Bar */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Preparation Track</span>
                <span className="text-teal-300 font-bold">2026 – 2027</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 w-3/4 rounded-full animate-pulse"></div>
              </div>
            </div>

          </div>

        </div>

        {/* Core Strengths Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white text-center">
            Core Strengths &amp; Engineering Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-teal-400/30 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
