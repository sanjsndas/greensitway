import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Companion Planting',
    excerpt:
      'Discover how strategic plant pairings can enhance growth, deter pests, and create a more productive garden ecosystem.',
    date: 'May 15, 2023',
    category: 'Gardening Tips',
    image: '/images/garden-7.jpg',
  },
  {
    id: 2,
    title: 'Creating a Four-Season Garden',
    excerpt:
      'Learn how to design your garden to provide visual interest and ecological benefits throughout the entire year.',
    date: 'April 2, 2023',
    category: 'Design',
    image: '/images/garden-8.jpg',
  },
  {
    id: 3,
    title: 'Water-Wise Gardening Strategies',
    excerpt:
      'Expert techniques for maintaining a beautiful garden while conserving water, especially important in drought-prone areas.',
    date: 'March 18, 2023',
    category: 'Sustainability',
    image: '/images/garden-1.jpg',
  },
  {
    id: 4,
    title: 'The Benefits of Native Plants',
    excerpt:
      'Why choosing plants indigenous to your region leads to healthier gardens and supports local biodiversity.',
    date: 'February 28, 2023',
    category: 'Ecology',
    image: '/images/garden-2.jpg',
  },
]

export default function Blog() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-800">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover opacity-40"
            src="/images/garden-3.jpg"
            alt="Garden blog"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-6 sm:py-32 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            GreenShire Journal
          </h1>
          <p className="mt-6 text-xl leading-8 text-green-100 max-w-3xl mx-auto">
            Insights, tips, and inspiration for garden enthusiasts
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Latest Articles</h2>
          <p className="text-lg text-gray-600">
            Explore our collection of gardening wisdom, from beginner tips to advanced design concepts.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-4">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex-1 bg-white p-6">
                <div className="text-sm text-gray-500">{post.date}</div>
                <h3 className="mt-2 text-xl font-semibold text-green-800">
                  <Link href={`/blog/${post.id}`} className="hover:text-green-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 text-gray-600">{post.excerpt}</p>
                <div className="mt-6">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-sm font-semibold text-green-600 hover:text-green-500"
                  >
                    Read more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-600 transition-colors duration-200"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  )
}