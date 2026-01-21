import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full flex flex-col">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="SDA Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SDA – Sawana Digital Agency
          </h1>

          <p className="text-gray-200 max-w-2xl mb-8 text-base md:text-lg">
            Agence digitale spécialisée dans le développement web, mobile
            et les solutions numériques modernes.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Nous contacter
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              S’inscrire à une formation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= A PROPOS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">Qui sommes-nous ?</h2>
            <p className="text-gray-600 leading-relaxed">
              SDA est une agence digitale orientée vers l’innovation.
              Nous accompagnons entreprises, startups et particuliers
              dans la création de solutions digitales performantes,
              sécurisées et évolutives.
            </p>
          </div>

          <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/about.jpg"
              alt="À propos SDA"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-14">
            Nos Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* SERVICE 1 */}
            <Link href="/services/web">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src="/images/web.jpg"
                    alt="Développement Web"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Développement Web
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sites vitrines, plateformes web, applications modernes et performantes.
                  </p>
                </div>
              </div>
            </Link>

            {/* SERVICE 2 */}
            <Link href="/services/mobile">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src="/images/mobile.jpg"
                    alt="Applications Mobiles"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Applications Mobiles
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Applications Android et multiplateformes intuitives.
                  </p>
                </div>
              </div>
            </Link>

            {/* SERVICE 3 */}
            <Link href="/services/digital">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src="/images/digital.jpg"
                    alt="Solutions Digitales"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Solutions Digitales
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Automatisation, outils métiers et solutions sur mesure.
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Un projet ? Une formation ?
        </h2>
        <p className="mb-8">
          Contactez-nous dès maintenant et transformons votre idée en réalité.
        </p>

        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Contactez-nous
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} SDA – Sawana Digital Agency</p>
        <p className="mt-2">Innovation digitale au service de vos projets.</p>
      </footer>

    </main>
  )
}
