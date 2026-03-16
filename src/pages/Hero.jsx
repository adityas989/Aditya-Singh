import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aiImage from '../assets/hero.png'; 

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col gap-20 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 max-md:z-10"
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-white">
              AI Engineer & <br /> 
              <span className="text-slate-500">Full-Stack Developer</span>
            </h1>
          </div>

          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            Building intelligent systems, scalable web apps, and solving 
            real-world problems with code and creativity.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/resume.pdf" target="_blank" className="px-6 py-3 bg-white text-black font-bold rounded-xl text-sm transition-transform hover:scale-105">
              View Resume
            </a>
            <Link to="/work" className="px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-all">
              Projects
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-all">
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Right Side: AI Image with Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group max-sm:z-0 max-md:absolute max-md:left-2 max-md:top-30 "
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-colors duration-500" />
          <img 
            src={aiImage} 
            alt="AI Concept" 
            className="relative z-10 w-full rounded-3xl max-md:opacity-40 shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;