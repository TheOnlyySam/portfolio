'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, Fragment } from 'react'
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
    <Fragment>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40
                   w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%]
                   border border-white/10 bg-white/60 dark:bg-[#0a0a0a]/20
                   backdrop-blur-xs shadow-xl rounded-2xl
                   px-6 py-4 flex justify-between items-center"
      >
        <Link
          href="/"
          className="text-xl md:text-2xl text-[var(--foreground)] dark:text-white tracking-tight"
        >
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
            <span className="w-6 h-0.5 bg-black dark:bg-white" />
            <span className="w-6 h-0.5 bg-black dark:bg-white" />
            <span className="w-6 h-0.5 bg-black dark:bg-white" />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OUTSIDE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed
                       top-[calc(5rem+1rem)]
                       left-1/2 -translate-x-1/2
                       w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%]
                       bg-white/60 dark:bg-black/20
                       backdrop-blur-xs z-50
                       border border-white/10
                       rounded-2xl py-6 px-4
                       flex flex-col items-center gap-5"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-black dark:text-white hover:text-red-500 transition"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}

export default Navbar
