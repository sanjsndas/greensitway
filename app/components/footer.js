import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ]

  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">GreenShire</h2>
            <p className="mt-4 text-green-200">
              Transforming outdoor spaces into living works of art since 2010.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-green-300" />
                <span className="ml-3">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-green-300" />
                <span className="ml-3">info@greenshire.com</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-green-300" />
                <span className="ml-3">123 Garden Lane, Greenville</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-green-200 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-green-800 pt-8">
          <p className="text-center text-sm text-green-300">
            &copy; {new Date().getFullYear()} GreenShire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}