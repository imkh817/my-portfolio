'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { limsAchievements } from '../../data/lims'
import type { Achievement } from '../../data/types'

const achievements = limsAchievements

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

export default function LimsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/#projects"
            className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            ← 돌아가기
          </Link>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-300 text-sm">국제약품 LIMS</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-32 space-y-28">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-3">실무 프로젝트</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            국제약품 LIMS
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-2">
            의약품 품질 관리 공정 전반을 디지털화하여 시험 의뢰부터 분석, 결과 승인, 검체 폐기까지의 전 생애주기를 통합 관리하는 실험실 정보관리 시스템.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed max-w-2xl">
            식약처 가이드라인을 준수하는 감사 추적(Audit Trail)과 ERP 연동을 통해 품질 데이터의 신뢰성과 전사 시스템 간 데이터 정합성을 안정적으로 확보합니다.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {['Java', 'Spring Boot', 'Spring Security', 'Spring Cache','Redis', 'Oracle', 'MyBatis', 'JavaScript'].map((t) => (
              <span key={t} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full font-mono">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 역할 */}
        <Section>
          <h2 className="text-sm font-mono text-indigo-400 mb-2">Role</h2>
          <h3 className="text-2xl font-bold text-white mb-6">담당 역할</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
            <p className="text-zinc-300 leading-7">
              Backend Developer로 참여하여 LIMS의 핵심 품질 관리 기능과 외부 시스템 연동 영역을 담당했습니다.
            </p>
            <p className="text-zinc-400 leading-7">
              시험 데이터 처리와 승인 흐름에서 발생할 수 있는 동시성 및 정합성 이슈를 분석하고, 운영 환경에서도 안정적으로 동작하도록 개선하는 작업에 집중했습니다.
            </p>
          </div>
        </Section>

        {/* 성과 */}
        <div className="space-y-24">
          <Section>
            <h2 className="text-sm font-mono text-indigo-400 mb-2">Achievements</h2>
            <h3 className="text-2xl font-bold text-white mb-2">주요 성과</h3>
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
      <div className="flex items-start gap-4">
        <span className="text-3xl font-bold text-indigo-500/40 font-mono shrink-0 leading-tight">
          {item.number}
        </span>
        <h4 className="text-xl font-bold text-white leading-snug pt-0.5">{item.title}</h4>
      </div>

      <div className="ml-12 space-y-5">

        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
          <p className="text-red-400 text-xs font-mono mb-4 uppercase tracking-wider">Problem</p>
          <div className="space-y-2">
            {item.problem.map((p, i) => (
              <p key={i} className="text-zinc-300 text-sm leading-7">{p}</p>
            ))}
          </div>
        </div>

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

        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
          <p className="text-green-400 text-xs font-mono mb-4 uppercase tracking-wider">Result</p>
          <div className="space-y-2">
            {item.result.map((r, i) => (
              <p key={i} className="text-zinc-300 text-sm leading-7">{r}</p>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full font-mono">
                {tag}
              </span>
            ))}
          </div>
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              GitHub 검증 코드 보기 ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
