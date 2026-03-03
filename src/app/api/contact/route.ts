import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  contact: {
    name: string;
    email: string;
    company: string;
    role: string;
  };
  answers: Record<string, string | string[]>;
  score: number;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildHtml({ contact, answers, score }: ContactPayload) {
  const answerRows = Object.entries(answers)
    .map(
      ([key, value]) =>
        `<tr>
          <td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600">${key}</td>
          <td style="padding:8px 12px;border:1px solid #e2e8f0">${Array.isArray(value) ? value.join(", ") : value}</td>
        </tr>`
    )
    .join("");

  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a202c">
    <h2 style="color:#0ea5e9">New Lead — WXCode Landing Page</h2>

    <h3 style="margin-top:24px">Contact</h3>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
      <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600">Name</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${contact.name}</td></tr>
      <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600">Email</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${contact.email}</td></tr>
      <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600">Company</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${contact.company}</td></tr>
      <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600">Role</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${contact.role}</td></tr>
    </table>

    <h3>Questionnaire Answers</h3>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
      ${answerRows}
    </table>

    <h3>Lead Score</h3>
    <p style="font-size:28px;font-weight:700;color:#0ea5e9;margin:4px 0">${score}</p>
  </div>`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `[WXCode Lead] ${body.contact.name} — ${body.contact.company} (score ${body.score})`,
      html: buildHtml(body),
      replyTo: body.contact.email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
