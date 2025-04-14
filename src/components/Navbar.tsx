'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#work', label: 'Work' },
  { href: '/#skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%]
                border border-white/10 bg-white/10 dark:bg-[#0a0a0a]/40
                backdrop-blur-2xl shadow-xl rounded-2xl px-6 py-4 flex justify-between items-center"
    >
      <Link href="/" className="text-xl md:text-2xl text-[var(--foreground)] dark:text-white tracking-tight">
        Salam Alta&apos;ey
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-[var(--foreground)] dark:text-gray-300 hover:text-red-500 transition duration-300"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Burger */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button
          className="flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-[var(--foreground)] dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-[var(--foreground)] dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-[var(--foreground)] dark:bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] left-0 w-full bg-[var(--background)] dark:bg-[#0a0a0a] border-t border-white/10 flex flex-col items-center gap-6 py-6"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--foreground)] dark:text-gray-300 hover:text-red-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
