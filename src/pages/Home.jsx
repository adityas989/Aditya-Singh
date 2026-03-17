import React from 'react';
import Hero from './Hero';
import { TechStack } from './About'; 
import { ProjectCard } from './Work';
import Contact from './Contact';
import Footer from '../components/Footer';

const Home = () => {
    const featuredProjects = [
        {
          title: "Omni-Analyst",
          desc: "Multimodal RAG system analyzing technical documents using Gemini 1.5 Flash and ChromaDB.",
          tags: ["Generative AI", "Python", "LLMs"],
          features: ["Multimodal data processing","Real-time RAG pipeline"],
          link: "#",
          github: "https://github.com/adityas989/Omni-Analyst",
          type: "AI System",
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
        },
    ]
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <section id="work" className="space-y-12 -mt-10">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-bold tracking-tighter">Featured Intelligence</h2>
          <a href="/work" className="text-accent text-sm font-bold uppercase tracking-widest border-b border-accent/20 pb-1">View Archive →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <ProjectCard project={featuredProjects[0]} index={0} />
           <ProjectCard project={featuredProjects[1]} index={1} />
        </div>
      </section>

      <section id="about">
        <TechStack />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;