"use client"

import React from "react"
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Import tech-stack-icons with dynamic loading since it uses browser APIs
const TechIcon = dynamic(() => import('tech-stack-icons'), {
  ssr: false,
  loading: () => (
    <div className="w-10 h-10 bg-gray-50 rounded-full animate-pulse flex items-center justify-center">
      <div className="w-5 h-5 bg-gray-100 rounded animate-pulse" />
    </div>
  )
})

// Technology items by category
const techCategories = [
  {
    id: "backend",
    label: "Back-End",
    technologies: [
      { id: "javascript", name: "JavaScript", icon: "javascript" },
      { id: "typescript", name: "TypeScript", icon: "typescript" },
      { id: "python", name: "Python", icon: "python" },
      { id: "csharp", name: "C#", icon: "csharp" },
      { id: "php", name: "PHP", icon: "php" },
      { id: "java", name: "Java", icon: "java" }
    ]
  },
  {
    id: "frontend",
    label: "Front-End",
    technologies: [
      { id: "react", name: "React", icon: "reactjs" },
      { id: "vue", name: "Vue", icon: "vuejs" },
      { id: "angular", name: "Angular", icon: "angular" },
      { id: "html", name: "HTML5", icon: "html5" },
      { id: "css", name: "CSS3", icon: "css3" },
      { id: "tailwind", name: "Tailwind", icon: "tailwindcss" }
    ]
  },
  {
    id: "mobile",
    label: "Mobile Development",
    technologies: [
      { id: "reactnative", name: "React Native", icon: "reactjs" },
      { id: "flutter", name: "Flutter", icon: "flutter" },
      { id: "swift", name: "Swift", icon: "swift" },
      { id: "kotlin", name: "Kotlin", icon: "kotlin" },
      { id: "android", name: "Android", icon: "android" }
    ]
  },
  {
    id: "cloud",
    label: "Cloud",
    technologies: [
      { id: "aws", name: "AWS", icon: "aws" },
      { id: "azure", name: "Azure", icon: "azure" },
      { id: "gcp", name: "Google Cloud", icon: "gcloud" },
      { id: "firebase", name: "Firebase", icon: "firebase" },
      { id: "docker", name: "Docker", icon: "docker" }
    ]
  },
  {
    id: "cicd",
    label: "CI/CD and Automation",
    technologies: [
      { id: "githubactions", name: "GitHub Actions", icon: "github" },
      { id: "jenkins", name: "Jenkins", icon: "jenkins" },
      { id: "gitlab", name: "GitLab CI", icon: "gitlab" },
      { id: "terraform", name: "Terraform", icon: "terraform" },
      { id: "ansible", name: "Ansible", icon: "ansible" }
    ]
  },
  {
    id: "qa",
    label: "Quality Assurance",
    technologies: [
      { id: "selenium", name: "Selenium", icon: "selenium" },
      { id: "playwright", name: "Playwright", icon: "playwright" },
      { id: "specflow", name: "SpecFlow", icon: "specflow" },
      { id: "appium", name: "Appium", icon: "appium" },
      { id: "googleapi", name: "Google APIs", icon: "gcloud" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Technologies We Work With
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Stacklance, we leverage the latest technologies to create innovative and effective web solutions.
          </p>
        </div>

        <Tabs defaultValue="backend" className="w-full">
          {/* Custom Tabs Navigation */}
          <div className="border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar pb-px">
            <TabsList className="bg-transparent p-0 w-full justify-start space-x-8">
              {techCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-gray-500 px-1 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:text-blue-500 data-[state=active]:shadow-none font-medium text-base"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content */}
          {techCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 divide-x divide-y divide-gray-100">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-8 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="mb-4">
                      <TechIcon 
                        name={tech.icon} 
                        className="w-16 h-16" 
                        fallback={tech.name.substring(0, 2)}
                      />
                    </div>
                    <p className="text-center text-base font-medium text-gray-700">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
            View full technology stack
          </button>
        </div>
      </div>
    </section>
  );
} 
