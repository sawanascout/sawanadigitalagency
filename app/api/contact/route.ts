import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, formation, type } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const subject =
      type === "inscription"
        ? "📩 Nouvelle inscription à une formation"
        : "📩 Nouveau message de contact"

    const html = `
      <h2>${subject}</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${formation ? `<p><strong>Formation :</strong> ${formation}</p>` : ""}
      ${message ? `<p><strong>Message :</strong><br/>${message}</p>` : ""}
    `

    await transporter.sendMail({
      from: `"Site Web" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: email,
      subject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur email :", error)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}
