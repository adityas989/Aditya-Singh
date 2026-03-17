import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/hero.png';
import { ChevronLeft, ChevronRight, Terminal } from 'lucide-react';

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
        <AboutCard title="Projects" count="10+" desc="Scalable AI & Web Apps" />
        <AboutCard title="Certificates" count="4" desc="AWS, Google AI, Full-Stack" />
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
  const potHighlights = [
    {
      id: "omni",
      title: "Omni-Analyst",
      subtitle: "Optimizing RAG",
      desc: "Resolving hallucinations in technical PDFs using Multi-Query Retrieval and RAGAS metrics.",
      gain: "+35%",
      label: "Solved",
      color: "accent"
    },
    {
      id: "dimenx",
      title: "DimenX",
      subtitle: "Voxel Reconstruction",
      desc: "Converting 2D images to 3D meshes using an Encoder-Decoder architecture on Pix3D.",
      gain: "0.46 IoU",
      label: "Solved",
      color: "purple-500"
    },
    {
      id: "exam",
      title: "SmartExam Prep",
      subtitle: "Topic-Tree Generation",
      desc: "Automated study material generation using recursive LLM mapping and web scraping.",
      gain: "90% Cov.",
      label: "In Progress",
      color: "orange-500"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % potHighlights.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + potHighlights.length) % potHighlights.length);

  const current = potHighlights[currentIndex]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {/* AI/ML Bucket - Large Tile */}
      <div className="md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <h3 className="text-accent font-bold text-xs uppercase tracking-widest mb-4">Intelligence</h3>
        <div className="flex flex-wrap gap-2">
          {['RAG Pipelines', 'LLMs', 'ChromaDB', 'LangChain','Langgraph', 'PyTorch', 'HuggingFace','Computer Vision','Deep Learning'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-sm text-slate-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Development - Smaller Tile */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <h3 className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-4">Core Tech</h3>
        <p className="text-2xl font-bold text-white">React, <br/>Flask, <br/>MERN Stack <br/>Machine Learning & <br/>Deep Learning</p>
      </div>

      {/* Certificates - Vertical Tile */}
      <div className="row-span-2 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <h3 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4">Verified</h3>
        <ul className="space-y-4">
          <li className="text-sm">
            <p className="text-white font-medium">Python Development</p>
            <p className="text-xs text-slate-500">Specialty Certification</p>
          </li>
          <li className="text-sm">
            <p className="text-white font-medium">AI/ML </p>
            <p className="text-xs text-slate-500">Professional Certificate</p>
          </li>
          <li className="text-sm">
            <p className="text-white font-medium">GeekforGeeks: Gen AI,LLMs & RAG</p>
            <p className="text-xs text-slate-500">Professional Certificate</p>
          </li>
        </ul>
      </div>

      {/* Current Research Tile */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between group hover:border-orange-500/30 transition-colors">
        <div>
          <h3 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
            Active Research
          </h3>
          <p className="text-white font-medium text-lg leading-tight group-hover:text-orange-100 transition-colors">
            Agentic Workflows & <br/>Self-Correction Loops
          </p>
        </div>
        <div className="space-y-3 mt-4">
          <p className="text-slate-500 text-xs italic">
            "Investigating LangGraph for multi-agent coordination in automated job intelligence parsing."
          </p>
          <div className="flex gap-2">
            <span className="text-[9px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20 uppercase font-bold">MTech Focus</span>
          </div>
        </div>
      </div>

      {/* Tools of Choice Tile */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Daily Tools</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold">VS CODE</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold">Hugging Face</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold">GitHub</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold">GIT</span>
          </div>
        </div>
      </div>

      {/* Proof of Thought - Wide Bottom Tile */}
      <div className="md:col-span-3 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group min-h-55">
        
        <div className="absolute -right-10 -bottom-10 text-white/5 -rotate-12 pointer-events-none">
          <Terminal size={160} />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-accent text-white rounded-2xl shadow-lg shadow-accent/20">
                <Terminal size={28} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-xl tracking-tight">
                    PoT: {current.title}
                  </h3>
                  <span className={`px-2 py-0.5 ${current.label === 'Solved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'} text-[10px] font-bold uppercase rounded border border-white/10`}>
                    {current.label}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Performance</p>
                <p className="text-2xl font-mono font-bold text-accent">{current.gain}</p>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-2">
            {potHighlights.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/10'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;