'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700 flex items-center">
          <span className="mr-2">🌿</span> Grinset Way
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/about" className="hover:text-green-600">About</Link>
          <Link href="/services" className="hover:text-green-600">Services</Link>
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          <Link href="/contact" className="hover:text-green-600">Contact</Link>
          <Link href="/legal" className="hover:text-green-600">Legal</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <Link href="/about" className="hover:text-green-600">About</Link>
            <Link href="/services" className="hover:text-green-600">Services</Link>
            <Link href="/blog" className="hover:text-green-600">Blog</Link>
            <Link href="/contact" className="hover:text-green-600">Contact</Link>
            <Link href="/legal" className="hover:text-green-600">Legal</Link>
          </nav>
        </div>
      )}
    </header>
  )
}