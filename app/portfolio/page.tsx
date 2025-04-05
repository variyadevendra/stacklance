import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio | Stacklance",
  description: "Explore our successful projects and digital solutions across various industries.",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured online store with AI-powered recommendations and seamless payment integration.",
      image: "/portfolio/ecommerce.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "AI Chat Assistant",
      category: "AI Solutions",
      description: "Custom chatbot with natural language processing capabilities for customer support.",
      image: "/portfolio/ai-chat.jpg",
      technologies: ["Python", "TensorFlow", "AWS"]
    },
    {
      title: "Cloud Migration",
      category: "Cloud Services",
      description: "Successfully migrated legacy systems to modern cloud infrastructure with zero downtime.",
      image: "/portfolio/cloud.jpg",
      technologies: ["AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Development",
      description: "Real-time analytics dashboard for healthcare providers with HIPAA compliance.",
      image: "/portfolio/healthcare.jpg",
      technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Predictive Analytics",
      category: "AI Solutions",
      description: "Machine learning model for business forecasting and trend analysis.",
      image: "/portfolio/analytics.jpg",
      technologies: ["Python", "Scikit-learn", "TensorFlow"]
    },
    {
      title: "DevOps Pipeline",
      category: "Cloud Services",
      description: "Automated deployment and scaling solution for microservices architecture.",
      image: "/portfolio/devops.jpg",
      technologies: ["Jenkins", "Docker", "Kubernetes"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Discover our successful projects and see how we've helped businesses transform digitally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ 
  title, 
  category, 
  description, 
  technologies 
}: { 
  title: string; 
  category: string; 
  description: string; 
  technologies: string[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-100 relative">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-blue-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 