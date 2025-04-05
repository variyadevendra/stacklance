"use client";

import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/ui/material-icon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

// Service data with icons, descriptions, and colors
const services = [
  {
    id: "strategy",
    title: "Product Strategy & Roadmapping",
    description: "Align your business goals with technical solutions. We help you define, plan, and prioritize your product development journey.",
    icon: "psychology",
    color: "blue",
    bullets: ["Market research & positioning", "Feature prioritization", "Technical feasibility analysis"],
    ctaText: "Explore Strategy Services",
    ctaLink: "/services/strategy"
  },
  {
    id: "development",
    title: "Web & App Development",
    description: "From responsive websites to complex applications, we build scalable solutions that deliver exceptional user experiences.",
    icon: "code",
    color: "indigo",
    bullets: ["React & Next.js experts", "Full-stack development", "Progressive Web Apps"],
    ctaText: "See Our Development Work",
    ctaLink: "/services/development"
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Human-centered design that delights users and drives engagement. We combine aesthetics with functionality for intuitive interfaces.",
    icon: "palette",
    color: "purple",
    bullets: ["User research & testing", "Interactive prototypes", "Design systems"],
    ctaText: "View Design Portfolio",
    ctaLink: "/services/design"
  },
  {
    id: "devops",
    title: "DevOps & Cloud Infrastructure",
    description: "Build reliable, scalable infrastructure with automated deployment pipelines. We optimize for performance, security, and cost.",
    icon: "cloud",
    color: "cyan",
    bullets: ["CI/CD pipeline setup", "Cloud architecture", "Infrastructure as code"],
    ctaText: "Learn About DevOps",
    ctaLink: "/services/devops"
  },
  {
    id: "mvp",
    title: "MVP to Scalable Architecture",
    description: "Start lean and grow with confidence. We build MVPs that validate your idea quickly while setting the foundation for scale.",
    icon: "rocket_launch",
    color: "teal",
    bullets: ["Rapid prototyping", "Scalable foundations", "Iterative development"],
    ctaText: "Start Your MVP",
    ctaLink: "/services/mvp"
  },
  {
    id: "dedicated",
    title: "Dedicated Product Teams",
    description: "Extend your team with our seasoned engineers and designers. Get a dedicated squad that integrates seamlessly with your workflow.",
    icon: "groups",
    color: "emerald",
    bullets: ["Senior engineers & designers", "Agile methodology", "Transparent communication"],
    ctaText: "Build Your Team",
    ctaLink: "/services/teams"
  },
  {
    id: "security",
    title: "Cyber Security",
    description: "Protect your digital assets with comprehensive security solutions. We implement robust measures to safeguard your data and systems.",
    icon: "security",
    color: "rose",
    bullets: ["Vulnerability assessment", "Secure development", "Compliance & auditing"],
    ctaText: "Secure Your Systems",
    ctaLink: "/services/security"
  },
  {
    id: "marketing",
    title: "Digital Marketing & SEO",
    description: "Drive growth with data-driven digital marketing. We help you reach your target audience and convert visitors into customers.",
    icon: "trending_up",
    color: "amber",
    bullets: ["SEO optimization", "Content strategy", "Analytics & reporting"],
    ctaText: "Grow Your Reach",
    ctaLink: "/services/marketing"
  }
];

interface ServiceItemProps {
  service: typeof services[0];
  index: number;
  isEven: boolean;
}

const ServiceItem = ({ service, index, isEven }: ServiceItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3, margin: "-100px 0px" });
  
  // Determine text and content alignment based on even/odd
  const textSide = isEven ? "left" : "right";
  const contentSide = isEven ? "right" : "left";

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05
      }}
      className={cn(
        "flex flex-col md:flex-row items-center py-16 md:py-24 relative",
        index !== services.length - 1 && "border-b border-gray-100 dark:border-gray-800/50"
      )}
    >
      {/* Background subtle gradient */}
      <motion.div 
        className={cn(
          "absolute inset-0 opacity-10 dark:opacity-20 -z-10 blur-3xl",
          `bg-gradient-to-br from-${service.color}-300/30 to-transparent dark:from-${service.color}-900/30`
        )}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Service content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-center">
        {/* Text side */}
        <div className={cn(
          "flex flex-col space-y-6",
          textSide === "right" && "md:order-2"
        )}>
          <div className="flex flex-col space-y-3">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-2",
              `bg-${service.color}-500/10 text-${service.color}-500 dark:bg-${service.color}-500/20 dark:text-${service.color}-400`
            )}>
              <MaterialIcon name={service.icon} className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              {service.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {service.description}
            </p>
          </div>
          
          <ul className="space-y-2">
            {service.bullets.map((bullet, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-start text-gray-600 dark:text-gray-300"
              >
                <span className={cn(
                  "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3",
                  `bg-${service.color}-500/10 text-${service.color}-500 dark:bg-${service.color}-500/20 dark:text-${service.color}-400`
                )}>
                  <MaterialIcon name="check" className="w-3 h-3" />
                </span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
          
          <div>
            <Link 
              href={service.ctaLink}
              className={cn(
                "inline-flex items-center text-sm font-medium space-x-1 group transition-all duration-300",
                `text-${service.color}-600 dark:text-${service.color}-400 hover:text-${service.color}-700 dark:hover:text-${service.color}-300`
              )}
            >
              <span>{service.ctaText}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <MaterialIcon name="arrow_forward" className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
        
        {/* Visual side - tech pattern/graphic */}
        <div className={cn(
          "relative h-64 md:h-96 w-full overflow-hidden rounded-2xl",
          contentSide === "right" && "md:order-2"
        )}>
          <motion.div 
            className={cn(
              "absolute inset-0",
              `bg-gradient-to-br from-${service.color}-50 to-white dark:from-${service.color}-900/30 dark:to-gray-900`
            )}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Tech pattern overlay */}
          <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-900/20 [mask-image:linear-gradient(to_bottom,transparent_40%,black_60%)]" />
          
          {/* Service icon enlarged */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.15 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <MaterialIcon 
              name={service.icon} 
              className={cn(
                "w-48 h-48 text-gray-300 dark:text-gray-600",
                `text-${service.color}-300/70 dark:text-${service.color}-700/50`
              )} 
            />
          </motion.div>
          
          {/* Floating tech elements */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-6 right-6 flex space-x-2"
          >
            {[1, 2, 3].map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-2 h-2 rounded-full",
                  `bg-${service.color}-500 dark:bg-${service.color}-400`
                )}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesStackSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900/20 dark:to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4"
          >
            Our Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Comprehensive solutions for modern challenges
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            From strategy to execution, we provide end-to-end services to help you build, launch, and scale your digital products.
          </motion.p>
        </div>
        
        {/* Services stack */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              index={index} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
        
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          
          <div className="relative py-12 px-8 md:py-16 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Not sure what fits best?
              </h3>
              <p className="text-indigo-100 text-lg">
                Let's discuss your project and find the perfect solution for your specific needs and goals.
              </p>
            </div>
            
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Let's talk!</span>
              <MaterialIcon name="arrow_forward" className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 