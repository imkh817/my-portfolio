'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { aboutInfo } from '../data/about'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-36 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-2">01. About Me</p>
          <h2 className="text-3xl font-bold text-white mb-14">소개</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-zinc-400 leading-7"
          >
            {/* TODO: 자기소개로 교체하세요 */}
            <p>
              안녕하세요! 문제의 원인을 깊이 파고들고 구조적으로 해결하는 것을 좋아하는 백엔드 개발자입니다.
            </p>
            <p>
              현재 개인 블로그 프로젝트를 통해 조회수 처리, 알림 시스템, 검색 성능 개선 등을 구현하며 단순한 기능 구현을 넘어 실제 서비스 환경에서 발생할 수 있는 성능 문제와 설계 문제를 해결하는 경험을 쌓고 있습니다.
            </p>
            <p>
              최근에는 바이브 코딩에 깊은 관심을 가지고, 주 2회 스터디를 통해 AI 도구를 활용한 개발 방식을 꾸준히 탐구하고 있습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {aboutInfo.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 text-sm border-b border-zinc-800 pb-4"
              >
                <span className="text-zinc-500 w-16 shrink-0">{item.label}</span>
                {'href' in item ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-zinc-300">{item.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
