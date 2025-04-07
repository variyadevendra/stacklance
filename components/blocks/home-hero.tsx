"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, FolderKanban } from "lucide-react"
import Link from "next/link"

const CALENDAR_LINK = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3juYYaJs-C0ng7YEFHqCXyhqIgW6ABc2MaBDoO7OGHTx3xUKFv52RoOoN6NPRpZJ0qyHvMMjjJ?gv=true";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,transparent,white)]" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-[500px] w-[500px] rounded-full bg-blue-400/30 blur-3xl"
          />
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="mb-8 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="inline-flex items-center rounded-full bg-blue-50/80 backdrop-blur-sm px-4 py-1.5 text-base font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 10px rgba(59, 130, 246, 0)",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Your Tech Partner, Not Just a Service Provider
              </motion.span>
            </motion.div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <motion.span 
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 bg-clip-text text-transparent block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                We Build Modern
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Web Solutions
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9 max-w-3xl mx-auto"
          >
            Ready to accelerate your business growth? Our expert team delivers cutting-edge digital solutions that drive real results. Book a free consultation today and let's discuss your project.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="relative w-full gap-3 bg-blue-600 hover:bg-blue-700 sm:w-auto text-lg py-6 px-8 overflow-hidden group"
                onClick={() => window.open(CALENDAR_LINK, '_blank')}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-indigo-400/40"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                />
                <Calendar className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Schedule Free Consultation</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/work">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full gap-3 sm:w-auto text-lg py-6 px-8 group"
                >
                  <motion.div
                    animate={{ y: [0, -2, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="group-hover:text-blue-600 transition-colors"
                  >
                    <FolderKanban className="h-5 w-5" />
                  </motion.div>
                  <span className="group-hover:text-blue-600 transition-colors">Our Work</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 