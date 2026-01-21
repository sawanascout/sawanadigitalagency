"use client"

import { useRef, useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const contactForm = useRef<HTMLFormElement>(null)
  const inscriptionForm = useRef<HTMLFormElement>(null)

  const [sentContact, setSentContact] = useState(false)
  const [sentInscription, setSentInscription] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent,
    formRef: React.RefObject<HTMLFormElement>,
    setSent: (val: boolean) => void
  ) => {
    e.preventDefault()
    if (!formRef.current) return

    const data = new FormData(formRef.current)

    try {
      const response = await fetch("https://formspree.io/f/xqeewqqk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setSent(true)
      } else {
        alert("Erreur lors de l'envoi, veuillez réessayer.")
      }
    } catch (error) {
      alert("Erreur lors de l'envoi, veuillez réessayer.")
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center space-y-16">

      {/* ================= HEADER ================= */}
      <header className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-600">
          Contact & Inscription
        </h1>
        <p className="text-gray-600">
          Vous pouvez nous envoyer un message ou vous inscrire à une formation
        </p>
      </header>

      {/* ================= BOUTON RETOUR ================= */}
      <Link
        href="/"
        className="self-start mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        ← Retour à l'accueil
      </Link>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">

        {/* ================= FORMULAIRE CONTACT ================= */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-8 space-y-6">
          {!sentContact ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
                Nous contacter
              </h2>
              <form
                ref={contactForm}
                onSubmit={(e) => handleSubmit(e, contactForm, setSentContact)}
                className="flex flex-col space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  required
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  required
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={5}
                  required
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Envoyer le message
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Merci 🙏</h2>
              <p className="text-gray-600">
                Votre message a bien été envoyé. Nous vous répondrons très bientôt.
              </p>
            </div>
          )}
        </div>

        {/* ================= FORMULAIRE INSCRIPTION ================= */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-8 space-y-6">
          {!sentInscription ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-4 text-green-600">
                S'inscrire à une formation
              </h2>
              <form
                ref={inscriptionForm}
                onSubmit={(e) => handleSubmit(e, inscriptionForm, setSentInscription)}
                className="flex flex-col space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet"
                  required
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <select
                  name="formation"
                  required
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Sélectionnez la formation</option>
                  <option value="Développement Web">Développement Web</option>
                  <option value="Applications Mobiles">Applications Mobiles</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Marketing Digital">Marketing Digital</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  S'inscrire
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Merci 🙏</h2>
              <p className="text-green-600">
                Votre inscription a bien été envoyée. Nous vous contacterons bientôt.
              </p>
            </div>
          )}
        </div>

      </div>
    </main>
  )
}
