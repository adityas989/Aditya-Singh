import React, { useState } from 'react';

const TerminalUI = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Aditya-OS v1.0.0 (Type "help" for commands)' }
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      let response = '';

      if (cmd === 'help') response = 'Available: about, skills, contact, clear';
      else if (cmd === 'about') response = 'AI Engineer focused on RAG & Full-stack dev.';
      else if (cmd === 'skills') response = 'React, Python, FastAPI, Gemini, ChromaDB.';
      else if (cmd === 'clear') { setHistory([]); setInput(''); return; }
      else response = `Command not found: ${cmd}`;

      setHistory([...history, { type: 'user', text: `> ${input}` }, { type: 'system', text: response }]);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-2xl bg-black/80 border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
      <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="p-4 h-64 overflow-y-auto space-y-2">
        {history.map((line, i) => (
          <p key={i} className={line.type === 'system' ? 'text-accent' : 'text-white'}>
            {line.text}
          </p>
        ))}
        <div className="flex">
          <span className="text-green-500 mr-2">$</span>
          <input 
            className="bg-transparent outline-none flex-1 text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalUI