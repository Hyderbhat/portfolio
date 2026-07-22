import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-white/10 relative z-10 bg-[#0A0A0A]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1F1F1F] border border-white/10 flex items-center justify-center text-[#D8C3A5] font-bold font-mono text-xs">
                HB
              </div>
              <span className="text-lg font-bold font-heading text-[#F5F5F5]">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-[#B5B5B5] max-w-sm font-light">
              Full-Stack Developer crafting fast, responsive, and reliable web software.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            {PERSONAL_INFO.github && (
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1F1F1F] text-[#B5B5B5] hover:text-[#D8C3A5] border border-white/10 hover:border-[#D8C3A5]/40 transition-all"
                title="GitHub"
                data-cursor="button"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {PERSONAL_INFO.linkedin && (
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1F1F1F] text-[#B5B5B5] hover:text-[#D8C3A5] border border-white/10 hover:border-[#D8C3A5]/40 transition-all"
                title="LinkedIn"
                data-cursor="button"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 rounded-full bg-[#D8C3A5] text-[#0D0D0D] font-bold text-xs hover:bg-[#ebd5b7] transition-all flex items-center gap-1.5 shadow-lg"
              data-cursor="button"
              data-cursor-text="TOP"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Quote & Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#B5B5B5]/60">
          <p>© {new Date().getFullYear()} Hyder Bhat. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
