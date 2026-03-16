import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, ChevronRight } from 'lucide-react';

const FloatingTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Omni-OS initialized. Type "status" or "help".' }
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      let res = '';
      if (cmd === 'help') res = 'Commands: status, stack, contact, clear';
      else if (cmd === 'status') res = 'Current Role: AI Engineer | Projects Active: 3';
      else if (cmd === 'stack') res = 'Python, FastAPI, Gemini, React, ChromaDB';
      else if (cmd === 'clear') { setHistory([]); setInput(''); return; }
      else res = `Unknown command: ${cmd}`;

      setHistory([...history, { type: 'user', text: `> ${input}` }, { type: 'sys', text: res }]);
      setInput('');
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-60 p-4 bg-accent text-white rounded-2xl shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <X size={24} /> : <TerminalIcon size={24} />}
      </button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-40 right-8 z-60 w-87.5 md:w-112.5 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden font-mono text-sm"
          >
            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500">omni-analyst-shell</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="p-4 h-64 overflow-y-auto space-y-2">
              {history.map((l, i) => (
                <p key={i} className={l.type === 'sys' ? 'text-accent' : 'text-slate-300'}>{l.text}</p>
              ))}
              <div className="flex items-center text-accent">
                <ChevronRight size={14} className="mr-1" />
                <input 
                  autoFocus
                  className="bg-transparent outline-none flex-1 text-white border-none focus:ring-0 p-0"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingTerminal;