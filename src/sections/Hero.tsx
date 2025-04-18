'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    slug: 'Ai-Powered-Engineers',
    title: 'AI-Powered Engineers Are the Future',
    description: 'Why AI-literate developers ship faster, debug smarter, and build better products.'
  },
  {
    slug: 'Agile-Methodology',
    title: 'Mastering Agile Methodology',
    description: 'Insights from real-world product and engineering teams.'
  },
  {
    slug: 'Building-Scalable-Systems',
    title: 'Building Scalable Systems',
    description: 'Lessons learned from backend, DevOps, and infrastructure projects.'
  },
]

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="h-[90vh] flex items-center justify-center text-center">
        <div className="max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[var(--foreground)] text-4xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            I Build Modern{' '}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
              Digital
            </span>{' '}
            Experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-base md:text-xl"
          >
            Full-Stack Developer, Project Manager and Tech Enthusiast crafting high-end products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="#work" className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition duration-300 backdrop-blur-sm">
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* BLOG PREVIEW SECTION */}
      <section id="blog-preview" className="py-28 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-[var(--foreground)]"
        >
          Latest Blog Posts
        </motion.h2>

        <div className="grid gap-8 mb-8">
          {posts.length > 0 ? posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:border-red-500 transition duration-300 text-left block">
              <h3 className="text-2xl font-semibold mb-2 text-[var(--foreground)]">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {post.description}
              </p>
            </Link>
          )) : (
            <div className="text-gray-500">No posts yet.</div>
          )}
        </div>

        {/* ✅ View All Blogs Button */}
        <Link
          href="/blog"
          className="inline-block mt-4 px-6 py-3 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-[var(--foreground)] dark:text-white hover:border-red-500 transition"
        >
          Check More Blogs →
        </Link>
      </section>
    </>
  )
}

export default Hero
