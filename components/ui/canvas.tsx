"use client";

import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Line {
  nodes: Node[];
  spring: number;
  friction: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const AICanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lines = useRef<Line[]>([]);
  const hue = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration
    const CONFIG = {
      trails: 60,
      size: 50,
      tension: 0.99,
      dampening: 0.025,
      friction: 0.5,
      springStrength: 0.45,
      hueSpeed: 0.01
    };

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Create a line with spring physics
    const createLine = (springOffset: number = 0) => {
      const nodes: Node[] = [];
      for (let i = 0; i < CONFIG.size; i++) {
        nodes.push({ x: 0, y: 0, vx: 0, vy: 0 });
      }

      return {
        nodes,
        spring: CONFIG.springStrength + springOffset,
        friction: CONFIG.friction,
        update() {
          let spring = this.spring;
          let node = this.nodes[0];

          // Update first node based on mouse position
          node.vx += (mousePos.current.x - node.x) * spring;
          node.vy += (mousePos.current.y - node.y) * spring;

          // Update rest of the nodes
          for (let i = 1; i < this.nodes.length; i++) {
            node = this.nodes[i];
            const prev = this.nodes[i - 1];

            node.vx += (prev.x - node.x) * spring;
            node.vy += (prev.y - node.y) * spring;
            node.vx += prev.vx * CONFIG.dampening;
            node.vy += prev.vy * CONFIG.dampening;
            node.vx *= this.friction;
            node.vy *= this.friction;
            node.x += node.vx;
            node.y += node.vy;

            spring *= CONFIG.tension;
          }
        },
        draw(ctx: CanvasRenderingContext2D) {
          ctx.beginPath();
          ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

          for (let i = 1; i < this.nodes.length - 2; i++) {
            const node = this.nodes[i];
            const next = this.nodes[i + 1];
            const xc = (node.x + next.x) * 0.5;
            const yc = (node.y + next.y) * 0.5;
            ctx.quadraticCurveTo(node.x, node.y, xc, yc);
          }

          const i = this.nodes.length - 2;
          const node = this.nodes[i];
          const next = this.nodes[i + 1];
          ctx.quadraticCurveTo(node.x, node.y, next.x, next.y);
          ctx.stroke();
        }
      };
    };

    // Initialize lines
    for (let i = 0; i < CONFIG.trails; i++) {
      const springOffset = (i / CONFIG.trails) * 0.025;
      lines.current.push(createLine(springOffset));
    }

    // Handle mouse/touch movement
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        mousePos.current.x = e.touches[0].clientX;
        mousePos.current.y = e.touches[0].clientY;
      } else {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
      }
    };

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      lines.current.forEach((line, i) => {
        ctx.strokeStyle = `hsla(${hue.current + i}, 90%, 50%, 0.025)`;
        ctx.lineWidth = 1;
        line.update();
        line.draw(ctx);
      });

      hue.current = (hue.current + CONFIG.hueSpeed) % 360;
      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Event listeners
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);

    // Initial mouse position
    mousePos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom right, #ffffff, #f8fafc)' }}
    />
  );
};

export default AICanvas;
