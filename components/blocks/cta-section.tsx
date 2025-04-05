"use client";

import { motion } from "framer-motion";
import { MaterialIcon } from "../ui/material-icon";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF] to-white -z-10" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#516EDE]/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-[#516EDE]/10 to-transparent blur-2xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl bg-white border border-gray-100 shadow-xl shadow-blue-100/20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#516EDE] to-[#4559BE]" />
          
          <div className="p-12">
            {/* Left Content - Enhanced */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-[#EEF2FF] px-4 py-1.5 rounded-full"
              >
                <MaterialIcon 
                  name="code" 
                  size="sm"
                  className="text-[#516EDE]"
                />
                <span className="text-sm font-medium text-[#516EDE]">
                  Full-Stack Development Agency
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold leading-tight"
              >
                Transform Your Ideas Into Powerful Digital Solutions
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gray-600 text-lg"
              >
                Stacklance delivers end-to-end IT solutions from concept to deployment. Our expert team brings your vision to life with cutting-edge technology and agile development.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-wrap justify-center gap-6 pt-4"
              >
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#516EDE] text-white font-medium hover:bg-[#4559BE] transition-all duration-300 group hover:shadow-lg hover:shadow-blue-200">
                  Get Free Consultation
                  <MaterialIcon 
                    name="rocket_launch" 
                    size="sm"
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
                
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:border-[#516EDE] hover:text-[#516EDE] transition-all duration-300 group">
                  <MaterialIcon 
                    name="engineering" 
                    size="sm"
                    className="mr-2"
                  />
                  View Our Process
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 