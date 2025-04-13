import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export async function generateStaticParams() {
  const files = fs.readdirSync('src/content/blog')
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const fileContent = fs.readFileSync(`src/content/blog/${params.slug}.md`, 'utf8')
  const { data, content } = matter(fileContent)

  return (
    <div className="py-28 max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
      <div
        className="prose prose-invert text-gray-300"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  )
}
