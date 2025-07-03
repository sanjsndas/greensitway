import Image from 'next/image'

const features = [
  {
    name: 'Sustainable Landscaping',
    description:
      'Eco-friendly designs that reduce water consumption and promote biodiversity while maintaining stunning visual appeal.',
    image: '/images/garden-2.jpg',
  },
  {
    name: 'Seasonal Maintenance',
    description:
      'Year-round care programs tailored to your garden\'s specific needs, ensuring vitality through all seasons.',
    image: '/images/garden-3.jpg',
  },
  {
    name: 'Custom Garden Design',
    description:
      'Personalized garden plans that reflect your style while considering sunlight, soil conditions, and climate.',
    image: '/images/garden-4.jpg',
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
            Our Gardening Philosophy
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We approach each project with a blend of scientific knowledge and artistic vision, 
            creating spaces that are as functional as they are beautiful.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="aspect-h-1 aspect-w-2 h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  width={600}
                  height={400}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                <p className="mt-2 text-green-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}