export default function BlogPage() {
  return (
    <main className="container mx-auto min-h-screen pt-28 md:pt-32">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlogPost
          title="The Future of Web Development"
          excerpt="Exploring the latest trends and technologies shaping the future of web development."
          date="March 15, 2024"
        />
        <BlogPost
          title="AI in Modern Business"
          excerpt="How artificial intelligence is transforming business operations and decision-making."
          date="March 10, 2024"
        />
        <BlogPost
          title="Cloud Computing Trends"
          excerpt="Latest developments in cloud technology and their impact on business infrastructure."
          date="March 5, 2024"
        />
        <BlogPost
          title="Cybersecurity Best Practices"
          excerpt="Essential security measures for protecting your digital assets in 2024."
          date="March 1, 2024"
        />
      </div>
    </main>
  )
}

function BlogPost({ title, excerpt, date }: { title: string; excerpt: string; date: string }) {
  return (
    <article className="p-6 rounded-lg border bg-card">
      <time className="text-sm text-muted-foreground">{date}</time>
      <h2 className="text-xl font-semibold mt-2 mb-3">{title}</h2>
      <p className="text-muted-foreground">{excerpt}</p>
      <button className="mt-4 text-primary font-medium">Read more →</button>
    </article>
  )
} 