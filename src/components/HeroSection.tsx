import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Mail, FileText, Code2, Terminal, Play, Check, Sparkles, Cpu, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';

interface HeroSectionProps {
  onOpenResume: () => void;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  const [activeTab, setActiveTab] = useState<'ide' | 'terminal' | 'architecture'>('ide');
  const [copiedCode, setCopiedCode] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'System initialized in 14ms.',
    'Loaded stack: React 19, TypeScript, Node.js, WebAudio.',
    'Type "help" or click tabs above.',
  ]);

  const handleCopyCode = () => {
    soundFX.playClick();
    const code = `// Hyder Bhat - Full-Stack Developer
const developer = {
  name: "Hyder Bhat",
  role: "Full-Stack Developer",
  skills: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "PHP"],
  philosophy: "Clean code, responsive design, and robust API architecture.",
  status: "Available for work"
};`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    soundFX.playClick();
    const cmd = terminalInput.trim().toLowerCase();
    let response = `Command not recognized: "${cmd}". Type "help".`;

    if (cmd === 'help') {
      response = 'Available: about, stack, status, contact, clear';
    } else if (cmd === 'about') {
      response = PERSONAL_INFO.bio;
    } else if (cmd === 'stack') {
      response = 'React.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, PHP, Tailwind CSS';
    } else if (cmd === 'status') {
      response = '🟢 Available for Full-Stack Developer opportunities.';
    } else if (cmd === 'contact') {
      response = `Email: ${PERSONAL_INFO.email}`;
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    }

    setTerminalLogs((prev) => [...prev, `$ ${terminalInput}`, response]);
    setTerminalInput('');
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Hero Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-white/10 text-xs font-mono text-[#B5B5B5]">
              <span className="w-2 h-2 rounded-full bg-[#A3B18A] animate-pulse" />
              <span>{PERSONAL_INFO.role}</span>
              <span className="text-white/20">|</span>
              <span className="text-[#D8C3A5]">Srinagar, J&K (Relocate: Bangalore)</span>
            </div>

            {/* Main Title Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading text-[#F5F5F5] leading-[1.08]">
              Hi, I'm <span className="text-[#D8C3A5] relative inline-block">Hyder Bhat</span>.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#B5B5B5] to-[#D8C3A5]">
                Full-Stack Web Developer.
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#B5B5B5] max-w-2xl font-normal leading-relaxed">
              Full-Stack Developer skilled in React.js, Node.js, Express.js, MongoDB, PostgreSQL, PHP, and REST APIs. Experienced in building responsive web applications with clean code and reliable performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onNavigateToProjects();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="px-6 py-3.5 rounded-full bg-[#D8C3A5] text-[#0D0D0D] font-bold text-sm hover:bg-[#ebd5b7] transition-all flex items-center gap-2 group shadow-lg shadow-[#D8C3A5]/10"
                data-cursor="button"
                data-cursor-text="GO"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onNavigateToContact();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="px-6 py-3.5 rounded-full bg-[#1F1F1F] text-[#F5F5F5] font-semibold text-sm border border-white/10 hover:border-[#D8C3A5]/40 hover:bg-[#282828] transition-all flex items-center gap-2"
                data-cursor="button"
              >
                <Mail className="w-4 h-4 text-[#A3B18A]" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="px-5 py-3.5 rounded-full bg-white/[0.03] text-[#B5B5B5] font-medium text-sm border border-white/10 hover:text-[#D8C3A5] hover:border-[#D8C3A5]/30 transition-all flex items-center gap-2"
                data-cursor="button"
                data-cursor-text="CV"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#F5F5F5]">3 Months</p>
                <p className="text-xs font-mono text-[#B5B5B5]">Internship Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#D8C3A5]">4</p>
                <p className="text-xs font-mono text-[#B5B5B5]">Featured Projects</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#A3B18A]">MERN</p>
                <p className="text-xs font-mono text-[#B5B5B5]">Full-Stack Focus</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive 3D IDE Workspace Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D8C3A5]/10 to-[#A3B18A]/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#141414]/90 backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1A1A1A] border-b border-white/10 flex items-center justify-between gap-2 overflow-x-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27C93F]/80" />
                  <span className="ml-1 text-[11px] sm:text-xs font-mono text-[#B5B5B5] hidden sm:inline">hyder-bhat.config.ts</span>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center gap-0.5 sm:gap-1 bg-black/40 p-0.5 sm:p-1 rounded-lg border border-white/5 shrink-0">
                  <button
                    onClick={() => setActiveTab('ide')}
                    className={`px-2 sm:px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono flex items-center gap-1 transition-all ${
                      activeTab === 'ide' ? 'bg-[#D8C3A5] text-[#0D0D0D] font-bold' : 'text-[#B5B5B5] hover:text-white'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>IDE</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2 sm:px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono flex items-center gap-1 transition-all ${
                      activeTab === 'terminal' ? 'bg-[#D8C3A5] text-[#0D0D0D] font-bold' : 'text-[#B5B5B5] hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>CLI</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2 sm:px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono flex items-center gap-1 transition-all ${
                      activeTab === 'architecture' ? 'bg-[#D8C3A5] text-[#0D0D0D] font-bold' : 'text-[#B5B5B5] hover:text-white'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>Stack</span>
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-4 font-mono text-xs min-h-[340px] flex flex-col justify-between select-none">
                
                {/* IDE View */}
                {activeTab === 'ide' && (
                  <div className="space-y-2 text-[#B5B5B5]">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-[#B5B5B5]/60">
                      <span>// HYDER_BHAT_PROFILE.ts</span>
                      <button
                        onClick={handleCopyCode}
                        className="flex items-center gap-1 text-[#D8C3A5] hover:underline"
                      >
                        {copiedCode ? <Check className="w-3 h-3" /> : <Code2 className="w-3 h-3" />}
                        <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                      </button>
                    </div>

                    <pre className="text-xs font-mono leading-relaxed overflow-x-auto text-[#F5F5F5]">
                      <code>
                        <span className="text-[#A3B18A]">import</span> &#123; Developer &#125; <span className="text-[#A3B18A]">from</span> <span className="text-[#D8C3A5]">'@hyder/profile'</span>;{'\n\n'}
                        <span className="text-[#A3B18A]">export const</span> hyderBhat: Developer = &#123;{'\n'}
                        {'  '}name: <span className="text-[#D8C3A5] font-semibold">"Hyder Bhat"</span>,{'\n'}
                        {'  '}role: <span className="text-[#D8C3A5]">"Full-Stack Developer"</span>,{'\n'}
                        {'  '}education: <span className="text-[#D8C3A5]">"BCA Graduate / Student"</span>,{'\n'}
                        {'  '}stack: [<span className="text-[#D8C3A5]">"React.js"</span>, <span className="text-[#D8C3A5]">"Node.js"</span>, <span className="text-[#D8C3A5]">"Express"</span>, <span className="text-[#D8C3A5]">"MongoDB"</span>, <span className="text-[#D8C3A5]">"PostgreSQL"</span>],{'\n'}
                        {'  '}relocation: <span className="text-[#D8C3A5]">"Open to Relocate (Bangalore)"</span>,{'\n'}
                        {'  '}status: <span className="text-[#A3B18A]">"Available for Full-Stack Opportunities"</span>{'\n'}
                        &#125;;
                      </code>
                    </pre>
                  </div>
                )}

                {/* CLI View */}
                {activeTab === 'terminal' && (
                  <div className="space-y-2 font-mono text-xs flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5 overflow-y-auto max-h-[220px]">
                      {terminalLogs.map((log, idx) => (
                        <p key={idx} className={log.startsWith('$') ? 'text-[#D8C3A5]' : 'text-[#B5B5B5]'}>
                          {log}
                        </p>
                      ))}
                    </div>

                    <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2 border-t border-white/10">
                      <span className="text-[#A3B18A] font-bold">&gt;</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="Type 'help', 'about', 'stack', 'status'..."
                        className="bg-transparent border-none text-xs text-[#F5F5F5] focus:outline-none w-full font-mono placeholder:text-white/20"
                      />
                    </form>
                  </div>
                )}

                {/* Architecture View */}
                {activeTab === 'architecture' && (
                  <div className="space-y-3">
                    <p className="text-[11px] text-[#D8C3A5] font-mono font-bold uppercase tracking-wider">
                      System Tech Stack Map
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#F5F5F5] font-semibold">
                          <Cpu className="w-3.5 h-3.5 text-[#A3B18A]" />
                          <span>Frontend Core</span>
                        </div>
                        <p className="text-[10px] text-[#B5B5B5]">React 19, TS, Tailwind v4, Motion</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#F5F5F5] font-semibold">
                          <Terminal className="w-3.5 h-3.5 text-[#D8C3A5]" />
                          <span>Backend Engine</span>
                        </div>
                        <p className="text-[10px] text-[#B5B5B5]">Node.js, Express, WebSockets, REST</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#F5F5F5] font-semibold">
                          <Sparkles className="w-3.5 h-3.5 text-[#A3B18A]" />
                          <span>Database & Cache</span>
                        </div>
                        <p className="text-[10px] text-[#B5B5B5]">MongoDB, PostgreSQL, MySQL</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#F5F5F5] font-semibold">
                          <Layers className="w-3.5 h-3.5 text-[#D8C3A5]" />
                          <span>DevOps & Tools</span>
                        </div>
                        <p className="text-[10px] text-[#B5B5B5]">Vite, Git, Docker, Cloud Run</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Window Bar */}
                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#B5B5B5]/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A3B18A]" />
                    Ready for Deployment
                  </span>
                  <span>UTF-8 // TypeScript</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
