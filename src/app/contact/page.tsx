"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

const PLAN_INFO: Record<string, { name: string; price: { monthly: number; yearly: number }; setup: number }> = {
  starter: { name: "Starter", price: { monthly: 49, yearly: 39 }, setup: 299 },
  growth: { name: "Growth", price: { monthly: 99, yearly: 79 }, setup: 499 },
  professional: { name: "Professional", price: { monthly: 199, yearly: 159 }, setup: 999 },
  enterprise: { name: "Enterprise", price: { monthly: 499, yearly: 399 }, setup: 2499 },
};

function ContactForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");
  const billingCycle = searchParams.get("billing") as "monthly" | "yearly" | null;
  const planDetails = selectedPlan ? PLAN_INFO[selectedPlan] : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Pre-fill message when plan is selected
  useEffect(() => {
    if (planDetails && selectedPlan) {
      const price = billingCycle === "yearly" ? planDetails.price.yearly : planDetails.price.monthly;
      const billingText = billingCycle === "yearly" ? "yearly" : "monthly";
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in the ${planDetails.name} plan ($${price}/month, billed ${billingText}).\n\nPlease send me more information about getting started.`
      }));
    }
  }, [planDetails, selectedPlan, billingCycle]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Link href="/pricing" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Pricing
            </Link>
            <Link href="/blog" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Blog
            </Link>
            <Link href="/contact" className="text-zinc-900 font-medium dark:text-zinc-100">
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
            Let&apos;s Talk Growth
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Ready to accelerate your business? Get in touch with our team
          </p>
        </div>
      </section>

      {/* Plan Selection Banner */}
      {planDetails && selectedPlan && (
        <section className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-blue-900 dark:text-blue-100">
                  {planDetails.name} Plan Selected
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  ${billingCycle === "yearly" ? planDetails.price.yearly : planDetails.price.monthly}/month
                  {billingCycle === "yearly" ? " (billed yearly)" : ""} + ${planDetails.setup} setup
                </p>
              </div>
              <Link
                href="/pricing"
                className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium"
              >
                Change plan
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-zinc-600 dark:text-zinc-400">hello@pacificpulselab.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-zinc-600 dark:text-zinc-400">Pacific Northwest, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-zinc-600 dark:text-zinc-400">Mon-Fri: 9AM - 6PM PST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
                    Thank you! We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
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

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white flex items-center justify-center">
        <div className="animate-pulse text-zinc-400">Loading...</div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
