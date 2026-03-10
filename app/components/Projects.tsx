'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-36 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-2">03. Projects</p>
          <h2 className="text-3xl font-bold text-white mb-14">프로젝트</h2>
        </motion.div>

        <div className="space-y-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + 0.15 * i }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <div className="group bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-xl p-8 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-indigo-400 text-xs font-mono mb-1">{project.tag}</p>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-3 ml-4 shrink-0">
          {project.detailHref && (
            <span className="text-zinc-400 group-hover:text-indigo-400 transition-colors text-sm">
              자세히 보기 →
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p className="text-zinc-400 leading-7 mb-7">{project.description}</p>

      <ul className="space-y-2 mb-7">
        {project.highlights.map((item) => (
          <li key={item} className="text-zinc-500 text-sm flex gap-2 leading-6">
            <span className="text-indigo-400 shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )

  if (project.detailHref) {
    return <Link href={project.detailHref}>{cardContent}</Link>
  }

  return cardContent
}
