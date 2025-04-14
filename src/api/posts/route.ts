import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET() {
  const dir = path.join(process.cwd(), 'src/content/blog')
  const files = fs.readdirSync(dir)

  const posts = files.map((file) => {
    const slug = file.replace('.md', '')
    const fileContent = fs.readFileSync(`${dir}/${file}`, 'utf8')
    const { data } = matter(fileContent)
    return { slug, ...data }
  })

  return NextResponse.json(posts)
}
