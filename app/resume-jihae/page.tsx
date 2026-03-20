import PrintButton from '../resume/PrintButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '안지해 | 이력서',
}

export default function ResumeJihaePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[720px] mx-auto px-10 py-14 print:px-10 print:py-8">

        {/* ── HEADER ── */}
        <div className="mb-8 print:mb-6">
          <h1 className="text-2xl font-bold text-zinc-900 mb-0.5">안지해</h1>
          <p className="text-sm text-zinc-500 mb-3">Backend Developer</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500">
            <a href="mailto:dkswlgo6615@naver.com" className="hover:text-zinc-800">dkswlgo6615@naver.com</a>
            <span className="text-zinc-300">·</span>
            <span>010-9330-9892</span>
            <span className="text-zinc-300">·</span>
            <a href="https://github.com/JihaeAn" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">GitHub ↗</a>
            <span className="text-zinc-300">·</span>
            <a href="https://jji-sun.tistory.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">Blog ↗</a>
          </div>
        </div>

        <Divider />

        {/* ── 소개 ── */}
        <Section title="소개">
          <ul className="space-y-1.5">
            {[
              '반복되는 로직을 공통 라이브러리로 표준화하여 팀의 개발 생산성을 개선하는, 확장성에 진심인 개발자입니다.',
              '불규칙한 에러 응답을 표준화된 예외 처리 아키텍처로 리팩터링하여 시스템 안정성을 확보하고, 동료의 디버깅 효율을 개선하는 데 즐거움을 느낍니다.',
              '객체의 책임 분리를 기반으로 유연한 구조를 설계하며, 지속적인 코드 리뷰와 복기를 통해 기술적 부채를 해결하는 과정에 흥미를 느낍니다.',
              '레거시 인증 체계를 JWT 기반의 Stateless 아키텍처로 개선하여 보안성과 확장성을 동시에 확보한 경험이 있습니다.',
              '기술적 의사결정 과정에서 팀원들과 적극적으로 논의하며, 단순 구현을 넘어 비즈니스 가치를 함께 창출하는 협업을 지향합니다.',
            ].map((text, i) => (
              <li key={i} className="flex gap-2 text-sm text-zinc-600 leading-6 list-none">
                <span className="text-zinc-300 shrink-0 mt-0.5">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* ── 경력 ── */}
        <Section title="경력">
          <div className="space-y-12 print:space-y-10">

            {/* 미트매치 */}
            <ProjectBlock
              title="미트매치"
              subtitle="축산물 거래소 플랫폼"
              tag="실무"
              period="2025.02 — 2025.12"
              links={[{ label: 'Site', href: 'https://www.meatmatch.co.kr/' }]}
              tech="Java · Spring Boot · MySQL · JUnit · Git · Slack · Jira · Figma"
              bullets={[
                {
                  title: '미트뱅크(축산물 담보대출 서비스) 신규 개발 (기여도 60%)',
                  results: [
                    '(2025.09 기준) 누적 180억 원 규모 대출 프로세스 안정적 운영',
                    '금융 계산 오류 리스크 제거 및 운영 기준 정립',
                  ],
                  details: [
                    '미트매치 플랫폼 내 신규 금융 서비스로, 축산물을 담보로 한 대출 프로세스(접수~상환·출고) 전반 설계 및 구현',
                    '정책 정의서 내 단리/복리 혼선을 식별하고, 7가지 이자 발생 케이스를 재정의하여 계산 로직 전면 개선 → 유관 부서 협의를 통해 전사 표준 로직으로 채택',
                    '이자 정산 및 출고 처리 로직을 동시성 이슈를 고려해 재설계하고 모듈화하여 안정성과 유지보수성 향상',
                    '기획 부재 상황에서 내부 정책 분석 · 유사 금융 서비스 분석을 통해 공매 처리 정책 초안 수립 및 실제 서비스 적용',
                  ],
                },
                {
                  title: '미트뱅크 수입판매 서비스 신규 개발',
                  results: ['내부 QA 문서 도입 후 이슈 70% 감소'],
                  details: [
                    '미트매치 플랫폼 내 수입 축산물 대금 결제를 위한 금융 모듈 신규 개발',
                    '메인 백엔드 개발자로서 접수, 심사, 승인/거절, 출고, 진행 현황 등 전반적인 사용자 API 설계 및 구현',
                    'QA 기준 부재 문제를 인지하고 내부 QA 테스트 문서를 최초로 구축 · 공유 → 테스트 기준 표준화 및 커뮤니케이션 비용 절감, 배포 전 이슈 사전 차단',
                  ],
                },
                {
                  title: '미트매치 플랫폼 고도화 / 유지보수',
                  results: [
                    '리팩터링 후 장애 0건',
                    '코드 중복률 30% 감소',
                  ],
                  details: [
                    '초기 레거시 코드 및 테이블 구조를 분석하여 공통 코드 모듈화 및 스키마 리팩터링 수행',
                    '기능 영향 범위 분석 및 전체 기능 테스트를 통해 안정성 검증 후 점진적 개선 적용',
                    '신규 요구사항 반영 및 버그 대응을 통해 안정적 서비스 운영 지원',
                  ],
                },
              ]}
            />

            {/* 포유소프트 */}
            <ProjectBlock
              title="포유소프트"
              subtitle="정산 등 PG 시스템"
              tag="실무"
              period="2025.01 — 진행 중"
              tech="Java · Spring Boot · MySQL · Redis · Git · Jira"
              bullets={[
                {
                  title: '여러 레포지토리에서 반복되는 로직을 공통 라이브러리로 표준화',
                  results: ['기존 대비 코드 작성량 30% 감소'],
                  details: [
                    'GitHub Packages를 통해 배포하여 4개의 프로젝트에 적용',
                  ],
                },
                {
                  title: '전사 공통 예외 처리 아키텍처 설계 및 표준화',
                  results: ['예외 발생 시 원인 파악 시간 단축 및 도입 이후 현재까지 예외 미처리로 인한 런타임 에러 0건 유지'],
                  details: [
                    '잔존해 있던 불규칙한 에러 응답 구조와 예외 처리 부재로 인한 시스템 디버깅 효율 저하 및 클라이언트 대응 혼선 발생',
                    '`@RestControllerAdvice`와 `ExceptionHandler`를 활용한 글로벌 예외 처리 메커니즘 구축',
                    '커스텀 `ServiceException`을 최상위 객체로 설계하고, 각 도메인별(User, Payment 등) 전용 예외가 이를 상속받도록 하여 예외 계층 구조 확립',
                  ],
                },
                {
                  title: '레거시 세션 방식에서 JWT 기반 인증 체계로 전환',
                  results: [
                    'PG사의 핵심인 인증/보안 로직을 강화하여 PG사 및 파트너사와의 기술적 신뢰 관계 강화',
                    '서버 메모리 의존성을 제거하여 스케일 아웃이 용이한 환경을 구축하고, 대규모 트래픽 대응 기반 마련',
                  ],
                  details: [
                    '클라이언트 측에 사용자 식별 정보가 노출되는 보안 취약점을 해결하기 위해 Stateless 인증 구조로의 전환 주도',
                    'Access Token의 만료 시간을 짧게 설정하고, Redis를 활용한 Refresh Token 관리를 통해 보안성과 사용자 편의성을 동시에 확보',
                  ],
                },
              ]}
            />

          </div>
        </Section>

        <Divider />

        {/* ── 기술 스택 ── */}
        <Section title="기술 스택">
          <div className="space-y-4">
            <SkillGroup label="Back-End" items={['Java', 'Spring Boot', 'MySQL', 'Redis', 'JPA']} />
            <SkillGroup label="Collaboration & Tools" items={['Slack', 'Git', 'Github', 'Jira', 'Confluence']} />
            <SkillGroup label="Architecture" items={['REST API', 'DDD', 'Bitbucket', 'Bamboo', 'Asana']} />
          </div>
        </Section>

        <Divider />

        {/* ── 학력 ── */}
        <Section title="학력">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <p className="text-sm text-zinc-700">한국방송통신대학교 컴퓨터과학과 <span className="text-zinc-500">(재학)</span></p>
              <span className="text-xs text-zinc-400 shrink-0">2025.03 — 현재</span>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-zinc-700">데이터융합 JAVA 응용 SW개발자 취업과정 <span className="text-zinc-500">(수료)</span></p>
                <p className="text-xs text-zinc-400 mt-0.5">중앙정보처리학원</p>
              </div>
              <span className="text-xs text-zinc-400 shrink-0">2023.07 — 2024.01</span>
            </div>
            <div className="flex items-start justify-between">
              <p className="text-sm text-zinc-700">한양여자대학교 실무영어과 <span className="text-zinc-500">(졸업)</span></p>
              <span className="text-xs text-zinc-400 shrink-0">2020.03 — 2022.02</span>
            </div>
          </div>
        </Section>

      </div>

      <PrintButton />
    </div>
  )
}

