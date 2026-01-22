import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, objectif, type } = body

    // Validation
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Nom et email sont obligatoires" },
        { status: 400 }
      )
    }

    // Vérification des variables d'environnement
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Variables SMTP manquantes")
      return NextResponse.json(
        { error: "Service de messagerie non configuré" },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Test de connexion
    await transporter.verify()

    const subject =
      type === "accompagnement"
        ? "📩 Nouvelle demande d'accompagnement"
        : "📩 Nouveau message de contact"

    const html = `
      <h2>${subject}</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${objectif ? `<p><strong>Objectif :</strong> ${objectif}</p>` : ""}
      ${message ? `<p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
    `

    await transporter.sendMail({
      from: `"Site Web SDA" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: email,
      subject,
      html,
    })

    return NextResponse.json({ success: true, message: "Email envoyé avec succès" })
  } catch (error) {
    console.error("Erreur email :", error)
    return NextResponse.json(
      { error: "Impossible d'envoyer le message. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
