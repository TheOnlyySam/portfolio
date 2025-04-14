import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { getAllPosts } from '@/lib/getAllPosts'

export async function generateStaticParams() {
  const files = fs.readdirSync('src/content/blog')
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }))
}

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params  // Await the params promise
  const fileContent = fs.readFileSync(`src/content/blog/${slug}.md`, 'utf8')
  const { data, content } = matter(fileContent)

  const posts = getAllPosts()
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <section className="py-28 max-w-3xl mx-auto px-6">
      <Link
        href="/blog"
        className="mb-10 inline-block text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-5xl font-extrabold mb-4 leading-tight text-[var(--foreground)] dark:text-white">
        {data.title}
      </h1>

      {data.tags && (
        <div className="flex flex-wrap gap-2 mb-6">
          {data.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-12">
        <span>{data.date}</span>
        <span>•</span>
        <span>By {data.author || "Salam Alta'ey"}</span>
      </div>

      <article
        className="prose max-w-none
                   prose-p:my-6 prose-p:leading-relaxed
                   prose-li:my-3
                   prose-h1:mb-10 prose-h2:mb-8 prose-h3:mb-6
                   prose-ul:my-6 prose-ol:my-6
                   prose-blockquote:my-8
                   prose-img:my-8
                   prose-pre:my-8
                   prose-hr:hidden
                   text-[var(--foreground)] dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />

      {relatedPosts.length > 0 && (
        <section className="mt-24">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--foreground)] dark:text-white">
            Related Posts
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-300 dark:border-gray-700 rounded-lg p-5 hover:border-red-500 transition duration-300"
              >
                <h3 className="text-lg font-medium mb-2 text-[var(--foreground)] dark:text-white group-hover:text-red-500 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}
