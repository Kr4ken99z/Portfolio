import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Server-side Sanitization
    const cleanName = String(name).trim().slice(0, 100);
    const cleanEmail = String(email).trim().toLowerCase().slice(0, 150);
    const cleanSubject = String(subject || "New Portfolio Inquiry").trim().slice(0, 200);
    const cleanMessage = String(message).trim().slice(0, 3000);

    console.log("[Backend API /api/contact] Received message:", {
      from: `${cleanName} <${cleanEmail}>`,
      subject: cleanSubject,
      timestamp: new Date().toISOString(),
    });

    // If EmailJS server keys are configured, send via EmailJS REST API
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const emailjsRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: cleanName,
              from_email: cleanEmail,
              subject: cleanSubject,
              message: cleanMessage,
              to_email: "koustavmondal9641@gmail.com",
            },
          }),
        });

        if (!emailjsRes.ok) {
          const errText = await emailjsRes.text();
          console.warn("[Backend API] EmailJS API returned:", errText);
        } else {
          console.log("[Backend API] Email dispatched successfully via EmailJS REST API.");
        }
      } catch (emailErr) {
        console.error("[Backend API] Failed forwarding to EmailJS:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully! Koustav will get back to you soon.",
        data: {
          name: cleanName,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Backend API Error]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "Koustav Portfolio Contact API",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
