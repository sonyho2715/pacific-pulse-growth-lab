import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, preferredDate, message } = body;

    // Validate required fields
    if (!name || !email || !service || !preferredDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create booking in database
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        service,
        preferredDate: new Date(preferredDate),
        message: message || null,
        status: "pending",
      },
    });

    // Send email notifications
    const { sendBookingConfirmation } = await import("@/lib/email");

    await sendBookingConfirmation({
      name,
      email,
      service,
      preferredDate: new Date(preferredDate),
    });

    // TODO: Integrate with calendar API (e.g., Google Calendar, Calendly)

    return NextResponse.json(
      { message: "Booking submitted successfully", id: booking.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting booking:", error);
    return NextResponse.json(
      { error: "Failed to submit booking" },
      { status: 500 }
    );
  }
}
