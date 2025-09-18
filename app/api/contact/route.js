// app/api/contact/route.js
// Ensures Node runtime (not Edge), which Resend needs
export const runtime = "nodejs";

import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
    }

    const API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO;          // e.g. "inemesitdavid90@gmail.com"
    const FROM = process.env.CONTACT_FROM;      // e.g. "Portfolio <noreply@yourdomain.com>" (must be verified in Resend)

    if (!API_KEY || !TO || !FROM) {
      return new Response(JSON.stringify({ ok: false, error: "Server not configured" }), { status: 500 });
    }

    const resend = new Resend(API_KEY);
    const result = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `New portfolio message from ${name}`,
      reply_to: email,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (result?.error) {
      console.error("Resend error:", result.error);
      return new Response(JSON.stringify({ ok: false, error: "Resend failed" }), { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Send failed" }), { status: 500 });
  }
}
