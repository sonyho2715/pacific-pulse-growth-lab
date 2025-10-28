"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Apply() {
  const [formData, setFormData] = useState({
    businessName: "",
    yourName: "",
    phone: "",
    email: "",
    businessType: "",
    businessTypeOther: "",
    annualRevenue: "",
    painPoints: [] as string[],
    biggestFrustration: "",
    whyFoundingClient: "",
    readyToStart: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handlePainPointToggle = (point: string) => {
    setFormData((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter((p) => p !== point)
        : [...prev.painPoints, point],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          businessName: "",
          yourName: "",
          phone: "",
          email: "",
          businessType: "",
          businessTypeOther: "",
          annualRevenue: "",
          painPoints: [],
          biggestFrustration: "",
          whyFoundingClient: "",
          readyToStart: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pacific Pulse Growth Lab
            </div>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Founding Client Application
          </h1>
          <p className="text-xl">
            I personally review every application within 24 hours
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {submitStatus === "success" ? (
            <Card className="border-2 border-green-600">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">✓</div>
                <h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-400">
                  Application Received!
                </h2>
                <p className="text-lg mb-6">
                  Thank you for applying to the Founding Client Program. I&apos;ll review your
                  application and get back to you within 24 hours to schedule a strategy call.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Check your email (including spam folder) for next steps.
                </p>
                <Button asChild>
                  <Link href="/">Return to Homepage</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tell Me About Your Business</CardTitle>
                <CardDescription>
                  This application takes about 2 minutes to complete. All fields with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Business Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="Your business name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="yourName">Your Name *</Label>
                        <Input
                          id="yourName"
                          required
                          value={formData.yourName}
                          onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (808) 123-4567"
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
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type *</Label>
                      <select
                        id="businessType"
                        required
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950"
                      >
                        <option value="">Select your business type</option>
                        <option value="restaurant-cafe">Restaurant/Cafe</option>
                        <option value="spa-massage">Spa/Massage</option>
                        <option value="salon-beauty">Salon/Beauty</option>
                        <option value="auto-services">Auto Services</option>
                        <option value="cleaning-services">Cleaning Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {formData.businessType === "other" && (
                      <div className="space-y-2">
                        <Label htmlFor="businessTypeOther">Please specify *</Label>
                        <Input
                          id="businessTypeOther"
                          required={formData.businessType === "other"}
                          value={formData.businessTypeOther}
                          onChange={(e) => setFormData({ ...formData, businessTypeOther: e.target.value })}
                          placeholder="Your business type"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="annualRevenue">Annual Revenue Range *</Label>
                      <select
                        id="annualRevenue"
                        required
                        value={formData.annualRevenue}
                        onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950"
                      >
                        <option value="">Select revenue range</option>
                        <option value="50k-100k">$50K-$100K</option>
                        <option value="100k-250k">$100K-$250K</option>
                        <option value="250k-500k">$250K-$500K</option>
                        <option value="500k+">$500K+</option>
                      </select>
                    </div>
                  </div>

                  {/* Current Challenges */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Current Challenges</h3>

                    <div className="space-y-2">
                      <Label>Current Pain Points (check all that apply) *</Label>
                      <div className="space-y-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                        {[
                          { value: "missed-calls", label: "Miss calls after hours" },
                          { value: "overwhelmed-staff", label: "Staff overwhelmed with questions" },
                          { value: "slow-response", label: "Slow response time losing leads" },
                          { value: "manual-booking", label: "Manual booking process" },
                          { value: "inconsistent-service", label: "Inconsistent customer service" },
                        ].map((option) => (
                          <div key={option.value} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={option.value}
                              checked={formData.painPoints.includes(option.value)}
                              onChange={() => handlePainPointToggle(option.value)}
                              className="w-4 h-4"
                            />
                            <label htmlFor={option.value} className="cursor-pointer">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="biggestFrustration">
                        What&apos;s your biggest frustration with current customer communication? *
                      </Label>
                      <Textarea
                        id="biggestFrustration"
                        required
                        value={formData.biggestFrustration}
                        onChange={(e) => setFormData({ ...formData, biggestFrustration: e.target.value })}
                        placeholder="Tell me what's frustrating you most..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whyFoundingClient">
                        Why are you interested in being a founding client? *
                      </Label>
                      <Textarea
                        id="whyFoundingClient"
                        required
                        value={formData.whyFoundingClient}
                        onChange={(e) => setFormData({ ...formData, whyFoundingClient: e.target.value })}
                        placeholder="What makes this program appealing to you?"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="readyToStart">How soon are you ready to start? *</Label>
                      <select
                        id="readyToStart"
                        required
                        value={formData.readyToStart}
                        onChange={(e) => setFormData({ ...formData, readyToStart: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950"
                      >
                        <option value="">Select timeframe</option>
                        <option value="immediately">Immediately (next 2 weeks)</option>
                        <option value="within-30-days">Within 30 days</option>
                        <option value="30-60-days">30-60 days</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
                      Something went wrong. Please try again or email sony@pacificpulsegrowth.com directly.
                    </div>
                  )}

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting Application..." : "Submit Application"}
                    </Button>
                    <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                      No credit card needed. I&apos;ll review and contact you within 24 hours.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* What Happens Next */}
          {submitStatus !== "success" && (
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "I Review Your Application",
                  desc: "Within 24 hours, I'll review your application and check if we're a good fit.",
                },
                {
                  step: "2",
                  title: "Strategy Call Invite",
                  desc: "If it looks promising, I'll email you to schedule a 30-minute strategy call.",
                },
                {
                  step: "3",
                  title: "Decision & Kickoff",
                  desc: "If we're both excited, we'll move forward and start Week 1.",
                },
              ].map((item) => (
                <Card key={item.step}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2025 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
          <p className="mt-2">Bringing Fortune 500 technology to local businesses 🌺</p>
        </div>
      </footer>
    </div>
  );
}
