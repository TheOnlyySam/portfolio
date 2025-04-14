'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-28 max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center text-[var(--foreground)] dark:text-white"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto leading-relaxed"
      >
        I am Salam Alta&apos;ey — Software Engineer, Tech Founder, and Project Manager passionate about building scalable products, optimizing backend systems, and crafting exceptional digital experiences.
        Experienced in leading development teams, architecting infrastructure, and delivering business-driven solutions across various industries.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mt-6 leading-relaxed"
      >
        Currently working at Sanaya Al-Arabia, Metaspace Inc., and AXUX — delivering innovative technology solutions, managing products, and scaling infrastructure.
      </motion.p>
    </section>
  )
}

export default About
