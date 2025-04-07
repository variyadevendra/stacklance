import React from "react";
import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

interface ValueProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function EngineeringExcellence() {
  const stats: StatProps[] = [
    {
      value: "20",
      label: "Team Members",
      suffix: "+",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="currentColor"/>
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      value: "150",
      label: "Projects Delivered",
      suffix: "+",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      value: "50",
      label: "Countries Served",
      suffix: "+",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M3.6 9H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 3C14.3339 5.44449 15.6667 8.66059 15.6667 12C15.6667 15.3394 14.3339 18.5555 12 21" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 3C9.66611 5.44449 8.33333 8.66059 8.33333 12C8.33333 15.3394 9.66611 18.5555 12 21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      value: "99",
      label: "Client Satisfaction",
      suffix: "%",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  const values: ValueProps[] = [
    {
      title: "Innovation First",
      description: "Cutting-edge solutions for modern challenges",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
          <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with diverse expertise",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="currentColor"/>
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "Collaborative Culture",
      description: "Strong team spirit and shared success",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "Quality Focused",
      description: "Delivering excellence in every project",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f7fcff] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full bg-[#C6E7FF]/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/3 w-80 h-80 rounded-full bg-[#D4F6FF]/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#C6E7FF]/50 text-sm font-medium text-gray-800">
              About Us
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Engineering Excellence
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-[#C6E7FF] mx-auto mb-6"
          />

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed"
          >
            At the heart of everything we build is a culture shaped by real engineers, people who care about clean code, collaboration, and creating things that actually work in the real world. This isn't just a company tagline, it's how we think, solve, and ship. From architecture to UI polish, every detail reflects the passion and mindset of those who live and breathe development. Our culture isn't an afterthought, it's the foundation.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              className="relative group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-full bg-white rounded-xl p-6 flex flex-col shadow-sm border border-[#C6E7FF]/30 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C6E7FF]/10 rounded-bl-full z-0" />
                
                <div className="mb-4 w-12 h-12 bg-[#C6E7FF]/20 flex items-center justify-center rounded-lg">
                  <div className="text-[#0070F3]">{stat.icon}</div>
                </div>

                <div className="mb-1 text-gray-500 text-sm font-medium">
                  {stat.label}
                </div>
                
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-xl font-bold text-gray-900 ml-1">
                    {stat.suffix}
                  </span>
                </div>

                <div className="mt-2 text-sm text-gray-600">
                  {stat.label === "Team Members" ? "Worldwide" : 
                   stat.label === "Projects Delivered" ? "Successfully" : 
                   stat.label === "Countries Served" ? "Globally" : 
                   "Rating"}
                </div>
                
                {/* Hover effect element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C6E7FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white h-full rounded-xl p-6 shadow-sm border border-[#C6E7FF]/30 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C6E7FF] to-[#D4F6FF]" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#C6E7FF]/20 flex items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-[#C6E7FF]/40">
                    <div className="text-[#0070F3]">{value.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                </div>
                
                <p className="text-gray-600">{value.description}</p>
                
                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#C6E7FF]/10 to-transparent rounded-tl-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 