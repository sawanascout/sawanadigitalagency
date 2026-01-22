import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, objectif, type } = body

    console.log("🔍 Variables d'env disponibles:", {
      SMTP_USER: process.env.SMTP_USER ? "✓ défini" : "✗ manquant",
      SMTP_PASS: process.env.SMTP_PASS ? "✓ défini" : "✗ manquant",
      MAIL_TO: process.env.MAIL_TO ? "✓ défini" : "✗ manquant",
    })

    // Validation
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Nom et email sont obligatoires" },
        { status: 400 }
      )
    }

    // Vérification des variables d'environnement
    const smtpUser = process.env.SMTP_USER?.trim()
    const smtpPass = process.env.SMTP_PASS?.trim()

    if (!smtpUser || !smtpPass) {
      console.error("❌ Variables SMTP manquantes ou vides", {
        smtpUser: smtpUser ? "ok" : "manquant",
        smtpPass: smtpPass ? "ok" : "manquant",
      })
      return NextResponse.json(
        { error: "Service de messagerie non configuré sur le serveur" },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Test de connexion
    console.log("📧 Test de connexion au serveur SMTP...")
    await transporter.verify()
    console.log("✓ Connexion SMTP réussie")

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

    console.log("📤 Envoi de l'email...")
    await transporter.sendMail({
      from: `"Site Web SDA" <${smtpUser}>`,
      to: process.env.MAIL_TO?.trim() || smtpUser,
      replyTo: email,
      subject,
      html,
    })

    console.log("✓ Email envoyé avec succès")
    return NextResponse.json({ success: true, message: "Email envoyé avec succès" })
  } catch (error) {
    console.error("❌ Erreur email :", error)
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue"
    return NextResponse.json(
      { error: `Erreur lors de l'envoi: ${errorMessage}` },
      { status: 500 }
    )
  }
}
