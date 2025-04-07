"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Eye, Cpu, Code2, Palette, Cloud, Share2 } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Eye,
    title: "Product Strategy & Roadmapping",
    description: "Transform your vision into a concrete action plan with our strategic roadmapping services.",
    href: "/services/product-strategy",
    bgColor: "bg-blue-50/60",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-50/80"
  },
  {
    icon: Cpu,
    title: "AI Development",
    description: "Harness the power of artificial intelligence with our cutting-edge development solutions.",
    href: "/services/ai-development",
    bgColor: "bg-indigo-50/60",
    iconColor: "text-indigo-600",
    hoverColor: "hover:bg-indigo-50/80"
  },
  {
    icon: Code2,
    title: "Web & App Development",
    description: "Build powerful, scalable applications using modern technologies and best practices.",
    href: "/services/web-development",
    bgColor: "bg-purple-50/60",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-50/80"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create intuitive, engaging user experiences that delight and convert.",
    href: "/services/ui-ux-design",
    bgColor: "bg-pink-50/60",
    iconColor: "text-pink-600",
    hoverColor: "hover:bg-pink-50/80"
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Infrastructure",
    description: "Optimize your development pipeline and cloud infrastructure for maximum efficiency.",
    href: "/services/devops",
    bgColor: "bg-red-50/60",
    iconColor: "text-red-600",
    hoverColor: "hover:bg-red-50/80"
  },
  {
    icon: Share2,
    title: "MVP to Scalable Architecture",
    description: "Launch your MVP quickly and evolve it into a robust, scalable solution.",
    href: "/services/mvp",
    bgColor: "bg-orange-50/60",
    iconColor: "text-orange-600",
    hoverColor: "hover:bg-orange-50/80"
  }
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl max-w-4xl mb-6"
          >
            Transform Your Business with Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mb-10"
          >
            We offer comprehensive technology services to help your business thrive in the digital age.
            From web development to AI solutions, we've got you covered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className={`group p-8 rounded-2xl transition-all duration-300 ${service.bgColor} ${service.hoverColor} hover:scale-[1.02] hover:shadow-xl border border-gray-100/20 backdrop-blur-sm`}
              >
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bgColor} ${service.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]`}>
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center text-gray-900 font-medium">
                  <span className="mr-2">Learn More</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
} 