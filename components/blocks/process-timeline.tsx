"use client"

import { motion } from "framer-motion"
import { 
  Lightbulb,
  FileSearch,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake
} from "lucide-react"

const steps = [
  {
    title: "Discovery & Planning",
    description: "We start by understanding your business needs, goals, and requirements through detailed consultation.",
    icon: Lightbulb,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Analysis & Design",
    description: "Our team creates detailed specifications and designs that align with your vision and objectives.",
    icon: FileSearch,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Development",
    description: "We build your solution using modern technologies and industry best practices.",
    icon: Code2,
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing ensures your solution meets the highest quality standards.",
    icon: TestTube,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Deployment",
    description: "We carefully launch your solution and ensure everything runs smoothly.",
    icon: Rocket,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to keep your solution running optimally.",
    icon: HeartHandshake,
    color: "bg-red-500/10 text-red-500",
  },
]

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Service Delivery Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We follow a structured approach to deliver high-quality solutions that meet your business needs.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex items-start gap-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-4 left-10 h-8 w-0.5 bg-gray-200" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 