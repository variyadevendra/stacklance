"use client"

import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Award, 
  Target, 
  ShieldCheck, 
  HeadphonesIcon,
  Code,
  Cpu,
  Smartphone,
  Palette,
  Cloud,
  Share2
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    stat: "2x",
    label: "Faster Delivery",
    title: "Fast Delivery",
    description: "We deliver projects on time with our agile development approach and efficient processes.",
    color: "text-blue-600",
    bgColor: "bg-blue-50/50"
  },
  {
    icon: Users,
    stat: "50+",
    label: "Expert Developers",
    title: "Expert Team",
    description: "Our team consists of experienced developers, designers, and project managers.",
    color: "text-purple-600",
    bgColor: "bg-purple-50/50"
  },
  {
    icon: Award,
    stat: "99.9%",
    label: "Client Satisfaction",
    title: "Quality Assured",
    description: "We maintain high quality standards through rigorous testing and code reviews.",
    color: "text-amber-600",
    bgColor: "bg-amber-50/50"
  },
  {
    icon: Target,
    stat: "100%",
    label: "Project Success Rate",
    title: "Goal Oriented",
    description: "We focus on achieving your business objectives and delivering measurable results.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50/50"
  },
  {
    icon: ShieldCheck,
    stat: "0",
    label: "Security Breaches",
    title: "Secure Solutions",
    description: "We implement robust security measures to protect your data and applications.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50/50"
  },
  {
    icon: HeadphonesIcon,
    stat: "24/7",
    label: "Support Available",
    title: "Support & Maintenance",
    description: "We provide ongoing support and maintenance to ensure your solution runs smoothly.",
    color: "text-violet-600",
    bgColor: "bg-violet-50/50"
  }
];

// Our services data
export const services = [
  {
    icon: Target,
    title: "Product Strategy & Roadmapping",
    description: "Transform your vision into a concrete action plan with our strategic roadmapping services.",
    bgColor: "bg-blue-50/50",
    color: "text-blue-600"
  },
  {
    icon: Cpu,
    title: "AI Development",
    description: "Harness the power of artificial intelligence with our cutting-edge development solutions.",
    bgColor: "bg-white",
    color: "text-blue-600"
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "Build powerful, scalable applications using modern technologies and best practices.",
    bgColor: "bg-purple-50/50",
    color: "text-purple-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create intuitive, engaging user experiences that delight and convert.",
    bgColor: "bg-pink-50/50",
    color: "text-pink-600"
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Infrastructure",
    description: "Optimize your development pipeline and cloud infrastructure for maximum efficiency.",
    bgColor: "bg-red-50/50",
    color: "text-red-600"
  },
  {
    icon: Share2,
    title: "MVP to Scalable Architecture",
    description: "Launch your MVP quickly and evolve it into a robust, scalable solution.",
    bgColor: "bg-orange-50/50",
    color: "text-orange-600"
  }
];

export function ServicesBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-1 mb-6 bg-blue-50">
            <span className="text-sm font-medium text-blue-600">
              Why Choose Us
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4"
          >
            Why Choose Our Services?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We combine technical expertise with business acumen to deliver solutions that drive your success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-2xl p-6 ${benefit.bgColor} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color} stroke-[1.5]`} />
                  </div>
                  <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full bg-white text-xs font-semibold shadow-sm ${benefit.color}`}>
                    {benefit.stat}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    {benefit.label}
                  </p>
                  <h3 className={`text-xl font-semibold ${benefit.color}`}>
                    {benefit.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 