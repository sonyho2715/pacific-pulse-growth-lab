"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "What if my business is too unique for AI?",
    answer: "That's exactly why we do custom builds. I spend Week 1 learning YOUR business, YOUR customers, YOUR language. The AI is trained specifically on your services, pricing, and processes. Not generic templates. I've worked with businesses from wellness to restaurants to professional services - each one gets a completely custom system."
  },
  {
    question: "What if customers hate talking to AI?",
    answer: "Done right, customers can't tell the difference. And here's the secret: 80% of inquiries are simple (hours, pricing, availability). AI handles those instantly. Complex questions escalate to your team. Customers actually LOVE getting instant answers at 2 AM instead of waiting hours for a callback. Plus, my NLP training ensures conversations feel natural, not robotic."
  },
  {
    question: "What happens after 90 days?",
    answer: "If you're happy (and I'm confident you will be), the price goes to $697/month. Still 30% off the regular $997 rate as a thank-you for being a founding client. Cancel anytime - no long-term contracts. But honestly, once you see the revenue it's capturing, you won't want to turn it off."
  },
  {
    question: "What if it doesn't work for my business?",
    answer: "Remember the guarantee: If you don't see 3X ROI in 90 days, next 3 months free. That means I'm betting on YOUR success. Plus, you work directly with me - we'll figure it out together. I'm not some agency that disappears after setup. I review your metrics monthly and continuously optimize."
  },
  {
    question: "How is this different from [other chatbot service]?",
    answer: "Most competitors: templates, junior devs, no customization, generic scripts, offshore support. Pacific Pulse: Custom-built by me personally, NLP-trained conversations that sound human, local Hawaii support, built by a business owner who understands operations (not just a coder). You're not getting a product - you're getting a partner."
  },
  {
    question: "Do I need to be technical?",
    answer: "Nope. I handle all the technical stuff. You just tell me about your business, and I translate that into a working AI system. You'll use a simple dashboard to see results - no coding required. If you can use email and a calendar, you can use this system."
  },
  {
    question: "Can I see examples from other Hawaii businesses?",
    answer: "Not yet - that's exactly why this is a founding program! I've built systems for my own businesses and seen the results. Now I need Hawaii service business case studies. You'll be one of the first. That's why pricing is 50% off and why I'm limiting it to 8 businesses. After 90 days, I'll have real results to show."
  },
  {
    question: "What platforms does it work on?",
    answer: "Website (live chat widget), Facebook Messenger, Instagram DM (optional). We start with your website and Facebook since that's where most inquiries come from. More platforms available in higher tiers later if needed."
  },
  {
    question: "What if I want to cancel?",
    answer: "90-day minimum commitment, then month-to-month. Cancel anytime after that. You'll get a full export of your data and conversation history. But I'm confident you won't want to once you see it working - it's like having a tireless employee for $16/day."
  },
  {
    question: "How quickly can we start?",
    answer: "First available slot is within 2 weeks of your strategy call. Total timeline: Apply → Strategy Call (within 48 hours) → Start Week 1 (within 2 weeks) → Live System (30 days from start). So from application to live system is roughly 6 weeks, assuming you're ready to move quickly."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, index) => (
        <Card key={index} className="overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left"
          >
            <CardHeader className="cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              <CardTitle className="text-lg flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-2xl text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </CardTitle>
            </CardHeader>
          </button>
          {openIndex === index && (
            <CardContent className="pt-0 pb-6">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
