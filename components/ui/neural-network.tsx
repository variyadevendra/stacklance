"use client";

import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  connections: number[];
  pulsePhase: number;
  velocity: { x: number; y: number };
  active: boolean;
}

export const NeuralNetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    setCanvasSize();

    // Enhanced node creation
    const nodes: Node[] = [];
    const colors = ['#3B82F6', '#6366F1', '#8B5CF6', '#A855F7'];
    const layerCount = 4;
    const nodesPerLayer = [5, 8, 8, 5];
    
    // Calculate starting index for each layer
    const layerStartIndices: number[] = [];
    let currentIndex = 0;
    for (let i = 0; i < layerCount; i++) {
      layerStartIndices[i] = currentIndex;
      currentIndex += nodesPerLayer[i];
    }

    // Create nodes with physics
    for (let layer = 0; layer < layerCount; layer++) {
      const layerNodes = nodesPerLayer[layer];
      const xPos = (canvas.offsetWidth / (layerCount + 1)) * (layer + 1);
      
      for (let i = 0; i < layerNodes; i++) {
        const yPos = (canvas.offsetHeight / (layerNodes + 1)) * (i + 1);
        const node: Node = {
          x: xPos + (Math.random() - 0.5) * 50,
          y: yPos + (Math.random() - 0.5) * 50,
          targetX: xPos,
          targetY: yPos,
          radius: 4,
          color: colors[layer],
          connections: [],
          pulsePhase: Math.random() * Math.PI * 2,
          velocity: { x: 0, y: 0 },
          active: Math.random() > 0.5
        };

        // Connect to previous layer
        if (layer > 0) {
          const prevLayer = layer - 1;
          const prevLayerSize = nodesPerLayer[prevLayer];
          const prevLayerStart = layerStartIndices[prevLayer];
          
          // Create connections to previous layer
          for (let j = 0; j < prevLayerSize; j++) {
            if (Math.random() > 0.3) { // 70% chance of connection
              node.connections.push(prevLayerStart + j);
            }
          }
        }

        nodes.push(node);
      }
    }

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    let animationFrame: number;
    const animate = (time: number) => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update node positions with physics
      nodes.forEach(node => {
        const dx = node.targetX - node.x;
        const dy = node.targetY - node.y;
        
        node.velocity.x += dx * 0.02;
        node.velocity.y += dy * 0.02;
        
        node.velocity.x *= 0.95; // Damping
        node.velocity.y *= 0.95;
        
        node.x += node.velocity.x;
        node.y += node.velocity.y;

        // Mouse interaction
        const mouseDx = mousePos.current.x - node.x;
        const mouseDy = mousePos.current.y - node.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        if (mouseDistance < 100) {
          node.x -= mouseDx * 0.05;
          node.y -= mouseDy * 0.05;
        }
      });

      // Draw connections with data flow
      nodes.forEach((node, index) => {
        if (node.active) {
          node.connections.forEach(targetIndex => {
            if (targetIndex >= 0 && targetIndex < nodes.length) {
              const target = nodes[targetIndex];
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);

              // Animated gradient for data flow
              const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
              const phase = (time / 1000 + node.pulsePhase) % 1;
              const flowPos = Math.abs(Math.sin(phase * Math.PI * 2));
              
              gradient.addColorStop(0, `rgba(99, 102, 241, 0.1)`);
              gradient.addColorStop(flowPos, `rgba(139, 92, 246, 0.4)`);
              gradient.addColorStop(1, `rgba(99, 102, 241, 0.1)`);

              ctx.strokeStyle = gradient;
              ctx.lineWidth = 2;
              ctx.stroke();
            }
          });
        }
      });

      // Draw nodes with glow effect
      nodes.forEach(node => {
        // Outer glow
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        );
        glow.addColorStop(0, node.active ? `${node.color}40` : `${node.color}20`);
        glow.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.active ? node.color : `${node.color}80`;
        ctx.fill();

        // Periodically change node activity
        if (Math.random() < 0.002) {
          node.active = !node.active;
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate(0);
    window.addEventListener('resize', setCanvasSize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-3xl"
      style={{ 
        background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        cursor: 'pointer'
      }}
    />
  );
}; 