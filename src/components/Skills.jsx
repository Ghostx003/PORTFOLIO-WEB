import React, { useState } from 'react';
import { Cpu, Code, Server, Cloud, Wrench, Layers } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend & DB', icon: <Server className="w-4 h-4" /> },
    { id: 'devops', name: 'DevOps & Cloud', icon: <Cloud className="w-4 h-4" /> },
    { id: 'tools', name: 'Developer Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const skillList = [
    // Frontend
    { name: 'React.js', category: 'frontend', level: 'Advanced', color: 'from-cyan-500 to-blue-500', desc: 'Hooks, Context, Performance, Components' },
    { name: 'Next.js', category: 'frontend', level: 'Intermediate', color: 'from-slate-200 to-slate-400', desc: 'SSR, SSG, App Router, API Routes' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', color: 'from-cyan-400 to-teal-400', desc: 'Glassmorphism, Micro-animations, Utilities' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Advanced', color: 'from-yellow-400 to-amber-500', desc: 'Async/Await, Closures, DOM, Fetch' },
    { name: 'Redux', category: 'frontend', level: 'Intermediate', color: 'from-purple-500 to-indigo-500', desc: 'State Management, Redux Toolkit' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 'Expert', color: 'from-orange-500 to-red-500', desc: 'Semantic HTML, Flexbox, CSS Grid, Media Queries' },

    // Backend
    { name: 'Node.js', category: 'backend', level: 'Advanced', color: 'from-emerald-500 to-green-600', desc: 'Async I/O, Event Loop, npm, Server-side JS' },
    { name: 'Express.js', category: 'backend', level: 'Advanced', color: 'from-slate-400 to-slate-600', desc: 'REST APIs, Middleware, Auth, Routing' },
    { name: 'MongoDB', category: 'backend', level: 'Advanced', color: 'from-emerald-400 to-teal-600', desc: 'Aggregation, Schema Design, Mongoose' },
    { name: 'Python', category: 'backend', level: 'Intermediate', color: 'from-blue-400 to-yellow-500', desc: 'Automation, Scripting, Data Structures' },
    { name: 'Django', category: 'backend', level: 'Intermediate', color: 'from-emerald-600 to-green-800', desc: 'MVT Pattern, ORM, REST Framework' },
    { name: 'Redis', category: 'backend', level: 'Intermediate', color: 'from-red-500 to-rose-600', desc: 'Caching, Pub/Sub, In-memory Store' },
    { name: 'Java', category: 'backend', level: 'Intermediate', color: 'from-orange-600 to-red-600', desc: 'OOP, Data Structures & Algorithms' },
    { name: 'SQL / PostgreSQL', category: 'backend', level: 'Intermediate', color: 'from-blue-500 to-indigo-600', desc: 'Queries, Joins, Indexing, Schemas' },

    // DevOps & Cloud
    { name: 'Docker', category: 'devops', level: 'Intermediate', color: 'from-blue-400 to-cyan-600', desc: 'Containerization, Dockerfile, Compose' },
    { name: 'Kubernetes', category: 'devops', level: 'Learning', color: 'from-blue-600 to-indigo-700', desc: 'Pods, Deployments, Services, Orchestration' },
    { name: 'AWS (Amazon Web Services)', category: 'devops', level: 'Intermediate', color: 'from-amber-500 to-orange-600', desc: 'EC2, S3, CloudFront, IAM' },
    { name: 'Git & GitHub', category: 'devops', level: 'Advanced', color: 'from-orange-500 to-red-500', desc: 'Branching, PRs, Actions, Version Control' },
    { name: 'Linux / Bash', category: 'devops', level: 'Intermediate', color: 'from-amber-400 to-yellow-600', desc: 'Shell Scripting, SSH, System Management' },

    // Tools
    { name: 'Vite', category: 'tools', level: 'Advanced', color: 'from-purple-400 to-yellow-400', desc: 'Fast HMR, Bundling, Config' },
    { name: 'Postman', category: 'tools', level: 'Advanced', color: 'from-orange-500 to-amber-600', desc: 'API Testing, Documentation' },
    { name: 'Vercel', category: 'tools', level: 'Advanced', color: 'from-slate-100 to-slate-400', desc: 'Deployment, Domain Setup, CI/CD' },
    { name: 'Market & Product Research', category: 'tools', level: 'Advanced', color: 'from-blue-400 to-emerald-400', desc: 'Competitor Analysis, User Growth' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillList 
    : skillList.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative px-4 sm:px-6 lg:px-8">
      {/* Background radial blur */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Technologies, frameworks, and DevOps tools I utilize to build end-to-end scalable applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/40'
                  : 'glass-card text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-blue-400/40 group transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-base group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400`}>
                    {skill.level}
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 leading-normal">
                  {skill.desc}
                </p>
              </div>

              {/* Accent Line */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{skill.category.toUpperCase()}</span>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
