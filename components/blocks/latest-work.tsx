"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MaterialIcon } from "../ui/material-icon";

const projects = [
  {
    id: 1,
    title: "Healthcare Management System",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    description: "Modern patient management system with integrated EHR solutions",
    stats: {
      efficiency: "+45%",
      satisfaction: "98%",
      timeReduction: "3x"
    }
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
    description: "Full-scale e-commerce solution with advanced analytics",
    stats: {
      sales: "+120%",
      conversion: "35%",
      growth: "2.5x"
    }
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    description: "Real-time financial data visualization and reporting system",
    stats: {
      accuracy: "99.9%",
      processing: "5x",
      savings: "40%"
    }
  }
];

export function LatestWork() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center bg-[#EEF2FF] px-5 py-2 rounded-full mb-6"
          >
            <span className="text-[#516EDE] font-medium text-sm">Our Latest Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[48px] leading-tight font-bold mb-4"
          >
            Success Stories That Drive Results
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#516EDE]/20 transition-colors duration-300">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                      <MaterialIcon 
                        name={getCategoryIcon(project.category)} 
                        size="sm"
                        className="text-[#516EDE]"
                      />
                      <span className="text-sm font-medium text-gray-800">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-[#516EDE] font-bold text-xl mb-1 flex items-center justify-center gap-1">
                          <MaterialIcon 
                            name={getStatIcon(key)} 
                            size="sm"
                            className="text-[#516EDE]/70"
                          />
                          {value}
                        </div>
                        <div className="text-gray-500 text-xs capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View Case Study Link */}
                  <div className="flex items-center justify-between group/link cursor-pointer">
                    <span className="text-sm font-medium text-[#516EDE] group-hover/link:text-[#4559BE] transition-colors duration-300">
                      View Case Study
                    </span>
                    <MaterialIcon 
                      name="arrow_forward" 
                      size="md"
                      className="text-[#516EDE] transform group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#516EDE] text-white font-medium hover:bg-[#4559BE] transition-colors duration-300 gap-2 group/button"
          >
            View All Projects
            <MaterialIcon 
              name="arrow_forward" 
              size="md"
              className="transform group-hover/button:translate-x-1 transition-transform duration-300"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// Helper functions for icons
function getCategoryIcon(category: string): string {
  const icons = {
    Healthcare: "medical_services",
    Retail: "shopping_cart",
    Finance: "payments",
    Education: "school",
    "Real-Estate": "apartment",
    Manufacturing: "precision_manufacturing",
    Transportation: "local_shipping",
    Entertainment: "movie",
    Hospitality: "restaurant",
    Travel: "flight",
    Sports: "sports",
    eCommerce: "shopping_bag"
  };
  return icons[category] || "work";
}

function getStatIcon(stat: string): string {
  const icons = {
    efficiency: "speed",
    satisfaction: "sentiment_satisfied",
    timeReduction: "timer",
    sales: "trending_up",
    conversion: "swap_horiz",
    growth: "monitoring",
    accuracy: "verified",
    processing: "memory",
    savings: "savings"
  };
  return icons[stat] || "analytics";
} 