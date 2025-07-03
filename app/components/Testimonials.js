import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner, Greenville',
    content:
      'GreenShire transformed our neglected backyard into a paradise. Their team understood exactly what we wanted and delivered beyond our expectations. The garden has become our favorite place to relax and entertain.',
    image: '/images/garden-5.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    content:
      'The edible garden they designed for our restaurant not only provides fresh ingredients but has become a major attraction for our customers. Their maintenance service keeps it looking perfect year-round.',
    image: '/images/garden-6.jpg',
  },
]

export default function Testimonials() {
  return (
    <div className="bg-green-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
            Cultivating Happiness
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's what our clients say about their GreenShire experiences.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                  width={600}
                  height={300}
                />
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-6">
                  <p className="text-base font-semibold text-green-800">{testimonial.name}</p>
                  <p className="text-sm text-green-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}