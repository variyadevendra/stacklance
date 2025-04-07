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
      'blue': 'from-white to-white',
      'indigo': 'from-white to-white',
      'purple': 'from-white to-white',
      'cyan': 'from-white to-white',
      'teal': 'from-white to-white',
      'emerald': 'from-white to-white',
      'rose': 'from-white to-white',
      'amber': 'from-white to-white'
    };
    return gradients[color as keyof typeof gradients] || 'from-white to-white';
  };

  return (
    <div 
      className={cn("w-full py-24 px-4 md:px-8 bg-white", className)}
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
            className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-[#C6E7FF] border border-[#D4F6FF] mb-8"
          >
            <span className="text-base font-medium text-gray-800">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900"
          >
            Strategy Meets Execution
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-48 h-1 bg-[#C6E7FF] mx-auto mb-16"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We don't just build, we solve complex challenges, scale robust solutions, and evolve alongside your business. Our partnership goes beyond code to deliver lasting impact.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              whileHover={{ 
                y: -8,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }
              }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className={cn(
                "h-full overflow-hidden",
                "border border-[#C6E7FF]",
                "bg-white",
                "transform transition-all duration-300",
                "hover:shadow-xl hover:shadow-[#D4F6FF]/40"
              )}>
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C6E7FF]/20 via-[#D4F6FF]/20 to-[#FFDDAE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-[#C6E7FF]/30 to-[#D4F6FF]/30 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className="p-8 relative z-10">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl",
                    "bg-[#D4F6FF] border border-[#C6E7FF]",
                    "flex items-center justify-center mb-6",
                    "shadow-sm",
                    "transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white"
                  )}>
                    <MaterialIcon name={service.icon} size="xl" className="text-gray-800 group-hover:text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  
                  <motion.div 
                    className="mt-6 flex items-center text-sm font-medium"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-black font-medium">
                      Learn more
                    </span>
                    <motion.span 
                      initial={{ x: 0 }}
                      animate={{ x: hoveredIndex === idx ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1 text-black"
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