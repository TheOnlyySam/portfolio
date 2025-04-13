'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-28 py-8 px-6 text-center text-sm text-gray-400">
      <div className="mb-4 text-white font-medium text-lg">
        salam.dev
      </div>

      <div className="flex justify-center gap-6 mb-4">
        <Link href="https://github.com/yourgithub" target="_blank" className="hover:text-red-500 transition">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/yourlinkedin/" target="_blank" className="hover:text-red-500 transition">
          LinkedIn
        </Link>
        <Link href="mailto:salamaltaey.dev@gmail.com" className="hover:text-red-500 transition">
          Email
        </Link>
      </div>

      <div className="text-xs text-gray-600">
        © {new Date().getFullYear()} Salam Al Taey. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
