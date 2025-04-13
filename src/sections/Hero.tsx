'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-[90vh] flex items-center justify-center text-center">
      <div className="max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          I Build Modern <span className="text-red-500">Digital</span> Experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 text-gray-400 text-lg md:text-xl"
        >
          Full-Stack Developer & Tech Enthusiast crafting high-end products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-6"
        >
          <a
            href="#work"
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
