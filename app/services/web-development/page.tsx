import { type Metadata } from "next";
import ClientLogosSection from "@/components/sections/ClientLogosSection";

export const metadata: Metadata = {
  title: "Web Development Services | Stacklance",
  description: "Custom web applications and responsive websites built with cutting-edge technologies.",
};

export default function WebDevelopmentPage() {
  const features = [
    {
      title: "Custom Web Applications",
      description: "Tailored solutions that perfectly match your business needs",
      icon: "💻"
    },
    {
      title: "E-Commerce Solutions",
      description: "Secure and scalable online stores with payment integration",
      icon: "🛍️"
    },
    {
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging mobile-first experiences",
      icon: "📱"
    },
    {
      title: "API Development",
      description: "Robust and scalable APIs for seamless integration",
      icon: "🔄"
    }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript",
    "Python", "Django", "PostgreSQL", "MongoDB"
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-gray-600">
              Build powerful web applications and responsive websites that drive business growth.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="text-center mb-20">
            <h2 className="text-2xl font-bold mb-8">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="mb-20">
            <ClientLogosSection 
              title="Clients We've Worked With" 
              subtitle="Trusted by industry leaders to deliver cutting-edge web solutions"
            />
          </div>

          {/* CTA Section */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 