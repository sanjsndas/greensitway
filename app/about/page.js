import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-800">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover opacity-40"
            src="/images/garden-8.jpg"
            alt="Garden team working"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-6 sm:py-32 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl leading-8 text-green-100 max-w-3xl mx-auto">
            From humble beginnings to becoming a leader in sustainable landscaping
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Rooted in Passion</h2>
          <p className="mb-6">
            GreenShire was founded in 2010 by horticulture expert Emma Richardson with a simple mission: 
            to create beautiful, sustainable outdoor spaces that enrich people's lives and benefit the environment. 
            What began as a one-person operation has grown into a team of 25 dedicated professionals, 
            but our core values remain unchanged.
          </p>
          
          <h2 className="text-2xl font-bold text-green-800 mt-12 mb-6">Our Approach</h2>
          <p className="mb-6">
            We believe exceptional garden design begins with understanding. Our process starts by 
            listening carefully to your vision, then assessing your space's unique characteristics - 
            sunlight patterns, soil composition, microclimates, and existing ecosystems. Only then 
            do we begin crafting a design that harmonizes with nature while fulfilling your aesthetic 
            and functional needs.
          </p>
          
          <div className="my-12 rounded-xl overflow-hidden">
            <Image
              src="/images/garden-2.jpg"
              alt="Team working in garden"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-green-800 mt-12 mb-6">Sustainability Commitment</h2>
          <p className="mb-6">
            At GreenShire, sustainability isn't just a buzzword - it's the foundation of everything we do. 
            We prioritize native plants that support local wildlife, implement water-wise irrigation systems, 
            and use organic maintenance practices. Our designs aim to create self-sustaining ecosystems 
            that grow more beautiful with time while requiring fewer resources.
          </p>
          
          <h2 className="text-2xl font-bold text-green-800 mt-12 mb-6">Meet Our Team</h2>
          <p className="mb-6">
            Our diverse team brings together experts in horticulture, landscape architecture, 
            environmental science, and garden maintenance. What unites us is a shared passion 
            for plants and a commitment to excellence. We continuously educate ourselves on the 
            latest sustainable practices and innovative design techniques to serve you better.
          </p>
          
          <h2 className="text-2xl font-bold text-green-800 mt-12 mb-6">Community Roots</h2>
          <p className="mb-6">
            Beyond our client work, we're proud to contribute to our community through educational 
            workshops, school garden programs, and partnerships with local conservation organizations. 
            We believe beautiful gardens should be accessible to everyone, which is why we dedicate 
            a portion of our profits to creating public green spaces in underserved neighborhoods.
          </p>
          
          <div className="bg-green-50 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Why Choose GreenShire?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>15+ years of combined horticultural experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Certified sustainable landscaping practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>100+ successful projects completed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Personalized approach to every project</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Comprehensive maintenance programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}