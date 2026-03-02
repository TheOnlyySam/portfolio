'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'My Personal GitHub',
    description:
      'A deep dive into my projects and preferred techstacks',
    tech: [],
    link: 'https://github.com/TheOnlyySam',
  },
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
  {
    title: 'Shafak Al-Khaleej Website and Mobile App',
    description: 'Followed up on the website from an old developer, using PHP and MySQL as well as added api-endpoints to connect to a react-native mobile app',
    tech: ['MySQL', 'PHP', 'cPanel', 'React Native'],
    link: 'https://shafakalkhaleej.com/'
  },
  
]

const Work = () => {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)]"
      >
        Selected Work
      </motion.h2>

      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[var(--foreground)]/65 md:text-base">
        A mix of hands-on engineering, product ownership, and delivery leadership across client and internal platforms.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="rounded-[1.75rem] border border-black/8 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
              {project.title}
            </h3>

            <p className="mb-5 mt-3 text-sm leading-7 text-[var(--foreground)]/65">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-xs text-[var(--foreground)]/70 dark:border-white/10 dark:bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
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
