import Link from 'next/link'

export default function MobileService() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
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

        <Link href="/contact" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Discuter de votre projet
        </Link>
      </div>
    </main>
  )
}
