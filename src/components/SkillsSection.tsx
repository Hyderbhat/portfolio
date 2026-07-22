import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Server, Database, Wrench, Sparkles, Code2, Search } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundFX } from '../utils/sound';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkillModal, setActiveSkillModal] = useState<any | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code2;
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Database':
        return Database;
      default:
        return Wrench;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...cat,
      isVisible: matchesCategory && filteredSkills.length > 0,
      skills: filteredSkills,
    };
  }).filter((cat) => cat.isVisible);

  return (
    <section id="skills" className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D8C3A5]">
              <Sparkles className="w-3.5 h-3.5 text-[#D8C3A5]" />
              <span>02 // Technical Skills & Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#F5F5F5]">
              Technical Skills & <br />
              <span className="text-[#D8C3A5]">Development Stack</span>
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B5B5B5]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#1F1F1F] border border-white/10 text-xs text-[#F5F5F5] placeholder:text-[#B5B5B5]/50 focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-mono"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => {
              soundFX.playClick();
              setSelectedCategory('all');
            }}
            className={`px-4 py-2 rounded-full text-xs font-medium font-mono whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#D8C3A5] text-[#0D0D0D] font-bold shadow-md'
                : 'bg-[#1F1F1F] text-[#B5B5B5] hover:text-[#F5F5F5] border border-white/5'
            }`}
            data-cursor="button"
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFX.playClick();
                setSelectedCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#D8C3A5] text-[#0D0D0D] font-bold shadow-md'
                  : 'bg-[#1F1F1F] text-[#B5B5B5] hover:text-[#F5F5F5] border border-white/5'
              }`}
              data-cursor="button"
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Skill Bento Cards */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            return (
              <div key={cat.id} className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#D8C3A5]/10 text-[#D8C3A5] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">{cat.title}</h3>
                  <span className="text-xs font-mono text-[#B5B5B5]">({cat.skills.length})</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      onClick={() => {
                        soundFX.playClick();
                        setActiveSkillModal(skill);
                      }}
                      onMouseEnter={() => soundFX.playHover()}
                      className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 cursor-pointer flex flex-col justify-between group bg-[#141414]"
                      data-cursor="button"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-base font-bold font-heading text-[#F5F5F5] group-hover:text-[#D8C3A5] transition-colors flex items-center gap-2">
                            <span>{skill.name}</span>
                          </h4>
                          {skill.featured && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#A3B18A]/20 text-[#A3B18A] border border-[#A3B18A]/30 shrink-0">
                              Core
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#B5B5B5] font-light leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {activeSkillModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSkillModal(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card rounded-2xl p-6 sm:p-8 max-w-md w-full border border-white/10 space-y-5 bg-[#171717]"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-[#D8C3A5]" />
                    <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">{activeSkillModal.name}</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-[#B5B5B5] leading-relaxed">
                    {activeSkillModal.description}
                  </p>
                </div>

                <button
                  onClick={() => setActiveSkillModal(null)}
                  className="w-full py-2.5 rounded-xl bg-[#D8C3A5] text-[#0D0D0D] font-bold text-xs hover:bg-[#ebd5b7] transition-all"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
