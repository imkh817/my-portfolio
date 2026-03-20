# Vercel 배포 가이드 (Next.js)

## 사전 준비

- GitHub에 레포지토리가 push되어 있어야 함
- [vercel.com](https://vercel.com) 계정 (GitHub 계정으로 가입 가능)

---

## 1단계 — 코드를 GitHub에 push

```bash
git add .
git commit -m "first commit"
git push origin master
```

---

## 2단계 — Vercel에 프로젝트 import

1. [vercel.com/new](https://vercel.com/new) 접속
2. **"Import Git Repository"** 클릭
3. GitHub 계정 연동 (처음이라면 권한 허용)
4. 배포할 레포지토리 선택 → **Import** 클릭

---

## 3단계 — 빌드 설정 확인

Next.js 프로젝트는 자동으로 감지됩니다. 별도 설정 없이 기본값 그대로 사용.

| 항목 | 값 |
|------|----|
| Framework Preset | Next.js (자동 감지) |
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

환경 변수가 있다면 **Environment Variables** 항목에 추가.

---

## 4단계 — Deploy 클릭

**Deploy** 버튼 클릭 → 1~2분 후 배포 완료.

완료되면 `https://프로젝트명.vercel.app` 형태의 URL이 발급됩니다.

---

## 이후 업데이트 배포 방법

코드 수정 후 push하면 **자동으로 재배포**됩니다.

```bash
git add .
git commit -m "update"
git push origin master
```

---

## 커스텀 도메인 연결 (선택)

1. Vercel 프로젝트 → **Settings → Domains**
2. 도메인 입력 → Add
3. 도메인 등록 업체에서 DNS 설정 (Vercel이 안내해 줌)

---

## 배포 상태 확인

- Vercel 대시보드: [vercel.com/dashboard](https://vercel.com/dashboard)
- CLI로 확인: `npx vercel ls`
