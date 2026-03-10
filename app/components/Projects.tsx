'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

type Project = {
  tag: string
  title: string
  description: string
  tech: string[]
  highlights: string[]
  detailHref?: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    tag: '실무 프로젝트',
    title: '국제약품 LIMS',
    description:
      '의약품 품질 관리 공정 전반을 디지털화한 실험실 정보관리 시스템. 시험 의뢰부터 결과 승인, 검체 폐기까지 전 생애주기를 통합 관리하며 식약처 가이드라인을 준수합니다.',
    tech: ['Java', 'Spring Boot', 'Spring Security' , 'Spring Cache', 'Redis', 'Oracle', 'MyBatis', 'JavaScript'],
    highlights: [
      '분산 락 기반 공통 동시성 제어 라이브러리 설계 및 구현',
      '다단계 JOIN/UNION ALL 쿼리 튜닝으로 조회 시간 50% 단축 (4.2s → 2.1s)',
      '제한적 캐싱 전략 도입으로 참조 데이터 조회 성능 및 시스템 안정성 개선',
    ],
    detailHref: '/projects/lims',
  },
  {
    tag: '실무 프로젝트',
    title: '하나제약 LIMS',
    description:
      '반복적인 시험·검사 업무를 전산화하여 수기 처리 오류를 줄이고, 시험 결과 관리와 승인 프로세스를 일관되게 운영할 수 있도록 지원하는 품질 관리 시스템.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Oracle', 'MyBatis', 'JavaScript'],
    highlights: [
      '재시도·실패 알림 기반 배치 프로그램 안정성 개선',
      '도메인 책임 분리 및 전략 패턴 적용으로 복잡한 비즈니스 로직 구조 개선',
    ],
    detailHref: '/projects/hana',
  },
  {
    tag: '사이드 프로젝트',
    title: '개인 블로그 플랫폼',
    description:
      '직접 사용하기 위해 만든 블로그 서비스. 단순 기능 구현을 넘어 성능 병목, 동시성, 보안 이슈를 직접 발견하고 해결하는 과정에 집중했습니다.',
    tech: ['Spring Boot', 'Java', 'MySQL', 'Redis', 'Spring Security' ,'QueryDSL', 'Vue.js'],
    highlights: [
      '게시글 검색 API 최적화 (응답속도 11배 개선)',
      'Redis 조회수 동시성 및 정합성 처리',
      'SSE 실시간 알림 (오프라인 유실 방지 포함)',
      'JWT 보안 단계적 강화 (블랙리스트 + Rotation)',
    ],
    detailHref: '/projects/blog',
  },
]

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
