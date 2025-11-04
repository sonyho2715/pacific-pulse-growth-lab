import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { chatRateLimiter, getClientIdentifier } from "@/lib/rate-limit";
import { getIndustrySystemPrompt } from "@/lib/industry-prompts";

export async function POST(request: NextRequest) {
  // Rate limiting check
  const identifier = getClientIdentifier(request);
  const rateLimit = await chatRateLimiter.check(identifier);

  if (!rateLimit.success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before sending another message." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": "10",
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": new Date(rateLimit.reset).toISOString(),
        }
      }
    );
  }

  try {
    const { messages, leadId, sessionId, industry = "general" } = await request.json();

    // Validate API key
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Get industry-specific system prompt
    const systemPrompt = getIndustrySystemPrompt(industry);

    // Call Claude API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages.map((msg: { role: string; content: string }) => ({
          role: msg.role === "assistant" ? "assistant" : "user",
          content: msg.content,
        })),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Claude API error:", error);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const assistantMessage = data.content[0].text;

    // Log chat messages to Supabase for analytics
    if (leadId && sessionId) {
      try {
        // Get the latest user message
        const userMessage = messages[messages.length - 1];
        const messageNumber = messages.length;

        // Log user message
        await supabaseAdmin.from("chat_messages").insert({
          lead_id: leadId,
          session_id: sessionId,
          role: "user",
          content: userMessage.content,
          message_number: messageNumber,
        });

        // Log assistant response
        await supabaseAdmin.from("chat_messages").insert({
          lead_id: leadId,
          session_id: sessionId,
          role: "assistant",
          content: assistantMessage,
          message_number: messageNumber + 1,
        });

        // Update session with latest activity and message count
        await supabaseAdmin
          .from("chat_sessions")
          .update({
            total_messages: messageNumber + 1,
            last_activity: new Date().toISOString(),
          })
          .eq("id", sessionId);
      } catch (dbError) {
        // Log error but don't fail the request
        console.error("Failed to log to Supabase:", dbError);
      }
    }

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
