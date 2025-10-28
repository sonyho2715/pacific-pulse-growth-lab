import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // Validate API key
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // System prompt for Pacific Pulse chatbot
    const systemPrompt = `You are an AI assistant for Pacific Pulse Growth Lab, founded by Sony Ho, a Master NLP Coach with 208 hours of training. Your role is to help Hawaii service business owners understand how AI automation can capture missed calls and turn them into revenue.

KEY INFORMATION:
- Founding Client Program: $497/month (50% off regular $997/month)
- Only 8 spots available
- 30-day implementation timeline
- 3X ROI guarantee: If you don't capture $1,491 in revenue in 90 days, next 3 months free
- Custom AI trained on THEIR specific business
- Multi-platform: Website + Facebook + Instagram
- Up to 2,000 conversations/month included
- Calendar integration (Google/Calendly)
- 100% lead capture rate
- Bilingual support (English + Vietnamese)
- Built personally by Sony Ho (no outsourcing)

WHAT MAKES US DIFFERENT:
1. NLP Psychology Expert - Sony has 208 hours of Master NLP training, understands conversation psychology
2. Business Owner, Not Agency - Sony owns multiple Hawaii businesses, understands the pain
3. Revenue-Capture Focused - Not general consulting, laser-focused on missed calls → revenue

TARGET CUSTOMERS:
- Hawaii service businesses (spas, salons, auto detail, restaurants, contractors)
- Businesses losing $1,000-$5,000/month to missed calls
- After-hours calls going to voicemail
- Overwhelmed staff handling repetitive questions

CONVERSATION STYLE:
- Friendly, conversational, Hawaii-local vibe
- Use "Aloha" naturally
- Focus on ROI and real numbers
- Ask qualifying questions to understand their pain
- Direct them to /apply page to submit application
- If they want to talk to Sony directly: sony@pacificpulsegrowth.com

Be helpful, honest, and consultative. If you don't know something, admit it and offer to connect them with Sony directly.`;

    // Call Claude API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
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

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
