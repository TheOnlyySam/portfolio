'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-28 max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12"
      >
        Software Engineer, Product Manager, and Tech Founder with hands-on experience in building scalable products, leading teams, and designing secure infrastructure for businesses across multiple industries.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-300"
      >
        <span className="border border-gray-700 py-3 rounded-md">Next.js</span>
        <span className="border border-gray-700 py-3 rounded-md">React</span>
        <span className="border border-gray-700 py-3 rounded-md">.NET</span>
        <span className="border border-gray-700 py-3 rounded-md">Go</span>
        <span className="border border-gray-700 py-3 rounded-md">Python</span>
        <span className="border border-gray-700 py-3 rounded-md">Odoo</span>
        <span className="border border-gray-700 py-3 rounded-md">Cloud DevOps</span>
        <span className="border border-gray-700 py-3 rounded-md">UI/UX Design</span>
      </motion.div>
    </section>
  )
}

export default About
