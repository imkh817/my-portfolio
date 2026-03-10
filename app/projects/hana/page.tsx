'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

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

type Achievement = {
  number: string
  title: string
  problem: string[]
  approach: string[]
  result: string[]
  tags: string[]
}

const achievements: Achievement[] = [
  {
    number: '01',
    title: '운영 배치 프로그램 안정성 개선',
    problem: [
      '운영 중이던 배치 프로그램은 장비 상태를 일괄 갱신하고, 다음날 수행될 모니터링 시험을 자동 생성하는 역할을 담당하고 있었습니다.',
      'DB 부하나 네트워크 지연 같은 일시적인 오류가 발생할 경우 배치가 즉시 실패·종료되는 구조였습니다.',
      '실패 여부를 즉시 인지할 수단이 없어 운영 단계에서 로그를 직접 확인해야만 상황을 파악할 수 있었습니다.',
    ],
    approach: [
      '기존 Spring @Scheduled 기반 구조를 유지해 변경 범위를 최소화',
      '예외 발생 시 즉시 종료하지 않고 자동 재시도 수행, 최대 3회로 제한하여 무한 재시도 방지',
      '재시도 간 간격을 두어 일시적인 장애의 자연 회복 가능성 확보',
      '재시도 이후에도 실패 시 배치 식별 정보·실행 시각·실패 원인을 포함한 회사 메일 알림 발송',
      'Quartz 등 별도 스케줄러 도입 없이 기존 구조를 유지하여 도입 복잡도 최소화',
    ],
    result: [
      '일시적인 장애에도 배치가 자동으로 복구를 시도하는 구조가 확보되었습니다.',
      '반복 실패 시 즉시 알림을 통해 운영자가 빠르게 대응할 수 있게 되었습니다.',
    ],
    tags: ['Spring Batch', '@Scheduled', 'Retry', 'Mail Notification'],
  },
  {
    number: '02',
    title: '도메인 책임 분리 및 전략 패턴 적용을 통한 복잡한 비즈니스 로직 개선',
    problem: [
      'LIMS 특성상 하나의 기능에 5~10개 이상의 테이블이 연관되고, 시험 유형·판정 방식·상태에 따른 다수의 조건 분기가 존재했습니다.',
      '초기 구조에서는 상태 변경 규칙이 여러 서비스에 분산되어 중복과 불일치 가능성이 있었습니다.',
      '서비스 레이어에 if-else 분기가 누적되어 메서드가 비대해지고 변경 시 영향 범위 예측이 어려웠습니다.',
    ],
    approach: [
      '상태와 규칙을 가진 도메인이 스스로 상태를 변경하도록 구조 재설계',
      '시험 의뢰·시험 결과 등 상태를 가지는 개념에 상태 전이 규칙과 검증 로직을 도메인 내부로 이동',
      '서비스는 상태 변경을 "요청"만 하고, 변경 가능 여부 판단과 전이 규칙은 도메인이 책임지도록 분리',
      '시험 유형별 결과 처리 로직을 공통 인터페이스로 정의하고 유형별 전략 클래스로 분리 (전략 패턴 적용)',
      '조건 분기가 늘어나도 기존 코드 수정 없이 전략 클래스 추가만으로 확장 가능한 구조 확보',
    ],
    result: [
      '서비스 레이어에 집중되던 조건 분기와 상태 변경 로직이 도메인과 전략 클래스로 분산되어 가독성과 변경 용이성이 개선되었습니다.',
      '신규 시험 유형 추가 시 기존 코드 수정 없이 전략 클래스 추가만으로 확장 가능한 구조가 되었습니다.',
    ],
    tags: ['Domain Design', 'Strategy Pattern', 'OCP', 'Refactoring'],
  },
]

export default function HanaPage() {
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
          <span className="text-zinc-300 text-sm">하나제약 LIMS</span>
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
            하나제약 LIMS
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-2">
            반복적인 시험·검사 업무를 전산화하여 수기 처리로 인한 오류를 줄이고, 시험 결과 관리와 승인 프로세스를 일관되게 운영할 수 있도록 지원하는 품질 관리 시스템.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed max-w-2xl">
            감사 추적 기반의 이력 관리로 데이터 신뢰성을 확보하며 실제 운영 환경에서 활용되고 있습니다.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {['Java', 'Spring Boot', 'Spring Security', 'Oracle', 'MyBatis', 'JavaScript'].map((t) => (
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
              Backend Developer로 참여하여 하나제약 LIMS의 품질 관리 핵심 기능을 개발했습니다.
            </p>
            <p className="text-zinc-400 leading-7">
              시험 의뢰·결과·승인 등 주요 도메인 로직과 ERP/MES 인터페이스 API를 개발하며, 데이터 정합성과 트랜잭션 안정성을 중점적으로 개선했습니다.
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

        <div className="flex flex-wrap gap-2 pt-1">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
