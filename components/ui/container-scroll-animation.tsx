"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function ContainerScroll({
  titleComponent,
  children,
  backgroundComponent,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  backgroundComponent?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleDimensions = () => {
    return {
      scale: useTransform(scrollYProgress, [0, 1], [1, 0.85]),
    };
  };

  const { scale } = scaleDimensions();

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 0]
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-[180vh] w-full flex-col items-center justify-start overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          style={{
            scale,
            y: translateY,
            opacity,
          }}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 md:py-32">
            {titleComponent}
          </div>
        </motion.div>

        <motion.div
          style={{
            opacity: backgroundOpacity,
          }}
          className="absolute inset-0 z-[-1]"
        >
          {backgroundComponent}
        </motion.div>
      </div>

      <div className="mt-[100vh] w-full bg-background">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </div>
    </div>
  );
} 