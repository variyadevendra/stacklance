import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const AnimatedLogo = () => {
  return (
    <Link href="/" className="relative block">
      <motion.div
        className="relative flex items-center"
        whileHover="hover"
        initial="initial"
        animate="animate"
      >
        {/* Text Logo */}
        <motion.h1 
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            hover: { scale: 1.02 }
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
        >
          Stacklance
        </motion.h1>

        {/* Animated Underline */}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"
          variants={{
            initial: { scaleX: 0, opacity: 0 },
            hover: { scaleX: 1, opacity: 1 }
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        />

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          variants={{
            hover: {
              boxShadow: "0 0 30px 5px rgba(59, 130, 246, 0.2)"
            }
          }}
          transition={{
            duration: 0.2
          }}
        />

        {/* Animated Dot */}
        <motion.div
          className="absolute -right-3 top-0 w-2 h-2 rounded-full bg-blue-600"
          variants={{
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            hover: { 
              scale: [1, 1.5, 1],
              opacity: [1, 0.8, 1],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          }}
        />
      </motion.div>
    </Link>
  );
}; 