import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds sleek loading

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 600); // Trigger completion after exit transition
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col justify-between p-8 md:p-16 select-none bg-grain border-b border-white/10"
        >
          {/* Top Brand Monogram */}
          <div className="flex justify-between items-center text-xs font-mono tracking-widest text-[#B5B5B5]/60 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D8C3A5] animate-pulse" />
              Hyder Bhat — 2026
            </span>
            <span>Full Stack & UI Architecture</span>
          </div>

          {/* Center Brand Title */}
          <div className="my-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D8C3A5]">
                [ Creative Engineer Portfolio ]
              </p>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight font-heading text-[#F5F5F5] leading-none">
                HYDER BHAT<span className="text-[#D8C3A5]">.</span>
              </h1>
              <p className="text-sm md:text-base text-[#B5B5B5] max-w-lg font-light">
                Bridging architectural elegance with fluid high-performance web software.
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="space-y-3">
            <div className="flex justify-between items-end text-xs font-mono text-[#B5B5B5]">
              <span className="uppercase tracking-widest">INITIALIZING STUDIO RUNTIME</span>
              <span className="text-lg font-bold text-[#D8C3A5]">{progress}%</span>
            </div>

            {/* Progress line */}
            <div className="w-full h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#A3B18A] to-[#D8C3A5]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
