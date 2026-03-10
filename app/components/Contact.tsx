'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-36 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-2">04. Contact</p>
          <h2 className="text-3xl font-bold text-white mb-5">연락하기</h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-12 leading-7">
            새로운 기회나 협업에 대해 이야기 나누고 싶으시면 언제든지
            연락주세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* TODO: 이메일로 교체하세요 */}
          <a
            href="mailto:your@email.com"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
          >
            이메일 보내기
          </a>
          {/* TODO: GitHub 링크로 교체하세요 */}
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            GitHub 방문하기
          </a>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-zinc-800 text-center">
        <p className="text-zinc-600 text-sm">
          {/* TODO: 이름으로 교체하세요 */}
          © 2025 조건희. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </section>
  )
}
