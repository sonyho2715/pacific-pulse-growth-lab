import { NextRequest, NextResponse } from "next/server";
import { appendToGoogleSheet } from "@/lib/google-sheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, monthlyRevenue, qualified, industry } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessType || !monthlyRevenue) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log to Google Sheets
    const result = await appendToGoogleSheet({
      name,
      email,
      phone,
      businessType,
      monthlyRevenue,
      qualified: qualified === true || qualified === "true",
      industry: industry || "general",
    });

    if (result.success) {
      return NextResponse.json(
        { message: "Logged to Google Sheets successfully", data: result.response },
        { status: 200 }
      );
    } else {
      // Don't fail the request if Google Sheets fails - just log it
      console.error("Google Sheets logging failed:", result.error);
      return NextResponse.json(
        { message: "Logged but Google Sheets unavailable", error: result.error },
        { status: 200 } // Still return 200 so the chatbot doesn't break
      );
    }

  } catch (error) {
    console.error("Error in sheets-log API:", error);
    return NextResponse.json(
      { error: "Failed to log to sheets" },
      { status: 500 }
    );
  }
}
