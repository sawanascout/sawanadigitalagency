import Link from 'next/link'

export default function MobileService() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <img src="/images/mobile.jpg" alt="Applications Mobiles" className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-4">Applications Mobiles</h1>
        <p className="text-gray-600 mb-6">
          Nous développons des applications mobiles modernes, performantes et intuitives.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Applications Android</li>
          <li>Applications multiplateformes</li>
          <li>Connexion API & backend</li>
          <li>UI/UX fluide et moderne</li>
          <li>Publication et maintenance</li>
        </ul>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/" className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Retour à l'accueil
          </Link>

          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Discuter de votre projet
          </Link>
        </div>
      </div>
    </main>
  )
}
