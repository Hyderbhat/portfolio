import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { soundFX } from '../utils/sound';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(!soundFX.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'craft', label: 'Craft' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSoundToggle = () => {
    const newState = soundFX.toggle();
    setIsMuted(!newState);
  };

  const scrollToSection = (id: string) => {
    soundFX.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 rounded-full glass-nav px-4 sm:px-6 py-2.5 sm:py-3 border border-white/10 shadow-2xl ${
          scrolled ? 'w-full max-w-4xl py-2 sm:py-2.5 bg-[#0D0D0D]/90 scale-95' : 'w-full max-w-5xl'
        }`}
      >
        {/* Brand Logo & Status */}
        <button
          onClick={() => scrollToSection('hero')}
          onMouseEnter={() => soundFX.playHover()}
          className="flex items-center gap-3 group text-left focus:outline-none"
          data-cursor="button"
          data-cursor-text="HB"
        >
          <div className="w-8 h-8 rounded-full bg-[#1F1F1F] border border-white/10 flex items-center justify-center text-[#D8C3A5] font-bold font-mono text-xs group-hover:border-[#D8C3A5]/50 group-hover:scale-105 transition-all">
            HB
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-bold font-heading text-[#F5F5F5] group-hover:text-[#D8C3A5] transition-colors leading-tight">
              Hyder Bhat
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-[#A3B18A] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A] animate-pulse" />
              Available for work
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => soundFX.playHover()}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full focus:outline-none ${
                  isActive ? 'text-[#0D0D0D] font-semibold' : 'text-[#B5B5B5] hover:text-[#F5F5F5]'
                }`}
                data-cursor="button"
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#D8C3A5] rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Utility Buttons */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => soundFX.playHover()}
            title={isMuted ? 'Enable UI Audio' : 'Mute UI Audio'}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#B5B5B5] hover:text-[#D8C3A5] hover:border-[#D8C3A5]/40 transition-all bg-white/[0.02]"
            data-cursor="button"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D8C3A5]" />}
          </button>

          {/* Resume Trigger */}
          <button
            onClick={onOpenResume}
            onMouseEnter={() => soundFX.playHover()}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D8C3A5]/10 border border-[#D8C3A5]/30 text-[#D8C3A5] text-xs font-medium hover:bg-[#D8C3A5] hover:text-[#0D0D0D] transition-all group"
            data-cursor="button"
            data-cursor-text="CV"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#F5F5F5] bg-white/[0.05]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-50 pointer-events-auto bg-[#171717]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#D8C3A5] text-[#0D0D0D] font-bold'
                    : 'text-[#B5B5B5] hover:bg-white/5 hover:text-[#F5F5F5]'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <div className="w-2 h-2 rounded-full bg-[#0D0D0D]" />}
              </button>
            ))}

            <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 rounded-xl bg-[#D8C3A5]/10 border border-[#D8C3A5]/40 text-[#D8C3A5] text-sm font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Complete Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
