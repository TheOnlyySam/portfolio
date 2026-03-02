'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, Fragment } from 'react'
import { FileDown, Github, Linkedin } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#work', label: 'Work' },
  { href: '/#skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

const socials = [
  {
    href: 'https://github.com/TheOnlyySam',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/salam-alta-ey-06216831a/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
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
                   w-[95%] sm:w-[92%] lg:w-[86%] xl:w-[80%]
                   border border-white/70 dark:border-white/10
                   bg-white/78 dark:bg-[#09090b]/72
                   backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.08)]
                   rounded-3xl px-5 py-4 flex justify-between items-center"
      >
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]"
        >
          Salam Alta&apos;ey
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[var(--foreground)]/80 hover:text-[var(--accent)] transition duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-6 w-px bg-black/10 dark:bg-white/10" />
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/8 bg-white/70 text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
            <a
              href="/Salam-Altaey-CV.pdf"
              download
              className="inline-flex h-10 items-center gap-2 rounded-2xl border border-black/8 bg-white/70 px-4 text-sm font-medium text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/5"
            >
              <FileDown className="h-4 w-4" />
              <span>CV</span>
            </a>
          </div>
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
                       w-[95%] sm:w-[92%] lg:w-[86%] xl:w-[80%]
                       bg-white/88 dark:bg-[#09090b]/88
                       backdrop-blur-xl z-50
                       border border-white/70 dark:border-white/10
                       rounded-3xl py-6 px-4
                       flex flex-col items-center gap-5"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/8 bg-white text-[var(--foreground)] transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/5"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
            <a
              href="/Salam-Altaey-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-black/8 bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/5"
            >
              <FileDown className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}

export default Navbar
