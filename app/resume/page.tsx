import PrintButton from './PrintButton'
import ProfilePhoto from './ProfilePhoto'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '조건희 | 이력서',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[720px] mx-auto px-10 py-14 print:px-10 print:py-8">

        {/* ── HEADER ── */}
        <div className="flex items-center gap-6 mb-8 print:mb-6">
          <ProfilePhoto />
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 mb-0.5">조건희</h1>
            <p className="text-sm text-zinc-500 mb-3">Backend Developer</p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500">
              <a href="mailto:devkunhee0817@gmail.com" className="hover:text-zinc-800">devkunhee0817@gmail.com</a>
              <span className="text-zinc-300">·</span>
              <span>010-7917-7975</span>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 소개 ── */}
        <Section title="소개">
          <p className="text-zinc-600 text-sm leading-7 print:leading-6">
            실무에서 국제약품·하나제약 LIMS를 개발하며 동시성 제어, 쿼리 최적화, 배치 안정성 등
            운영 환경의 실제 문제를 직접 발견하고 해결한 경험을 쌓았습니다.
            단순히 기능을 만드는 것을 넘어 왜 그 문제가 발생했는지 파고들고,
            구조적으로 재발을 막는 방식을 지향합니다.
            사이드 프로젝트에서도 성능 병목·보안·동시성 이슈를 스스로 발굴하며 역량을 넓혀가고 있습니다.
            최근에는 바이브 코딩에 깊은 관심을 가지고 주 2회 스터디를 통해 AI 도구를 활용한 개발 방식을 꾸준히 탐구하고 있습니다.
          </p>
        </Section>

        <Divider />

        {/* ── 경력 ── */}
        <Section title="경력">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-800">(주) 인터페이스정보기술</p>
              <p className="text-sm text-zinc-500 mt-0.5">개발팀 · 주임</p>
            </div>
            <span className="text-xs text-zinc-400 shrink-0 mt-0.5">2024.03 — 2026.03</span>
          </div>
        </Section>

        <Divider />

        {/* ── 기술 스택 ── */}
        <Section title="기술 스택">
          <div className="space-y-2 print:grid print:grid-cols-2 print:gap-x-6 print:gap-y-1 print:space-y-0 text-sm text-zinc-600">
            <SkillRow label="Language"     items={['Java']} />
            <SkillRow label="Framework"    items={['Spring Boot', 'Spring Data JPA', 'Spring Security', 'Spring Cache', 'QueryDSL', 'MyBatis']} />
            <SkillRow label="Database"     items={['MySQL', 'Oracle', 'Redis']} />
            <SkillRow label="Architecture" items={['REST API', 'DDD', 'Event Driven', 'SSE']} />
            <SkillRow label="Testing"      items={['JUnit', 'Mockito', 'TestContainers']} />
            <SkillRow label="Infra"        items={['AWS S3', 'Docker']} />
          </div>
        </Section>

        <Divider />

        {/* ── 프로젝트 경험 ── */}
        <Section title="프로젝트 경험">
          <div className="space-y-12 print:space-y-10">

            {/* 국제약품 LIMS */}
            <ProjectBlock
              title="국제약품 LIMS"
              tag="실무"
              period="2024 — 2025"
              tech="Java · Spring Boot · Spring Security · Spring Cache · Redis · Oracle · MyBatis"
              bullets={[
                {
                  title: '동시성 제어 공통 라이브러리 설계',
                  summary: 'Redis 분산 락 기반, 중복 승인·상태 꼬임 완전 제거',
                  details: [
                    '여러 화면에서 동일 데이터 동시 승인 시 상태 꼬임 문제 발생',
                    'Redis 분산 락을 공통 라이브러리로 추상화하여 전 모듈에 일관 적용',
                  ],
                },
                {
                  title: '보고서 쿼리 성능 튜닝',
                  summary: '평균 응답 4.2s → 2.1s (50% 단축)',
                  details: [
                    '실행 계획 분석으로 불필요 JOIN 및 풀스캔 구간 식별',
                    'JOIN 제거 및 인덱스 최적화 적용',
                  ],
                },
                {
                  title: '캐싱 전략 도입',
                  summary: '코드성·마스터 데이터 선별 적용, Evict 방식으로 정합성 유지',
                  details: [
                    '반복 조회가 많은 코드성·마스터 데이터에 한정하여 캐시 적용',
                    '데이터 변경 시 Evict 방식으로 불일치 리스크 최소화',
                  ],
                },
              ]}
            />

            {/* 하나제약 LIMS */}
            <ProjectBlock
              title="하나제약 LIMS"
              tag="실무"
              period="2025 — 2026"
              tech="Java · Spring Boot · Spring Security · Oracle · MyBatis"
              bullets={[
                {
                  title: '운영 배치 안정성 개선',
                  summary: '자동 재시도(최대 3회) + 실패 시 메일 알림으로 일시적 장애 자동 복구',
                  details: [
                    '일시적 네트워크·DB 장애로 배치가 중단되는 문제 발생',
                    '최대 3회 자동 재시도 + 최종 실패 시 메일 알림 발송 구조로 개선',
                  ],
                },
                {
                  title: '전략 패턴 적용',
                  summary: 'if-else 분기 제거, 기존 코드 수정 없이 신규 유형 확장 가능',
                  details: [
                    '처리 유형 증가로 서비스 내 if-else 분기가 복잡해지는 문제 발생',
                    '전략 패턴으로 도메인 책임 분리, OCP 구조로 신규 유형 추가 대응',
                  ],
                },
              ]}
            />

            {/* 개인 블로그 플랫폼 */}
            <ProjectBlock
              title="개인 블로그 플랫폼"
              tag="사이드"
              period="2026 — 진행 중"
              links={[
                { label: 'GitHub', href: 'https://github.com/imkh817/blog-service' },
                { label: 'Docs', href: 'https://github.com/imkh817/blog-service/blob/master/README.MD' },
                { label: 'Demo', href: 'https://my-devlog.duckdns.org/' },
              ]}
              tech="Spring Boot · Java · MySQL · Redis · QueryDSL · AWS S3 · JUnit · TestContainers"
              bullets={[
                {
                  title: 'Fetch Join pagination 문제',
                  summary: '8.2s → 729ms, Heap 94% 감소',
                  details: [
                    '컬렉션 JOIN + 페이징 시 LIMIT 미적용으로 30만 row 전체 메모리 로드 발생',
                    '@BatchSize 전략으로 전환하여 인메모리 페이징 문제 해결',
                  ],
                },
                {
                  title: '조회수 race condition 해결',
                  summary: 'Redis GETDEL 원자 연산',
                  details: [
                    'GET → DEL 사이 INCR이 끼어드는 동시성 문제 테스트로 재현',
                    'GETDEL로 변경하여 원자적 처리',
                  ],
                },
                {
                  title: 'SSE 알림 타이밍 이슈 해결',
                  summary: 'DB 저장 선행 + AFTER_COMMIT 이벤트 전송 구조로 개선',
                  details: [
                    'SSE 수신 후 알림 조회 시 빈 결과가 발생하는 타이밍 문제 발견',
                    '트랜잭션 커밋 이후 이벤트 전송하도록 구조 분리',
                  ],
                },
                {
                  title: 'JWT 인증 보안 취약점 발견 및 대응',
                  summary: 'Redis TTL 블랙리스트 + Refresh Token Rotation 도입',
                  details: [
                    '로그아웃 후에도 Access Token 유효, Refresh Token 재사용 문제 테스트로 재현',
                    'Redis 기반 블랙리스트 및 토큰 Rotation 전략 적용',
                  ],
                },
                {
                  title: '좋아요 정렬 요구 대응을 위한 설계 변경',
                  summary: 'Post.like_count 비정규화 + 이벤트 기반 동기화',
                  details: [
                    'Redis 캐시 데이터는 ORDER BY 직접 사용 불가 확인',
                    'AFTER_COMMIT 이벤트로 Aggregate 경계를 유지하며 동기화',
                  ],
                },
              ]}
            />

            {/* BillMate */}
            <ProjectBlock
              title="BillMate"
              tag="사이드"
              period="2026.03.17 - 2026.03.20"
              links={[
                { label: 'GitHub', href: 'https://github.com/imkh817/bill-mate' },
                { label: 'Docs', href: 'https://github.com/imkh817/bill-mate/blob/master/README.md' },
                { label: 'Demo', href: 'https://www.youtube.com/watch?v=LvoNzLt9rJ8&feature=youtu.be' },
              ]}
              tech="Java · Spring Boot · MySQL · Slack Bolt · Claude Code"
              bullets={[
                {
                  title: 'Claude Code 기반 바이브 코딩으로 전체 설계 및 구현',
                  summary: '단독 개발 기간 단축, AI 제안 코드의 기술적 판단·수정 역량 검증',
                  details: [
                    'AI가 생성한 코드의 구조적 문제(비동기 처리 누락, 토큰 관리 방식)를 직접 식별·개선',
                    '요구사항 → 설계 결정 → 코드 리뷰의 전 과정을 AI와 협업하며 주도',
                  ],
                },
                {
                  title: 'Slack 3초 응답 제한 대응',
                  summary: 'ctx.ack() 즉시 응답 + @Async 처리로 타임아웃 완전 해소',
                  details: [
                    'Slack slash command는 3초 내 응답 필수, DB 조회·메시지 생성 포함 시 초과 발생',
                    '3초 제한과 무관한 별도 스레드에서 실제 처리 후 Slack API 직접 발송',
                  ],
                },
                {
                  title: '멀티 워크스페이스 OAuth 설계',
                  summary: '워크스페이스별 bot token 독립 관리, 단일 앱으로 다수 워크스페이스 서빙',
                  details: [
                    '워크스페이스마다 다른 토큰 필요, 단일 환경변수 방식은 확장 불가',
                    'SlackInstallation 엔티티에 teamId별 토큰 저장, Bolt InstallationService 구현',
                  ],
                },
                {
                  title: '상태 머신 기반 대화형 구독 등록 플로우',
                  summary: 'ConcurrentHashMap 상태 저장소로 4단계 멀티턴 플로우 구현',
                  details: [
                    '카테고리 선택 → 서비스명 → 금액 → 결제일 순서를 DM 상호작용으로 처리해야 함',
                    'ConversationStep enum + ConcurrentHashMap으로 사용자별 상태 추적',
                  ],
                },
                {
                  title: 'CommandHandler 전략 패턴으로 슬래시 커맨드 확장성 확보',
                  summary: '신규 커맨드 추가 시 기존 코드 수정 없이 구현체만 추가',
                  details: [
                    '커맨드 증가에 따라 라우터 내 분기 로직이 비대해지는 문제 예상',
                    '커맨드별 CommandHandler 인터페이스 구현, @PostConstruct에서 Bolt 앱에 등록',
                  ],
                },
              ]}
            />

          </div>
        </Section>

        <Divider />

        {/* ── 포트폴리오 & 기술 블로그 ── */}
        <Section title="포트폴리오 & 기술 블로그">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-zinc-600 leading-6 mb-1">
                프로젝트 상세 설명, 트러블슈팅, 설계 결정 과정을 정리한 포트폴리오 사이트입니다.
              </p>
              <a
                href="https://my-portfolio-kappa-seven-40.vercel.app/#projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors text-sm"
              >
                포트폴리오 바로가기 ↗
              </a>
            </div>
            <div>
              <p className="text-sm text-zinc-600 leading-6 mb-1">
                사이드 프로젝트에서 발견한 기술적 문제와 해결 과정을 기록하는 기술 블로그입니다.
              </p>
              <a
                href="https://imkh817.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors text-sm"
              >
                기술 블로그 바로가기 ↗
              </a>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── 수상 ── */}
        <Section title="수상">
          <p className="text-sm text-zinc-700">
            와이즈넛 기업 연계 프로젝트 우수상{' '}
            <span className="text-indigo-600 font-semibold">(1위)</span>
          </p>
        </Section>

        <Divider />

        {/* ── 학력 ── */}
        <Section title="학력">
          <p className="text-sm text-zinc-700">
            한국방송통신대학교 컴퓨터과학과{' '}
            <span className="text-zinc-500">(재학, 4학년)</span>
          </p>
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

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex gap-3">
      <span className="w-28 shrink-0 text-zinc-400 text-xs font-mono pt-0.5">{label}</span>
      <span className="text-zinc-700 text-sm">{items.join(' · ')}</span>
    </div>
  )
}

