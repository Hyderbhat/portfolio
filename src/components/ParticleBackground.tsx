import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  accentColor?: string;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ accentColor = '#D8C3A5' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Particle setup
    const numParticles = Math.min(Math.floor(width / 35), 45);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      baseSpeedX: (Math.random() - 0.5) * 0.25,
      baseSpeedY: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render Ambient Spotlight
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.45
      );
      gradient.addColorStop(0, 'rgba(216, 195, 165, 0.05)');
      gradient.addColorStop(0.5, 'rgba(163, 177, 138, 0.02)');
      gradient.addColorStop(1, 'rgba(13, 13, 13, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Particles
      particles.forEach((p) => {
        p.x += p.baseSpeedX + (mouse.x - width / 2) * 0.00005;
        p.y += p.baseSpeedY + (mouse.y - height / 2) * 0.00005;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 195, 165, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full opacity-80" />
      <div className="absolute inset-0 bg-grain pointer-events-none" />
    </div>
  );
};
