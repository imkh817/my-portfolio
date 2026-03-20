'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { blogAchievements, blogFeatures } from '../../data/blog'
import type { Achievement } from '../../data/types'

const achievements = blogAchievements

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 상단 네비 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/#projects"
            className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            ← 돌아가기
          </Link>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-300 text-sm">개인 블로그 플랫폼</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-32 space-y-28">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-3">사이드 프로젝트</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            개인 블로그 플랫폼
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-2">
            직접 사용하기 위해 만든 블로그 서비스.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-2">
            단순 기능 구현을 넘어 성능 병목, 동시성, 보안 이슈를 직접 발견하고 해결하는 과정에 집중했습니다.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed max-w-2xl">
            테스트 코드로 문제를 재현하고, 지표로 결과를 검증하는 방식으로 개발했습니다.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {['Spring Boot', 'Java', 'MySQL', 'Redis', 'QueryDSL', 'JPA', 'Vue.js', 'AWS'].map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 주요 기능 요약 */}
        <Section>
          <h2 className="text-sm font-mono text-indigo-400 mb-2">Features</h2>
          <h3 className="text-2xl font-bold text-white mb-6">주요 기능</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {blogFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-zinc-300"
              >
                <span className="text-indigo-400 shrink-0">▸</span>
                {feature}
              </div>
            ))}
          </div>
        </Section>

        {/* 문제 해결 과정 */}
        <div className="space-y-24">
          <Section>
            <h2 className="text-sm font-mono text-indigo-400 mb-2">Deep Dives</h2>
            <h3 className="text-2xl font-bold text-white mb-2">문제 해결 과정</h3>
            <p className="text-zinc-500 text-sm">기능을 구현하면서 발견하고 해결한 기술적 문제들입니다.</p>
          </Section>

          {achievements.map((item) => (
            <AchievementSection key={item.number} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function AchievementSection({ item }: { item: Achievement }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="space-y-8"
    >
      {/* 타이틀 */}
      <div className="flex items-start gap-4">
        <span className="text-3xl font-bold text-indigo-500/40 font-mono shrink-0 leading-tight">
          {item.number}
        </span>
        <h4 className="text-xl font-bold text-white leading-snug pt-0.5">{item.title}</h4>
      </div>

      <div className="ml-12 space-y-5">

        {/* 문제 상황 */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
          <p className="text-red-400 text-xs font-mono mb-4 uppercase tracking-wider">Problem</p>
          <div className="space-y-2">
            {item.problem.map((p, i) => (
              <p key={i} className="text-zinc-300 text-sm leading-7">{p}</p>
            ))}
          </div>
        </div>

        {/* 근본 원인 */}
        {item.root && (
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <p className="text-orange-400 text-xs font-mono mb-4 uppercase tracking-wider">Root Cause</p>
            <div className="space-y-2">
              {item.root.map((r, i) => (
                <p key={i} className="text-zinc-300 text-sm leading-7">{r}</p>
              ))}
            </div>
          </div>
        )}

        {/* 접근 방식 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-yellow-400 text-xs font-mono mb-4 uppercase tracking-wider">Approach</p>
          <ul className="space-y-3">
            {item.approach.map((step, i) => (
              <li key={i} className="text-zinc-400 text-sm flex gap-3 leading-7">
                <span className="text-yellow-500/60 shrink-0 font-mono text-xs mt-1">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* 성능 지표 */}
        {item.metrics && (
          <div className="grid grid-cols-3 gap-3">
            {item.metrics.map((m) => (
              <div key={m.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-zinc-500 text-xs mb-3">{m.label}</p>
                <p className="text-zinc-600 text-xs line-through mb-1">{m.before}</p>
                <p className="text-white text-base font-semibold mb-2">{m.after}</p>
                <p className="text-indigo-400 text-xs font-mono">{m.highlight}</p>
              </div>
            ))}
          </div>
        )}

        {/* 결과 */}
        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
          <p className="text-green-400 text-xs font-mono mb-4 uppercase tracking-wider">Result</p>
          <div className="space-y-2">
            {item.result.map((r, i) => (
              <p key={i} className="text-zinc-300 text-sm leading-7">{r}</p>
            ))}
          </div>
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 pt-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  )
}
