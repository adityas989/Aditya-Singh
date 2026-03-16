import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, User, Mail } from 'lucide-react';
import FloatingTerminal from './FloatingTerminal';


const Layout = ({ children }) => {
  return (
    <div className="relative min-h-full w-full overflow-x-hidden bg-background">
      
      <div className="mesh-bg fixed inset-0 pointer-events-none" />
      
      {/* <div className="glow-orb w-125 h-125 bg-accent -top-40 -left-40 pointer-events-none" />
      <div className="glow-orb w-100 h-100 bg-purple-600 -bottom-40 -right-40 pointer-events-none" /> */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="glow-orb w-125 h-125 bg-accent/20 -top-40 -left-40 absolute" />
        <div className="glow-orb w-100 h-100 bg-purple-600/20 -bottom-40 -right-40 absolute" />
      </div>

      <main className="relative z-10 px-6 pt-20 pb-32 max-w-5xl mx-auto">
        {children}
      </main>
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
         <motion.div 
           initial={{ y: 100 }}
           animate={{ y: 0 }}
           className="flex items-center gap-1 p-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl"
         >
           <NavIcon to="/" icon={<Home size={20} />} label="Home" />
           <NavIcon to="/work" icon={<Briefcase size={20} />} label="Work" />
           <NavIcon to="/about" icon={<User size={20} />} label="About" />
           <NavIcon to="/contact" icon={<Mail size={20} />} label="Contact" />
         </motion.div>
       </nav>
      <FloatingTerminal/>
    </div>
  );
};

const NavIcon = ({ to, icon, label }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  const isHomePage = pathname === "/";

  const handleClick = (e) => {
    if (isHomePage && to.startsWith("/#")) {
      e.preventDefault();
      const id = to.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link to={to} onClick={handleClick} className="relative group p-3">
      <div className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-200'}`}>
        {icon}
      </div>
      {isActive && (
        <motion.div layoutId="active" className="absolute inset-0 bg-white/10 rounded-full -z-10" />
      )}
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter">
        {label}
      </span>
    </Link>
  );
};

export default Layout;