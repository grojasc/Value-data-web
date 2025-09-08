"use client";

import { useEffect, useRef } from "react";

interface AIVideoPlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function AIVideoPlaceholder({ width = 1104, height = 576, className = "" }: AIVideoPlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // AI Brain visualization
    const neurons: Array<{
      x: number;
      y: number;
      connections: number[];
      activity: number;
      size: number;
    }> = [];

    // Initialize neural network
    const neuronCount = 25;
    const layers = [6, 8, 6, 4];
    let neuronIndex = 0;

    layers.forEach((layerSize, layerIndex) => {
      const startY = (height - (layerSize - 1) * 60) / 2;
      const x = (width / (layers.length + 1)) * (layerIndex + 1);
      
      for (let i = 0; i < layerSize; i++) {
        const y = startY + i * 60;
        neurons.push({
          x,
          y,
          connections: [],
          activity: Math.random(),
          size: 8 + Math.random() * 4
        });
        neuronIndex++;
      }
    });

    // Create connections between layers
    let startIndex = 0;
    for (let layer = 0; layer < layers.length - 1; layer++) {
      const currentLayerSize = layers[layer];
      const nextLayerSize = layers[layer + 1];
      
      for (let i = 0; i < currentLayerSize; i++) {
        const neuronIdx = startIndex + i;
        for (let j = 0; j < nextLayerSize; j++) {
          if (Math.random() > 0.3) { // 70% connection probability
            neurons[neuronIdx].connections.push(startIndex + currentLayerSize + j);
          }
        }
      }
      startIndex += currentLayerSize;
    }

    // Data particles
    const dataParticles: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      color: string;
      size: number;
    }> = [];

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      
      // Clear canvas with dark gradient
      const bgGradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
      bgGradient.addColorStop(0, 'rgba(15, 23, 42, 1)');
      bgGradient.addColorStop(0.7, 'rgba(30, 41, 59, 1)');
      bgGradient.addColorStop(1, 'rgba(15, 23, 42, 1)');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Update neuron activity
      neurons.forEach(neuron => {
        neuron.activity = Math.sin(time + neuron.x * 0.01 + neuron.y * 0.01) * 0.5 + 0.5;
      });

      // Draw connections
      neurons.forEach((neuron, index) => {
        neuron.connections.forEach(targetIndex => {
          const target = neurons[targetIndex];
          if (!target) return;

          const activity = (neuron.activity + target.activity) / 2;
          const alpha = activity * 0.6 + 0.1;
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 1 + activity;
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();

          // Flowing data particles
          if (Math.random() < 0.02 && activity > 0.6) {
            dataParticles.push({
              x: neuron.x,
              y: neuron.y,
              targetX: target.x,
              targetY: target.y,
              progress: 0,
              color: `hsl(${220 + Math.random() * 40}, 70%, 60%)`,
              size: 2 + Math.random() * 3
            });
          }
        });
      });

      // Update and draw data particles
      for (let i = dataParticles.length - 1; i >= 0; i--) {
        const particle = dataParticles[i];
        particle.progress += 0.02;

        if (particle.progress >= 1) {
          dataParticles.splice(i, 1);
          continue;
        }

        const x = particle.x + (particle.targetX - particle.x) * particle.progress;
        const y = particle.y + (particle.targetY - particle.y) * particle.progress;

        ctx.save();
        ctx.globalAlpha = 1 - particle.progress;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw neurons
      neurons.forEach(neuron => {
        const glowSize = neuron.size + neuron.activity * 10;
        
        // Glow effect
        const glowGradient = ctx.createRadialGradient(neuron.x, neuron.y, 0, neuron.x, neuron.y, glowSize);
        glowGradient.addColorStop(0, `rgba(0, 230, 118, ${neuron.activity * 0.8})`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Core neuron
        ctx.fillStyle = neuron.activity > 0.7 ? '#00e676' : '#64b5f6';
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(neuron.x - 2, neuron.y - 2, neuron.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw floating text/code elements
      ctx.font = '12px monospace';
      ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
      const codeSnippets = ['AI', 'ML', '01', '10', 'DATA', 'LEARN', 'PREDICT', 'ANALYZE'];
      
      codeSnippets.forEach((text, index) => {
        const x = 50 + (index % 4) * 200 + Math.sin(time + index) * 20;
        const y = 50 + Math.floor(index / 4) * 400 + Math.cos(time + index * 0.7) * 30;
        ctx.fillText(text, x, y);
      });

      // Central "AI" indicator
      ctx.save();
      ctx.globalAlpha = Math.sin(time * 2) * 0.3 + 0.7;
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#6366f1';
      ctx.textAlign = 'center';
      ctx.fillText('AI PROCESSING', width / 2, height / 2 + 150);
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [width, height]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover rounded-2xl border border-accent-500/20"
        style={{ maxWidth: width, maxHeight: height }}
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}