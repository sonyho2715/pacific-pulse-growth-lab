import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create contact submission in database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        company: company || null,
        message,
      },
    });

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to user

    return NextResponse.json(
      { message: "Contact form submitted successfully", id: contact.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
