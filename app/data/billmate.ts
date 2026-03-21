import type { Achievement } from './types'

export const billmateOverview = {
  tag: '사이드 프로젝트',
  period: '2026.03.17 — 2026.03.20',
  description1: 'Slack 워크스페이스에서 구독 서비스를 등록·관리하는 슬래시 커맨드 봇.',
  description2: 'Claude Code 기반 바이브 코딩으로 3일 만에 단독 설계·구현하며 AI 협업 개발 역량을 검증했습니다.',
  description3: 'AI가 생성한 코드의 구조적 문제를 직접 식별·개선하고, 요구사항 → 설계 결정 → 코드 리뷰의 전 과정을 주도했습니다.',
  tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Slack Bolt', 'JUnit', 'Docker'],
  links: {
    github: 'https://github.com/imkh817/bill-mate',
    docs: 'https://github.com/imkh817/bill-mate/blob/master/README.md',
    demo: 'https://www.youtube.com/watch?v=LvoNzLt9rJ8&feature=youtu.be',
  },
}

export const billmateFeatures: string[] = [
  'Slack 슬래시 커맨드로 구독 서비스 등록·조회·삭제',
  '4단계 DM 기반 대화형 구독 등록 플로우',
  '멀티 워크스페이스 OAuth 지원',
  '구독 결제일 알림',
]

export const billmateAchievements: Achievement[] = [
  {
    number: '01',
    title: 'Slack 3초 응답 제한 대응',
    problem: [
      'Slack slash command는 3초 내 응답 필수. DB 조회·메시지 생성 포함 시 초과 발생.',
    ],
    root: [
      '슬래시 커맨드 핸들러가 응답 준비와 전송을 동기적으로 처리하여 3초를 초과.',
    ],
    approach: [
      'ctx.ack()로 즉시 빈 응답을 반환해 Slack 타임아웃을 해소',
      '@Async 어노테이션으로 실제 처리(DB 조회·메시지 생성·전송)를 별도 스레드에서 비동기 수행',
      '처리 완료 후 Slack API를 직접 호출하여 사용자에게 결과 전달',
    ],
    result: [
      '3초 응답 제한에 관계없이 모든 슬래시 커맨드가 정상 처리됨. 응답 타임아웃 완전 해소.',
    ],
    tags: ['Slack Bolt', '@Async', 'Non-blocking', 'ctx.ack()'],
  },
  {
    number: '02',
    title: '멀티 워크스페이스 OAuth 설계',
    problem: [
      '워크스페이스마다 다른 bot token이 필요. 단일 환경변수 방식은 확장 불가.',
    ],
    root: [
      'Slack OAuth는 워크스페이스별로 액세스 토큰을 발급하므로, 단일 토큰으로는 다수 워크스페이스 서빙이 불가능.',
    ],
    approach: [
      'SlackInstallation 엔티티 설계 — teamId, botToken, botUserId 등 워크스페이스별 정보 DB 저장',
      'Bolt의 InstallationService 인터페이스를 구현하여 teamId 기반으로 토큰 조회',
      'OAuth 콜백 엔드포인트에서 설치 정보를 DB에 저장하는 흐름 구성',
    ],
    result: [
      '단일 앱 인스턴스로 다수 워크스페이스를 독립적으로 서빙. 워크스페이스 추가 시 코드 수정 없이 DB 저장만으로 확장.',
    ],
    tags: ['OAuth', 'Slack Bolt', 'InstallationService', 'Multi-Workspace'],
  },
  {
    number: '03',
    title: '상태 머신 기반 대화형 구독 등록 플로우',
    problem: [
      '카테고리 선택 → 서비스명 → 금액 → 결제일의 4단계를 DM 상호작용으로 처리해야 함. 단일 슬래시 커맨드로는 처리 불가.',
    ],
    root: [
      'Slack 슬래시 커맨드는 단발성이라 멀티턴 상태를 자체적으로 유지하지 않음.',
    ],
    approach: [
      'ConversationStep enum으로 각 단계 정의 (SELECT_CATEGORY → INPUT_NAME → INPUT_AMOUNT → INPUT_BILLING_DAY)',
      'ConcurrentHashMap<String, ConversationState>으로 사용자(userId)별 현재 단계와 임시 입력값 저장',
      'DM 수신 이벤트마다 사용자 상태를 조회하여 다음 단계 안내 or 최종 저장 처리',
    ],
    result: [
      '4단계 멀티턴 구독 등록 플로우가 자연스러운 DM 대화로 동작. 동시 다수 사용자의 진행 상태가 독립적으로 관리됨.',
    ],
    tags: ['State Machine', 'ConcurrentHashMap', 'Slack Event', 'Multi-turn'],
  },
  {
    number: '04',
    title: 'CommandHandler 전략 패턴으로 슬래시 커맨드 확장성 확보',
    problem: [
      '커맨드 증가에 따라 라우터 내 if-else 분기 로직이 비대해지는 문제 예상.',
    ],
    root: [
      '모든 커맨드 처리 로직이 단일 핸들러에 집중되어 OCP를 위반하는 구조.',
    ],
    approach: [
      'CommandHandler 인터페이스 정의 — supports(command): boolean, handle(ctx): void',
      '각 슬래시 커맨드별 구현체 작성 (예: ListSubscriptionHandler, AddSubscriptionHandler)',
      '@PostConstruct에서 모든 CommandHandler 구현체를 Bolt 앱에 자동 등록',
    ],
    result: [
      '신규 커맨드 추가 시 기존 코드 수정 없이 구현체만 추가. OCP 충족. 커맨드별 단위 테스트 용이.',
    ],
    tags: ['Strategy Pattern', 'OCP', 'Spring Bean', 'Slack Bolt'],
  },
]
