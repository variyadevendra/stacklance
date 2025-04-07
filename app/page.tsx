"use client";

import dynamic from 'next/dynamic';
import { AnimatedBackground } from "@/components/ui/animated-background";
import NavHeader from "@/components/blocks/nav-header";
import { WhyUsSection } from "@/components/blocks/why-us-section";
import { IndustrySolutions } from "@/components/blocks/industry-solutions";
import { CTASection } from "@/components/blocks/cta-section";
import { TechStackSection } from "@/components/blocks/tech-stack-section";
import { ContactSection } from "@/components/blocks/contact-section";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedServices } from "@/components/blocks/animated-services";
import { ModernTestimonials } from "@/components/blocks/modern-testimonials";
import { StacklanceTestimonials } from "@/components/blocks/stacklance-testimonials";
import { EngineeringExcellence } from "@/components/blocks/engineering-excellence";
import LatestWorkSectionDemo from "@/components/sections/LatestWorkSection";
import HomeHero from "@/components/blocks/home-hero";
import { FadeInWhenVisible } from "@/components/ui/fade-in-when-visible";

// Dynamically import components that use client-side only features
const ProgressBar = dynamic(() => import('@/components/ui/progress-bar').then(mod => mod.ProgressBar), {
  ssr: false
});

const services = [
  {
    id: "strategy",
    title: "Product Strategy & Roadmapping",
    description: "Transform your vision into a concrete action plan. We help define your product strategy, create detailed roadmaps, and establish clear milestones for successful delivery.",
    icon: "psychology",
    color: "blue"
  },
  {
    id: "ai",
    title: "AI Development",
    description: "Harness the power of artificial intelligence with custom ML models, NLP solutions, and intelligent automation. We build AI that drives real business outcomes.",
    icon: "smart_toy",
    color: "purple"
  },
  {
    id: "development",
    title: "Web & App Development",
    description: "Build powerful, scalable applications using cutting-edge technologies. From responsive websites to complex enterprise solutions, we deliver robust digital experiences.",
    icon: "code",
    color: "indigo"
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Create intuitive, engaging user experiences that delight your customers. Our design process combines aesthetics with functionality for maximum impact.",
    icon: "palette",
    color: "cyan"
  },
  {
    id: "devops",
    title: "DevOps & Cloud Infrastructure",
    description: "Optimize your development pipeline and cloud infrastructure for maximum efficiency. We implement modern DevOps practices and cloud-native solutions.",
    icon: "cloud",
    color: "teal"
  },
  {
    id: "mvp",
    title: "MVP to Scalable Architecture",
    description: "Launch your MVP quickly and evolve it into a robust, scalable solution. We help validate your ideas and build foundations that support growth.",
    icon: "rocket_launch",
    color: "emerald"
  },
  {
    id: "dedicated",
    title: "Dedicated Product Teams",
    description: "Get a dedicated team of experts who understand your business goals. We provide skilled developers, designers, and managers who work as an extension of your team.",
    icon: "groups",
    color: "rose"
  },
  {
    id: "security",
    title: "Cyber Security",
    description: "Protect your digital assets with comprehensive security solutions. From threat detection to secure development practices, we keep your systems safe.",
    icon: "security",
    color: "amber"
  },
  {
    id: "marketing",
    title: "Digital Marketing & SEO",
    description: "Drive growth with data-driven digital marketing strategies. We help optimize your online presence and convert visitors into loyal customers.",
    icon: "trending_up",
    color: "amber"
  }
];

const testimonials = [
  {
    author: {
      name: "Michael Chen",
      title: "Director of IT, Global Innovations",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&auto=format&fit=crop&q=60"
    },
    text: "When our system was compromised, Stacklance's cybersecurity team responded within hours. They not only contained the breach but implemented new security protocols that have kept us protected ever since."
  },
  {
    author: {
      name: "Priya Sharma",
      title: "CEO, NextGen Retailers",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&q=60"
    },
    text: "The custom e-commerce solution delivered by Stacklance increased our online conversion rates by 65%. Their team took the time to understand our unique challenges and delivered beyond our expectations."
  },
  {
    author: {
      name: "David Wilson",
      title: "CIO, FinTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&q=60"
    },
    text: "We've worked with several IT agencies before, but Stacklance stands out for their technical excellence and proactive approach. They don't just solve problems—they anticipate and prevent them."
  },
  {
    author: {
      name: "Emma Rodriguez",
      title: "VP of Operations, HealthTech Innovations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&q=60"
    },
    text: "Migrating our healthcare platform was a daunting task, but Stacklance made it seamless. Their attention to security and compliance while maintaining performance was impressive."
  },
  {
    author: {
      name: "Sarah Johnson",
      title: "CTO at TechGrowth Inc.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop&q=60"
    },
    text: "Stacklance transformed our outdated infrastructure into a scalable cloud solution that reduced our operational costs by 40% within six months. Their expertise and commitment to excellence made all the difference."
  },
  {
    author: {
      name: "Alex Thompson",
      title: "Head of AI Innovation, FutureScale",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&q=60"
    },
    text: "The AI solutions developed by Stacklance have revolutionized our data processing capabilities. Their innovative approach and deep technical expertise helped us achieve a 300% improvement in efficiency."
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mainTimer = setTimeout(() => setIsLoading(false), 200);
    
    return () => {
      clearTimeout(mainTimer);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Stacklance
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      {isMounted && <ProgressBar />}

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <NavHeader />
      </div>

      <AnimatedBackground>
        <main className="flex-grow bg-white">
          <HomeHero />

          {/* Services Section - Now First */}
          <FadeInWhenVisible>
            <section className="relative py-20 bg-white">
              <AnimatedServices services={services} />
            </section>
          </FadeInWhenVisible>

          {/* Why Us Section - Now Second */}
          <FadeInWhenVisible>
            <section className="relative">
              <WhyUsSection />
            </section>
          </FadeInWhenVisible>

          {/* Industry Solutions */}
          <FadeInWhenVisible>
            <section className="relative">
              <IndustrySolutions />
            </section>
          </FadeInWhenVisible>

          {/* Tech Stack Section */}
          <FadeInWhenVisible>
            <section className="relative">
              <TechStackSection />
            </section>
          </FadeInWhenVisible>

          {/* Latest Work Section */}
          <FadeInWhenVisible>
            <section className="relative">
              <LatestWorkSectionDemo />
            </section>
          </FadeInWhenVisible>

          {/* Testimonials Section */}
          <StacklanceTestimonials />

          {/* Engineering Excellence Section */}
          <FadeInWhenVisible>
            <section className="relative">
              <EngineeringExcellence />
            </section>
          </FadeInWhenVisible>

          {/* Contact Section */}
          <FadeInWhenVisible>
            <section className="relative">
              <ContactSection />
            </section>
          </FadeInWhenVisible>

          {/* CTA Section */}
          <FadeInWhenVisible>
            <section className="relative">
              <CTASection />
            </section>
          </FadeInWhenVisible>
        </main>
      </AnimatedBackground>
    </div>
  );
} 