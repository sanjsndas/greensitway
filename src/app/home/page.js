import Image from 'next/image'
import PlantCard from '../../components/PlantCard'
import ServiceCard from '../../components/ServiceCard'

export default function Home() {
  const popularPlants = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      type: 'Indoor Plant',
      image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      careLevel: 'Easy'
    },
    {
      id: 2,
      name: 'English Lavender',
      type: 'Outdoor Plant',
      image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      careLevel: 'Medium'
    },
    {
      id: 3,
      name: 'Snake Plant',
      type: 'Indoor Plant',
      image: 'https://images.unsplash.com/photo-1584735422186-97a4c92a9eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      careLevel: 'Very Easy'
    }
  ]

  const services = [
    {
      id: 1,
      title: 'Garden Design',
      description: 'Custom garden designs tailored to your space and preferences by our expert team.',
      icon: '🌿',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Landscaping',
      description: 'Transform your outdoor space with our professional landscaping services.',
      icon: '🪴',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Maintenance',
      description: 'Keep your garden thriving with our regular maintenance programs.',
      icon: '✂️',
      image: 'https://images.unsplash.com/photo-1600566752225-3b01b6a29955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
          alt="Beautiful garden design"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Cultivate Your Perfect Garden</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Grinset Way brings expert gardening solutions to transform your outdoor space</p>
          <div className="flex justify-center space-x-4">
            <a href="/services" className="btn">Our Services</a>
            <a href="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-gray-800">Contact Us</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="section-title">About Grinset Way</h2>
              <p className="mb-4">Founded in 2015, Grinset Way has been helping homeowners create sustainable, beautiful gardens that thrive in harmony with nature.</p>
              <p className="mb-4">Our team combines horticultural expertise with creative design to deliver gardens that are both functional and aesthetically pleasing.</p>
              <a href="/about" className="btn">Our Story</a>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Our gardening team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Plants Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPlants.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Client Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"Grinset Way transformed our neglected backyard into a beautiful retreat. Their attention to detail is remarkable."</p>
              <p className="font-semibold">- Sarah Johnson, Garden City</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"The team's knowledge of native plants helped us create a sustainable garden that thrives with minimal water."</p>
              <p className="font-semibold">- Michael Chen, Green Valley</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"Their maintenance service keeps our garden looking perfect year-round. Worth every penny!"</p>
              <p className="font-semibold">- Emily Rodriguez, Bloomfield</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}