import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col w-full">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[90vh] flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="Sawana Digital Agency"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black/65">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Accélérez votre réussite digitale
          </h1>

          <p className="max-w-3xl mb-10 text-base text-gray-200 md:text-lg">
            Sawana Digital Agency accompagne entreprises, startups et particuliers
            dans la création de solutions digitales modernes, performantes et évolutives.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Parler à un expert
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
            >
              Démarrer mon accompagnement 
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            ✔ Réponse sous 24h • ✔ Sans engagement
          </p>
        </div>
      </section>

      {/* ================= A PROPOS ================= */}
      <section className="px-6 py-24 bg-white">
        <div className="grid items-center max-w-6xl mx-auto md:grid-cols-2 gap-14">

          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Une agence digitale orientée résultats
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Sawana Digital Agency conçoit et développe des solutions numériques
              adaptées à vos besoins. Notre mission est simple :
              <strong> transformer vos idées en produits digitaux efficaces</strong>.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>✅ Accompagnement personnalisé</li>
              <li>✅ Technologies modernes</li>
              <li>✅ Support humain et réactif</li>
            </ul>
          </div>

          <div className="relative overflow-hidden shadow-xl h-80 rounded-2xl">
            <Image
              src="/images/about.jpg"
              alt="À propos Sawana Digital Agency"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl">
            Nos expertises
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

            {/* WEB */}
            <Link href="/services/web">
              <div className="overflow-hidden transition bg-white shadow-md cursor-pointer rounded-2xl hover:shadow-2xl">
                <div className="relative h-52">
                  <Image
                    src="/images/web.jpg"
                    alt="Développement Web"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="mb-3 text-xl font-semibold">
                    Développement Web
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sites vitrines, plateformes web et applications performantes,
                    conçues pour évoluer avec votre activité.
                  </p>
                </div>
              </div>
            </Link>

            {/* MOBILE */}
            <Link href="/services/mobile">
              <div className="overflow-hidden transition bg-white shadow-md cursor-pointer rounded-2xl hover:shadow-2xl">
                <div className="relative h-52">
                  <Image
                    src="/images/mobile.jpg"
                    alt="Applications Mobiles"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="mb-3 text-xl font-semibold">
                    Applications Mobiles
                  </h3>
                  <p className="text-sm text-gray-600">
                    Applications Android et multiplateformes,
                    fluides, intuitives et sécurisées.
                  </p>
                </div>
              </div>
            </Link>

            {/* DIGITAL */}
            <Link href="/services/digital">
              <div className="overflow-hidden transition bg-white shadow-md cursor-pointer rounded-2xl hover:shadow-2xl">
                <div className="relative h-52">
                  <Image
                    src="/images/digital.jpg"
                    alt="Solutions Digitales"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="mb-3 text-xl font-semibold">
                    Solutions Digitales
                  </h3>
                  <p className="text-sm text-gray-600">
                    Automatisation, outils métiers et solutions sur mesure
                    pour optimiser votre productivité.
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="px-6 py-24 text-center text-white bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Prêt à lancer votre projet ?
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-300">
          Expliquez-nous votre besoin et recevez un plan d’accompagnement personnalisé.
        </p>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 font-semibold transition bg-green-600 rounded-lg hover:bg-green-700"
        >
          Recevoir mon plan 
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-sm text-center text-gray-400 bg-black">
        <p>© {new Date().getFullYear()} Sawana Digital Agency</p>
        <p className="mt-2">Innovation digitale au service de vos projets</p>
      </footer>

    </main>
  )
}
