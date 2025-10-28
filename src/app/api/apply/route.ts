import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
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

    // In production, you would:
    // 1. Store in database
    // 2. Send email notification to you
    // 3. Send confirmation email to applicant
    // 4. Integrate with CRM (e.g., HubSpot, Pipedrive)

    console.log("Founding Client Application:", {
      businessName,
      yourName,
      phone,
      email,
      businessType: businessType === "other" ? businessTypeOther : businessType,
      annualRevenue,
      painPoints,
      biggestFrustration,
      whyFoundingClient,
      readyToStart,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Send email to sony@pacificpulsegrowth.com
    // TODO: Send confirmation email to applicant
    // TODO: Add to CRM/database

    return NextResponse.json(
      { message: "Application submitted successfully" },
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
