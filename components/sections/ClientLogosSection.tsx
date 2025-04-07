"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define the props for the component
interface ClientLogosSectionProps {
  title?: string;
  subtitle?: string;
}

// Sample client logos - Replace with your actual client logos
const clientLogos = [
  {
    name: 'Microsoft',
    logo: '/images/logos/microsoft.svg', 
    width: 120,
    height: 36
  },
  {
    name: 'Google',
    logo: '/images/logos/google.svg',
    width: 120, 
    height: 36
  },
  {
    name: 'Amazon',
    logo: '/images/logos/amazon.svg',
    width: 120,
    height: 36
  },
  {
    name: 'IBM',
    logo: '/images/logos/ibm.svg',
    width: 120,
    height: 40
  },
  {
    name: 'Airbnb',
    logo: '/images/logos/airbnb.svg',
    width: 120,
    height: 36
  },
  {
    name: 'Shopify',
    logo: '/images/logos/shopify.svg',
    width: 120,
    height: 36
  }
];

const ClientLogosSection = ({
  title = "Clients We've Worked With",
  subtitle = "Trusted by industry leaders worldwide"
}: ClientLogosSectionProps) => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
        
        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Fallback for missing logos */}
              <div className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center border border-gray-200 rounded-md p-4 min-w-[100px] min-h-[40px]">
                    <span className="text-lg font-semibold text-gray-500">{client.name}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection; 