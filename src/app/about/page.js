import Image from 'next/image'

export default function About() {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4">
        <h1 className="section-title">About Grinset Way</h1>
        
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Grinset Way was founded in 2015 by horticulturist Emma Wilson with a vision to create gardens that blend beauty with sustainability. What began as a small design studio has grown into a full-service gardening company serving residential and commercial clients.
            </p>
            <p className="mb-4">
              Our name "Grinset Way" reflects our philosophy - "Grin" for the joy our gardens bring, and "set" for establishing sustainable practices that endure.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Our founder" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
            <p className="mb-4">
              We believe gardens should be sustainable ecosystems that require minimal intervention while providing maximum enjoyment. Our approach combines:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Native plant selection adapted to local conditions</li>
              <li className="mb-2">Water-wise irrigation systems</li>
              <li className="mb-2">Organic soil enrichment techniques</li>
              <li>Natural pest management solutions</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Our gardening team" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Team member" 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Emma Wilson</h3>
              <p className="text-green-700 mb-2">Founder & Lead Designer</p>
              <p>Master Horticulturist with 15+ years experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image 
                src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Team member" 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">James Rodriguez</h3>
              <p className="text-green-700 mb-2">Landscape Architect</p>
              <p>Specializes in sustainable outdoor spaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Team member" 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sophia Chen</h3>
              <p className="text-green-700 mb-2">Maintenance Supervisor</p>
              <p>Expert in organic garden care</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}