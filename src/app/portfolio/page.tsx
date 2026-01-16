import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// This would come from the database in a real implementation
const portfolioItems = [
  {
    id: "1",
    title: "E-Commerce Growth Strategy",
    client: "Pacific Retailers Co.",
    description: "Transformed an underperforming online store into a market leader",
    imageUrl: "/placeholder-portfolio-1.jpg",
    tags: ["SEO", "PPC", "Conversion Optimization"],
    results: "Increased revenue by 250% in 6 months, improved conversion rate from 1.2% to 4.5%"
  },
  {
    id: "2",
    title: "B2B Lead Generation Campaign",
    client: "Tech Solutions Inc.",
    description: "Built a comprehensive inbound marketing strategy for SaaS company",
    imageUrl: "/placeholder-portfolio-2.jpg",
    tags: ["Content Marketing", "Marketing Automation", "ABM"],
    results: "Generated 500+ qualified leads per month, reduced cost per lead by 60%"
  },
  {
    id: "3",
    title: "Brand Awareness Campaign",
    client: "Coastal Real Estate",
    description: "Multi-channel brand awareness campaign for luxury real estate",
    imageUrl: "/placeholder-portfolio-3.jpg",
    tags: ["Social Media", "Influencer Marketing", "PR"],
    results: "Increased brand awareness by 400%, generated $10M in property sales"
  },
];

export default function Portfolio() {
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
            <Link href="/portfolio" className="text-zinc-900 font-medium dark:text-zinc-100">
              Portfolio
            </Link>
            <Link href="/blog" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
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
            Our Portfolio
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Success stories from businesses we&apos;ve helped scale to new heights
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{item.client}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    Results:
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.results}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-blue-600 to-purple-600 -mx-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Want Results Like These?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let&apos;s discuss how we can help you achieve similar success
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2026 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
