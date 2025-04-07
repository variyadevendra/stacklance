"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const cases = [
  {
    title: "E-commerce Platform Transformation",
    description: "Helped a retail client achieve 300% growth in online sales through digital transformation",
    image: "/images/case-studies/ecommerce.jpg",
    tags: ["E-commerce", "Web Development", "Cloud"],
    metrics: [
      { label: "Increase in Sales", value: "300%" },
      { label: "Load Time", value: "0.8s" },
    ],
  },
  {
    title: "FinTech Mobile App",
    description: "Developed a secure and scalable mobile banking solution with advanced features",
    image: "/images/case-studies/fintech.jpg",
    tags: ["FinTech", "Mobile", "Security"],
    metrics: [
      { label: "Active Users", value: "500K+" },
      { label: "App Rating", value: "4.8" },
    ],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Built an intelligent analytics platform for real-time business insights",
    image: "/images/case-studies/analytics.jpg",
    tags: ["AI/ML", "Analytics", "Cloud"],
    metrics: [
      { label: "Data Processing", value: "1M+" },
      { label: "Accuracy", value: "99.9%" },
    ],
  },
]

export function CaseStudies() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            See how we've helped businesses achieve their digital transformation goals
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {cases.map((case_study, index) => (
            <motion.div
              key={case_study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="aspect-h-9 aspect-w-16 relative">
                <div className="absolute inset-0 bg-gray-200" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {case_study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {case_study.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {case_study.description}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {case_study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold text-blue-600">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
                <Button variant="outline" size="sm" className="gap-2">
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 