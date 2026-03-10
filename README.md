# 조건희 | 포트폴리오

개인 포트폴리오 웹사이트입니다. <br><br>
[포트폴리오 확인하기](https://my-portfolio-kappa-seven-40.vercel.app/#projects)


## 소개

실무 프로젝트와 사이드 프로젝트의 기술적 문제 해결 과정을 정리한 포트폴리오입니다.<br>
단순한 기능 나열이 아닌, 문제를 발견하고 해결한 과정 중심으로 구성했습니다.

## 프로젝트 구성

| 프로젝트 | 설명 |
|---------|------|
| 국제약품 LIMS | 분산 락 라이브러리 설계, 쿼리 튜닝 50% 개선, 제한적 캐싱 도입 |
| 하나제약 LIMS | 배치 안정성 개선, 도메인 책임 분리 및 전략 패턴 적용 |
| 개인 블로그 플랫폼 | 검색 API 11배 개선, Redis 동시성 처리, SSE 알림, JWT 보안 강화 |

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion

## 폴더 구조

```
app/
├── components/       # 메인 페이지 섹션 컴포넌트
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Footer.tsx
├── projects/         # 프로젝트 딥다이브 페이지
│   ├── lims/
│   ├── hana/
│   └── blog/
├── layout.tsx
├── page.tsx
└── globals.css
docs/                 # 블로그 프로젝트 기술 문서
```
