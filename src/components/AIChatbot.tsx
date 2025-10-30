"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface LeadInfo {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  monthlyRevenue: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(true);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    monthlyRevenue: "",
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Aloha! 🌺 I help Hawaii businesses capture missed revenue with AI automation.\n\nWhat's your biggest challenge - missed calls, content creation, or finding time to market?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const MESSAGE_LIMIT = 10;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!leadInfo.name || !leadInfo.email || !leadInfo.phone || !leadInfo.businessType || !leadInfo.monthlyRevenue) {
      alert("Please fill in all fields to continue");
      return;
    }

    // Qualification filter: Only allow businesses doing $5K+/month
    const revenueThreshold = leadInfo.monthlyRevenue === "under5k";
    if (revenueThreshold) {
      alert("Thank you for your interest! Pacific Pulse focuses on established businesses doing $5K+/month. We recommend revisiting AI automation once you've scaled past this threshold. Contact sony@pacificpulsegrowth.com for future opportunities.");
      setIsOpen(false);
      return;
    }

    // Store lead info (you can send to an API here)
    console.log("Qualified Lead:", leadInfo);

    // Show chat
    setShowLeadForm(false);

    // Personalize first message
    setMessages([
      {
        role: "assistant",
        content: `Aloha ${leadInfo.name.split(" ")[0]}! 🌺 I help Hawaii ${leadInfo.businessType.toLowerCase()} businesses capture missed revenue with AI automation.\n\nWhat's your biggest challenge - missed calls, content creation, or finding time to market?`,
      },
    ]);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Check message limit
    if (messageCount >= MESSAGE_LIMIT) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `You've reached your ${MESSAGE_LIMIT}-message preview limit. Ready to capture those missed calls and automate your content? Apply now to unlock full access: https://pacific-pulse-growth.vercel.app/apply or email Sony: sony@pacificpulsegrowth.com`,
        },
      ]);
      return;
    }

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setMessageCount((prev) => prev + 1);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
      setMessageCount((prev) => prev + 1);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I encountered an error. Please try again or contact Sony directly at sony@pacificpulsegrowth.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Open chat"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-bold">
                PP
              </div>
              <div>
                <p className="font-semibold">Pacific Pulse AI</p>
                <p className="text-xs flex items-center gap-1 opacity-90">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setShowLeadForm(true);
              }}
              className="hover:bg-white/20 p-1 rounded transition"
              aria-label="Close chat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Lead Capture Form */}
          {showLeadForm ? (
            <CardContent className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Get Your Free AI Consultation 🌺</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Tell us about your business to see if you qualify for our Founding Client Program ($497/month, 5 spots left)
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      value={leadInfo.name}
                      onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      value={leadInfo.email}
                      onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                      placeholder="john@business.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      value={leadInfo.phone}
                      onChange={(e) => setLeadInfo({ ...leadInfo, phone: e.target.value })}
                      placeholder="(808) 555-1234"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Business Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={leadInfo.businessType}
                      onChange={(e) => setLeadInfo({ ...leadInfo, businessType: e.target.value })}
                      className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-950"
                      required
                    >
                      <option value="">Select your industry</option>
                      <option value="Spa/Massage">Spa/Massage</option>
                      <option value="Auto Detail">Auto Detail</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Retail">Retail</option>
                      <option value="Tourism">Tourism</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Other Service Business">Other Service Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Monthly Revenue <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={leadInfo.monthlyRevenue}
                      onChange={(e) => setLeadInfo({ ...leadInfo, monthlyRevenue: e.target.value })}
                      className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-950"
                      required
                    >
                      <option value="">Select monthly revenue</option>
                      <option value="under5k">Under $5,000/month</option>
                      <option value="5k-10k">$5,000 - $10,000/month</option>
                      <option value="10k-25k">$10,000 - $25,000/month</option>
                      <option value="25k-50k">$25,000 - $50,000/month</option>
                      <option value="50k+">$50,000+/month</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Start Free Consultation →
                  </Button>

                  <p className="text-xs text-center text-zinc-500">
                    We focus on established businesses doing $5K+/month
                  </p>
                </form>
              </div>
            </CardContent>
          ) : (
            <>
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="animate-pulse text-sm">●●●</span>
                    <span className="text-sm text-zinc-500">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={messageCount >= MESSAGE_LIMIT ? "Message limit reached" : "Ask about the Founding Client Program..."}
                disabled={isLoading || messageCount >= MESSAGE_LIMIT}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim() || messageCount >= MESSAGE_LIMIT}
                size="icon"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </div>
            <p className="text-xs text-zinc-500 mt-2 text-center">
              {messageCount}/{MESSAGE_LIMIT} messages used
            </p>
          </form>
          </>
          )}
        </Card>
      )}
    </>
  );
}
