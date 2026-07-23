import React, { useState, useRef } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';
import { Sparkles, Palette, RefreshCw, Move, Zap } from 'lucide-react';
import { soundFX } from '../utils/sound';

export const CraftCorner: React.FC = () => {
  const [stiffness, setStiffness] = useState(250);
  const [damping, setDamping] = useState(15);
  const [selectedTheme, setSelectedTheme] = useState<'beige' | 'sage' | 'indigo' | 'amber'>('beige');

  const stageRef = useRef<HTMLDivElement>(null);

  // Motion values for drag box position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const resetBox = () => {
    soundFX.playClick();
    setStiffness(250);
    setDamping(15);
    animate(x, 0, { type: 'spring', stiffness: 250, damping: 15 });
    animate(y, 0, { type: 'spring', stiffness: 250, damping: 15 });
  };

  const themeAccents = {
    beige: { name: 'Soft Beige', code: '#D8C3A5', bg: 'bg-[#D8C3A5]' },
    sage: { name: 'Muted Sage', code: '#A3B18A', bg: 'bg-[#A3B18A]' },
    indigo: { name: 'Electric Indigo', code: '#818CF8', bg: 'bg-[#818CF8]' },
    amber: { name: 'Warm Amber', code: '#F59E0B', bg: 'bg-[#F59E0B]' },
  };

  return (
    <section id="craft" className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D8C3A5]">
            <Sparkles className="w-3.5 h-3.5 text-[#D8C3A5]" />
            <span>04 // Interactive Craft Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#F5F5F5]">
            Motion physics & <br />
            <span className="text-[#D8C3A5]">real-time UI feel.</span>
          </h2>
          <p className="text-sm text-[#B5B5B5] max-w-xl font-light">
            Test spring dynamics, stiffness curve responses, and tactile feedback built with Framer Motion physics.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Spring Physics Interactive Stage */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-5 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6 bg-[#141414]">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#B5B5B5]">
              <div className="flex items-center gap-2">
                <Move className="w-4 h-4 text-[#D8C3A5]" />
                <span className="text-[#F5F5F5] font-bold uppercase text-[11px] sm:text-xs">Physics Drag Stage</span>
              </div>
              <button
                onClick={resetBox}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D8C3A5] transition-all border border-white/10 active:scale-95 text-xs font-mono"
                data-cursor="button"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Spring</span>
              </button>
            </div>

            {/* Interactive Canvas Area */}
            <div
              ref={stageRef}
              className="relative h-60 sm:h-72 w-full rounded-xl bg-[#0D0D0D] border border-white/5 flex items-center justify-center overflow-hidden bg-grain select-none touch-none p-4"
            >
              <p className="absolute text-[10px] sm:text-xs font-mono text-[#B5B5B5]/30 uppercase tracking-widest pointer-events-none text-center px-4">
                [ CLICK & DRAG SPRING BOX ]
              </p>

              <motion.div
                drag
                dragConstraints={stageRef}
                dragElastic={0.15}
                dragMomentum={false}
                onDragStart={() => soundFX.playClick()}
                onDragEnd={() => soundFX.playSuccess()}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl cursor-grab active:cursor-grabbing border border-white/20 flex flex-col items-center justify-center p-2.5 text-center shadow-2xl transition-shadow touch-none shrink-0"
                style={{
                  x,
                  y,
                  backgroundColor: themeAccents[selectedTheme].code,
                  color: '#0D0D0D',
                }}
                transition={{ type: 'spring', stiffness, damping }}
                data-cursor="button"
                data-cursor-text="DRAG"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider">Physics</span>
              </motion.div>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#B5B5B5]">Spring Stiffness:</span>
                  <span className="text-[#D8C3A5] font-bold">{stiffness}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-full accent-[#D8C3A5] cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#B5B5B5]">Spring Damping:</span>
                  <span className="text-[#A3B18A] font-bold">{damping}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={damping}
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="w-full accent-[#A3B18A] cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Theme & Code Architecture Tuning Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-5 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6 bg-[#141414]">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D8C3A5] uppercase tracking-wider">
                <Palette className="w-4 h-4" />
                <span>Color Accent Architecture</span>
              </div>

              <p className="text-xs text-[#B5B5B5] leading-relaxed font-light">
                Select an accent tone to see how theme tokens map across UI components in real time.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {Object.entries(themeAccents).map(([key, accent]) => (
                  <button
                    key={key}
                    onClick={() => {
                      soundFX.playClick();
                      setSelectedTheme(key as any);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                      selectedTheme === key
                        ? 'border-[#D8C3A5] bg-white/10 text-[#F5F5F5] shadow-lg'
                        : 'border-white/5 bg-white/[0.02] text-[#B5B5B5] hover:border-white/20'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full ${accent.bg} shrink-0`} />
                    <div className="text-xs font-mono truncate">
                      <p className="font-bold leading-none truncate">{accent.name}</p>
                      <p className="text-[10px] text-[#B5B5B5]/60 mt-0.5">{accent.code}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Micro Terminal Output */}
            <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 font-mono text-[11px] space-y-2">
              <div className="flex items-center justify-between text-[#B5B5B5]/60 border-b border-white/5 pb-2">
                <span>// Motion Config Generated</span>
                <span className="text-[#A3B18A]">60 FPS</span>
              </div>
              <pre className="text-[#D8C3A5] overflow-x-auto">
                <code>{`const transition = {
  type: "spring",
  stiffness: ${stiffness},
  damping: ${damping},
  mass: 1
};`}</code>
              </pre>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
