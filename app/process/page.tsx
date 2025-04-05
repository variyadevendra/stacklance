export default function ProcessPage() {
  return (
    <main className="container mx-auto min-h-screen pt-28 md:pt-32">
      <h1 className="text-4xl font-bold mb-6">Our Process</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Our proven methodology ensures successful project delivery
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <ProcessStep
          number="01"
          title="Discovery"
          description="We begin by understanding your business needs, goals, and challenges through in-depth consultation."
        />
        <ProcessStep
          number="02"
          title="Planning"
          description="Our team creates a detailed project roadmap with timelines, milestones, and deliverables."
        />
        <ProcessStep
          number="03"
          title="Development"
          description="We build your solution using agile methodology, ensuring regular updates and feedback integration."
        />
        <ProcessStep
          number="04"
          title="Delivery"
          description="Final testing, deployment, and handover with comprehensive documentation and support."
        />
      </div>

      <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Take your business to the next level with a custom solution tailored to your needs
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Schedule a Call →
        </button>
      </div>
    </main>
  )
}

function ProcessStep({
  number,
  title,
  description
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border bg-card">
      <div className="text-4xl font-bold text-primary mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
} 