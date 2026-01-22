"use client"

import { useRef, useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const contactForm = useRef<HTMLFormElement>(null)
  const accompagnementForm = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)
  const [sentContact, setSentContact] = useState(false)
  const [sentAccompagnement, setSentAccompagnement] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent,
    formRef: React.RefObject<HTMLFormElement | null>,
    setSent: (v: boolean) => void,
    type: "contact" | "accompagnement"
  ) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)

    // Normalisation des données
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())
    for (let key in data) {
      data[key] = data[key] ? String(data[key]).trim() : ""
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      })

      if (res.ok) {
        setSent(true)
        formRef.current.reset()
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (err) {
      console.error(err)
      alert("Erreur serveur. Veuillez réessayer plus tard.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-20 bg-linear-to-br from-gray-50 to-gray-100">

      {/* HEADER */}
      <header className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Discutons de votre projet 🚀
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Notre équipe vous répond sous <strong>24h</strong> avec une solution adaptée.
        </p>
      </header>

      {/* FORMULAIRES */}
      <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">

        {/* FORMULAIRE CONTACT */}
        <section className="p-8 bg-white border shadow-xl rounded-2xl">
          {!sentContact ? (
            <>
              <h2 className="mb-2 text-2xl font-semibold text-blue-600">Nous contacter</h2>
              <p className="mb-6 text-gray-500">Une question ? Un partenariat ? Parlons-en.</p>

              <form
                ref={contactForm}
                onSubmit={(e) => handleSubmit(e, contactForm, setSentContact, "contact")}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet"
                  required
                  className="w-full p-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Adresse email"
                  required
                  className="w-full p-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={5}
                  required
                  className="w-full p-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? "Envoi en cours..." : "Parler à un expert"}
                </button>

                <p className="text-xs text-center text-gray-400">
                  🔒 Vos informations restent confidentielles
                </p>
              </form>
            </>
          ) : (
            <p className="font-medium text-center text-green-600">
              ✅ Message envoyé avec succès
            </p>
          )}
        </section>

        {/* FORMULAIRE ACCOMPAGNEMENT */}
        <section className="p-8 text-white bg-gray-900 shadow-xl rounded-2xl">
          {!sentAccompagnement ? (
            <>
              <h2 className="mb-2 text-2xl font-semibold">Démarrer votre accompagnement</h2>
              <p className="mb-6 text-gray-300">Recevez un plan personnalisé selon votre objectif.</p>

              <form
                ref={accompagnementForm}
                onSubmit={(e) => handleSubmit(e, accompagnementForm, setSentAccompagnement, "accompagnement")}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet"
                  required
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Adresse email"
                  required
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg"
                />
                <select
                  name="objectif"
                  required
                  className="w-full p-4 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg"
                >
                  <option value="">Votre objectif</option>
                  <option value="Lancer un projet digital">Lancer un projet digital</option>
                  <option value="Se former au numérique">Se former au numérique</option>
                  <option value="Améliorer un produit existant">Améliorer un produit existant</option>
                  <option value="Accompagnement complet">Accompagnement complet</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Décrivez brièvement votre projet"
                  rows={4}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 font-semibold transition bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? "Analyse en cours..." : "Recevoir mon plan 🚀"}
                </button>

                <p className="text-xs text-center text-gray-400">
                  📞 Réponse sous 24h – Sans engagement
                </p>
              </form>
            </>
          ) : (
            <p className="font-medium text-center text-green-400">
              🎉 Merci ! Nous revenons vers vous très vite.
            </p>
          )}
        </section>

      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          ← Retour à l’accueil
        </Link>
      </div>

    </main>
  )
}