type Bullet = string | { title: string; summary: string; details: string[] }

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
  tag,
  period,
  links,
  tech,
  bullets,
}: {
  title: string
  tag: string
  period: string
  links?: { label: string; href: string }[]
  tech: string
  bullets: Bullet[]
}) {
  return (
    <div>
      {/* Title + links + tech + first bullet: keep together on same page */}
      <div style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-baseline gap-2">
            <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
            <span className="text-[10px] text-indigo-500 font-mono">{tag}</span>
          </div>
          <span className="text-xs text-zinc-400 shrink-0">{period}</span>
        </div>
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
        <p className="text-xs text-zinc-400 font-mono mb-3">{tech}</p>
        {/* 첫 번째 bullet을 제목과 같은 페이지에 묶기 */}
        {bullets[0] && (() => {
          const b = bullets[0]
          return typeof b === 'string' ? (
            <div className="flex gap-2 text-sm text-zinc-700 leading-6">
              <span className="text-zinc-400 shrink-0 mt-0.5">•</span>{b}
            </div>
          ) : (
            <div className="flex gap-2">
              <span className="text-zinc-400 shrink-0 mt-0.5">•</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-zinc-800 leading-snug">{b.title}</p>
                <p className="text-xs text-indigo-500 font-medium">결과: {b.summary}</p>
                <ul className="space-y-0.5 pt-0.5">
                  {b.details.map((d, j) => (
                    <li key={j} className="flex gap-1.5 text-xs text-zinc-500 leading-5">
                      <span className="text-zinc-300 shrink-0">–</span>
                      <span>{renderInline(d)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })()}
      </div>
      {/* Bullets (첫 번째는 위에서 렌더링됨) */}
      {bullets.length > 1 && <ul className="space-y-3 print:space-y-2 mt-3">
        {bullets.slice(1).map((b, i) =>
          typeof b === 'string' ? (
            <li key={i} className="flex gap-2 text-sm text-zinc-700 leading-6">
              <span className="text-zinc-400 shrink-0 mt-0.5">•</span>
              {b}
            </li>
          ) : (
            <li key={i} className="flex gap-2">
              <span className="text-zinc-400 shrink-0 mt-0.5">•</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-zinc-800 leading-snug">{b.title}</p>
                <p className="text-xs text-indigo-500 font-medium">결과: {b.summary}</p>
                <ul className="space-y-0.5 pt-0.5">
                  {b.details.map((d, j) => (
                    <li key={j} className="flex gap-1.5 text-xs text-zinc-500 leading-5">
                      <span className="text-zinc-300 shrink-0">–</span>
                      <span>{renderInline(d)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        )}
      </ul>}
    </div>
  )
}
