import React from 'react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: "Emergency Response: Gaza Crisis Update",
    date: "December 1, 2023",
    excerpt: "Latest updates on our humanitarian efforts in Gaza, including medical aid distribution and emergency relief operations.",
    image: "https://source.unsplash.com/random/800x600/?humanitarian",
    category: "Crisis Updates"
  },
  {
    id: 2,
    title: "Stories of Hope: Communities Coming Together",
    date: "November 28, 2023",
    excerpt: "Inspiring stories of resilience and solidarity as communities support each other through challenging times.",
    image: "https://source.unsplash.com/random/800x600/?community",
    category: "Stories"
  },
  {
    id: 3,
    title: "Medical Aid Distribution Report",
    date: "November 25, 2023",
    excerpt: "Detailed report on recent medical supply distributions, including essential medications and equipment delivered to affected areas.",
    image: "https://source.unsplash.com/random/800x600/?medical",
    category: "Reports"
  },
  {
    id: 4,
    title: "Supporting Children in Crisis",
    date: "November 22, 2023",
    excerpt: "How our educational and psychological support programs are helping children maintain hope and continue learning.",
    image: "https://source.unsplash.com/random/800x600/?children",
    category: "Programs"
  }
]

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Latest Updates & Stories</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-blue-600 font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">
                  {post.date}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-3 hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/donate" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Support Our Mission
        </Link>
      </div>
    </div>
  )
}
