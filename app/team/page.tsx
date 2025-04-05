export default function TeamPage() {
  return (
    <main className="container mx-auto min-h-screen pt-28 md:pt-32">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Meet the experts behind Stacklance's success
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TeamMember
          name="John Smith"
          role="CEO & Founder"
          bio="15+ years of experience in tech leadership and innovation"
        />
        <TeamMember
          name="Sarah Johnson"
          role="CTO"
          bio="Expert in AI and cloud architecture"
        />
        <TeamMember
          name="Michael Chen"
          role="Lead Developer"
          bio="Full-stack developer with focus on scalable solutions"
        />
        <TeamMember
          name="Emily Brown"
          role="AI Specialist"
          bio="PhD in Machine Learning, 8 years industry experience"
        />
        <TeamMember
          name="David Wilson"
          role="Cloud Architect"
          bio="Certified AWS and Azure solutions architect"
        />
        <TeamMember
          name="Lisa Anderson"
          role="UX Designer"
          bio="Creating intuitive and beautiful user experiences"
        />
        <TeamMember
          name="James Taylor"
          role="Project Manager"
          bio="Agile certified with 10+ years in tech project management"
        />
        <TeamMember
          name="Anna Martinez"
          role="DevOps Engineer"
          bio="Automation and infrastructure specialist"
        />
      </div>
    </main>
  )
}

function TeamMember({ 
  name, 
  role, 
  bio 
}: { 
  name: string; 
  role: string; 
  bio: string;
}) {
  return (
    <div className="p-6 rounded-lg border bg-card text-center">
      <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <div className="text-primary font-medium mb-2">{role}</div>
      <p className="text-muted-foreground text-sm">{bio}</p>
    </div>
  )
} 