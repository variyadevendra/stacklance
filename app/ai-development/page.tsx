import NavHeader from "@/components/blocks/nav-header";
import AICanvas from "@/components/ui/canvas";
import Image from "next/image";
import Link from "next/link";
import { NeuralNetworkAnimation } from "@/components/ui/neural-network";
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

// Floating Card Component
const FloatingCard = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
      {children}
    </div>
  </div>
);

const TechnologyCard = ({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur group-hover:blur-xl transition-all duration-300"></div>
    <div className="relative bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function AIDevelopment() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navigation */}
      <div className="fixed top-8 left-0 right-0 w-full flex justify-center z-50">
        <NavHeader />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <AICanvas />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                      AI Development
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Transform Your Business with{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                      AI Innovation
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600">
                    From concept to deployment, we create custom AI solutions that drive efficiency, innovation, and growth.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      href="/contact"
                      className="group relative px-8 py-4 bg-black text-white rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                      <span className="relative">Get Started</span>
                    </Link>
                    <Link 
                      href="#services"
                      className="px-8 py-4 border border-gray-200 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl aspect-square">
                    <NeuralNetworkAnimation />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Advanced AI Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Cutting-edge AI technologies tailored for your success
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🧠",
                    title: "Neural Networks",
                    description: "Custom deep learning models for complex pattern recognition"
                  },
                  {
                    icon: "🤖",
                    title: "GPT Integration",
                    description: "Advanced language models for natural communication"
                  },
                  {
                    icon: "👁",
                    title: "Computer Vision",
                    description: "Visual recognition systems for real-world applications"
                  },
                  {
                    icon: "📊",
                    title: "Predictive Analytics",
                    description: "Data-driven forecasting for business intelligence"
                  },
                  {
                    icon: "🎯",
                    title: "Reinforcement Learning",
                    description: "Self-improving AI systems for optimization"
                  },
                  {
                    icon: "🔄",
                    title: "AutoML Solutions",
                    description: "Automated machine learning pipelines"
                  }
                ].map((feature, index) => (
                  <FloatingCard key={index}>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </FloatingCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section with 3D Cards */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Development Process
                </h2>
                <p className="text-xl text-gray-600">
                  A systematic approach to AI implementation
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: "01", title: "Research & Planning", desc: "Understanding your needs and defining objectives" },
                  { number: "02", title: "Data Processing", desc: "Preparing and analyzing your data" },
                  { number: "03", title: "Model Development", desc: "Building and training custom AI models" },
                  { number: "04", title: "Deployment & Support", desc: "Implementing and maintaining solutions" }
                ].map((step, index) => (
                  <div key={index} className="group perspective">
                    <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20"></div>
                      <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                        <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FloatingCard>
                <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Let's discuss how AI can transform your business
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  Schedule a Free Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </FloatingCard>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technologies that Drive Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Leveraging cutting-edge technologies to build the future of AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <TechnologyCard
                icon="🧠"
                title="Deep Learning"
                description="TensorFlow & PyTorch for building sophisticated neural networks and advanced AI models"
              />
              <TechnologyCard
                icon="🤖"
                title="Large Language Models"
                description="GPT, BERT, and custom LLMs for natural language processing and generation"
              />
              <TechnologyCard
                icon="🔄"
                title="MLOps"
                description="Automated ML pipelines with Kubernetes, Docker, and cloud-native technologies"
              />
              <TechnologyCard
                icon="📊"
                title="Data Processing"
                description="Apache Spark, Pandas, and distributed computing for large-scale data handling"
              />
              <TechnologyCard
                icon="☁️"
                title="Cloud AI Services"
                description="AWS SageMaker, Google AI Platform, and Azure ML for scalable AI deployment"
              />
              <TechnologyCard
                icon="🛠"
                title="AI Development Tools"
                description="Jupyter, VS Code, and specialized AI development environments"
              />
            </div>

            {/* Technology Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              {[
                { number: "100+", label: "AI Models Deployed" },
                { number: "95%", label: "Accuracy Rate" },
                { number: "50+", label: "Enterprise Clients" },
                { number: "24/7", label: "Model Monitoring" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Add this before footer */}
        <section className="py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Contact Info */}
                <div className="space-y-8">
                  <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                    Contact Us
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Let's Build Your Next{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Digital Success Story
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Talk with us to know how we can make you a part of the thriving digital landscape.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-gray-600">info@stacklance.io</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-gray-600">+91 9574805131</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Visit Us</h3>
                        <p className="text-gray-600">Surat, Gujarat, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="How can we help you?"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Send Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 