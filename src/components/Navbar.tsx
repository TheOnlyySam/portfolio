'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-tight hover:text-red-500 transition duration-300"
        >
          Salam Alta&apos;ey
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-300 hover:text-red-500 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
