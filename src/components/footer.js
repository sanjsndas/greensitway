import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🌿</span> Grinset Way
            </h3>
            <p className="mb-4">Cultivating beauty and sustainability in every garden we touch.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">Facebook</a>
              <a href="#" className="hover:text-green-400">Instagram</a>
              <a href="#" className="hover:text-green-400">Pinterest</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-400">About</Link></li>
              <li><Link href="/services" className="hover:text-green-400">Services</Link></li>
              <li><Link href="/blog" className="hover:text-green-400">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/legal/privacy" className="hover:text-green-400">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-green-400">Terms of Service</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-green-400">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic">
              <p>123 Green Valley Road</p>
              <p>Garden City, GC 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: hello@grinsetway.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Grinset Way. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}