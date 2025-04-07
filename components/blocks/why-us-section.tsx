"use client";

import { cn } from "@/lib/utils";
import {
  IconTrophy,
  IconClock,
  IconUsers,
  IconBulb,
  IconDeviceDesktop,
  IconShield,
  IconChartBar,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { motion, useInView, useMotionValue, useTransform, useScroll, AnimatePresence, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect, ReactNode, createRef } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MaterialIcon } from "@/components/ui/material-icon";
import { TechStackIcons } from 'tech-stack-icons';
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
  scrollDirection: 'up' | 'down';
}

const FeatureCard = ({ feature, index, isVisible, scrollDirection }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, {
    once: false,
    margin: "-10% 0px",
    amount: 0.3,
  });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Simple animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.98 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        delay: 0.05 * index,
      }
    },
    hover: {
      y: -6,
      transition: { 
        duration: 0.2, 
        ease: "easeOut" 
      }
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) / 10);
    y.set((event.clientY - centerY) / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <div ref={inViewRef} className="w-full h-full">
    <motion.div
      ref={cardRef}
      className={cn(
          "relative overflow-hidden flex flex-col rounded-xl",
          "bg-white/95 dark:bg-gray-800/90 shadow-md hover:shadow-lg",
          "border border-gray-100/90 dark:border-gray-700/60",
          "transition-all duration-300 p-6 h-full",
          "group/card will-change-transform"
      )}
      style={{
          transform: isHovered ? `perspective(1000px) rotateX(${y.get()}deg) rotateY(${-x.get()}deg)` : 'none',
        }}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
    >
        {/* Simple border highlight on hover */}
      <motion.div 
          className="absolute inset-0 rounded-xl z-0 border border-transparent"
          animate={{ 
            borderColor: isHovered ? 'rgba(99, 102, 241, 0.3)' : 'transparent',
            boxShadow: isHovered ? 'inset 0 0 20px 1px rgba(99, 102, 241, 0.1)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div 
            className="mb-5 w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 
                     flex items-center justify-center"
      >
        <motion.div 
          initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-indigo-600 dark:text-indigo-400"
        >
          {feature.icon}
        </motion.div>
        </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight mb-2">
            {feature.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow mb-4">
          {feature.description}
        </p>

          {/* Learn more link */}
          <motion.div
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-auto 
                     flex items-center space-x-1 opacity-0 group-hover/card:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn more</span>
            <MaterialIcon name="arrow_forward" className="w-3.5 h-3.5" />
    </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const benefits = [
  {
    title: "Strategy First",
    description: "We don't just code—we architect success. Our strategic approach starts with understanding your vision, market fit, and growth trajectory.",
    icon: "psychology",
    theme: "indigo",
    stats: { value: "98%", label: "Success Rate" },
    proof: "200+ projects delivered",
    features: ["Market Analysis", "Tech Strategy", "Growth Planning"]
  },
  {
    title: "Speed to Value",
    description: "Experience rapid development without sacrificing quality. Get your first working demo in 7 days, then iterate fast with weekly releases.",
    icon: "speed",
    theme: "indigo",
    stats: { value: "3x", label: "Faster Delivery" },
    proof: "Accelerated development cycle",
    features: ["Weekly Releases", "Rapid Prototyping", "Agile Sprints"]
  },
  {
    title: "Built to Scale",
    description: "Future-proof architecture that grows with your success. From MVP to millions of users, our solutions are engineered for seamless scaling.",
    icon: "trending_up",
    theme: "indigo",
    stats: { value: "99.9%", label: "Uptime" },
    proof: "Backed by battle-tested infrastructure",
    features: ["Auto-scaling", "Global CDN", "Load Testing"]
  },
  {
    title: "Full Partnership",
    description: "More than just developers—we're your technical co-founders. Get 24/7 access to senior engineers, strategists, and growth experts.",
    icon: "handshake",
    theme: "indigo",
    stats: { value: "24/7", label: "Team Access" },
    proof: "92% client retention",
    features: ["Direct CTO Access", "Dedicated Team", "Strategic Advisory"]
  }
];

// Add animation variants for the benefit cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  hover: {
    y: -8,
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const StaggeredBenefit = ({ benefit, index, scrollDirection }: { benefit: typeof benefits[0]; index: number; scrollDirection: 'up' | 'down' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-50px 0px"
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
    >
      <div className={cn(
        "h-full p-8",
        "bg-white",
        "rounded-2xl",
        "border border-gray-100",
        "transition-all duration-300",
        "flex flex-col",
        "overflow-hidden"
      )}>
        {/* Main Content Container */}
        <div className="flex flex-col h-full">
          {/* Icon and Title Section */}
          <div className="flex items-start gap-5 mb-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
              "bg-[#C6E7FF] border border-[#D4F6FF]"
            )}>
              <MaterialIcon
                name={benefit.icon}
                className="w-6 h-6 text-[#000000]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-6 mb-8">
            <ul className="space-y-3">
              {benefit.features.map((feature, i) => (
                <motion.li 
                  key={feature}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -5 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-[#D4F6FF] border border-[#C6E7FF]">
                    <MaterialIcon
                      name="check"
                      className="w-3.5 h-3.5 text-[#000000]"
                    />
                  </span>
                  <span className="text-[15px] text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Stats Card - Bottom Section */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFDDAE] border border-[#FFDDAE]/70 flex items-center justify-center mx-auto">
                  <MaterialIcon
                    name={getStatIcon(benefit.stats.label)}
                    className="w-6 h-6 text-[#000000]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-2xl font-semibold text-gray-900 mb-1">
                  {benefit.stats.value}
                </p>
                <p className="text-[15px] text-gray-500">
                  {benefit.stats.label}
                </p>
              </div>
              <p className="mt-4 text-[14px] text-gray-500">
                {benefit.proof}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to get gradient colors based on theme
function getGradientColors(theme: string) {
  switch (theme) {
    case 'blue':
      return '#3b82f6, #1e40af';
    case 'indigo':
      return '#6366f1, #3730a3';
    case 'purple':
      return '#8b5cf6, #5b21b6';
    case 'rose':
      return '#f43f5e, #9f1239';
    default:
      return '#6366f1, #3730a3';
  }
}

// Helper function to get background color class based on theme
function getBgColorFromTheme(theme: string, opacity: string) {
  return `bg-${theme}-${opacity}`;
}

// Helper function to get text color class based on theme
function getTextColorFromTheme(theme: string, opacity: string) {
  return `text-${theme}-${opacity}`;
}

// Helper function to get border color class based on theme
function getBorderColorFromTheme(theme: string, opacity: string) {
  return `border-${theme}-${opacity}`;
}

// Helper function to get gradient color based on theme
function getGradientFromTheme(theme: string, opacity: string) {
  switch (theme) {
    case 'blue':
      return `#dbeafe`;
    case 'indigo':
      return `#e0e7ff`;
    case 'purple':
      return `#ede9fe`;
    case 'rose':
      return `#ffe4e6`;
    default:
      return `#e0e7ff`;
  }
}

const CountUp = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numberValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    let start = 0;
    const end = numberValue;
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numberValue, duration]);

  return <>{count}{value.includes('%') ? '%' : 'x'}</>;
};

const JourneyStep = ({ step, isActive }: { step: typeof journey[0]; isActive: boolean }) => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`inline-flex items-center px-6 py-3 rounded-full bg-${step.color}-500/10 border border-${step.color}-500/20`}
      >
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mr-3"
        >
          {step.icon}
        </motion.div>
        <span className={`text-${step.color}-600 dark:text-${step.color}-400 font-medium`}>
          {step.phase}
        </span>
      </motion.div>

      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100"
        >
          {step.headline}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600 dark:text-gray-400"
        >
          {step.description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`text-lg font-medium text-${step.color}-600 dark:text-${step.color}-400`}
        >
          {step.emphasis}
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Key Benefits
          </h4>
          {step.benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className={`flex items-center space-x-3 p-3 rounded-lg bg-${step.color}-500/5 border border-${step.color}-500/10`}
            >
              <svg className={`w-5 h-5 text-${step.color}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Deliverables
          </h4>
          {step.outcomes.map((outcome, i) => (
            <motion.div
              key={outcome}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className={`flex items-center space-x-3 p-3 rounded-lg bg-${step.color}-500/5 border border-${step.color}-500/10`}
            >
              <svg className={`w-5 h-5 text-${step.color}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className={`inline-flex items-center px-6 py-4 rounded-xl bg-${step.color}-500/5 border border-${step.color}-500/10`}
      >
        <span className={`text-3xl font-bold text-${step.color}-600 dark:text-${step.color}-400`}>
          <CountUp value={step.metrics.value} />
        </span>
        <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
          {step.metrics.label}
        </span>
      </motion.div>
    </div>
  );
};

const JourneyTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollingToStep, setScrollingToStep] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Global scroll direction tracking for all steps
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }
      lastScrollY.current = currentScrollY;
    };
    
    // Use requestAnimationFrame for better performance
    let rafId: number;
    const tick = () => {
      handleScroll();
      rafId = requestAnimationFrame(tick);
    };
    
    rafId = requestAnimationFrame(tick);
    
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Journey line animation
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Background color animation based on active step
  const backgroundColor = useTransform(
    scrollYProgress,
    journey.map((_, i) => i / (journey.length - 1)),
    journey.map(step => `var(--${step.color}-50)`)
  );

  // Improved scroll handling with requestAnimationFrame for better performance
  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (scrollingToStep || !containerRef.current) return;

      const container = containerRef.current;
      const { top } = container.getBoundingClientRect();
      const stepHeight = window.innerHeight;
      const currentStep = Math.max(0, Math.min(Math.round(Math.abs(top) / stepHeight), journey.length - 1));
      
      // Only update the active step if it has changed
      if (currentStep !== activeStep) {
        setActiveStep(currentStep);
      }
      
      lastScrollY = window.scrollY;
      rafId = requestAnimationFrame(handleScroll);
    };

    rafId = requestAnimationFrame(handleScroll);
    
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [activeStep, scrollingToStep]);

  // Helper function to scroll to a specific step
  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    
    setScrollingToStep(true);
    const stepElement = document.getElementById(`journey-step-${index}`);
    
    if (stepElement) {
      stepElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      setActiveStep(index);
      
      // Reset the scrolling state after animation completes
      setTimeout(() => {
        setScrollingToStep(false);
      }, 1000);
    } else {
      setScrollingToStep(false);
    }
  };

  return (
    <motion.div 
      ref={containerRef} 
      className="relative min-h-screen scroll-smooth"
      style={{ 
        scrollSnapType: 'y mandatory',
        backgroundColor
      }}
    >
      {/* Connected Journey Line */}
      <motion.div className="fixed left-1/2 top-0 h-full w-px" style={{ opacity: pathOpacity }}>
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ overflow: "visible" }}
        >
          <motion.path
            d="M 0,0 L 0,100%"
            stroke="url(#journeyGradient)"
            strokeWidth="2"
            fill="none"
            style={{
              pathLength,
              strokeDasharray: 1,
              strokeDashoffset: 1,
            }}
          />
          <defs>
            <linearGradient id="journeyGradient" x1="0" y1="0" x2="0" y2="1">
              {journey.map((step, i) => (
                <stop
                  key={i}
                  offset={`${(i / (journey.length - 1)) * 100}%`}
                  stopColor={`var(--${step.color}-500)`}
                />
              ))}
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Journey Steps */}
      {journey.map((step, index) => {
        // Create refs for each step to track visibility
        const stepRef = useRef<HTMLDivElement>(null);
        const isStepInView = useInView(stepRef, {
          once: false,
          amount: 0.4
        });
        
        return (
        <motion.div
            id={`journey-step-${index}`}
          key={step.phase}
            ref={stepRef}
          className="h-screen flex items-center justify-center sticky top-0"
            style={{ 
              scrollSnapAlign: 'start',
              transformOrigin: 'center' 
            }}
            initial={{ 
              scale: 1,
              opacity: 0,
              filter: 'blur(10px)'
            }}
            animate={{ 
              scale: isStepInView && scrollDirection === 'up' ? 1.05 : 1,
              opacity: isStepInView ? 1 : 0,
              filter: isStepInView ? 'blur(0px)' : 'blur(10px)'
          }}
          transition={{ 
              duration: 0.4, 
              ease: 'easeInOut',
              scale: {
                type: 'spring',
            stiffness: 300,
                damping: 20
              },
              opacity: { duration: 0.5 },
              filter: { duration: 0.5 }
          }}
        >
          <div className="relative w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${step.phase}`}
                    initial={{ opacity: 0, x: -50 }}
                      animate={isStepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                      <JourneyStep step={step} isActive={isStepInView} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Visual Side with Split Screen Effect */}
              <div className="relative h-[600px] overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`visual-${step.phase}`}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: '100%' }}
                      animate={isStepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  >
                    {/* Before/After Split Screen */}
                    <div className="relative h-full">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"
                        style={{
                          clipPath: `inset(0 ${100 - (scrollYProgress.get() * 100)}% 0 0)`,
                        }}
                      >
                        {/* "After" State */}
                        <div className={`h-full flex items-center justify-center bg-${step.color}-500/10 p-8`}>
                          {step.testimonial && (
                            <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                              <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                {/* Enhanced testimonial content */}
                                <div className="relative z-10">
                                  <div className="flex items-center space-x-4 mb-6">
                                    <div className={`w-12 h-12 rounded-full bg-${step.color}-500/20 flex items-center justify-center`}>
                                      <span className={`text-lg font-semibold text-${step.color}-300`}>
                                        {step.testimonial.author.split(' ')[0][0]}
                                      </span>
                                    </div>
                                    <div>
                                      <p className="text-white font-medium">
                                        {step.testimonial.author}
                                      </p>
                                      <p className="text-gray-400 text-sm">
                                        {step.testimonial.role}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-xl text-white/90 italic mb-6">
                                    "{step.testimonial.quote}"
                                  </p>
                                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${step.color}-500/20 border border-${step.color}-500/30`}>
                                    <span className={`text-${step.color}-300 text-sm font-medium`}>
                                      {step.metrics.value} {step.metrics.label}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                      
                      {/* "Before" State */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`text-${step.color}-500 text-opacity-20 text-9xl font-bold`}>
                          {step.phase}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
        );
      })}

      {/* Enhanced Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-4">
          {journey.map((step, index) => (
            <motion.button
              key={step.phase}
              onClick={() => scrollToStep(index)}
              className={`group relative flex items-center ${
                index === activeStep ? 'w-40' : 'w-12'
              } h-12 transition-all duration-300`}
              whileHover={{ width: 160 }}
            >
              <motion.div 
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeStep 
                    ? `bg-${step.color}-500 ring-4 ring-${step.color}-500/20` 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <span 
                className={`ml-4 whitespace-nowrap text-sm font-medium ${
                  index === activeStep 
                    ? `text-${step.color}-600 dark:text-${step.color}-400 opacity-100` 
                    : 'text-gray-500 opacity-0 group-hover:opacity-100'
                } transition-opacity duration-300`}
              >
                {step.phase}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const sections = [
  {
    id: 'hero',
    emoji: '🚀',
    title: "Your Product Team, From Zero to Launch",
    subtitle: "We transform ideas into scalable products with speed, precision, and strategic clarity.",
    theme: "blue",
    points: [
      {
        icon: "diamond",
        text: "Why Stacklance?",
        description: "Stack + Excellence + Performance. We combine deep tech expertise with relentless pursuit of quality.",
        benefits: [
          "Stack: Full-spectrum tech mastery",
          "Lance: Sharp, precise execution",
          "Together: Your tech excellence partner"
        ],
        proof: {
          value: "100%",
          label: "Client Success Rate"
        }
      },
      {
        icon: "rocket_launch",
        text: "Launch in 7 Days",
        description: "We don't waste time. Your first working version goes live in week 1.",
        benefits: [
          "First demo in 7 days",
          "Weekly iterations",
          "Continuous delivery"
        ],
        proof: {
          value: "2x",
          label: "Faster Time to Market"
        }
      },
      {
        icon: "target",
        text: "Smart Roadmaps, Not Guesswork",
        description: "We align on goals before writing a single line of code.",
        benefits: [
          "Market research",
          "User journey mapping",
          "Growth modeling"
        ],
        proof: {
          value: "93%",
          label: "Project Success Rate"
        }
      },
      {
        icon: "trending_up",
        text: "Scale Without Limits",
        description: "Built for long-term growth from day one — no Reworks needed.",
        benefits: [
          "Clean, scalable architecture",
          "Cloud-ready infrastructure",
          "Optimized performance"
        ],
        proof: {
          value: "99.9%",
          label: "Uptime Guarantee"
        }
      }
    ]
  },
  {
    id: 'craft',
    emoji: '💎',
    title: "Clean Code, Built for the Long Run",
    subtitle: "We write code that's not just clean — it's built to be handed off, scaled, and improved by any team.",
    theme: "indigo",
    points: [
      {
        icon: "code",
        text: "Code That Speaks for Itself",
        description: "From day one, we prioritize naming clarity, modularity, and clear documentation. Your future team will thank you.",
        benefits: [
          "Every file explained",
          "Developer onboarding in 30 mins",
          "No messy tech debt"
        ],
        proof: {
          quote: "Their code documentation is better than our internal standards.",
          author: "Mike Ross",
          role: "Lead Dev, Enterprise Client"
        }
      },
      {
        icon: "architecture",
        text: "Built to Scale, Ready to Grow",
        description: "Our architecture decisions consider your growth trajectory. From 100 to 100k users, your system adapts smoothly.",
        benefits: [
          "Cloud-native by default",
          "Performance at scale",
          "Easy team handoff"
        ],
        proof: {
          quote: "Scaled to 200k users without changing the core architecture.",
          author: "Lisa Park",
          role: "CPO, Growth Startup"
        }
      }
    ]
  },
  {
    id: 'process',
    emoji: '⚡',
    title: "Speed Without Chaos",
    subtitle: "Move fast and build things — with process that keeps everyone aligned and informed.",
    theme: "purple",
    points: [
      {
        icon: "bolt",
        text: "Daily Progress, Zero Confusion",
        description: "Track progress in real-time. Daily updates, weekly demos, and clear communication keep everyone aligned.",
        benefits: [
          "Live progress dashboard",
          "Weekly demo calls",
          "Async-first updates"
        ],
        proof: {
          quote: "Finally, an agency that communicates clearly and frequently.",
          author: "Rachel Chen",
          role: "Product Manager, SaaS Company"
        }
      },
      {
        icon: "sync",
        text: "Agile That Actually Works",
        description: "Our refined agile process cuts through the ceremony and focuses on what matters: shipping value to users.",
        benefits: [
          "2-week sprint cycles",
          "Continuous deployment",
          "Regular user feedback"
        ],
        proof: {
          quote: "Their process helped us launch 3 months ahead of schedule.",
          author: "Tom Wilson",
          role: "Founder, B2B Platform"
        }
      }
    ]
  },
  {
    id: 'quality',
    emoji: '🛡️',
    title: "Quality That Speaks for Itself",
    subtitle: "Premium isn't just a promise — it's built into every line of code, every interaction, every delivery.",
    theme: "pink",
    points: [
      {
        icon: "verified",
        text: "Enterprise-Grade Reliability",
        description: "We deliver systems that just work — with the uptime, security, and performance that modern businesses demand.",
        benefits: [
          "99.9% uptime guarantee",
          "Enterprise-level security",
          "24/7 monitoring & alerts"
        ],
        proof: {
          value: "Zero",
          label: "Critical Incidents in 12 Months"
        }
      },
      {
        icon: "code_blocks",
        text: "Code That Sets Standards",
        description: "Every line of code is written with precision, tested thoroughly, and documented clearly.",
        benefits: [
          "100% test coverage",
          "Automated quality checks",
          "Clear documentation"
        ],
        proof: {
          value: "5,000+",
          label: "Tests Running Daily"
        }
      },
      {
        icon: "speed",
        text: "Performance By Design",
        description: "Speed isn't an afterthought — it's built into every decision we make, from architecture to deployment.",
        benefits: [
          "Sub-second load times",
          "Optimized for scale",
          "Global CDN delivery"
        ],
        proof: {
          value: "90+",
          label: "PageSpeed Score"
        }
      },
      {
        icon: "security",
        text: "Security First Approach",
        description: "Your data and users are protected by industry-leading security practices and continuous monitoring.",
        benefits: [
          "Regular security audits",
          "GDPR compliance",
          "Encrypted by default"
        ],
        proof: {
          value: "A+",
          label: "Security Rating"
        }
      }
    ]
  },
  {
    id: 'partnership',
    emoji: '🤝',
    title: "More Than Just Code",
    subtitle: "We're your technical co-founders, growth partners, and product strategists rolled into one.",
    theme: "rose",
    points: [
      {
        icon: "psychology",
        text: "Strategic Partnership",
        description: "We don't just write code — we help shape your product strategy, technology decisions, and growth plans.",
        benefits: [
          "Technical strategy sessions",
          "Growth roadmapping",
          "Market analysis support"
        ],
        proof: {
          value: "85%",
          label: "Client Growth Rate"
        }
      },
      {
        icon: "groups",
        text: "Your Extended Team",
        description: "Work with a dedicated team that understands your business goals and thinks like co-founders.",
        benefits: [
          "Dedicated product team",
          "Direct CTO access",
          "Seamless communication"
        ],
        proof: {
          value: "24/7",
          label: "Team Availability"
        }
      },
      {
        icon: "trending_up",
        text: "Growth-Focused Delivery",
        description: "Every feature we build is aligned with your growth metrics and business objectives.",
        benefits: [
          "ROI-driven development",
          "Growth metrics tracking",
          "Regular strategy reviews"
        ],
        proof: {
          value: "3x",
          label: "Average Client Growth"
        }
      },
      {
        icon: "handshake",
        text: "Long-Term Success",
        description: "We're invested in your long-term success, providing support well beyond the initial launch.",
        benefits: [
          "Post-launch support",
          "Scale planning",
          "Technology evolution"
        ],
        proof: {
          value: "92%",
          label: "Client Retention"
        }
      }
    ]
  },
  {
    id: 'start',
    emoji: '✨',
    title: "Ready to Build Something Great?",
    subtitle: "Let's turn your vision into reality — with the clarity, speed, and quality it deserves.",
    theme: "emerald",
    points: [
      {
        icon: "calendar_today",
        text: "Book a Free Strategy Call",
        description: "Get a clear roadmap for your project in just 30 minutes. No commitment required.",
        benefits: [
          "Technical feasibility analysis",
          "Architecture recommendations",
          "Clear timeline & budget"
        ],
        proof: {
          value: "30min",
          label: "Strategy Session"
        }
      },
      {
        icon: "rocket_launch",
        text: "Start Building in 48 Hours",
        description: "Skip the lengthy onboarding. We can kick off your project within 48 hours of approval.",
        benefits: [
          "Immediate team assignment",
          "Quick project setup",
          "Fast development start"
        ],
        proof: {
          value: "48h",
          label: "Project Kickoff"
        }
      },
      {
        icon: "verified",
        text: "Risk-Free Guarantee",
        description: "Not satisfied with the first sprint? Get a full refund, no questions asked.",
        benefits: [
          "Money-back guarantee",
          "No long-term contracts",
          "Transparent pricing"
        ],
        proof: {
          value: "100%",
          label: "Satisfaction Rate"
        }
      },
      {
        icon: "support_agent",
        text: "24/7 Priority Support",
        description: "Direct access to senior developers and project managers whenever you need them.",
        benefits: [
          "Dedicated Slack channel",
          "Emergency response",
          "Weekly check-ins"
        ],
        proof: {
          value: "15min",
          label: "Response Time"
        }
      }
    ],
    cta: {
      primary: {
        text: "Schedule Free Strategy Call",
        href: "/contact",
        icon: "calendar_today"
      },
      secondary: {
        text: "View Recent Projects",
        href: "/work",
        icon: "work"
      }
    }
  }
];

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="w-full h-full rounded-full bg-white"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

const FloatingTechStack = () => {
  const icons = [
    { icon: "react", delay: 0 },
    { icon: "node", delay: 0.2 },
    { icon: "typescript", delay: 0.4 },
    { icon: "aws", delay: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={item.icon}
          className="absolute"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [-50, 0, 0, 50],
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + (index * 15)}%`,
            left: `${10 + (index * 20)}%`,
          }}
        >
          <MaterialIcon
            name={item.icon}
            className="w-12 h-12 text-gray-400/20"
          />
        </motion.div>
      ))}
    </div>
  );
};

