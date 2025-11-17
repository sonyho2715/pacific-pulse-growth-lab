import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Pacific Pulse AI <noreply@pacificpulseai.com>";
const ADMIN_EMAIL = "sony@pacificpulseai.com";

export async function sendApplicationConfirmation(data: {
  name: string;
  email: string;
  businessName: string;
}) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Application Received - Pacific Pulse AI",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Thank You for Your Application!</h1>
          <p>Hi ${data.name},</p>
          <p>We've received your application for <strong>${data.businessName}</strong> and are excited to learn more about your business.</p>
          <p>Our team will review your submission and get back to you within 24-48 hours.</p>
          <p>In the meantime, feel free to reach out if you have any questions.</p>
          <p>Best regards,<br>
          Sony Ho<br>
          Founder, Pacific Pulse AI</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send application confirmation:", error);
  }
}

export async function sendAdminApplicationNotification(data: {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  applicationId: string;
}) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Application: ${data.businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">New Application Received</h1>
          <p><strong>Business:</strong> ${data.businessName}</p>
          <p><strong>Contact:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Business Type:</strong> ${data.businessType}</p>
          <p style="margin-top: 20px;">
            <a href="https://pacificpulseai.com/admin/applications/${data.applicationId}"
               style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
              View Application
            </a>
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send admin notification:", error);
  }
}

export async function sendContactConfirmation(data: {
  name: string;
  email: string;
}) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Message Received - Pacific Pulse AI",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Thank You for Reaching Out!</h1>
          <p>Hi ${data.name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p>Typically, we respond within 24 hours during business days.</p>
          <p>Best regards,<br>
          Pacific Pulse AI Team</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact confirmation:", error);
  }
}

export async function sendBookingConfirmation(data: {
  name: string;
  email: string;
  service: string;
  preferredDate: Date;
}) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Booking Request Received - Pacific Pulse AI",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Booking Request Received!</h1>
          <p>Hi ${data.name},</p>
          <p>We've received your booking request for <strong>${data.service}</strong>.</p>
          <p><strong>Preferred Date:</strong> ${data.preferredDate.toLocaleDateString()}</p>
          <p>We'll confirm your booking shortly and send you a calendar invite.</p>
          <p>Best regards,<br>
          Pacific Pulse AI Team</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send booking confirmation:", error);
  }
}
