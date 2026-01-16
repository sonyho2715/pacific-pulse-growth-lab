import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ResourcesPage() {
  const articles = [
    {
      id: "nlp-chatbot-techniques",
      title: "5 NLP Techniques Your AI Chatbot Should Use (But Probably Doesn't)",
      excerpt: "Most AI chatbots are just FAQ machines. But when you apply Master NLP Coach techniques like the Meta Model, Milton Model, and Sleight of Mouth patterns, your chatbot becomes a conversion machine. Discover how Hawaii businesses are using these advanced persuasion frameworks to capture 70% more after-hours leads...",
      readTime: "8 min read",
      category: "AI Chatbots",
      categoryColor: "blue",
    },
    {
      id: "hawaii-tourist-psychology",
      title: "The Psychology of Converting Hawaii Tourists Into Loyal Customers",
      excerpt: "When tourists land in Hawaii, they're in a specific emotional state - and if you understand the psychology, you can craft messages that convert. Learn the NLP patterns that resonate with visitors, from presuppositions that guide decision-making to embedded commands that create urgency without pressure...",
      readTime: "10 min read",
      category: "Marketing Psychology",
      categoryColor: "purple",
    },
    {
      id: "copy-that-converts",
      title: "How to Write Copy That Converts: NLP Secrets from 208 Hours of Training",
      excerpt: "After 208 hours of Master NLP Coach certification, I've learned one thing: words create reality. This article breaks down the exact language patterns I use in every piece of sales copy - from agreement frames ('Yes, I want...') to future pacing ('Imagine waking up to 5 new appointments'). These aren't copywriting hacks. They're neuroscience...",
      readTime: "12 min read",
      category: "Copywriting",
      categoryColor: "amber",
    },
    {
      id: "meta-model-qualification",
      title: "Meta Model Questions That Qualify Leads (And Eliminate Tire-Kickers)",
      excerpt: "Stop wasting time on unqualified leads. The Meta Model - one of NLP's most powerful frameworks - gives you precision questions that reveal whether someone is ready to buy. 'Every call?' becomes 'How many calls per week specifically?' This article shows you the 7 Meta Model patterns that separate browsers from buyers...",
      readTime: "9 min read",
      category: "Sales Strategy",
      categoryColor: "green",
    },
    {
      id: "milton-model-service-business",
      title: "Milton Model Patterns for Service Businesses: Hypnotic Language That Closes Deals",
      excerpt: "The Milton Model is the opposite of the Meta Model - instead of precise questions, you use artfully vague language that bypasses resistance. 'When you start saving 20 hours per month...' (presupposition). 'You might begin to notice how much revenue you're missing...' (embedded command). Service businesses in Hawaii are using these patterns to close 40% more deals...",
      readTime: "11 min read",
      category: "Advanced NLP",
      categoryColor: "indigo",
    },
    {
      id: "sleight-of-mouth-objections",
      title: "Sleight of Mouth: How to Reframe Any Objection Into an Opportunity",
      excerpt: "'Too expensive' → 'Compared to losing $3K/month in missed revenue?' That's Sleight of Mouth - NLP's most advanced objection-handling framework. This article teaches you the 14 patterns that turn objections into closes. Reframe. Consequence. Chunk Up. Intent. Master these, and you'll never fear objections again...",
      readTime: "13 min read",
      category: "Objection Handling",
      categoryColor: "rose",
    },
    {
      id: "ai-automation-hawaii",
      title: "Why Hawaii Businesses Are Uniquely Positioned for AI Automation Success",
      excerpt: "Hawaii's service business landscape - tourism, wellness, hospitality - is perfect for AI automation. After-hours calls from mainland time zones. Seasonal demand spikes. Language barriers with international tourists. This article reveals why Hawaii businesses see 2-3X higher ROI from AI chatbots and content automation compared to mainland competitors...",
      readTime: "7 min read",
      category: "Hawaii Business",
      categoryColor: "teal",
    },
  ];

  const categoryColors: { [key: string]: string } = {
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    rose: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
    teal: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 dark:from-zinc-950 dark:via-blue-950/10 dark:to-purple-950/10">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pacific Pulse
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-blue-600 transition">Home</Link>
            <Link href="/apply" className="text-sm hover:text-blue-600 transition">Apply</Link>
            <Button size="sm" asChild>
              <Link href="mailto:sony@pacificpulsegrowth.com">Contact Sony</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Master NLP Coach Knowledge Base
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            NLP-Powered AI Marketing Insights
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            When you combine 208 hours of Master NLP Coach training with AI automation expertise,
            you get strategies that actually convert. These aren&apos;t blog posts - they&apos;re implementation guides
            from real Hawaii business transformations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="shadow-xl">
              <Link href="/apply">
                Apply for Founding Client Program →
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:sony@pacificpulsegrowth.com">
                Email Sony Directly
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">208</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Hours NLP Training</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">70%</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Lead Capture Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">32hrs</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Saved Per Month</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">3X</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">ROI Guarantee</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{articles.length} articles</p>
          </div>

          <div className="grid gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Article Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.categoryColor]}`}>
                          {article.category}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {article.title}
                      </h3>

                      <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30">
                          Read Full Article →
                        </Button>
                      </div>
                    </div>

                    {/* Coming Soon Badge */}
                    <div className="md:w-32 flex-shrink-0">
                      <div className="px-4 py-2 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg text-center">
                        <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-none text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <CardContent className="relative p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want This Level of Expertise Working For YOUR Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                These aren&apos;t just articles - they&apos;re the exact frameworks I use to build AI automation systems
                that capture $3K+/month in missed revenue for Hawaii businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="shadow-xl">
                  <Link href="/apply">
                    Apply for Founding Client Program
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Link href="mailto:sony@pacificpulsegrowth.com">
                    Email Sony: sony@pacificpulsegrowth.com
                  </Link>
                </Button>
              </div>
              <p className="text-sm mt-6 opacity-75">
                5 Founding Client spots remaining • $497/month founding rate (regular $997)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-white/50 dark:bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Pacific Pulse Growth Lab
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Master NLP Coach-Powered AI Automation for Hawaii Service Businesses
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/apply" className="hover:text-blue-600 transition">Apply</Link>
              <Link href="mailto:sony@pacificpulsegrowth.com" className="hover:text-blue-600 transition">Contact</Link>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-6">
              © 2026 Pacific Pulse Growth Lab. AI Automation + 208 Hours Master NLP Coach Training.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
