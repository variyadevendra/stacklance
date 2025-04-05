"use client";

import { motion, AnimatePresence } from "framer-motion";

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        initial: { opacity: 0, y: 50 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror"
      }}
      className="w-full will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnHover = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}; 