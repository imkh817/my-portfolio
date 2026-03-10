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
  github?: string
  tags: string[]
}

const achievements: Achievement[] = [
  {
    number: '01',
    title: '중복 승인·상태 꼬임 문제 해결을 위한 공통 동시성 제어 설계',
    problem: [
      '운영 환경에서 동일 검체에 대해 여러 사용자가 동시에 승인·폐기·상태 변경 요청을 보내면서 상태가 중복 처리되거나 이전 상태로 덮어써지는 문제가 반복적으로 발생했습니다.',
    ],
    approach: [
      'LIMS 프로젝트마다 상태 변경·승인 흐름에서 동시성 위험이 공통으로 존재함을 파악',
      '각 서비스마다 개별 구현 시 유지보수 비용 증가 및 처리 방식의 불일치 우려',
      '동시성 제어 로직을 공통 라이브러리로 분리 — 락 획득 → 실행 → 재시도 → 락 해제 고정 흐름 정의',
      'Redis 기반 분산 락으로 다중 인스턴스 환경 지원, 락 키·대기 시간·재시도 전략을 유연하게 설정 가능하도록 설계',
    ],
    result: [
      '중복 승인 및 상태 꼬임 이슈가 완전히 해결되었습니다.',
      '승인·상태 변경 과정에서 발생하던 데이터 불일치가 제거되어, 운영 중 수동 데이터 보정 작업이 더 이상 필요하지 않게 되었습니다.',
    ],
    github: 'https://github.com/imkh817/distributed-lock-library',
    tags: ['Redis', 'Distributed Lock', 'Spring Boot', 'Library Design'],
  },
  {
    number: '02',
    title: '다단계 JOIN / UNION ALL 기반 보고서 쿼리 튜닝으로 조회 시간 50% 단축',
    problem: [
      '여러 기준 데이터를 조합해 한 번에 보여주는 보고서 쿼리가 다수의 테이블 JOIN과 UNION ALL로 구성되어 있었습니다.',
      '데이터 누적에 따라 조회 시간이 점점 늘어나 운영 환경에서 병목으로 작용했습니다.',
    ],
    approach: [
      '단순 인덱스 추가만으로는 개선이 미미했고, 실행 계획 분석을 통해 근본 원인을 파악',
      '불필요한 JOIN 제거 및 위치 재조정으로 중간 결과 집합 크기 감소',
      'UNION ALL로 합쳐진 쿼리 중 공통 조건을 선필터링하도록 구조 변경',
      'WHERE 절에서 반복적으로 사용되는 주요 조건 컬럼에 인덱스 추가로 Full Scan 제거',
    ],
    result: [
      '동일 조건 기준 평균 조회 시간이 4.2초 → 2.1초로 약 50% 단축되었습니다.',
      '보고서 조회 시 체감 지연이 개선되었습니다.',
    ],
    tags: ['Oracle', 'Query Optimization', 'Execution Plan', 'Index'],
  },
  {
    number: '03',
    title: '제한적 캐싱 도입으로 조회 성능 및 시스템 안정성 개선',
    problem: [
      '공통 코드와 품목 마스터처럼 변경 빈도가 낮은 참조 데이터가 있음에도 불구하고, 화면 조회나 업무 처리 시마다 데이터베이스를 직접 조회하는 구조였습니다.\n' +
      '\n' +
      '이로 인해 시험 의뢰 등록이나 결과 입력과 같은 주요 기능에서 동일한 기준 데이터가 반복적으로 조회되었고, 그 결과 데이터베이스 부하 증가와 응답 지연이 발생하고 있었습니다.',
    ],
    approach: [
      'LIMS는 시험 결과·승인 상태 등 실시간 정합성이 중요한 데이터가 많아 전체 캐싱은 부적합하다고 판단',
      '변경 가능성이 낮고 조회 빈도가 높은 코드성·마스터 데이터만 캐싱 대상으로 선별',
      '데이터 변경 시 캐시를 직접 갱신하는 대신 Evict 방식으로 제거 후 재조회 시 DB 기준으로 재적재',
      '캐시-DB 간 데이터 불일치 및 동시성 상황에서의 리스크 최소화',
    ],
    result: [
      '반복적인 참조 데이터 조회로 인한 불필요한 DB 접근이 감소했습니다.',
      '다수 사용자가 동시에 접근하는 환경에서 화면 응답 속도와 시스템 안정성이 개선되었습니다.',
    ],
    tags: ['Redis', 'Spring Cache', 'Cache Evict', 'Performance'],
  },
]

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
