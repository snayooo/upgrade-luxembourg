
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validate fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    if (
      name.length > 160 ||
      company.length > 160 ||
      message.length > 8000
    ) {
      return NextResponse.json(
        { error: "Certains champs sont trop longs." },
        { status: 400 }
      );
    }

    // SMTP2GO configuration
    const {
      SMTP2GO_USERNAME,
      SMTP2GO_PASSWORD,
      CONTACT_TO,
    } = process.env;

    if (!SMTP2GO_USERNAME || !SMTP2GO_PASSWORD || !CONTACT_TO) {
      console.error("SMTP2GO environment variables are missing.");

      return NextResponse.json(
        { error: "Service temporairement indisponible." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP2GO_HOST || "mail.smtp2go.com",
      port: Number(process.env.SMTP2GO_PORT || 587),
      secure: Number(process.env.SMTP2GO_PORT || 587) === 465,
      auth: {
        user: SMTP2GO_USERNAME,
        pass: SMTP2GO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: {
        name: "Messagerie Site Upgrade Luxembourg",
        address: "noreply@snayo.net",
      },

      to: CONTACT_TO,

      replyTo: {
        name,
        address: email,
      },

      subject: `Nouveau message depuis le site - ${name}`,

      text: `
Nouveau message depuis le site Upgrade Luxembourg.

Nom : ${name}
E-mail : ${email}
Société : ${company}

Message :
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>Nouveau message - Upgrade Luxembourg</h2>

          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
          <p><strong>Société :</strong> ${escapeHtml(company)}</p>

          <hr />

          <h3>Message</h3>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès.",
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Impossible d'envoyer votre message." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
