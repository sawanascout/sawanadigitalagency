"use client"

import { useRef, useState } from "react"
import Link from "next/link"

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

export default function ContactPage() {
  const contactForm = useRef<HTMLFormElement>(null)
  const accompagnementForm = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)
  const [sentContact, setSentContact] = useState(false)
  const [sentAccompagnement, setSentAccompagnement] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const validateForm = (formRef: React.RefObject<HTMLFormElement | null>): boolean => {
    if (!formRef.current) return false

    const formData = new FormData(formRef.current)
    const errors: Record<string, string> = {}

    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const message = String(formData.get("message") || "").trim()

    if (!name) errors.name = "Le nom est obligatoire"
    if (!email) {
      errors.email = "L'email est obligatoire"
    } else if (!validateEmail(email)) {
      errors.email = "Adresse email invalide"
    }
    if (!message) errors.message = "Le message est obligatoire"

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (
    e: React.FormEvent,
    formRef: React.RefObject<HTMLFormElement | null>,
    setSent: (v: boolean) => void,
    type: "contact" | "accompagnement"
  ) => {
    e.preventDefault()
    if (!formRef.current) return

    if (!validateForm(formRef)) return

    setLoading(true)
    setError(null)

    const formData = new FormData(formRef.current)
    const data: Record<string, string> = {}

    for (const [key, value] of formData.entries()) {
      data[key] = value ? String(value).trim() : ""
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      })

      const responseData = await res.json()

      if (res.ok) {
        setSent(true)
        formRef.current.reset()
        setFieldErrors({})
      } else {
        setError(responseData.error || "Une erreur est survenue.")
      }
    } catch (err) {
      console.error(err)
      setError("Erreur de connexion. Veuillez réessayer.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text md:text-6xl">
          Discutons de votre projet
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-xl text-slate-600">
          Notre équipe vous répond sous 24h avec une solution adaptée à vos besoins.
        </p>
        <div className="w-20 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
      </section>

      {/* FORMULAIRES */}
      <div className="grid max-w-5xl grid-cols-1 gap-10 mx-auto mb-16 lg:grid-cols-2">

        {/* CONTACT */}
        <section className="p-10 bg-white border shadow-2xl rounded-3xl border-slate-100">
          {!sentContact ? (
            <>
              <h2 className="mb-4 text-3xl font-bold text-blue-600">
                Nous contacter
              </h2>

              {error && (
                <div className="p-4 mb-6 text-red-700 bg-red-100 border border-red-300 rounded-xl">
                  {error}
                </div>
              )}

              <form
                ref={contactForm}
                onSubmit={(e) => handleSubmit(e, contactForm, setSentContact, "contact")}
                className="space-y-5"
              >
                <div>
                  <label className="block mb-2 text-sm font-semibold">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-5 py-3 border-2 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold">Adresse email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 border-2 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-5 py-3 border-2 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center">
              <p className="text-xl font-bold text-green-600">
                Message envoyé avec succès.
              </p>
              <p className="mt-2 text-slate-600">
                Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
          )}
        </section>

        {/* ACCOMPAGNEMENT */}
        <section className="p-10 text-white shadow-2xl bg-slate-900 rounded-3xl">
          {!sentAccompagnement ? (
            <>
              <h2 className="mb-4 text-3xl font-bold">
                Démarrer votre accompagnement
              </h2>

              <form
                ref={accompagnementForm}
                onSubmit={(e) => handleSubmit(e, accompagnementForm, setSentAccompagnement, "accompagnement")}
                className="space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet"
                  required
                  className="w-full px-5 py-3 border bg-slate-800 border-slate-700 rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Adresse email"
                  required
                  className="w-full px-5 py-3 border bg-slate-800 border-slate-700 rounded-xl"
                />

                <select
                  name="objectif"
                  required
                  className="w-full px-5 py-3 border bg-slate-800 border-slate-700 rounded-xl"
                >
                  <option value="">Sélectionnez un objectif</option>
                  <option value="Lancer un projet digital">Lancer un projet digital</option>
                  <option value="Se former au numérique">Se former au numérique</option>
                  <option value="Améliorer un produit existant">Améliorer un produit existant</option>
                  <option value="Accompagnement complet">Accompagnement complet</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Décrivez votre projet"
                  rows={5}
                  className="w-full px-5 py-3 border bg-slate-800 border-slate-700 rounded-xl"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 font-bold bg-green-600 rounded-xl hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? "Analyse en cours..." : "Recevoir mon plan"}
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center">
              <p className="text-xl font-bold text-green-400">
                Votre demande a bien été envoyée.
              </p>
            </div>
          )}
        </section>

      </div>

      {/* FAQ */}
      <section className="max-w-3xl px-8 py-10 mx-auto mt-20 mb-16 bg-white border shadow-lg rounded-2xl border-slate-100">
        <h3 className="mb-6 text-2xl font-bold text-center">
          Questions fréquentes
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">Que se passe-t-il après ?</p>
            <p className="mt-1 text-sm text-slate-600">
              Nous examinons votre demande et vous contactons sous 24h.
            </p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">Est-ce payant ?</p>
            <p className="mt-1 text-sm text-slate-600">
              Le premier échange est gratuit. Les tarifs dépendent du projet.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-10 text-center">
        <Link
          href="/"
          className="inline-block px-8 py-3 font-semibold text-blue-600 transition rounded-lg hover:text-blue-800 hover:bg-blue-50"
        >
          Retour à l’accueil
        </Link>
      </div>

    </main>
  )
}