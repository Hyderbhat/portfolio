import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ExternalLink, Github, Code2, ArrowUpRight, Monitor, Smartphone, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { soundFX } from '../utils/sound';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [codeInspectorProject, setCodeInspectorProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D8C3A5]">
              <Sparkles className="w-3.5 h-3.5 text-[#D8C3A5]" />
              <span>03 // Selected Product Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#F5F5F5]">
              Crafted software products & <br />
              <span className="text-[#D8C3A5]">interactive web tools.</span>
            </h2>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="space-y-20">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Project Image Mockup Frame */}
                <div
                  className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} group relative`}
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedProject(project);
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 p-3 sm:p-4 transition-all duration-500 group-hover:border-[#D8C3A5]/40 group-hover:shadow-2xl cursor-pointer">
                    
                    {/* Device Frame Top bar */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-[#B5B5B5]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="ml-2 text-[11px] text-[#B5B5B5]/70 hidden sm:inline">{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#D8C3A5]">
                        {project.mockupType === 'laptop' && <Monitor className="w-3 h-3" />}
                        {project.mockupType === 'phone' && <Smartphone className="w-3 h-3" />}
                        {project.mockupType === 'dashboard' && <LayoutDashboard className="w-3 h-3" />}
                        <span className="uppercase">{project.mockupType}</span>
                      </div>
                    </div>

                    {/* Image Canvas Container */}
                    <div className="relative aspect-[1344/768] overflow-hidden rounded-xl bg-[#0D0D0D]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103 group-hover:brightness-105"
                        loading="lazy"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="flex items-center gap-3">
                          <span className="px-4 py-2 rounded-full bg-[#D8C3A5] text-[#0D0D0D] text-xs font-bold flex items-center gap-1.5 shadow-lg">
                            <span>Inspect Specs</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                          {project.codeSnippet && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                soundFX.playClick();
                                setCodeInspectorProject(project);
                              }}
                              className="px-3.5 py-2 rounded-full bg-black/80 backdrop-blur-md text-[#F5F5F5] border border-white/20 text-xs font-mono flex items-center gap-1.5 hover:border-[#D8C3A5]"
                            >
                              <Code2 className="w-3.5 h-3.5 text-[#D8C3A5]" />
                              <span>View Code</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Project Information */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5`}>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F5F5]">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#A3B18A]">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-[#B5B5B5] leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Impact Highlight Card */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#D8C3A5]">Key Outcome & Impact</p>
                    <p className="text-xs text-[#F5F5F5] font-medium">{project.impact}</p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#1F1F1F] text-[#D8C3A5] border border-white/5 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-3">
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedProject(project);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#D8C3A5] text-[#0D0D0D] font-bold text-xs hover:bg-[#ebd5b7] transition-all flex items-center gap-1.5 shadow-lg"
                      data-cursor="button"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => soundFX.playHover()}
                        className="p-2.5 rounded-full bg-[#1F1F1F] text-[#B5B5B5] hover:text-[#D8C3A5] border border-white/10 hover:border-[#D8C3A5]/40 transition-all"
                        title="GitHub Code"
                        data-cursor="button"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => soundFX.playHover()}
                        className="p-2.5 rounded-full bg-[#1F1F1F] text-[#A3B18A] border border-white/10 hover:border-[#A3B18A] transition-all"
                        title="Live Demo Preview"
                        data-cursor="button"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Case Study Drawer Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card rounded-2xl p-6 sm:p-10 max-w-3xl w-full border border-white/10 space-y-6 bg-[#141414] my-auto max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F5F5]">{selectedProject.title}</h3>
                    <p className="text-xs font-mono text-[#A3B18A] mt-1">{selectedProject.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#F5F5F5] text-xs font-mono"
                  >
                    Close [ESC]
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#D8C3A5]">Problem Statement</h4>
                    <p className="text-xs text-[#B5B5B5] leading-relaxed font-light">{selectedProject.problem}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3B18A]">Engineered Solution</h4>
                    <p className="text-xs text-[#B5B5B5] leading-relaxed font-light">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5]">Architectural Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#B5B5B5] flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#D8C3A5]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full bg-[#1F1F1F] border border-white/10 text-xs font-medium text-[#F5F5F5] flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Code Snippet Inspector Modal */}
        <AnimatePresence>
          {codeInspectorProject && codeInspectorProject.codeSnippet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCodeInspectorProject(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card rounded-2xl p-6 max-w-2xl w-full border border-white/10 bg-[#0D0D0D] font-mono text-xs space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#D8C3A5]" />
                    <span className="text-[#F5F5F5] font-bold">{codeInspectorProject.codeSnippet.filename}</span>
                  </div>
                  <button
                    onClick={() => setCodeInspectorProject(null)}
                    className="text-xs text-[#B5B5B5] hover:text-white"
                  >
                    Close
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-[#141414] border border-white/5 overflow-x-auto text-[#D8C3A5] leading-relaxed">
                  <code>{codeInspectorProject.codeSnippet.code}</code>
                </pre>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
