import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code2, Heart, Target, Compass, Terminal, CheckCircle2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';

export const AboutSection: React.FC = () => {
  const storyCards = [
    {
      title: 'Who I Am',
      icon: Code2,
      color: '#D8C3A5',
      content:
        'I am Hyder Bhat, a Full-Stack Developer with a background in Computer Applications (BCA). I focus on building clean, responsive web applications using modern JavaScript tools.',
    },
    {
      title: 'Academic Foundation',
      icon: GraduationCap,
      color: '#A3B18A',
      content:
        'Graduated with a Bachelor of Computer Applications (BCA) from Iqbal Institute of Technology and Management, building a strong foundation in data structures, web development, and database systems.',
    },
    {
      title: 'Passion for Web Development',
      icon: Heart,
      color: '#D8C3A5',
      content:
        'I enjoy turning ideas into functional web products with clean code, responsive user interfaces, integrated REST APIs, and efficient database architectures.',
    },
    {
      title: 'Current Focus & Goals',
      icon: Target,
      color: '#A3B18A',
      content:
        'Constantly learning new web technologies and actively seeking Full-Stack Developer opportunities. Open to relocate to Bangalore.',
    },
  ];

  const quickFacts = [
    { label: 'Role', val: 'Full-Stack Developer' },
    { label: 'Education', val: 'BCA (Iqbal Institute of Tech & Mgmt)' },
    { label: 'Core Stack', val: 'React.js, Node.js, Express, MongoDB, PostgreSQL, MySQL, PHP' },
    { label: 'Relocation Preference', val: 'Open to Relocate: Bangalore' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D8C3A5]">
            <Sparkles className="w-3.5 h-3.5 text-[#D8C3A5]" />
            <span>01 // About & Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#F5F5F5]">
            Full-Stack Developer, <br className="hidden sm:inline" />
            <span className="text-[#D8C3A5]">passionate about web software.</span>
          </h2>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Portrait & Key Metrics Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Developer Card Banner */}
            <div
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group glass-card-hover bg-[#141414]"
              data-cursor="card"
              data-cursor-text="HYDER"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D8C3A5]/20 to-[#A3B18A]/20 border border-[#D8C3A5]/30 flex items-center justify-center font-extrabold font-heading text-2xl text-[#D8C3A5] shadow-inner">
                  HB
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-[#D8C3A5]">{PERSONAL_INFO.role}</p>
                  <p className="text-xs text-[#B5B5B5] mt-0.5">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <blockquote className="text-sm italic font-light text-[#F5F5F5]/90 border-l-2 border-[#D8C3A5] pl-4 py-1 mb-6 bg-white/[0.02]">
                "{PERSONAL_INFO.quote}"
              </blockquote>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-[#B5B5B5]/70">Factual Highlights</p>
                <ul className="space-y-2 text-xs text-[#B5B5B5]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A3B18A]" />
                    <span>3-Month Internship at Siffrum Analytics Pvt. Ltd.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A3B18A]" />
                    <span>BCA Degree from Iqbal Institute of Tech & Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A3B18A]" />
                    <span>Full-Stack proficiency across MERN & SQL stacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A3B18A]" />
                    <span>Open for Full-Stack roles & relocation to Bangalore</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Specs Bento Block */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 bg-[#141414]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8C3A5] flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Developer Overview</span>
              </h4>

              <div className="space-y-3">
                {quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 pb-2 border-b border-white/5 last:border-none">
                    <span className="text-[#B5B5B5]">{fact.label}:</span>
                    <span className="font-mono text-[#F5F5F5] font-medium sm:text-right">{fact.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Story Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {storyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 bg-[#141414]"
                  data-cursor="card"
                >
                  <div className="space-y-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                      style={{ backgroundColor: `${card.color}15`, color: card.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#F5F5F5]">{card.title}</h3>
                    <p className="text-sm text-[#B5B5B5] leading-relaxed font-light">{card.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
