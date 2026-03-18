import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MessageSquare, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "aditya125siingh@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mail = (e) => {
    e.preventDefault()
  }

  return (
    <div className="space-y-12 grid place-items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center md:text-left space-y-4"
      >
        <h2 className="text-accent font-bold tracking-widest uppercase text-xs">Connection</h2>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Let's build the next big thing.</h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 place-items-center">
        
        {/* Left Side: Direct Contact & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 md:min-w-[60vw]"
        >
          <p className="text-slate-400 text-lg leading-relaxed">
            Currently looking for collaborations on AI projects.
          </p>

          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs">Contact Details</h3>
            
            <div 
              onClick={handleCopy}
              className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/20 text-accent rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Email Me</p>
                  <p className="text-white font-medium">{email}</p>
                </div>
              </div>
              <div className="text-slate-500 group-hover:text-white transition-colors gap-2 flex">
                <a href='mailto:aditya125siingh@gmail.com'><Send size={18} /></a>
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </div>
            </div>
          </div>

          {/* Social Nodes */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs">Socials</h3>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/adityas989" icon={<Github />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/aditya-singh-4a84372b2" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="#" icon={<MessageSquare />} label="Twitter" />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Fast Message Form */}
        {/* <motion.form 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl space-y-6"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message</label>
              <textarea 
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-white resize-none"
              />
            </div>
          </div>

          <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-all active:scale-95">
            <a href='mailto:aditya125siingh@gmail.com'>Send Message <Send size={18} /></a>
          </button>
        </motion.form> */}
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all flex flex-col items-center gap-2 w-full"
  >
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
  </a>
);

export default Contact;