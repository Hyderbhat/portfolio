import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, X } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import resumePdf from '../assets/Hyder_Bhat_Resume (1).pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'web' | 'pdf'>('web');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card rounded-2xl max-w-5xl w-full border border-white/10 bg-[#121212] text-[#F5F5F5] my-auto max-h-[94vh] overflow-y-auto p-4 sm:p-8 space-y-6 shadow-2xl"
        >
          {/* Header Action Bar */}
          <div className="space-y-3 pb-4 border-b border-white/10 print:hidden">
            {/* Top Bar: Title & Close Button */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#D8C3A5] shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-[#F5F5F5] leading-tight">Hyder Bhat — Curriculum Vitae</h3>
                  <p className="text-[10px] sm:text-[11px] font-mono text-[#A3B18A]">Hyder_Bhat_Resume.pdf</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#B5B5B5] hover:text-white transition-all shrink-0 border border-white/10"
                title="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Controls Row: View Switcher & Download PDF */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
              {/* Toggle Web View vs PDF Document */}
              <div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setViewMode('web');
                  }}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                    viewMode === 'web' ? 'bg-[#D8C3A5] text-[#0D0D0D] font-bold' : 'text-[#B5B5B5] hover:text-white'
                  }`}
                >
                  Web View
                </button>
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setViewMode('pdf');
                  }}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                    viewMode === 'pdf' ? 'bg-[#D8C3A5] text-[#0D0D0D] font-bold' : 'text-[#B5B5B5] hover:text-white'
                  }`}
                >
                  PDF Document
                </button>
              </div>

              <a
                href={resumePdf}
                download="Hyder_Bhat_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                className="px-3.5 py-1.5 rounded-lg bg-[#D8C3A5] text-[#0D0D0D] text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-[#ebd5b7] transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Modal Body Content */}
          {viewMode === 'pdf' ? (
            <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#171717]">
              <iframe
                src={`${resumePdf}#toolbar=1`}
                title="Hyder Bhat Resume PDF"
                className="w-full h-[72vh] rounded-xl bg-[#1C1C1C]"
              />
            </div>
          ) : (
            <div className="printable-cv space-y-6 font-sans text-xs leading-relaxed text-[#F5F5F5] print:text-black">
              {/* Header / Contact Info */}
              <div className="space-y-2 border-b border-white/10 pb-6 print:border-black">
                <h1 className="text-3xl font-extrabold font-heading text-[#F5F5F5] tracking-tight">{PERSONAL_INFO.name}</h1>
                <p className="text-sm font-semibold text-[#D8C3A5]">{PERSONAL_INFO.role}</p>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-[#B5B5B5] pt-1">
                  <span>{PERSONAL_INFO.location}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.phone}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.email}</span>
                  <span>•</span>
                  <span>github.com/Hyderbhat</span>
                  <span>•</span>
                  <span>linkedin.com/in/hyder-bhat-a3b8a0281</span>
                </div>
              </div>

              {/* PROFESSIONAL SUMMARY */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D8C3A5] border-b border-white/10 pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-xs text-[#B5B5B5] leading-relaxed font-light">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* TECHNICAL SKILLS */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D8C3A5] border-b border-white/10 pb-1">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-1.5">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="grid grid-cols-12 gap-2 text-xs">
                      <span className="col-span-3 sm:col-span-2 font-bold text-[#F5F5F5]">{cat.title}:</span>
                      <span className="col-span-9 sm:col-span-10 text-[#B5B5B5] font-mono">
                        {cat.skills.map((s) => s.name).join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D8C3A5] border-b border-white/10 pb-1">
                  EXPERIENCE
                </h2>

                <div className="space-y-4">
                  {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex justify-between items-baseline flex-wrap gap-2">
                        <h3 className="font-bold text-sm text-[#F5F5F5]">
                          {exp.role} – <span className="text-[#D8C3A5]">{exp.company}</span>
                        </h3>
                        <span className="font-mono text-[11px] text-[#B5B5B5]">{exp.duration}</span>
                      </div>
                      <ul className="space-y-1 text-[#B5B5B5] pl-1">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#A3B18A] mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECTS */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D8C3A5] border-b border-white/10 pb-1">
                  PROJECTS
                </h2>
                <div className="space-y-3">
                  {PROJECTS_DATA.map((proj) => (
                    <div key={proj.id} className="space-y-1">
                      <div className="flex items-baseline justify-between flex-wrap gap-2">
                        <h3 className="font-bold text-xs text-[#F5F5F5]">
                          {proj.title} – <span className="text-[#D8C3A5] font-normal">{proj.subtitle}</span>
                        </h3>
                        {proj.demoUrl && (
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-mono text-[#A3B18A] hover:underline"
                          >
                            {proj.demoUrl.replace(/^https?:\/\//, '')}
                          </a>
                        )}
                      </div>
                      <p className="text-[11px] text-[#B5B5B5] font-light leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EDUCATION */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D8C3A5] border-b border-white/10 pb-1">
                  EDUCATION
                </h2>
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="space-y-0.5">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h3 className="font-bold text-xs text-[#F5F5F5]">
                        {edu.degree} – <span className="text-[#D8C3A5] font-normal">{edu.institution}</span>
                      </h3>
                      <span className="font-mono text-[10px] text-[#B5B5B5]">{edu.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
