import Image from 'next/image'

const services = [
  {
    name: 'Garden Design & Installation',
    description:
      'Complete transformation of your outdoor space from concept to completion. Our design process begins with a detailed consultation to understand your vision, followed by a custom plan that considers your space\'s unique characteristics. We handle everything from hardscaping to planting, creating a cohesive outdoor environment tailored to your lifestyle.',
    features: [
      'Custom garden design consultation',
      '3D visualization of proposed designs',
      'Plant selection tailored to your climate',
      'Complete installation services',
      'One-year establishment guarantee'
    ],
    image: '/images/garden-3.jpg'
  },
  {
    name: 'Sustainable Landscaping',
    description:
      'Eco-conscious designs that reduce environmental impact while creating beautiful spaces. We specialize in water-wise gardens, native plant communities, and wildlife-friendly habitats. Our sustainable approach not only benefits the environment but also reduces long-term maintenance needs and costs.',
    features: [
      'Drought-resistant plant selection',
      'Rainwater harvesting systems',
      'Permeable paving solutions',
      'Organic soil preparation',
      'Pollinator-friendly designs'
    ],
    image: '/images/garden-4.jpg'
  },
  {
    name: 'Garden Maintenance',
    description:
      'Comprehensive care programs to keep your garden thriving year-round. Whether you need regular upkeep or seasonal attention, our maintenance services are tailored to your garden\'s specific needs. We use organic practices to promote plant health and soil vitality while maintaining your garden\'s aesthetic appeal.',
    features: [
      'Weekly, bi-weekly, or monthly visits',
      'Seasonal pruning and trimming',
      'Organic fertilization programs',
      'Pest and disease management',
      'Irrigation system maintenance'
    ],
    image: '/images/garden-5.jpg'
  },
  {
    name: 'Specialty Gardens',
    description:
      'Create unique garden spaces with our specialty services. From kitchen gardens to tranquil meditation spaces, we design and install specialized gardens that serve specific purposes while maintaining beauty and functionality.',
    features: [
      'Edible gardens and orchards',
      'Meditation and healing gardens',
      'Cut flower gardens',
      'Butterfly and wildlife gardens',
      'Container garden designs'
    ],
    image: '/images/garden-6.jpg'
  }
]

export default function Services() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-800">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover opacity-40"
            src="/images/garden-1.jpg"
            alt="Garden services"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-6 sm:py-32 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl leading-8 text-green-100 max-w-3xl mx-auto">
            Comprehensive solutions from design to maintenance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Cultivating Excellence</h2>
          <p className="text-lg text-gray-600">
            At GreenShire, we offer a complete range of professional gardening services to meet every need. 
            Whether you're starting from scratch or looking to enhance an existing space, our team brings 
            expertise, creativity, and care to every project.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-green-800">{service.name}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-green-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-green-800">Custom Solutions</h3>
            <p className="mt-4 text-gray-600">
              Don't see exactly what you're looking for? We specialize in creating custom service 
              packages tailored to your specific requirements. Contact us to discuss your unique 
              gardening needs and we'll develop a solution that's perfect for your space.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-600 transition-colors duration-200"
              >
                Get a Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}