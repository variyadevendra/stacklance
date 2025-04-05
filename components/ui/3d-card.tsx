"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card3D({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Get mouse position relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    const rotateY = ((mouseX - rect.width / 2) / (rect.width / 2)) * 10;
    const rotateX = ((rect.height / 2 - mouseY) / (rect.height / 2)) * 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black/[0.05] p-8",
        "group cursor-pointer transition-colors hover:bg-black/[0.15]",
        "backdrop-blur-sm",
        className
      )}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/[0.15] to-purple-500/[0.15] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Glow effect */}
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-teal-500/20 blur-xl" />
      </div>
    </motion.div>
  );
} 