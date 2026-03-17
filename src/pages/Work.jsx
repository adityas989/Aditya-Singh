
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Cpu, LayoutIcon } from 'lucide-react';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Omni-Analyst",
      desc: "Multimodal RAG system analyzing technical documents using Gemini 1.5 Flash and ChromaDB.",
      tags: ["Generative AI", "Python", "LLMs"],
      features: ["Multimodal data processing","Real-time RAG pipeline"],
      link: "#",
      github: "https://github.com/adityas989/Omni-Analyst",
      type: "AI System",
      status: "completed",
      problem: ( 
        <>
          Standard RAG systems often fail on technical documents where context is buried in <strong>schematics and complex tables</strong>, leading to 'knowledge gaps.'
        </>
      ),
      breakthrough: ( 
        <>
          I implemented <strong>Multimodal Indexing</strong> using Gemini 1.5 Flash to convert visuals into semantic descriptions before ingestion into ChromaDB.
        </>
      ),
      metrics: ( 
        <>
          Reduced RAGAS-measured hallucinations by <strong>35%</strong> and improved retrieval recall for technical queries from 62% to <strong>88%</strong>.
        </>
      ),
       diagram: [
        { type: "input", label: "Doc Ingestion" },
        { type: "process", label: "Gemini Analysis" },
        { type: "output", label: "Vector DB" }
      ]
    },
    {
      title: "DimenX",
      desc: "AI system that generates 3D models from images using deep learning and voxel reconstruction.",
      tags: ["PyTorch", "Streamlit", "Computer Vision", "3D AI"],
      features: [
        "Image-to-3D voxel generation",
        "Marching Cubes mesh conversion",
        "Interactive 3D visualization"
      ],
      link: "#", // your streamlit deployed link
      github: "https://github.com/adityas989/DimenX", 
      type: "AI System",
      status: "completed",
      problem: ( 
        <>
          Generating 3D models from 2D images is challenging because spatial depth and geometry are not explicitly available, leading to <strong>loss of structural information</strong>
        </>
      ),
      breakthrough: ( 
        <>
          I built an <strong>Image-to-Voxel Encoder–Decoder architecture</strong> trained on Pix3D, converting images into latent representations and reconstructing 3D shapes using voxel grids and Marching Cubes.
        </>
      ),
      metrics: ( 
        <>
          Achieved <strong>IoU of ~0.46</strong> on 32³ voxel resolution with consistent convergence, demonstrating strong structural learning in early-stage training.
        </>
      ),
      diagram: [
        { type: "input", label: "Image Input" },
        { type: "process", label: "Encoder" },
        { type: "process", label: "Latent Space" },
        { type: "process", label: "Voxel Decoder" },
        { type: "output", label: "3D Mesh" }
      ]
    },
    {
      title: "SmartPrep AI",
      desc: "Autonomous study architect that transforms raw syllabi into structured, multimodal learning paths.",
      tags: ["NLP", "LangGraph", "Web Scraping"],
      features: ["Recursive Topic-Tree generation", "Automated resource curation"],
      link: "#", 
      github: "#",
      type: "AI System",
      status: "In progress",
      problem: (
        <>
          Students often face <strong>information overload</strong> when mapping academic syllabi to web resources, leading to inefficient study sessions and missed core concepts.
        </>
      ),
      breakthrough: (
        <>
          I am developing a <strong>Recursive Knowledge Graph</strong> using LangGraph that decomposes complex subjects into atomic topics and validates scraped content against academic benchmarks.
        </>
      ),
      metrics: (
        <>
          Targeting a <strong>92% alignment accuracy</strong> between generated topic trees and official university curriculum standards.
        </>
      ),
      diagram: [
        { type: "input", label: "Syllabus Upload" },
        { type: "process", label: "Agentic Decomposition" },
        { type: "process", label: "Verified Scraping" },
        { type: "output", label: "Knowledge Map" }
      ]
    },
    {
      title: "Unified Job Intelligence",
      desc: "A cross-sector job aggregator using LLMs to bridge the gap between fragmented public and private employment data.",
      tags: ["FastAPI", "Vector Search", "Automation"],
      features: ["Cross-portal data normalization", "Semantic job-matching engine"],
      link: "#",
      github: "#",
      type: "AI System",
      status: "In Progress",
      problem: (
        <>
          Employment data is trapped in <strong>siloed architectures</strong> (government vs. private), making it difficult for candidates to find a holistic view of the market.
        </>
      ),
      breakthrough: (
        <>
          I am building a <strong>Universal Schema Translator</strong> that uses LLMs to normalize inconsistent job descriptions into a unified vector space for high-precision matching.
        </>
      ),
      metrics: (
        <>
          Aimed at reducing search friction by <strong>50%</strong> through the aggregation of over 50+ disparate job portals into one real-time stream.
        </>
      ),
      diagram: [
        { type: "input", label: "Multi-Source Feed" },
        { type: "process", label: "LLM Normalization" },
        { type: "process", label: "Vector Indexing" },
        { type: "output", label: "Matching API" }
      ]
    },
    {
      title: "Sign Language Interpretation",
      desc: "Machine Learning model that predicts hand gestures.",
      tags: ["Computer Vision","Flask", "API", "React"],
      features: ["Simple API to apply anywhere","Real-time Sign Language interpretation"],
      link: "#",
      github: "https://github.com/adityas989/Sign-Language-Interpreter",
      type: "Integration",
      status: "completed",
      problem: (
        <>Using videos call and other media is difficult for those who can not speak or listen</>
      ),
      breakthrough: (
        <>We built a software that helps in <strong>real time sign interpretation</strong> to make easy for deaf or mute people to integrate in tech integrated socity</>
      ),
      metrics: "",
      diagram: [
        { type: "input", label: "Image/video Input" },
        { type: "process", label: "Flask API" },
        { type: "process", label: "Prediction Model" },
        { type: "process", label: "Response" },
        { type: "output", label: "Predicted Sign" }
      ]
    },
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
          <a href={project.github} className="text-slate-400 hover:text-white z-10 transition-colors"><Github size={18} /></a>
          <a href={project.link} className="text-slate-400 hover:text-white z-10 transition-colors"><ExternalLink size={18} /></a>
          <span className={`px-2 py-0.5 ${project.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'} text-[10px] font-bold uppercase rounded border border-white/10`}>
            {project.status}
          </span>
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
            {project.desc}
          </p>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Key Features</h4>
            <ul className="space-y-2">
              {
                project.features.map(feature => (
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-accent" /> {feature}
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
              Live Demo <ExternalLink size={16} />
            </button>
            <button className="p-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10">
              <a href={project.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            </button>
          </div>
          <ProofOfThought project={project}/>
          
          
        </div>
      </div>
    </motion.div>
  </div>
);

const Diagram = ({ steps }) => {
  return (
    <div className="mt-8 p-4 bg-black/40 rounded-2xl flex items-center justify-around border border-white/5 flex-wrap gap-2">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          
          <div
            className={`text-center px-4 py-2 rounded-lg ${
              step.type === "process"
                ? "border border-accent/30"
                : ""
            }`}
          >
            <p
              className={`${
                step.type === "input" || step.type === "output"
                  ? "text-[10px] text-slate-500 uppercase"
                  : "text-xs text-white"
              }`}
            >
              {step.label}
            </p>

            {(step.type === "input" || step.type === "output") && (
              <div className="h-1 w-full bg-accent/20 mt-1" />
            )}
          </div>

          {index !== steps.length - 1 && (
            <div className="text-slate-600">→</div>
          )}

        </React.Fragment>
      ))}
    </div>
  );
};

const ProofOfThought = ({project}) => {
  return (
    <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-accent rounded-full" />
        <h3 className="text-xl font-bold text-white tracking-tight">Proof of Thought: {project.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-2">
          <h4 className="text-accent font-bold uppercase text-[10px] tracking-widest">The Problem</h4>
          <p className="text-slate-400 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-purple-400 font-bold uppercase text-[10px] tracking-widest">The Breakthrough</h4>
          <p className="text-slate-400 leading-relaxed">
            {project.breakthrough}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest">The Metrics</h4>
          <p className="text-slate-400 leading-relaxed">
            {project.metrics}
          </p>
        </div>
      </div>

      {/* Mini Architecture Diagram (CSS only) */}
      <Diagram steps={project.diagram} />
    </div>
  );
};


export default Work;