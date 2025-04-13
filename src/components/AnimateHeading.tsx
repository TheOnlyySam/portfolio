'use client'

import { motion } from 'framer-motion'

const AnimatedHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-12 text-center"
    >
      {children}
    </motion.h1>
  )
}

export default AnimatedHeading
