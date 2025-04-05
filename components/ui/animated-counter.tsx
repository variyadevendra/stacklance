"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

export const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const countRef = useRef({ value: 0, startTime: 0, frameId: 0 });

  useEffect(() => {
    if (!inView) return;

    // Easing function for smooth animation
    const easeOutQuad = (t: number) => t * (2 - t);

    const animate = (timestamp: number) => {
      if (!countRef.current.startTime) {
        countRef.current.startTime = timestamp;
      }

      const progress = Math.min((timestamp - countRef.current.startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.floor(easedProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        countRef.current.frameId = requestAnimationFrame(animate);
      }
    };

    countRef.current.frameId = requestAnimationFrame(animate);

    return () => {
      if (countRef.current.frameId) {
        cancelAnimationFrame(countRef.current.frameId);
      }
    };
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
}; 