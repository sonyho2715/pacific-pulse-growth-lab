import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SonyStory() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-black dark:via-blue-950/10 dark:to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder - you'll replace with actual photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">👤</div>
                <p className="text-sm opacity-75">Replace with your photo:<br/>src/components/SonyStory.tsx</p>
              </div>
            </div>

            {/* Credentials badges */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-950 rounded-xl shadow-xl p-4 border-2 border-blue-600">
              <p className="text-sm font-bold text-blue-600">Master NLP Coach</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">208 Hours Certified</p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span>👋</span> Meet Your AI Automation Partner
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Overwhelmed Business Owner to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Automation Expert</span>
            </h2>

            <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              <p>
                Aloha! I'm <strong className="text-zinc-900 dark:text-zinc-100">Sony Ho</strong>, and like you, I was drowning in missed calls, spending 20 hours a week on content, and watching competitors win because I couldn't respond fast enough.
              </p>
              <p>
                So I did something about it. I invested <strong className="text-zinc-900 dark:text-zinc-100">208 hours in Master NLP Coach training</strong> to understand the psychology of persuasion, then combined it with AI automation to build systems that actually convert.
              </p>
              <p>
                The result? My businesses now capture <strong className="text-zinc-900 dark:text-zinc-100">$3K+ per month in revenue</strong> that used to go to voicemail. I automated content creation, saving 32 hours monthly. And I built passive income streams that earn while I sleep.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                Now I'm helping Hawaii SMEs do the same—personally. No outsourcing, no junior developers. Just me, implementing what I know works.
              </p>
            </div>

            <Card className="border-2 border-blue-200 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/20 mb-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Why This Matters to You:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p><strong>I'm a business owner, not just a tech guy.</strong> I understand P&L, cash flow, and ROI.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p><strong>I've tested this on my own businesses first.</strong> Every system I sell, I use myself.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p><strong>I'm local to Hawaii.</strong> I understand the unique challenges of island businesses, tourism, and local culture.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply">
                <Button size="lg" className="shadow-xl shadow-blue-600/20">
                  Work With Sony Directly →
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:sony@pacificpulsegrowth.com">
                  Email Sony: sony@pacificpulsegrowth.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
