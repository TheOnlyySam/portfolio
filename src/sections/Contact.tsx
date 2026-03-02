'use client'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-28 text-center"
    >
      <div className="rounded-[2rem] border border-black/8 bg-white/70 px-6 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-[-0.04em]"
        >
          Let&apos;s Build Something Useful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mb-8 mt-5 max-w-2xl text-base text-[var(--foreground)]/65 md:text-lg"
        >
          Have an idea, a product to improve, or a team that needs sharper execution? Reach out and we can discuss scope, delivery, and the right technical path.
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          href="mailto:salamaltaey18@gmail.com"
          className="inline-block rounded-2xl bg-[var(--accent)] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  )
}

export default Contact