/* ── Helpers ── */

function Divider() {
  return <hr className="border-zinc-200 my-7 print:my-4" />
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 print:mb-2">{title}</h2>
      {children}
    </section>
  )
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold text-zinc-500 mb-1.5">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map(item => (
          <span key={item} className="text-xs text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded">{item}</span>
        ))}
      </div>
    </div>
  )
}

type Bullet = string | { title: string; results: string[]; details: string[] }

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i} className="font-semibold text-zinc-800">{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className="text-[11px] font-mono bg-zinc-100 px-1 rounded">{part.slice(1, -1)}</code>
    return part
  })
}

function ProjectBlock({
  title,
  subtitle,
  tag,
  period,
  links,
  tech,
  bullets,
}: {
  title: string
  subtitle?: string
  tag: string
  period: string
  links?: { label: string; href: string }[]
  tech: string
  bullets: Bullet[]
}) {
  return (
    <div>
      <div className="mb-3">
        <div className="flex items-center justify-between mb-0.5">
          <div className="flex items-baseline gap-2">
            <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
            <span className="text-[10px] text-indigo-500 font-mono">{tag}</span>
          </div>
          <span className="text-xs text-zinc-400 shrink-0">{period}</span>
        </div>
        {subtitle && <p className="text-xs text-zinc-500 mb-1">{subtitle}</p>}
        {links && links.length > 0 && (
          <div className="flex items-center gap-2 mb-1.5">
            {links.map((l, i) => (
              <span key={l.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-zinc-300 text-xs">·</span>}
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
                >
                  {l.label} ↗
                </a>
              </span>
            ))}
          </div>
        )}
        <p className="text-xs text-zinc-400 font-mono">{tech}</p>
      </div>
      <ul className="space-y-4 print:space-y-3">
        {bullets.map((b, i) =>
          typeof b === 'string' ? (
            <li key={i} className="flex gap-2 text-sm text-zinc-700 leading-6">
              <span className="text-zinc-400 shrink-0 mt-0.5">•</span>
              {b}
            </li>
          ) : (
            <li key={i} className="flex gap-2">
              <span className="text-zinc-400 shrink-0 mt-0.5">•</span>
              <div className="space-y-1.5 w-full">
                <p className="text-sm font-semibold text-zinc-800 leading-snug">{b.title}</p>
                <ul className="space-y-0.5">
                  {b.details.map((d, j) => (
                    <li key={j} className="flex gap-1.5 text-xs text-zinc-500 leading-5">
                      <span className="text-zinc-300 shrink-0">–</span>
                      <span>{renderInline(d)}</span>
                    </li>
                  ))}
                </ul>
                {b.results.length > 0 && (
                  <div className="mt-1 pt-1 border-l-2 border-indigo-100 pl-2.5">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5">성과</p>
                    <ul className="space-y-0.5">
                      {b.results.map((r, j) => (
                        <li key={j} className="flex gap-1.5 text-xs text-indigo-500 font-medium leading-5">
                          <span className="shrink-0">→</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
