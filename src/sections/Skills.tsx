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
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 text-center">
      <div className="rounded-[2rem] border border-black/8 bg-white/70 px-6 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)]"
      >
        Skills & Technologies
      </motion.h2>

      <p className="mx-auto mb-12 mt-4 max-w-2xl text-sm text-[var(--foreground)]/65 md:text-base">
        Technologies, tools, and practices I’ve used to build scalable products, lead development teams, and deliver high-end software solutions.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            className="rounded-full border border-black/8 bg-white/80 px-4 py-2 text-sm text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] dark:border-white/10 dark:bg-white/5"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Skills
