import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// This would come from the database in a real implementation
const blogPosts = [
  {
    id: "1",
    title: "10 Growth Hacking Strategies That Actually Work in 2025",
    slug: "growth-hacking-strategies-2025",
    excerpt: "Discover the most effective growth hacking strategies that top marketers are using to scale businesses rapidly in today's competitive landscape.",
    author: "Pacific Pulse Team",
    createdAt: "2025-01-15",
    tags: ["Growth Hacking", "Marketing Strategy", "Scaling"],
    views: 1234
  },
  {
    id: "2",
    title: "How to Build a High-Converting Landing Page in 24 Hours",
    slug: "high-converting-landing-page",
    excerpt: "Learn the exact framework we use to create landing pages that convert visitors into customers at rates above 5%.",
    author: "Pacific Pulse Team",
    createdAt: "2025-01-10",
    tags: ["Conversion Optimization", "Landing Pages", "CRO"],
    views: 987
  },
  {
    id: "3",
    title: "The Future of Digital Marketing: AI and Automation",
    slug: "future-digital-marketing-ai",
    excerpt: "Explore how artificial intelligence and marketing automation are transforming the way businesses connect with customers.",
    author: "Pacific Pulse Team",
    createdAt: "2025-01-05",
    tags: ["AI", "Marketing Automation", "Future Trends"],
    views: 1567
  },
  {
    id: "4",
    title: "From $0 to $1M: A Case Study in B2B SaaS Marketing",
    slug: "b2b-saas-marketing-case-study",
    excerpt: "An in-depth look at how we helped a B2B SaaS startup reach their first million in ARR through strategic marketing.",
    author: "Pacific Pulse Team",
    createdAt: "2025-01-01",
    tags: ["Case Study", "B2B", "SaaS Marketing"],
    views: 2103
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pacific Pulse Growth Lab
            </div>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/#services" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Services
            </Link>
            <Link href="/portfolio" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Portfolio
            </Link>
            <Link href="/blog" className="text-zinc-900 font-medium dark:text-zinc-100">
              Blog
            </Link>
            <Link href="/contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Contact
            </Link>
          </div>
          <Link href="/booking">
            <Button>Book a Call</Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Growth Insights
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Expert strategies, tips, and insights to accelerate your business growth
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                </div>
                <CardTitle className="text-2xl hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline">Read More →</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-20 bg-zinc-100 dark:bg-zinc-900 -mx-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Get the latest growth strategies and insights delivered to your inbox
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2025 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
