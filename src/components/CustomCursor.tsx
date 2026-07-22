import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

interface CustomCursorProps {
  activeText?: string;
  enabled?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled = true }) => {
  const [hoveredState, setHoveredState] = useState<{
    isHovered: boolean;
    text: string;
    variant: 'default' | 'button' | 'card' | 'link' | 'text';
  }>({
    isHovered: false,
    text: '',
    variant: 'default',
  });

  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Smooth fluid spring physics for outer ring
  const cursorX = useSpring(-100, { stiffness: 240, damping: 22, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 240, damping: 22, mass: 0.5 });

  // Responsive pinpoint spring for inner dot
  const dotX = useSpring(-100, { stiffness: 750, damping: 35 });
  const dotY = useSpring(-100, { stiffness: 750, damping: 35 });

  useEffect(() => {
    const checkPointer = () => {
      // Hide custom cursor only on touch devices with small viewports
      const isTouch = 'ontouchstart' in window && window.innerWidth < 768;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobile(isTouch || reducedMotion);
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);

    if (!enabled || isMobile) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Check element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const buttonOrLink = target.closest('button, a, input, textarea, select, [role="button"]') as HTMLElement | null;

      if (cursorTarget) {
        const cursorText = cursorTarget.getAttribute('data-cursor-text') || '';
        const cursorType = (cursorTarget.getAttribute('data-cursor') || 'card') as 'default' | 'button' | 'card' | 'link' | 'text';
        setHoveredState({
          isHovered: true,
          text: cursorText,
          variant: cursorType,
        });
      } else if (buttonOrLink) {
        setHoveredState({
          isHovered: true,
          text: buttonOrLink.getAttribute('data-cursor-text') || '',
          variant: 'button',
        });
      } else {
        setHoveredState({
          isHovered: false,
          text: '',
          variant: 'default',
        });
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkPointer);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [enabled, isMobile, visible, cursorX, cursorY, dotX, dotY]);

  if (!enabled || isMobile || !visible) return null;

  const getRingSize = () => {
    switch (hoveredState.variant) {
      case 'card':
        return 68;
      case 'button':
        return 48;
      case 'text':
        return 56;
      default:
        return 32;
    }
  };

  const ringSize = getRingSize();

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#D8C3A5]/50 flex items-center justify-center bg-[#D8C3A5]/10 backdrop-blur-[2px] shadow-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
        }}
        animate={{
          scale: hoveredState.isHovered ? 1.15 : 1,
          borderColor: hoveredState.isHovered ? 'rgba(216, 195, 165, 0.9)' : 'rgba(216, 195, 165, 0.4)',
        }}
        transition={{ duration: 0.15 }}
      >
        {hoveredState.text && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D8C3A5] px-1 text-center select-none"
          >
            {hoveredState.text}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#D8C3A5] shadow"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: hoveredState.text ? 0 : 6,
          height: hoveredState.text ? 0 : 6,
        }}
      />
    </>
  );
};
