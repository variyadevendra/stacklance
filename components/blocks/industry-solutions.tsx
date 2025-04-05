"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Circle, ExternalLink, Layers, Lightbulb, Rocket, Server, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FloatingElementProps {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  className?: string;
}

function FloatingElement({
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  className,
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface SolutionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function SolutionItem({ icon, title, description, index }: SolutionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative flex items-start gap-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 transition-all hover:shadow-xl"
    >
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-rose-500/10 p-2.5">
          {icon}
        </div>
        <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-rose-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <motion.div
          whileHover={{ x: 5 }}
          className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </motion.div>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-gray-100 transition-colors group-hover:border-gray-200" />
    </motion.div>
  );
}

interface IndustrySolutionsProps {
  title?: string;
  subtitle?: string;
}

export function IndustrySolutions({
  title = "Industry Solutions",
  subtitle = "Transforming businesses across sectors with innovative technology solutions",
}: IndustrySolutionsProps) {
  const solutions = [
    {
      icon: <Rocket className="h-6 w-6 text-indigo-600" />,
      title: "Aerospace & Defense",
      description: "Advanced systems for mission-critical operations and security infrastructure.",
    },
    {
      icon: <Server className="h-6 w-6 text-indigo-600" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for enterprise-level performance and security.",
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: "Cybersecurity",
      description: "Proactive protection against evolving threats with AI-powered security systems.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-indigo-600" />,
      title: "Energy & Utilities",
      description: "Smart grid technology and renewable energy management systems.",
    },
    {
      icon: <Layers className="h-6 w-6 text-indigo-600" />,
      title: "Manufacturing",
      description: "IoT-enabled production systems and supply chain optimization solutions.",
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: "Healthcare",
      description: "Digital health platforms and medical data management systems.",
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-white py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-rose-50/50" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-100/40"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <FloatingElement
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-100/40"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <FloatingElement
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-100/40"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <FloatingElement
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-100/40"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8"
          >
            <Circle className="h-2 w-2 fill-indigo-600" />
            <span className="text-sm text-indigo-600 tracking-wide font-medium">
              Enterprise Solutions
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              {title}
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <SolutionItem
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white"
          >
            Explore All Solutions <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
} 