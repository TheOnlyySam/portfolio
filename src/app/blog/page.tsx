import AnimatedHeading from '@/components/AnimateHeading'
import { getAllPosts } from '@/lib/getAllPosts'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="py-28 max-w-5xl mx-auto px-6">
      <AnimatedHeading>Blog</AnimatedHeading>

      <div className="grid gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border border-gray-700 p-6 rounded-lg hover:border-red-500 transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">
              {post.title}
            </h2>
            <p className="text-gray-400 mb-4 text-sm">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-red-500 text-sm hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
