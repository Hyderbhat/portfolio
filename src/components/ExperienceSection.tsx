import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/sound';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D8C3A5]">
            <Sparkles className="w-3.5 h-3.5 text-[#D8C3A5]" />
            <span>05 // Career Timeline & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#F5F5F5]">
            Professional experience & <br />
            <span className="text-[#D8C3A5]">proven track record.</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20 relative">
          
          {/* Timeline Center Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-[1px] bg-white/10" />

          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => soundFX.playHover()}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
            >
              {/* Timeline Marker Dot */}
              <div className="hidden md:flex md:col-span-1 items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#1F1F1F] border border-[#D8C3A5]/40 flex items-center justify-center font-bold font-mono text-xs text-[#D8C3A5] z-10 group-hover:scale-110 group-hover:border-[#D8C3A5] transition-all shadow-lg">
                  {exp.logoText}
                </div>
              </div>

              {/* Experience Card */}
              <div className="md:col-span-11 glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5 bg-[#141414]">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">{exp.role}</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A3B18A]/20 text-[#A3B18A] border border-[#A3B18A]/30">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#D8C3A5] mt-0.5">{exp.company}</p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#B5B5B5]">
                    <span className="flex items-center gap-1 text-[#F5F5F5]">
                      <Calendar className="w-3.5 h-3.5 text-[#D8C3A5]" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[#B5B5B5]/70 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#B5B5B5] leading-relaxed font-light">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#D8C3A5]">Deliverables & Impact:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-xs text-[#B5B5B5] flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#A3B18A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[11px] font-mono text-[#B5B5B5]">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="pt-12 border-t border-white/10 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#A3B18A]/10 text-[#A3B18A] flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#F5F5F5]">Education & Academic Foundation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 bg-[#141414]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold font-heading text-[#F5F5F5]">{edu.degree}</h4>
                    <p className="text-xs font-mono text-[#D8C3A5]">{edu.institution}</p>
                  </div>
                  <div className="text-xs font-mono text-[#B5B5B5] flex items-center gap-2">
                    <span>{edu.duration}</span>
                    <span className="text-[#A3B18A] font-semibold">[{edu.gradeOrFocus}]</span>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-[#B5B5B5]">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
