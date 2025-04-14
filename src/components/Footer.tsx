'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-white/10 mt-28 px-6 py-12 text-center">
      <div className="max-w-5xl mx-auto">

        <div className="text-[var(--foreground)] dark:text-white font-semibold text-xl mb-4">
          Salam Alta&apos;ey
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            href="https://github.com/TheOnlyySam"
            target="_blank"
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/salam-alta-ey-06216831a/"
            target="_blank"
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
          >
            LinkedIn
          </Link>

          <Link
            href="mailto:salamaltaey18@gmail.com"
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
          >
            Email
          </Link>
        </div>

        <div className="text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Salam Alta&apos;ey. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
