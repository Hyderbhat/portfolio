import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CraftCorner } from './components/CraftCorner';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [resumeOpen, setResumeOpen] = useState(false);

  // Active section scroll tracking
  useEffect(() => {
    if (loading) return;

    const sections = ['hero', 'about', 'skills', 'projects', 'craft', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F5F5F5] font-sans overflow-x-hidden selection:bg-[#D8C3A5] selection:text-[#0D0D0D]">
      {/* Custom Spring Cursor */}
      <CustomCursor enabled={!loading} />

      {/* Particle & Ambient Spotlight Background */}
      <ParticleBackground />

      {/* Opening Studio Loading Screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          {/* Floating Pill Navbar */}
          <Navbar
            activeSection={activeSection}
            onOpenResume={() => setResumeOpen(true)}
          />

          {/* Main Portfolio Sections */}
          <main className="relative z-10">
            <HeroSection
              onOpenResume={() => setResumeOpen(true)}
              onNavigateToProjects={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onNavigateToContact={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <AboutSection />

            <SkillsSection />

            <ProjectsSection />

            <CraftCorner />

            <ExperienceSection />

            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Printable Resume Viewer Modal */}
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        </>
      )}
    </div>
  );
}
