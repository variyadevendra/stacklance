"use client";

import { motion } from "framer-motion";
import { MaterialIcon } from "../ui/material-icon";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-[#516EDE] font-medium">//</span>
              <span className="text-[#516EDE] font-medium">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold"
            >
              Culture Crafted & Loved by Engineers
            </motion.h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                At Stacklance, we believe in creating a culture that thrives on innovation, collaboration, and a passion for technology. Our engineers are at the heart of this culture, bringing their creativity and expertise to the forefront of everything we do.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a top software development company, utilizing the latest web and mobile development tools and techniques to create solutions that are affordable, scalable, and tailored to meet the unique needs of your business.
              </p>

              {/* Key Features */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {[
                  {
                    icon: "rocket_launch",
                    title: "Innovation First",
                    description: "Cutting-edge solutions for modern challenges"
                  },
                  {
                    icon: "diversity_3",
                    title: "Collaborative Culture",
                    description: "Strong team spirit and shared success"
                  },
                  {
                    icon: "psychology",
                    title: "Expert Team",
                    description: "Skilled professionals with diverse expertise"
                  },
                  {
                    icon: "precision_manufacturing",
                    title: "Quality Focused",
                    description: "Delivering excellence in every project"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
                      <MaterialIcon
                        name={feature.icon}
                        className="text-[#516EDE]"
                        size="md"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF] to-white rounded-3xl" />
              <div className="relative p-8 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <MaterialIcon
                    name="timer"
                    size="sm"
                    className="text-[#516EDE]"
                  />
                  <span className="text-sm font-medium">7+ Years Experience</span>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "200+", label: "Team Members" },
                    { value: "500+", label: "Projects Delivered" },
                    { value: "50+", label: "Countries Served" },
                    { value: "99%", label: "Client Satisfaction" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-[#516EDE] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 