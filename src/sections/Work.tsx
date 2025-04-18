'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Sanaya Al-Arabia Website',
    description:
      'Developed a fully responsive, high-performance website with a video landing page and Odoo integration.',
    tech: ['Next.js', 'Tailwind', 'Odoo', 'Backend Optimization'],
    link: 'https://sanayatechs.com',
  },
  {
    title: 'Metaspace Inc. Platforms',
    description:
      'Led development of scalable web & mobile apps, backend systems with .NET, Go, Python and secure cloud infrastructure.',
    tech: ['.NET', 'Go', 'Python', 'Cloud DevOps', 'UI/UX'],
    link: 'https://metaspaceinc.com',
  },
  {
    title: 'Aximus Techs Product Management',
    description:
      'Managed multiple product roadmaps, cross-functional teams, and agile workflows to deliver software products.',
    tech: ['Project Management', 'Jira', 'Azure', 'Agile'],
    link: 'https://aximus.io',
  },
]

const Work = () => {
  return (
    <section id="work" className="py-28 max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-[var(--foreground)]"
      >
        Selected Work
      </motion.h2>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:border-red-500 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-[var(--foreground)]">
              {project.title}
            </h3>

            <p className="text-[var(--foreground)]/70 dark:text-gray-400 mb-4 text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              className="text-red-500 text-sm hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Work
