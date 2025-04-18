'use client'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 max-w-3xl mx-auto px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 text-lg mb-8"
      >
        Have an idea, project, or collaboration in mind? Let’s talk.
      </motion.p>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        href="mailto:salamaltaey18@gmail.com"
        className="inline-block px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
      >
        Get in Touch
      </motion.a>
    </section>
  )
}

export default Contact
