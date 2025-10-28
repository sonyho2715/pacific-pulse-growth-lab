"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Step = 1 | 2 | 3 | 4 | 5;

export default function Apply() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    // Pre-qualification
    missedCalls: "",
    hasAfterHours: "",
    spendsTimeOnContent: "",
    wantsPassiveIncome: "",

    // ROI Calculator
    callsPerWeek: "",
    avgCustomerValue: "",

    // Package Selection
    selectedPackage: "",

    // Contact Info
    businessName: "",
    yourName: "",
    phone: "",
    email: "",
    businessType: "",
    readyToStart: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Calculate ROI
  const calculatedLoss = formData.callsPerWeek && formData.avgCustomerValue
    ? parseInt(formData.callsPerWeek) * parseInt(formData.avgCustomerValue) * 4 // monthly
    : 0;
  const captureRate = 0.7; // 70%
  const potentialCapture = Math.round(calculatedLoss * captureRate);

  // Check if pre-qualified
  const isPreQualified =
    (formData.missedCalls === "yes" || formData.spendsTimeOnContent === "yes" || formData.wantsPassiveIncome === "yes");

  const handleNext = () => {
    if (currentStep === 1 && !isPreQualified) {
      // Not qualified - show alternative path
      return;
    }
    if (currentStep < 5) setCurrentStep((currentStep + 1) as Step);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((currentStep - 1) as Step);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          calculatedLoss,
          potentialCapture,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setCurrentStep(5);
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
            Discover Your AI Automation Potential
          </h1>
          <p className="text-xl">
            Let&apos;s see exactly how much revenue you could capture (takes 2 minutes)
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      {currentStep < 5 && (
        <div className="bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto max-w-4xl px-4 py-4">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                    currentStep >= step
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400"
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      currentStep > step
                        ? "bg-blue-600"
                        : "bg-zinc-200 dark:bg-zinc-800"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <span className={currentStep >= 1 ? "text-blue-600 font-semibold" : "text-zinc-400"}>
                Qualify
              </span>
              <span className={currentStep >= 2 ? "text-blue-600 font-semibold" : "text-zinc-400"}>
                Calculate ROI
              </span>
              <span className={currentStep >= 3 ? "text-blue-600 font-semibold" : "text-zinc-400"}>
                Choose Package
              </span>
              <span className={currentStep >= 4 ? "text-blue-600 font-semibold" : "text-zinc-400"}>
                Get Started
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Multi-Step Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Step 1: Pre-Qualification */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Is This Right For You?</CardTitle>
                <CardDescription>
                  Answer these quick questions to see if AI automation can help your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-600">
                    <Label className="text-base font-semibold mb-3 block">
                      Do you miss calls after hours or when you&apos;re busy?
                    </Label>
                    <div className="space-y-2">
                      {[
                        { value: "yes", label: "Yes, we miss 5-20+ calls per week" },
                        { value: "sometimes", label: "Sometimes, maybe 1-5 calls per week" },
                        { value: "no", label: "No, we answer every call" },
                      ].map((option) => (
                        <div key={option.value} className="flex items-center gap-3">
                          <input
                            type="radio"
                            id={`missed-${option.value}`}
                            name="missedCalls"
                            value={option.value}
                            checked={formData.missedCalls === option.value}
                            onChange={(e) => setFormData({ ...formData, missedCalls: e.target.value })}
                            className="w-4 h-4"
                          />
                          <label htmlFor={`missed-${option.value}`} className="cursor-pointer">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-600">
                    <Label className="text-base font-semibold mb-3 block">
                      Do you spend 10+ hours per month creating content (blogs, social posts, emails)?
                    </Label>
                    <div className="space-y-2">
                      {[
                        { value: "yes", label: "Yes, 10-30+ hours per month" },
                        { value: "sometimes", label: "Sometimes, 5-10 hours per month" },
                        { value: "no", label: "No, we don't create much content" },
                      ].map((option) => (
                        <div key={option.value} className="flex items-center gap-3">
                          <input
                            type="radio"
                            id={`content-${option.value}`}
                            name="spendsTimeOnContent"
                            value={option.value}
                            checked={formData.spendsTimeOnContent === option.value}
                            onChange={(e) => setFormData({ ...formData, spendsTimeOnContent: e.target.value })}
                            className="w-4 h-4"
                          />
                          <label htmlFor={`content-${option.value}`} className="cursor-pointer">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-600">
                    <Label className="text-base font-semibold mb-3 block">
                      Are you interested in creating passive income from your expertise?
                    </Label>
                    <div className="space-y-2">
                      {[
                        { value: "yes", label: "Yes, I want to monetize my knowledge" },
                        { value: "curious", label: "Curious, but not sure how" },
                        { value: "no", label: "No, just focused on core business" },
                      ].map((option) => (
                        <div key={option.value} className="flex items-center gap-3">
                          <input
                            type="radio"
                            id={`passive-${option.value}`}
                            name="wantsPassiveIncome"
                            value={option.value}
                            checked={formData.wantsPassiveIncome === option.value}
                            onChange={(e) => setFormData({ ...formData, wantsPassiveIncome: e.target.value })}
                            className="w-4 h-4"
                          />
                          <label htmlFor={`passive-${option.value}`} className="cursor-pointer">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {formData.missedCalls && formData.spendsTimeOnContent && formData.wantsPassiveIncome && (
                  <>
                    {isPreQualified ? (
                      <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-600">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl">
                            ✓
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-green-900 dark:text-green-400">
                              Great! AI automation can definitely help your business.
                            </h3>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Let&apos;s calculate exactly how much revenue you could capture...
                            </p>
                          </div>
                        </div>
                        <Button onClick={handleNext} size="lg" className="w-full">
                          Next: Calculate My ROI →
                        </Button>
                      </div>
                    ) : (
                      <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-2 border-amber-600">
                        <h3 className="text-lg font-bold mb-3">
                          We might not be the best fit yet...
                        </h3>
                        <p className="mb-4">
                          Based on your answers, AI automation may not have the biggest impact on your business right now. But here&apos;s a free resource to help:
                        </p>
                        <Button variant="outline" asChild>
                          <Link href="/">Download Our Free Guide →</Link>
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2: ROI Calculator */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Let&apos;s Calculate Your Potential</CardTitle>
                <CardDescription>
                  Help me understand your current situation so I can show you exact numbers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="callsPerWeek" className="text-base font-semibold">
                      How many calls do you miss per week? *
                    </Label>
                    <Input
                      id="callsPerWeek"
                      type="number"
                      required
                      value={formData.callsPerWeek}
                      onChange={(e) => setFormData({ ...formData, callsPerWeek: e.target.value })}
                      placeholder="10"
                      className="text-lg"
                    />
                    <p className="text-sm text-zinc-500">Be honest - after hours, busy times, etc.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="avgCustomerValue" className="text-base font-semibold">
                      What&apos;s your average customer transaction value? *
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">$</span>
                      <Input
                        id="avgCustomerValue"
                        type="number"
                        required
                        value={formData.avgCustomerValue}
                        onChange={(e) => setFormData({ ...formData, avgCustomerValue: e.target.value })}
                        placeholder="150"
                        className="text-lg pl-8"
                      />
                    </div>
                    <p className="text-sm text-zinc-500">What does a typical customer spend with you?</p>
                  </div>
                </div>

                {calculatedLoss > 0 && (
                  <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl border-2 border-red-600">
                    <h3 className="text-lg font-bold mb-4 text-red-900 dark:text-red-400">
                      Here&apos;s What You&apos;re Losing Right Now:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Monthly Lost Revenue:</p>
                        <p className="text-4xl font-bold text-red-600 dark:text-red-400">
                          ${calculatedLoss.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Annual Lost Revenue:</p>
                        <p className="text-4xl font-bold text-red-600 dark:text-red-400">
                          ${(calculatedLoss * 12).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {potentialCapture > 0 && (
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-600">
                    <h3 className="text-lg font-bold mb-4 text-green-900 dark:text-green-400">
                      What AI Automation Can Capture (70% conversion rate):
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Monthly Captured:</p>
                        <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                          ${potentialCapture.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Annual Captured:</p>
                        <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                          ${(potentialCapture * 12).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-green-200 dark:border-green-900">
                      <p className="text-sm font-semibold">
                        ROI: {potentialCapture > 0 ? `${Math.round((potentialCapture / 497) * 100)}% monthly return` : ""} on a $497/month investment
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                    ← Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!formData.callsPerWeek || !formData.avgCustomerValue}
                    size="lg"
                    className="flex-1"
                  >
                    Next: Choose Package →
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Package Selection */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Choose Your Package</CardTitle>
                <CardDescription>
                  Based on your ${potentialCapture.toLocaleString()}/month potential, here&apos;s what I recommend:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* Starter Package */}
                  <div
                    onClick={() => setFormData({ ...formData, selectedPackage: "starter" })}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.selectedPackage === "starter"
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-950/20"
                        : "border-zinc-200 dark:border-zinc-800 hover:border-blue-400"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold">Starter Package</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">$497<span className="text-lg font-normal text-zinc-500">/month</span></p>
                      </div>
                      <input
                        type="radio"
                        name="package"
                        checked={formData.selectedPackage === "starter"}
                        onChange={() => {}}
                        className="w-5 h-5 mt-1"
                      />
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Perfect for getting started with AI</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span> AI Chatbot (1 website)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span> 24/7 lead capture
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span> Monthly reports
                      </li>
                    </ul>
                  </div>

                  {/* Growth Package - RECOMMENDED */}
                  <div
                    onClick={() => setFormData({ ...formData, selectedPackage: "growth" })}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all relative ${
                      formData.selectedPackage === "growth"
                        ? "border-purple-600 bg-purple-50 dark:bg-purple-950/20"
                        : "border-purple-300 dark:border-purple-800 hover:border-purple-500"
                    }`}
                  >
                    <div className="absolute -top-3 left-6 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      RECOMMENDED FOR YOU
                    </div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold">Growth Package</h3>
                        <div className="flex items-baseline gap-2 mt-2">
                          <p className="text-3xl font-bold text-purple-600">$497<span className="text-lg font-normal text-zinc-500">/month</span></p>
                          <span className="text-sm line-through text-zinc-400">$997</span>
                          <span className="text-sm font-semibold text-green-600">Founding Rate</span>
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="package"
                        checked={formData.selectedPackage === "growth"}
                        onChange={() => {}}
                        className="w-5 h-5 mt-1"
                      />
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Scale with content automation (Save 20+ hrs/month)</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600 font-bold">✓</span> Everything in Starter, plus:
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600 font-bold">✓</span> 4 AI-written blog posts/month
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600 font-bold">✓</span> 20 social media posts/month
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600 font-bold">✓</span> Email sequences
                      </li>
                    </ul>
                  </div>

                  {/* Scale Package */}
                  <div
                    onClick={() => setFormData({ ...formData, selectedPackage: "scale" })}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.selectedPackage === "scale"
                        ? "border-pink-600 bg-pink-50 dark:bg-pink-950/20"
                        : "border-zinc-200 dark:border-zinc-800 hover:border-pink-400"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold">Scale Package</h3>
                        <p className="text-3xl font-bold text-pink-600 mt-2">$1,997<span className="text-lg font-normal text-zinc-500">/month</span></p>
                      </div>
                      <input
                        type="radio"
                        name="package"
                        checked={formData.selectedPackage === "scale"}
                        onChange={() => {}}
                        className="w-5 h-5 mt-1"
                      />
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Complete marketing automation + passive income</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-pink-600 font-bold">✓</span> Everything in Growth, plus:
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-pink-600 font-bold">✓</span> Full marketing automation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-pink-600 font-bold">✓</span> Passive income system setup
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-pink-600 font-bold">✓</span> Priority support
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                    ← Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!formData.selectedPackage}
                    size="lg"
                    className="flex-1"
                  >
                    Next: Your Information →
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Contact Information */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Let&apos;s Get You Started</CardTitle>
                <CardDescription>
                  I&apos;ll personally review your application and reach out within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
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
                      <option value="spa-wellness">Spa/Wellness</option>
                      <option value="restaurant-cafe">Restaurant/Cafe</option>
                      <option value="salon-beauty">Salon/Beauty</option>
                      <option value="auto-services">Auto Services</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="readyToStart">When can you start? *</Label>
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
                    </select>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border-2 border-blue-600">
                  <h3 className="font-bold mb-3">Your Selection Summary:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span className="font-semibold capitalize">{formData.selectedPackage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Investment:</span>
                      <span className="font-semibold">
                        ${formData.selectedPackage === "starter" ? "497" : formData.selectedPackage === "growth" ? "497" : "1,997"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Potential Monthly Capture:</span>
                      <span className="font-semibold text-green-600">${potentialCapture.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span>Your ROI:</span>
                      <span className="font-bold text-lg text-green-600">
                        {Math.round((potentialCapture / (formData.selectedPackage === "scale" ? 1997 : 497)))}X
                      </span>
                    </div>
                  </div>
                </div>

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
                    Something went wrong. Please try again or email sony@pacificpulsegrowth.com directly.
                  </div>
                )}

                <div className="flex gap-3">
                  <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                    ← Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !formData.businessName ||
                      !formData.yourName ||
                      !formData.phone ||
                      !formData.email ||
                      !formData.businessType ||
                      !formData.readyToStart
                    }
                    size="lg"
                    className="flex-1"
                  >
                    {isSubmitting ? "Submitting..." : "Complete Application →"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Success */}
          {currentStep === 5 && submitStatus === "success" && (
            <Card className="border-2 border-green-600">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-400">
                  Application Received!
                </h2>
                <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl mb-6">
                  <p className="text-lg mb-4">
                    <strong>Potential Monthly Revenue Capture:</strong> ${potentialCapture.toLocaleString()}
                  </p>
                  <p className="text-lg">
                    <strong>Selected Package:</strong> {formData.selectedPackage}
                    {formData.selectedPackage === "growth" && " (Founding Rate - $497)"}
                  </p>
                </div>
                <p className="text-lg mb-6">
                  Thank you, {formData.yourName}! I&apos;ll personally review your application and reach out within 24 hours to schedule our strategy call.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Check your email (including spam folder) at <strong>{formData.email}</strong> for next steps.
                </p>
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/">Return to Homepage</Link>
                  </Button>
                  <p className="text-sm text-zinc-500">
                    Questions? Email sony@pacificpulsegrowth.com or call directly
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2025 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
          <p className="mt-2">Master NLP Coach + AI Automation for Hawaii Businesses 🌺</p>
        </div>
      </footer>
    </div>
  );
}
