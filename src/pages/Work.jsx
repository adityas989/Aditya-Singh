
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Cpu, LayoutIcon } from 'lucide-react';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Omni-Analyst",
      desc: "Multimodal RAG system analyzing technical documents using Gemini 1.5 Flash and ChromaDB.",
      tags: ["Generative AI", "Python", "React"],
      link: "#",
      github: "#",
      type: "AI System"
    },
    {
      title: "Unified Job Intel",
      desc: "AI-powered job aggregator with resume parsing and matching engines.",
      tags: ["FastAPI", "PostgreSQL", "React"],
      link: "#",
      github: "#",
      type: "Full-Stack"
    },
    {
      title: "Tripo3D Integration",
      desc: "Streamlit app for real-time 3D model generation from text/image prompts.",
      tags: ["3D Modeling", "API", "Streamlit"],
      link: "#",
      github: "#",
      type: "Integration"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-accent font-bold tracking-widest uppercase text-xs">Portfolio</h2>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Selected Works</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)}>
             <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Modal Logic */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            close={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden"
  >
    {/* Decorative Icon Background */}
    <div className="absolute -right-4 -top-4 text-white/5 group-hover:text-accent/10 transition-colors duration-500">
      {project.type === "AI System" ? <Cpu size={120} /> : <LayoutIcon size={120} />}
    </div>

    <div className="relative z-10 space-y-4">
      <div className="flex justify-between items-start">
        <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest">
          {project.type}
        </span>
        <div className="flex gap-3">
          <a href={project.github} className="text-slate-400 hover:text-white transition-colors"><Github size={18} /></a>
          <a href={project.link} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={18} /></a>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] text-slate-500 border border-white/5 px-2 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, close }) => (
  <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
    {/* Backdrop */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
      className="absolute inset-0 bg-black/80 backdrop-blur-xl"
    />

    {/* Modal Content */}
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-3xl shadow-2xl"
    >
      <button 
        onClick={close}
        className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full z-20"
      >
        <X size={20} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Project Visual/Image Area */}
        <div className="p-8 bg-accent/10 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
           <Terminal size={120} className="text-accent opacity-50" />
        </div>

        {/* Project Details Area */}
        <div className="p-8 space-y-6">
          <div>
            <span className="text-accent font-bold uppercase text-[10px] tracking-widest">{project.type}</span>
            <h2 className="text-3xl font-bold text-white mt-1">{project.title}</h2>
          </div>

          <p className="text-slate-400 leading-relaxed">
            {project.desc} This project focuses on high-efficiency data retrieval and 
            modern UI implementation using React.
          </p>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Key Features</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-accent" /> Multimodal data processing
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-accent" /> Real-time RAG pipeline
              </li>
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
              Live Demo <ExternalLink size={16} />
            </button>
            <button className="p-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10">
              <Github size={20} />
            </button>
          </div>
          <ProofOfThought/>
        </div>
      </div>
    </motion.div>
  </div>
);

const ProofOfThought = () => {
  return (
    <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-accent rounded-full" />
        <h3 className="text-xl font-bold text-white tracking-tight">Proof of Thought: Omni-Analyst</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-2">
          <h4 className="text-accent font-bold uppercase text-[10px] tracking-widest">The Problem</h4>
          <p className="text-slate-400 leading-relaxed">
            Standard RAG systems often fail on technical documents where context is buried in <strong>schematics and complex tables</strong>, leading to "knowledge gaps."
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-purple-400 font-bold uppercase text-[10px] tracking-widest">The Breakthrough</h4>
          <p className="text-slate-400 leading-relaxed">
            I implemented <strong>Multimodal Indexing</strong> using Gemini 1.5 Flash to convert visuals into semantic descriptions before ingestion into ChromaDB.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest">The Metrics</h4>
          <p className="text-slate-400 leading-relaxed">
            Reduced RAGAS-measured hallucinations by <strong>35%</strong> and improved retrieval recall for technical queries from 62% to <strong>88%</strong>.
          </p>
        </div>
      </div>

      {/* Mini Architecture Diagram (CSS only) */}
      <div className="mt-8 p-4 bg-black/40 rounded-2xl flex items-center justify-around border border-white/5">
        <div className="text-center px-4">
          <p className="text-[10px] text-slate-500 uppercase">Doc Ingestion</p>
          <div className="h-1 w-full bg-accent/20 mt-1" />
        </div>
        <div className="text-slate-600">→</div>
        <div className="text-center px-4 border border-accent/30 rounded-lg py-2">
          <p className="text-xs text-white">Gemini 1.5 Analysis</p>
        </div>
        <div className="text-slate-600">→</div>
        <div className="text-center px-4">
          <p className="text-[10px] text-slate-500 uppercase">Vector Store</p>
          <div className="h-1 w-full bg-accent/20 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Work;