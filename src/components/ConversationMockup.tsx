"use client";

import { Card, CardContent } from "@/components/ui/card";

export function ConversationMockup() {
  const messages = [
    { type: "customer", text: "Hi, are you open right now?", time: "2:47 AM" },
    { type: "ai", text: "Aloha! Yes, while our physical location opens at 9 AM, I'm here 24/7 to help you. What can I assist you with today?", time: "2:47 AM" },
    { type: "customer", text: "I need to get my car detailed tomorrow. Do you have any openings?", time: "2:48 AM" },
    { type: "ai", text: "Absolutely! I have several openings tomorrow. What time works best for you - morning, afternoon, or evening?", time: "2:48 AM" },
    { type: "customer", text: "Afternoon would be great", time: "2:49 AM" },
    { type: "ai", text: "Perfect! I have availability at 2:00 PM, 3:30 PM, and 4:45 PM. Which time would you prefer?", time: "2:49 AM" },
    { type: "customer", text: "3:30 works", time: "2:50 AM" },
    { type: "ai", text: "Excellent! I've reserved 3:30 PM for you tomorrow. May I have your name and phone number to confirm the booking?", time: "2:50 AM" },
  ];

  return (
    <Card className="max-w-md mx-auto bg-white dark:bg-zinc-950 shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4 pb-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              AI
            </div>
            <div>
              <p className="font-semibold">Pacific Auto Detail</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Online
              </p>
            </div>
          </div>
          <span className="text-xs text-zinc-400">Live Chat</span>
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.type === "ai" ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[80%] ${msg.type === "ai" ? "order-1" : "order-2"}`}>
                <div
                  className={`rounded-2xl px-4 py-2 ${
                    msg.type === "ai"
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                <p className="text-xs text-zinc-400 mt-1 px-2">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg px-4 py-3 text-sm text-zinc-500 flex items-center gap-2">
            <span className="animate-pulse">●●●</span>
            <span>AI is typing...</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-green-600 font-semibold">✓ Lead Captured at 2:47 AM</p>
          <p className="text-xs text-blue-600 font-semibold">✓ Appointment Booked at 2:50 AM</p>
        </div>
      </CardContent>
    </Card>
  );
}
