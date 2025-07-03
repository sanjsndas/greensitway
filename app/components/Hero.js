'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative bg-green-800 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover opacity-40"
          src="/images/garden-1.jpg"
          alt="Lush garden"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Cultivating Beauty, <span className="text-green-200">Nurturing Nature</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-green-100 max-w-3xl">
            At GreenShire, we believe every outdoor space holds potential for transformation. 
            Our expert team combines horticultural expertise with artistic vision to create 
            sustainable, breathtaking landscapes that thrive in every season.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-green-700 shadow-sm hover:bg-green-50 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2 border border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}