export default function LegalPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="legal-content bg-white p-8 rounded-lg shadow-md">
          <h1 className="section-title">Legal Information</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-4 text-green-700">Privacy Policy</h2>
              <p className="mb-4">Learn how we collect, use, and protect your personal information.</p>
              <a href="/legal/privacy" className="btn">Read Policy</a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-4 text-green-700">Terms of Service</h2>
              <p className="mb-4">Understand the terms governing your use of our website and services.</p>
              <a href="/legal/terms" className="btn">Read Terms</a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-4 text-green-700">Cookie Policy</h2>
              <p className="mb-4">Discover how we use cookies to enhance your browsing experience.</p>
              <a href="/legal/cookies" className="btn">Read Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}