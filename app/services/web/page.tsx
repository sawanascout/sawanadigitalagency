import Link from 'next/link'

export default function WebService() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <img src="/images/web.jpg" alt="Développement Web" className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-4">Développement Web</h1>
        <p className="text-gray-600 mb-6">
          Nous concevons et développons des sites web modernes, rapides et sécurisés adaptés à vos besoins.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Sites vitrines professionnels</li>
          <li>Plateformes web (SaaS, marketplace, dashboards)</li>
          <li>Applications web avec React / Next.js</li>
          <li>Optimisation SEO & performance</li>
          <li>Maintenance et évolution</li>
        </ul>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/" className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Retour à l'accueil
          </Link>

          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Demander un devis
          </Link>
        </div>
      </div>
    </main>
  )
}
