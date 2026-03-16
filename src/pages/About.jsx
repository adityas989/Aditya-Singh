import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/hero.png';
import { Terminal } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16 py-10"
    >
      {/* Introduction Header */}
      <div className="text-center space-y-4">
        <h2 className="text-accent font-bold tracking-widest uppercase text-xs">About Me</h2>
        <h1 className="text-4xl font-bold tracking-tighter">The Person Behind the Code</h1>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-3xl font-semibold text-white">
            <span className="wave inline-block">👋</span> Hi, I’m Aditya Singh
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed italic">
            "I'm an engineer with experience in building ML systems & scalable webapps. 
            I solve real-world problems with AI, code, and creativity."
          </p>
          <p className="text-slate-400">
            Currently focusing on the intersection of Large Language Models (LLMs) and 
            modern web frameworks to create seamless, intelligent user experiences.
          </p>
        </div>

        <div className="relative mx-auto w-64 h-64">
          <div className="absolute inset-0 bg-accent blur-2xl opacity-20 rounded-full" />
          <img 
            src={profile} 
            alt="Aditya Singh" 
            className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/20 shadow-2xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        <AboutCard title="Projects" count="12+" desc="Scalable AI & Web Apps" />
        <AboutCard title="Certificates" count="8" desc="AWS, Google AI, Full-Stack" />
        <AboutCard title="Tech Skills" count="15+" desc="React, Python, FastAPI, ML" />
        
      </div>
      <TechStack/>
    </motion.div>
  );
};

// Sub-component for the Bento Cards
const AboutCard = ({ title, count, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all"
  >
    <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">{title}</h4>
    <p className="text-3xl font-bold text-white mb-1">{count}</p>
    <p className="text-slate-400 text-sm">{desc}</p>
  </motion.div>
);

export const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {/* AI/ML Bucket - Large Tile */}
      <div className="md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <h3 className="text-accent font-bold text-xs uppercase tracking-widest mb-4">Intelligence</h3>
        <div className="flex flex-wrap gap-2">
          {['RAG Pipelines', 'Gemini 1.5 Flash', 'ChromaDB', 'LangChain', 'PyTorch', 'HuggingFace'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-sm text-slate-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Development - Smaller Tile */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <h3 className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-4">Core Tech</h3>
        <p className="text-2xl font-bold text-white">React & <br/>FastAPI</p>
      </div>

      {/* Certificates - Vertical Tile */}
      <div className="row-span-2 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <h3 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4">Verified</h3>
        <ul className="space-y-4">
          <li className="text-sm">
            <p className="text-white font-medium">AWS Machine Learning</p>
            <p className="text-xs text-slate-500">Specialty Certification</p>
          </li>
          <li className="text-sm">
            <p className="text-white font-medium">Meta Full-Stack</p>
            <p className="text-xs text-slate-500">Professional Certificate</p>
          </li>
        </ul>
      </div>

      {/* Current Research Tile */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between">
        <div>
          <h3 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4">Current Research</h3>
          <p className="text-white font-medium text-lg leading-tight">Agentic Workflows with LangGraph</p>
        </div>
        <p className="text-slate-500 text-xs mt-4 italic">Exploring self-correcting RAG loops.</p>
      </div>

      {/* Tools of Choice Tile */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Daily Tools</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold">VS CODE</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold">DOCKER</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold">POSTMAN</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold">GIT</span>
          </div>
        </div>
      </div>

      {/* Proof of Thought - Wide Bottom Tile */}
      <div className="md:col-span-3 bg-accent/5 border border-accent/20 p-8 rounded-3xl relative overflow-hidden group">
        {/* Subtle Background Decoration */}
        <div className="absolute -right-10 -bottom-10 text-accent/5 -rotate-12 group-hover:text-accent/10 transition-colors">
          <Terminal size={160} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-accent text-white rounded-2xl shadow-lg shadow-accent/20">
              <Terminal size={28} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-xl tracking-tight">Proof of Thought: Optimizing RAG</h3>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase rounded border border-emerald-500/20">
                  Solved
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Resolving hallucination issues in Omni-Analyst by implementing 
                <span className="text-white"> Multi-Query Retrieval </span> 
                and <strong>RAGAS</strong> evaluation metrics.
              </p>
            </div>
          </div>

          {/* Metric Badge / Action */}
          <div className="flex flex-col items-end gap-2">
            <div className="text-right">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Efficiency Gain</p>
              <p className="text-2xl font-mono font-bold text-accent">+35%</p>
            </div>
            <button className="text-xs font-bold text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-all border border-white/10 uppercase tracking-tighter">
              View Logic Flow
            </button>
          </div>
        </div>

        {/* Mini Logic Progress Bar (Optional Visual) */}
        <div className="mt-6 flex gap-1 h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="w-1/3 bg-accent/40" />
          <div className="w-1/3 bg-accent" />
          <div className="w-1/3 bg-accent/20" />
        </div>
      </div>
    </div>
  );
};

export default About;