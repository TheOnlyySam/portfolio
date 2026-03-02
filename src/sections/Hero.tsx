'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    slug: 'UIUX-is-better-simple',
    title: 'Simple UI/UX Wins — Every Time',
    description: 'Why designing simpler interfaces beats fancy ones — and how simplicity drives growth, loyalty, and better products.'
  },
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
]

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-6 pt-14">
        <div className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-black/8 bg-white/70 p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:p-12 lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]"
            >
              Engineering + Product + Delivery
            </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--foreground)] md:text-7xl"
          >
            Building software that feels deliberate, scalable, and clear.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-base text-[var(--foreground)]/70 md:text-xl"
          >
            Lead Software Engineer | Software Project Manager (SPM) | R&D | Certified Odoo v19 Functional Consultant | MBA – Nexford University | BSc Computer Engineering
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 grid gap-3 text-left sm:grid-cols-3"
          >
            <div className="rounded-3xl border border-black/8 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-semibold tracking-[-0.04em]">7+</p>
              <p className="mt-1 text-sm text-[var(--foreground)]/60">Years shipping software</p>
            </div>
            <div className="rounded-3xl border border-black/8 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-semibold tracking-[-0.04em]">Full stack</p>
              <p className="mt-1 text-sm text-[var(--foreground)]/60">Web, mobile, automation, ERP</p>
            </div>
            <div className="rounded-3xl border border-black/8 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-semibold tracking-[-0.04em]">Delivery-led</p>
              <p className="mt-1 text-sm text-[var(--foreground)]/60">From discovery to launch</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a href="#work" className="rounded-2xl bg-[var(--accent)] px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]">
              View Work
            </a>
            <a href="#contact" className="rounded-2xl border border-black/10 bg-white px-6 py-3 font-medium text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/5">
              Contact Me
            </a>
          </motion.div>
        </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
            className="grid gap-4"
          >
            <div className="rounded-[2rem] border border-black/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(255,244,240,0.92))] p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]/55">
                Current Focus
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Leading practical digital products for teams that need speed without chaos.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/65">
                Product strategy, team leadership, system design, and implementation across business systems, custom platforms, and Odoo ecosystems.
              </p>
            </div>
            <div className="rounded-[2rem] border border-black/8 bg-white/70 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]/55">
                What I Bring
              </p>
              <div className="mt-4 space-y-3 text-sm text-[var(--foreground)]/70">
                <p>Strong execution across engineering, operations, and stakeholder alignment.</p>
                <p>Hands-on technical depth with enough product judgment to keep decisions grounded.</p>
                <p>Clean interfaces, sensible architecture, and delivery discipline.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOG PREVIEW SECTION */}
      <section id="blog-preview" className="mx-auto max-w-6xl px-6 py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)]"
        >
          Latest Blog Posts
        </motion.h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--foreground)]/65 md:text-base">
          Short takes on software delivery, product thinking, and building systems that stay maintainable.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.length > 0 ? posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-[1.75rem] border border-black/8 bg-white/70 p-6 text-left shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] dark:border-white/10 dark:bg-white/5">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/65">
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
          className="inline-block mt-8 rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/5"
        >
          Check More Blogs →
        </Link>
      </section>
    </>
  )
}

export default Hero
