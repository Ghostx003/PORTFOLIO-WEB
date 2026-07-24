import React from 'react';
import { Calendar, GraduationCap, Target, Award, BookOpen, ChevronRight, Check } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      year: '2021 – 2025',
      title: 'Bachelor of Technology (B.Tech) - Computer Science & Engineering',
      institution: 'Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar',
      grade: 'CGPA: 7.23 / 10',
      type: 'Education',
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      badgeColor: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300',
      details: [
        'Specialized in Computer Science Core, Data Structures, Algorithms, Web Engineering & Database Management.',
        'Built full-stack production platforms (CourseFlix, TestFlix Pro, SoftPix) using MERN stack and modern UI frameworks.',
        'Gained hands-on proficiency in DevOps practices including containerization with Docker and cloud hosting on AWS/Vercel.',
        'Active participant in tech hackathons, coding challenges, and open-source explorations.'
      ],
      highlights: ['Data Structures & Algorithms', 'Web Engineering', 'DBMS & Operating Systems', 'Computer Networks']
    },
    {
      year: '2026 – 2027',
      title: 'GATE CS Preparation & Research Roadmap',
      institution: 'Targeting Indian Institute of Technology (IIT Bombay)',
      grade: 'Goal: M.Tech in CS & Systems',
      type: 'Current Focus',
      icon: <Target className="w-5 h-5 text-purple-400" />,
      badgeColor: 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300',
      details: [
        'Rigorous study plan focused on GATE CS syllabus: Computer Architecture, Operating Systems, Algorithms, Networks, and Theory of Computation.',
        'Working towards securing top percentile to gain admission for M.Tech at IIT Bombay.',
        'Simultaneously building production web software and deepening practical cloud-native DevOps expertise.',
        'Focus on distributed systems design, high-concurrency backend services, and scalable cloud architectures.'
      ],
      highlights: ['Operating Systems', 'Computer Architecture', 'Compiler Design', 'Distributed Systems']
    }
  ];

  return (
    <section id="timeline" className="py-24 relative px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            Milestones &amp; Roadmap
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Education &amp; <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            My academic foundation at KIIT and current preparation journey towards IIT Bombay.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {events.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 rounded-xl glass-panel border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300">
                {item.icon}
              </div>

              {/* Timeline Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 space-y-6">
                
                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold border ${item.badgeColor}`}>
                        {item.year}
                      </span>
                      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                      {item.title}
                    </h3>

                    <p className="text-sm font-semibold text-blue-300">
                      {item.institution}
                    </p>
                  </div>

                  {/* Grade / Goal Pill */}
                  <div className="glass-panel px-4 py-2 rounded-xl border border-white/10 text-right">
                    <span className="text-xs text-slate-400 block font-mono">Score / Target</span>
                    <span className="text-sm sm:text-base font-extrabold text-gradient-cyan">
                      {item.grade}
                    </span>
                  </div>
                </div>

                {/* Details List */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="px-3 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono">
                      {h}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Timeline;
