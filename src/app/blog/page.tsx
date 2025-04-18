import AnimatedHeading from '@/components/AnimateHeading'
import { getAllPosts } from '@/lib/getAllPosts'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="py-28 max-w-6xl mx-auto px-6">
      <AnimatedHeading>Blog</AnimatedHeading>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border border-gray-300 dark:border-gray-700 rounded-xl p-6 hover:border-red-500 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[var(--foreground)] group-hover:text-red-500 transition">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {post.description}
              </p>
            </div>

            <div className="mt-4 text-xs text-gray-400 flex items-center justify-between">
              <span>Read More</span>
              <span className="text-red-500 group-hover:translate-x-1 transition">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
