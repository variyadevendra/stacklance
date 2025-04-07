"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Globe2, 
  Smartphone, 
  Cloud, 
  Code2, 
  Cpu, 
  Shield, 
  LineChart,
  Users,
  Lightbulb,
  Send
} from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom web applications and responsive websites built with the latest technologies and best practices.",
    icon: Globe2,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    icon: Smartphone,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Cloud Services",
    description: "Cloud infrastructure setup, migration, and management with AWS, Azure, and Google Cloud.",
    icon: Cloud,
    color: "bg-sky-500/10 text-sky-500",
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your specific business requirements.",
    icon: Code2,
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by advanced AI and machine learning algorithms.",
    icon: Cpu,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    icon: Shield,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing services to boost your online presence and growth.",
    icon: LineChart,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "IT Consulting",
    description: "Expert guidance on technology strategy, architecture, and digital transformation.",
    icon: Users,
    color: "bg-teal-500/10 text-teal-500",
  },
  {
    title: "Product Strategy",
    description: "Strategic product planning and roadmapping for successful digital products.",
    icon: Lightbulb,
    color: "bg-yellow-500/10 text-yellow-500",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            {...fadeInUp}
          >
            Our Comprehensive Services
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            We offer a full range of digital services to help your business succeed in the modern digital landscape.
          </motion.p>
        </div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`inline-flex rounded-xl p-3 ${service.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Lead Capture Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-24 max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Get a Free Consultation
            </h3>
            <p className="mt-2 text-gray-600">
              Tell us about your project and our experts will reach out to you within 24 hours.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Input placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Work Email" className="w-full" />
              </div>
            </div>
            <div>
              <Input placeholder="Company Name" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Tell us about your project requirements" className="h-32 w-full" />
            </div>
            <div>
              <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500">
              By submitting this form, you agree to our{" "}
              <a href="/privacy" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 