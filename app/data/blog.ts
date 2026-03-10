import type { Achievement } from './types'

export const blogOverview = {
  tag: '사이드 프로젝트',
  description1: '직접 사용하기 위해 만든 블로그 서비스.',
  description2: '단순 기능 구현을 넘어 성능 병목, 동시성, 보안 이슈를 직접 발견하고 해결하는 과정에 집중했습니다.',
  description3: '테스트 코드로 문제를 재현하고, 지표로 결과를 검증하는 방식으로 개발했습니다.',
  tech: ['Spring Boot', 'Java', 'MySQL', 'Redis', 'Spring Security', 'Spring Data JPA', 'QueryDSL', 'AWS S3', 'JUnit', 'Test Container'],
}

export const blogFeatures: string[] = [
  '게시글 작성 / 검색 / 정렬 / 임시저장',
  '댓글 및 대댓글, 좋아요, 구독',
  'SSE 기반 실시간 알림',
  'JWT 인증 및 RefreshToken 관리',
  'Redis 기반 조회수·좋아요 카운트 처리',
  'Post-Comment Aggregate 분리 설계',
]

export const blogAchievements: Achievement[] = [
  {
    number: '01',
    title: '게시글 검색 API 최적화 — fetch join 메모리 페이징 발견 및 해결',
    problem: [
      'N+1 문제를 해결하기 위해 fetch join을 적용했고, 기능 테스트는 정상이었습니다.',
      '그러나 성능 테스트 중 Hibernate 경고 로그와 함께 실제 SQL에 LIMIT 절이 적용되지 않는 것을 발견했습니다.',
      '게시글 100,000건·태그 300,000건 기준으로 단 5개의 요청만으로 Heap이 1.38GB까지 치솟고, 평균 응답 시간이 8.2초에 달했습니다.',
    ],
    root: [
      '1:N 컬렉션 fetch join과 페이징을 함께 사용하면, Hibernate는 데이터 정합성을 위해 LIMIT을 제거하고 전체 Row를 메모리에 올린 뒤 애플리케이션 단에서 페이징을 수행합니다.',
      '데이터가 늘수록 OOM 위험이 선형적으로 증가하는 구조였습니다.',
    ],
    approach: [
      'fetch join 제거 → DB 레벨에서 LIMIT/OFFSET이 동작하도록 변경',
      'default_batch_fetch_size: 100 설정으로 지연 로딩 시 IN 절 묶음 조회 적용하여 N+1 해소',
      'JMeter + VisualVM으로 개선 전후 Heap·CPU·응답 시간 지표 비교 검증',
    ],
    result: [
      '평균 응답 시간 8,193ms → 729ms (11.2배 향상)',
      'Heap 사용량 1.38GB → 76MB (94% 감소), CPU 점유율 80% → 20% (75% 절감)',
      '처리량 32.7/min → 4.5/sec (약 8.2배 향상)',
    ],
    metrics: [
      { label: '응답 시간', before: '8,193ms', after: '729ms', highlight: '11.2배 향상' },
      { label: 'Heap 사용량', before: '1.38GB', after: '76MB', highlight: '94% 감소' },
      { label: 'CPU 점유율', before: '80%', after: '20%', highlight: '75% 절감' },
    ],
    tags: ['JPA', 'QueryDSL', 'BatchSize', 'JMeter', 'VisualVM'],
  },
  {
    number: '02',
    title: 'Redis 조회수 flush 중 동시성으로 인한 카운트 유실 문제 해결',
    problem: [
      '조회수를 Redis에 누적 후 5분마다 DB에 flush하는 구조를 구현했습니다.',
      '동시성 테스트 중, flush가 GET으로 값을 읽은 직후 새로운 조회 요청이 INCR을 수행하고, 이후 flush가 DEL을 실행하면서 중간에 들어온 조회수 +1이 유실되는 상황을 발견했습니다.',
    ],
    root: [
      'GET과 DEL이 별개의 명령어라 두 연산 사이에 다른 요청이 끼어들 수 있었습니다.',
      '원자적 처리가 보장되지 않는 구조였습니다.',
    ],
    approach: [
      'Redis 공식 문서에서 GETDEL 명령어 확인 — 조회와 삭제를 하나의 원자적 연산으로 처리',
      'flush 로직의 GET + DEL을 GETDEL(getAndDelete)로 교체',
      '동일 동시성 시나리오 테스트 재실행으로 유실 없음 검증',
    ],
    result: [
      'GET과 DEL 사이에 다른 요청이 끼어드는 race condition이 원천 차단되어 조회수 유실 문제가 해소되었습니다.',
    ],
    tags: ['Redis', 'GETDEL', 'Atomic Operation', 'Concurrency'],
  },
  {
    number: '03',
    title: 'SSE 실시간 알림 — 오프라인 유실 방지 및 트랜잭션 정합성 확보',
    problem: [
      '① 사용자가 오프라인 상태일 때 발생한 알림이 SSE Emitter가 없어 그냥 무시됐습니다.',
      '② Notification을 DB에 저장하는 트랜잭션이 커밋되기 전에 SSE가 먼저 전송되어, 클라이언트가 알림 목록을 조회하면 빈 결과가 반환되는 타이밍 문제가 있었습니다.',
    ],
    root: [
      '① 알림을 전송만 하고 저장하지 않는 구조라 오프라인 사용자의 알림이 보관되지 않았습니다.',
      '② REQUIRES_NEW 트랜잭션이 커밋되기 전에 SSE가 발송되는 실행 순서 문제였습니다.',
    ],
    approach: [
      '구독 이벤트 발생 시 Notification 테이블에 먼저 저장 후 SSE 전송 시도하는 구조로 변경',
      'SSE 전송을 AFTER_COMMIT 기반 별도 이벤트로 분리 → Notification DB 커밋 완료 이후에만 SSE 발송',
      'REQUIRES_NEW 트랜잭션으로 알림 저장 실패가 구독 데이터에 영향을 주지 않도록 격리',
    ],
    result: [
      '오프라인 알림 유실 문제가 해소되었습니다.',
      'SSE 수신 후 즉시 알림을 조회했을 때 빈 결과가 반환되는 타이밍 이슈도 함께 해소되었습니다.',
    ],
    tags: ['SSE', 'Spring Event', 'AFTER_COMMIT', 'REQUIRES_NEW', 'TransactionalEventListener'],
  },
  {
    number: '04',
    title: 'JWT 보안 단계적 강화 — 블랙리스트 + RefreshToken Rotation',
    problem: [
      '① 로그아웃 후에도 기존 Access Token으로 API 호출이 그대로 성공했습니다.',
      '② RefreshToken 재발급 후 기존 토큰이 무효화되지 않아, 탈취된 RefreshToken으로 무한정 Access Token 재발급이 가능했습니다.',
    ],
    root: [
      'JWT는 stateless하여 서버가 발급한 토큰을 별도로 추적하지 않습니다.',
      '프론트에서 토큰을 삭제해도 서버 입장에서는 아무런 상태 변화가 없어, 유효 서명과 만료시간만 통과하면 인증이 허용됩니다.',
    ],
    approach: [
      '로그아웃 시 해당 Access Token을 Redis 블랙리스트에 등록, TTL을 토큰 남은 만료시간으로 설정 → 만료 시 자동 삭제',
      'Access Token 만료 시 자동 갱신을 위한 RefreshToken 도입 (Access: 30분, Refresh: 7일)',
      'Refresh Token Rotation 적용 — 재발급 시 기존 토큰 즉시 무효화, 이전 토큰 재사용 시 TokenTamperedException 발생',
      '각 단계마다 테스트 코드로 취약점을 직접 재현한 뒤 해결 여부를 검증',
    ],
    result: [
      '로그아웃 후 토큰 재사용이 차단되었습니다.',
      'RefreshToken 탈취 시 한 번 사용 후 이전 토큰이 즉시 무효화되어, 피해 범위가 최소화되는 구조가 확보되었습니다.',
    ],
    tags: ['JWT', 'Redis', 'Blacklist', 'Refresh Token', 'Token Rotation'],
  },
  {
    number: '05',
    title: '좋아요 정렬 요구사항으로 인한 설계 재검토 — Redis 캐시 → 비정규화',
    problem: [
      '좋아요 N+1 문제를 해결하기 위해 "관계 데이터는 DB, 카운트는 Redis"로 분리하는 구조를 설계했습니다.',
      '그런데 "좋아요 순 정렬" 요구사항이 추가되면서 문제가 생겼습니다. DB의 ORDER BY는 Redis를 참조할 수 없어 COUNT 서브쿼리가 매 정렬마다 실행되었고, Redis를 도입한 이유 자체가 사라졌습니다.',
    ],
    root: [
      'DB에도 likeCount 컬럼이 필요하고 Redis에도 likeCount를 유지하면, 두 저장소가 같은 숫자를 각자 최신으로 유지해야 하는 정합성 관리 부담이 발생합니다.',
      '정렬 요구사항이 추가된 시점에서 Redis가 해결해주는 것보다 관리해야 할 것이 더 많아졌다고 판단했습니다.',
    ],
    approach: [
      'Post 테이블에 like_count 컬럼 추가 (비정규화) — 정렬과 조회를 하나의 컬럼으로 통일',
      'PostLikeService가 Post 애그리거트를 직접 수정하는 문제를 인지 → AFTER_COMMIT 이벤트로 카운트 갱신 분리',
      'REQUIRES_NEW 트랜잭션으로 PostLike와 Post를 다른 트랜잭션에서 처리하여 애그리거트 경계 유지',
    ],
    result: [
      '좋아요 순 정렬이 컬럼 직접 참조로 단순해지고, 서브쿼리가 제거되어 정렬 성능이 확보되었습니다.',
      'PostLikeService가 Post 내부 구현에 의존하지 않는 구조로 개선되었습니다.',
    ],
    tags: ['Domain Design', 'AFTER_COMMIT', 'REQUIRES_NEW', 'Denormalization', 'Aggregate'],
  },
]
