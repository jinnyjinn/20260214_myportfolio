# 🚀 GitHub Pages 배포 가이드

## 문제 원인 분석

**주요 문제:**
- Next.js가 기본적으로 서버 사이드 렌더링(SSR)을 사용하지만, GitHub Pages는 정적 파일만 호스팅 가능
- `next.config.mjs`에 static export 설정이 없었음
- GitHub Actions 워크플로우가 설정되지 않았음

## ✅ 해결 완료 사항

### 1. Next.js Static Export 설정
`next.config.mjs` 파일을 수정하여 정적 사이트로 빌드하도록 설정:
- `output: 'export'` 추가 (정적 HTML 파일 생성)
- `basePath: '/20260214_myportfolio'` 추가 (GitHub Pages 경로 맞춤)
- `images.unoptimized: true` 추가 (이미지 최적화 비활성화)

### 2. GitHub Actions 워크플로우 생성
`.github/workflows/deploy.yml` 파일 생성:
- `main` 브랜치에 푸시할 때마다 자동 배포
- Node.js 20 환경에서 빌드
- GitHub Pages에 자동 업로드 및 배포

### 3. Jekyll 비활성화
`public/.nojekyll` 파일 생성으로 GitHub Pages의 Jekyll 처리 방지

---

## 📝 배포 단계

### Step 1: GitHub Repository 설정

1. **GitHub 저장소로 이동:**
   ```
   https://github.com/jinnyjinn/20260214_myportfolio
   ```

2. **Settings → Pages 메뉴로 이동**

3. **Source 설정:**
   - Source: `GitHub Actions` 선택 (Deploy from a branch 아님!)

### Step 2: 코드 커밋 및 푸시

터미널에서 다음 명령어 실행:

```bash
cd c:/Users/minbl/OneDrive/문서/antigravity/20260214_myportfolio

# 모든 변경사항 스테이징
git add .

# 커밋
git commit -m "Configure Next.js for GitHub Pages deployment"

# GitHub에 푸시
git push origin main
```

### Step 3: 배포 확인

1. **GitHub Actions 확인:**
   - 저장소의 **Actions** 탭으로 이동
   - "Deploy to GitHub Pages" 워크플로우가 실행되는지 확인
   - 약 2-3분 소요

2. **배포 완료 후 사이트 접속:**
   ```
   https://jinnyjinn.github.io/20260214_myportfolio/
   ```

---

## 🛠️ 로컬에서 빌드 테스트 (선택사항)

배포 전에 로컬에서 빌드가 정상적으로 되는지 확인:

```bash
# 빌드 실행
npm run build

# 빌드 성공 시 'out' 폴더가 생성됨
```

빌드 후 `out` 폴더에 정적 HTML, CSS, JS 파일들이 생성되어 있어야 합니다.

---

## ⚠️ 주의사항

### 1. 환경 변수 (Supabase)
`.env.local` 파일의 환경변수는 빌드 시에 포함되지 않습니다.

**해결 방법:**
- GitHub Secrets에 환경변수 추가
- 또는 `next.config.mjs`에서 public 환경변수 설정

### 2. 링크 경로 수정
`basePath`가 설정되었으므로, 내부 링크는 자동으로 처리됩니다.
하지만 절대 경로를 사용한 곳이 있다면 수정이 필요할 수 있습니다.

### 3. API Routes는 사용 불가
Static export에서는 API Routes (`pages/api/`)를 사용할 수 없습니다.
현재 프로젝트는 Supabase를 사용하므로 문제없습니다.

---

## 🔄 업데이트 방법

코드를 수정한 후 다시 배포하려면:

```bash
git add .
git commit -m "Update: 변경 내용 설명"
git push origin main
```

푸시 후 자동으로 GitHub Actions가 실행되어 재배포됩니다.

---

## 📊 배포 상태 확인

### GitHub Actions에서 확인:
1. 저장소 → **Actions** 탭
2. 가장 최근 워크플로우 클릭
3. 각 단계별 로그 확인

### 실패 시 체크리스트:
- [ ] `next.config.mjs`가 올바르게 설정되었는지
- [ ] `npm run build`가 로컬에서 성공하는지
- [ ] GitHub Pages Settings에서 Source가 "GitHub Actions"로 설정되었는지
- [ ] `.github/workflows/deploy.yml` 파일이 올바른 위치에 있는지

---

## 🎉 완료!

모든 설정이 완료되었습니다. 이제 코드를 푸시하면 자동으로 배포됩니다!

**최종 배포 URL:**
```
https://jinnyjinn.github.io/20260214_myportfolio/
```
