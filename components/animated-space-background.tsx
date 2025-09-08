"use client";

import { useEffect, useRef } from "react";

export default function AnimatedSpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles array
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      type: 'star' | 'dot' | 'neural' | 'data';
      pulsePhase: number;
      connections?: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Neural network nodes
    const neuralNodes: Array<{
      x: number;
      y: number;
      size: number;
      connections: number[];
      activity: number;
      color: string;
    }> = [];

    // Colors for different particle types
    const colors = {
      star: '#ffffff',
      dot: '#64b5f6',
      neural: '#00e676',
      data: '#ff6b6b',
      accent: '#6366f1',
      secondary: '#06b6d4'
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      
      // Stars
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.star,
          type: 'star',
          pulsePhase: Math.random() * Math.PI * 2
        });
      }

      // Data points
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.6 + 0.4,
          color: Math.random() > 0.5 ? colors.accent : colors.secondary,
          type: 'data',
          pulsePhase: Math.random() * Math.PI * 2
        });
      }

      // Neural network particles
      for (let i = 0; i < 60; i++) {
        const connections = [];
        for (let j = 0; j < 3; j++) {
          if (Math.random() > 0.7) {
            connections.push({
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: Math.random() * 0.3 + 0.1
            });
          }
        }
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.7 + 0.3,
          color: colors.neural,
          type: 'neural',
          pulsePhase: Math.random() * Math.PI * 2,
          connections
        });
      }
    };

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
      gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.85)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update pulse
        particle.pulsePhase += 0.02;
        const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;

        // Draw connections for neural particles
        if (particle.type === 'neural' && particle.connections) {
          particle.connections.forEach(connection => {
            const targetX = particle.x + connection.x;
            const targetY = particle.y + connection.y;
            
            if (targetX > 0 && targetX < canvas.width && targetY > 0 && targetY < canvas.height) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 230, 118, ${connection.opacity * pulse * 0.5})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(targetX, targetY);
              ctx.stroke();
            }
          });
        }

        // Draw particle based on type
        ctx.save();
        ctx.globalAlpha = particle.opacity * pulse;

        switch (particle.type) {
          case 'star':
            // Draw twinkling star
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
              const angle = (i * Math.PI) / 2 + time;
              const x = particle.x + Math.cos(angle) * particle.size;
              const y = particle.y + Math.sin(angle) * particle.size;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.fill();
            break;

          case 'data':
            // Draw data point with glow
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, particle.size * 3
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            break;

          case 'neural':
            // Draw neural node
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2);
            ctx.fill();
            
            // Inner glow
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
            ctx.fill();
            break;
        }

        ctx.restore();
      });

      // Draw flowing data streams
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const startX = (time * 50 + i * 200) % (canvas.width + 200) - 200;
        const startY = canvas.height * 0.2 + Math.sin(time + i) * 50;
        
        ctx.moveTo(startX, startY);
        for (let x = 0; x < 300; x += 10) {
          const y = startY + Math.sin((startX + x) * 0.01 + time) * 30;
          ctx.lineTo(startX + x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.speedX += (dx / distance) * force * 0.01;
          particle.speedY += (dy / distance) * force * 0.01;
          
          // Limit speed
          particle.speedX = Math.max(-2, Math.min(2, particle.speedX));
          particle.speedY = Math.max(-2, Math.min(2, particle.speedY));
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  );
}