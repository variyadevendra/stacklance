"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Requirement Gathering",
    description: "We start by understanding your business needs, goals, and requirements through detailed consultation.",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Analysis Requirement",
    description: "Our team analyzes requirements and creates detailed specifications that align with your objectives.",
    color: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Design & Development",
    description: "We design and develop your solution using modern technologies and industry best practices.",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Deploy Application",
    description: "We carefully deploy your application ensuring everything runs smoothly in production.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Integration & Testing",
    description: "Rigorous testing and integration to ensure your solution meets the highest quality standards.",
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V4M12 6C15.3137 6 18 8.68629 18 12M12 6C8.68629 6 6 8.68629 6 12M18 12C18 15.3137 15.3137 18 12 18M18 12H20M6 12C6 15.3137 8.68629 18 12 18M6 12H4M12 18V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to keep your solution running optimally.",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600"
  }
];

export function ServiceProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Service Delivery Process
          </h2>
          <p className="text-muted-foreground">
            We follow a structured approach to deliver high-quality solutions that meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
            <div className="h-full w-px border-l-2 border-dashed border-gray-200"></div>
          </div>

          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${
                index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
              } relative`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-8 ${
                  index % 2 === 0 ? "md:-right-2" : "md:-left-2"
                } w-4 h-4 rounded-full bg-primary`}
              />

              <div
                className={`p-6 rounded-2xl ${step.color} hover:shadow-lg transition-shadow duration-300 relative group`}
              >
                <div className={`flex items-center gap-4 mb-4 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}>
                  <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center ${step.iconColor} shadow-sm`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 