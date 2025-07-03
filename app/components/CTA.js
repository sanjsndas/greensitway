import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <div className="relative bg-green-800">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover opacity-30"
          src="/images/garden-7.jpg"
          alt="Garden pathway"
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-green-100">
            Whether you're dreaming of a tranquil retreat, a vibrant flower garden, or sustainable landscaping, 
            our team is ready to bring your vision to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-green-700 shadow-sm hover:bg-green-50 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="rounded-md px-6 py-3 text-lg font-semibold text-white hover:text-green-200 transition-colors duration-200 border border-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}