const Section = ({ section, isActive, scrollDirection }: { section: typeof sections[0], isActive: boolean, scrollDirection: 'up' | 'down' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Only for the "Why Us" section
  if (section.id === 'hero') {
    return (
      <motion.div
        ref={ref}
        className="w-full h-full flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Decorative floating elements in the background */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {/* Decorative circles */}
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-indigo-50 dark:bg-indigo-900/10 -left-20 -top-20 opacity-40"
            animate={{
              x: [0, 20, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-72 h-72 rounded-full bg-purple-50 dark:bg-purple-900/10 -right-20 -bottom-20 opacity-40"
            animate={{
              x: [0, -20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,transparent_30%,black_50%,transparent_70%)]"></div>
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          {/* Content - handled in the WhyUsSection component */}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ scale: 1 }}
      animate={{ 
        scale: isInView && scrollDirection === 'up' ? 1.05 : 1,
        opacity: isInView ? 1 : 0
      }}
      transition={{ 
        duration: 0.4, 
        ease: 'easeInOut',
        scale: {
          type: 'spring',
          stiffness: 300,
          damping: 20
        }
      }}
    >
      <FloatingTechStack />

      {section.id === 'start' ? (
        // Enhanced CTA Section with Premium Design
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Premium Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-600 opacity-90" />
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 backdrop-blur-[100px]" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Glowing Orbs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-blue-400 opacity-20 blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                }}
              transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ top: '-20%', left: '-10%' }}
              />
              <motion.div
                className="absolute w-96 h-96 rounded-full bg-purple-400 opacity-20 blur-3xl"
                animate={{
                  x: [0, -100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ bottom: '-20%', right: '-10%' }}
              />
            </div>

            {/* Content Grid */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">
              {/* Content remains the same */}
            </div>
            </motion.div>
        </div>
      ) : (
        // Regular section content
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Enhanced Section Header with better animations */}
            <div className="w-full flex flex-col items-center justify-center text-center mb-12 max-w-4xl mx-auto">
              {/* Decorative circle behind emoji */}
              <motion.div 
                className={`absolute inset-0 rounded-full bg-${section.theme}-100 dark:bg-${section.theme}-900/30 opacity-80`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "mirror" 
                }}
              />
              <span className="text-5xl relative filter drop-shadow-lg transform-gpu">{section.emoji}</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-display gradient-text mb-4"
            >
              Engineered for Impact
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="h-1 w-32 bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-500 dark:to-indigo-300 mx-auto mb-4 rounded-full"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Fast. Focused. Future-ready.
            </motion.p>

          {/* Points Grid */}
          {section.points && (
            <motion.div
                className={cn(
                  "grid gap-6 md:gap-8 w-full",
                  section.id === 'craft' 
                    ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto" 
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                )}
              variants={{
                  hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                      delayChildren: 0.3
                  }
                }
              }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
              {section.points.map((point, index) => (
                <motion.div
                  key={point.text}
                  variants={{
                      hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                    transition={{
                      duration: 0.6,
                      ease: [0.21, 0.45, 0.25, 0.95]
                    }}
                  whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <FeatureCard 
                      feature={{
                        title: point.text,
                        description: point.description,
                        icon: (
                      <MaterialIcon
                        name={point.icon}
                        className={cn(
                              `text-${section.theme}-600 dark:text-${section.theme}-400`,
                              "w-7 h-7"
                            )}
                          />
                        )
                      }}
                      index={index}
                      isVisible={isInView}
                      scrollDirection={scrollDirection}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            {section.cta && (
              <motion.div 
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href={section.cta.primary.href}
                  className={cn(
                    "group relative px-6 py-3 rounded-xl text-white font-medium",
                    "bg-gradient-to-r",
                    `from-${section.theme}-500 to-${section.theme}-600`,
                    "hover:shadow-lg hover:shadow-emerald-500/25",
                    "transition-all duration-300",
                    "flex items-center space-x-2"
                  )}
                >
                  <MaterialIcon name={section.cta.primary.icon} className="w-4 h-4" />
                  <span>{section.cta.primary.text}</span>
                  <motion.div
                    className="absolute right-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                    transition={{ duration: 0.2 }}
                  >
                    →
                </motion.div>
                </Link>

                <Link
                  href={section.cta.secondary.href}
                  className={cn(
                    "group px-6 py-3 rounded-xl font-medium",
                    "border-2",
                    `border-${section.theme}-200 hover:border-${section.theme}-300`,
                    "hover:bg-white/50",
                    "transition-all duration-300",
                    "flex items-center space-x-2"
                  )}
                >
                  <MaterialIcon name={section.cta.secondary.icon} className="w-4 h-4" />
                  <span>{section.cta.secondary.text}</span>
                </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
      )}
    </motion.div>
  );
};

export const WhyUsSection = () => {
  const benefitsGridRef = useRef(null);
  const isBenefitsInView = useInView(benefitsGridRef, { once: false, amount: 0.2 });
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Tag */}
          <div className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D4F6FF] border border-[#C6E7FF]">
              <span className="text-[#000000] text-sm font-medium">
                Why Choose Stacklance
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-[56px] leading-[1.1] font-semibold text-gray-900 mt-8 mb-5">
            Engineered for Impact
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600">
            Fast. Focused. Future-ready.
          </p>
        </div>

        {/* Benefits Grid */}
        <div 
          ref={benefitsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 + (index * 0.1),
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
                className="h-full"
              >
                <StaggeredBenefit 
                  benefit={benefit} 
                  index={index} 
                  scrollDirection={scrollDirection} 
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Update the getStatIcon function
function getStatIcon(label: string): string {
  const iconMap: { [key: string]: string } = {
    'Success Rate': 'verified',
    'Faster Delivery': 'speed',
    'Uptime': 'shield',
    'Team Access': 'groups',
  };
  return iconMap[label] || 'analytics';
} 