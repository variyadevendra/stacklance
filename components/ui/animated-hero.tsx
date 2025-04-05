"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatedCounter } from "./animated-counter";
import { HeroIllustration } from "./hero-illustration";

// AnimatedWords component that cycles through multiple words
const AnimatedWords = ({ words, duration = 3, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration * 1000);
    
    return () => clearInterval(interval);
  }, [words, duration]);
  
  return (
    <div className={`relative h-[1.2em] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ 
            duration: 0.4, 
            ease: "easeInOut",
            opacity: { duration: 0.3 }
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent will-change-transform"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="relative w-full min-h-[90svh] bg-gradient-to-b from-[#fafafa] to-[#f5f5f5] dark:from-gray-900 dark:to-gray-800">
      {/* Main Content */}
      <div className="absolute inset-0 w-full h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left will-change-transform"
            >
              <div className="flex items-center space-x-3 mb-4 lg:mb-5 justify-center lg:justify-start">
                <motion.div 
                  className="h-[2px] w-12 bg-gradient-to-r from-blue-600 to-indigo-600 will-change-transform"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
                <motion.span 
                  className="text-xs sm:text-sm font-medium tracking-wider text-blue-600/80 dark:text-blue-400/80 uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  Global Technology Partner
                </motion.span>
              </div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-4 lg:mb-5 will-change-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Crafting Digital
                <AnimatedWords 
                  words={["Excellence", "Innovation", "Performance", "Speed", "Clarity"]}
                  duration={2.5}
                  className="block mt-2"
                />
              </motion.h1>

              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 lg:mb-7 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                We transform ambitious visions into exceptional digital experiences. 
                Our expertise drives innovation, growth, and measurable impact for forward-thinking businesses.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 mb-8 lg:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg overflow-hidden font-medium transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <span className="ml-2 text-blue-200 dark:text-blue-600 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <Link 
                  href="/case-studies"
                  className="w-full sm:w-auto group inline-flex items-center justify-center px-5 py-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  View Case Studies
                  <motion.span
                    className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              {/* Client Success Story - Touch-friendly on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="relative p-5 sm:p-6 bg-white/30 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 mx-auto lg:mx-0 max-w-lg touch-pan-x"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic leading-relaxed text-center lg:text-left">
                    "Stacklance transformed our digital infrastructure, resulting in a 40% increase in user engagement and 2x faster deployment cycles. Their strategic approach and technical excellence exceeded our expectations."
                  </p>
                  <div className="flex items-center space-x-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <span className="text-white font-semibold">SJ</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Sarah Johnson
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        CTO, TechVision Inc.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Metrics - Swipeable on mobile */}
              <div className="overflow-x-auto touch-pan-x pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-x-visible mt-8 lg:mt-10">
                <div className="flex sm:grid sm:grid-cols-3 gap-5 sm:gap-6 min-w-[600px] sm:min-w-0">
                  {[
                    { value: 150, label: "Clients", plus: true },
                    { value: 95, label: "Client Satisfaction", percent: true },
                    { value: 35, label: "Average Growth", percent: true }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="group relative flex-1 sm:flex-auto"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative text-center lg:text-left">
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          <AnimatedCounter value={stat.value} />
                          {stat.plus && '+'}
                          {stat.percent && '%'}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[280px] sm:h-[360px] lg:h-[500px] mt-6 lg:mt-0 will-change-transform"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fixed height bottom spacing container for better layout - reduced height */}
      <div className="absolute bottom-0 left-0 right-0 h-36 md:h-32 xl:h-28 pointer-events-none"></div>

      {/* Scroll Indicator - Adjusted positioning */}
      <div className="absolute bottom-[100px] md:bottom-[80px] xl:bottom-[60px] 2xl:bottom-[50px] left-0 right-0 flex justify-center items-center pointer-events-none z-10 hidden md:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider mb-1.5 xl:text-xs xl:mb-1">
              Explore
            </span>
            <svg className="w-5 h-5 xl:w-4 xl:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted By Section - Fixed position at bottom with adjusted padding */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-white/10 dark:from-gray-900/90 dark:to-gray-900/10 backdrop-blur-sm">
        <div className="container mx-auto py-5 xl:py-4 2xl:py-3">
          <div className="flex flex-col items-center">
            <motion.div 
              className="text-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3 xl:text-xs xl:mb-2 2xl:mb-2">
                Trusted by Industry Leaders
              </h3>
              <div className="flex justify-center items-center">
                <div className="w-full max-w-3xl mx-auto px-4 overflow-x-auto overflow-y-hidden">
                  <div className="flex justify-center space-x-8 md:space-x-12 xl:space-x-10 2xl:space-x-8 min-w-[600px] sm:min-w-0">
                    {[
                      { name: 'Google', delay: 0 },
                      { name: 'Microsoft', delay: 0.1 },
                      { name: 'Amazon', delay: 0.2 },
                      { name: 'Meta', delay: 0.3 },
                      { name: 'Apple', delay: 0.4 }
                    ].map((company) => (
                      <motion.div
                        key={company.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.7, y: 0 }}
                        transition={{ delay: 1.2 + company.delay }}
                        whileHover={{ 
                          opacity: 1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        className="text-base xl:text-sm font-medium text-gray-400 dark:text-gray-500 transition-all duration-200 whitespace-nowrap px-2"
                      >
                        {company.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
