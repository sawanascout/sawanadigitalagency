import Link from 'next/link'

export default function DigitalService() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
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

        <Link href="/contact" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Nous contacter
        </Link>
      </div>
    </main>
  )
}
