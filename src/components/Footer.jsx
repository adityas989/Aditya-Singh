const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-white font-bold tracking-tighter">ADITYA SINGH</p>
          <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">AI Engineer & Full-Stack Developer</p>
        </div>

        <div className="flex gap-8 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          <a href="https://github.com/adityas989" target="_blank" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/aditya-singh-4a84372b2" target="_blank"  className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="/resume.pdf" target="_blank"  className="hover:text-accent transition-colors">Resume</a>
        </div>

        <div className="text-right">
          <p className="text-slate-600 text-[10px] font-mono leading-relaxed">
            Built with React 19 + Vite 8 + Tailwind v4 <br />
            © 2026 • Optimized for Neural Networks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer