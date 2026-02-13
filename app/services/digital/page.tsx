import Link from 'next/link'

export default function DigitalService() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <img src="/images/digital.jpg" alt="Solutions Digitales" className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-4">Solutions Digitales</h1>
        <p className="text-gray-600 mb-6">
          Nous aidons les entreprises à se digitaliser et automatiser leurs processus.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Outils métiers sur mesure</li>
          <li>Automatisation des tâches</li>
          <li>Intégration de services externes</li>
          <li>Conseil et accompagnement digital</li>
        </ul>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/" className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Retour à l'accueil
          </Link>

          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  )
}
