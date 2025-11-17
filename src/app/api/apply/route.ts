import { NextRequest, NextResponse } from "next/server";
import { applyRateLimiter, getClientIdentifier } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  // Rate limiting check
  const identifier = getClientIdentifier(request);
  const rateLimit = await applyRateLimiter.check(identifier);

  if (!rateLimit.success) {
    return NextResponse.json(
      { error: "Too many application submissions. Please try again later." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": "3",
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": new Date(rateLimit.reset).toISOString(),
        }
      }
    );
  }

  try {
    const body = await request.json();
    const {
      businessName,
      yourName,
      phone,
      email,
      businessType,
      businessTypeOther,
      annualRevenue,
      painPoints,
      biggestFrustration,
      whyFoundingClient,
      readyToStart,
    } = body;

    // Validate required fields
    if (!businessName || !yourName || !phone || !email || !businessType || !annualRevenue ||
        !painPoints || !biggestFrustration || !whyFoundingClient || !readyToStart) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Store application in database
    const { prisma } = await import("@/lib/prisma");

    const application = await prisma.application.create({
      data: {
        businessName,
        yourName,
        phone,
        email,
        businessType,
        businessTypeOther: businessType === "other" ? businessTypeOther : null,
        annualRevenue,
        painPoints: Array.isArray(painPoints) ? painPoints : [painPoints],
        biggestFrustration,
        whyFoundingClient,
        readyToStart,
        status: "pending",
      },
    });

    console.log("✅ Founding Client Application saved to database:", application.id);

    // Send email notifications
    const { sendApplicationConfirmation, sendAdminApplicationNotification } = await import("@/lib/email");

    await Promise.all([
      sendApplicationConfirmation({
        name: yourName,
        email,
        businessName,
      }),
      sendAdminApplicationNotification({
        businessName,
        name: yourName,
        email,
        phone,
        businessType,
        applicationId: application.id,
      }),
    ]);

    // TODO: Integrate with CRM (e.g., HubSpot, Pipedrive)

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        applicationId: application.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
