'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded-[2rem] border border-black/8 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)]"
      >
        About Me
      </motion.h2>
          <p className="mt-6 text-base leading-8 text-[var(--foreground)]/65">
            I work at the intersection of engineering depth, business clarity, and execution discipline. The goal is simple: ship systems that solve real operational problems and still feel thoughtfully built.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-black/8 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/55">Core Strength</p>
              <p className="mt-2 text-sm text-[var(--foreground)]/70">Turning complex requirements into clear, buildable delivery plans.</p>
            </div>
            <div className="rounded-3xl border border-black/8 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/55">Working Style</p>
              <p className="mt-2 text-sm text-[var(--foreground)]/70">Hands-on, systems-minded, and focused on keeping teams aligned.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:p-10">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base leading-8 text-[var(--foreground)]/70 md:text-lg"
      >
       A Software Engineering Team Lead with 7 years of experience spanning front-end, back-end, and product delivery. I build internal business systems, e-commerce platforms, and operational tools that help teams move faster with less friction. I have also taken products from raw idea to shipped application independently, covering UI/UX, development, and rollout.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 text-base leading-8 text-[var(--foreground)]/70 md:text-lg"
      >
        I currently lead a team delivering Odoo standard and custom solutions. That includes technical direction, scope breakdown, code review, estimation, milestone planning, integrations, reports, automations, and stakeholder communication. I care about keeping architecture practical, interfaces clean, and delivery predictable.
      </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-base leading-8 text-[var(--foreground)]/70 md:text-lg"
          >
            Outside the core delivery work, I spend time on R&D, content, training material, and studying how strong digital teams operate so the best ideas can be adapted to the local market. I am especially interested in arts, music, technology, and game design.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default About
