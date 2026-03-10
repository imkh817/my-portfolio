'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-mono mb-4"
        >
          안녕하세요, 저는
        </motion.p>

        {/* TODO: 이름으로 교체하세요 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-4"
        >
          조건희
        </motion.h1>

        {/* TODO: 직책/역할로 교체하세요 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-bold text-zinc-500 tracking-tight mb-8"
        >
          백엔드 개발자
        </motion.h2>

        {/* TODO: 한 줄 소개로 교체하세요 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-zinc-400 text-lg leading-relaxed mb-10"
        >
          사용자 경험을 고민하며 확장 가능한 서비스를 만드는 것을 좋아합니다.
          <br />
          현재 블로그 플랫폼을 개발하고 있습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            프로젝트 보기
          </a>
          <a
            href="https://github.com/imkh817"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
