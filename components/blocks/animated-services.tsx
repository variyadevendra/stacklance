import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/ui/material-icon";
import { Card } from "@/components/ui/card";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface AnimatedServicesProps {
  services: ServiceItem[];
  className?: string;
}

export function AnimatedServices({ services, className }: AnimatedServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const getGradient = (color: string) => {
    const gradients = {
      'blue': 'from-blue-500 to-cyan-400',
      'indigo': 'from-indigo-500 to-violet-400',
      'purple': 'from-purple-500 to-pink-400',
      'cyan': 'from-cyan-500 to-blue-400',
      'teal': 'from-teal-500 to-emerald-400',
      'emerald': 'from-emerald-500 to-green-400',
      'rose': 'from-rose-500 to-pink-400',
      'amber': 'from-amber-500 to-yellow-400'
    };
    return gradients[color as keyof typeof gradients] || 'from-gray-500 to-gray-400';
  };

  return (
    <div 
      className={cn("w-full py-16 px-4 md:px-8 bg-background", className)}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-4"
          >
            <MaterialIcon
              name="code"
              className="text-blue-600 dark:text-blue-400 mr-2"
              size="sm"
            />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white"
          >
            Strategy Meets Execution
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-blue-600/20 mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We don't just build, we solve complex challenges, scale robust solutions, and evolve alongside your business. Our partnership goes beyond code to deliver lasting impact.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: idx * 0.1,
                    duration: 0.5,
                  },
                },
              }}
              whileHover={{ y: -10 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="h-full overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl">
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${getGradient(service.color)} opacity-10`}
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.1, transition: { duration: 0.3 } }}
                      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
                    />
                  )}
                </AnimatePresence>
                <div className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getGradient(service.color)} flex items-center justify-center mb-6 text-white shadow-lg transform transition-transform group-hover:scale-110`}>
                    <MaterialIcon name={service.icon} size="lg" className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  <motion.div 
                    className="mt-6 flex items-center text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${getGradient(service.color)}`}>
                      Learn more
                    </span>
                    <motion.span 
                      initial={{ x: 0 }}
                      animate={{ x: hoveredIndex === idx ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 