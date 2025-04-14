'use client'

import { motion } from 'framer-motion'

const skills = [
  'Next.js', 'TypeScript', 'Tailwind CSS', 'Go', '.NET', 'Python', 'React Native',
  'Cloud Infrastructure', 'AWS', 'DevOps', 'Odoo', 'ERP Solutions',
  'UI/UX Design', 'Web & Mobile Development', 'Backend Optimization',
  'Database Design', 'API Development', 'Cybersecurity Practices',
  'Automation', 'Agile / Scrum', 'Project Management',
  'Jira', 'Azure DevOps', 'Git / GitHub / GitLab', 'Branding & Marketing',
]

const Skills = () => {
  return (
    <section id="skills" className="py-28 max-w-6xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-[var(--foreground)] dark:text-white"
      >
        Skills & Technologies
      </motion.h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
        Technologies, tools, and practices I’ve used to build scalable products, lead development teams, and deliver high-end software solutions.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-[var(--foreground)] dark:text-white hover:border-red-500 transition duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default Skills
