# 콩한쪽 — 잃어버린 에어팟을 건 운명의 게임

## 프로젝트 구조

```
├── .gitignore
├── index.html          전체 앱 (메인 + AI 매칭 + 운명의 게임 + 실시간 대전)
├── supabase-setup.sql  실시간 대전용 DB 설정 (Supabase에서 실행)
├── README.md
```

## 실행 방법

`index.html`을 브라우저에서 열면 됩니다.

## 실시간 대전 (다른 사람과 삼세판)

1. **[Supabase](https://supabase.com)** 에서 무료 프로젝트 생성
2. **SQL Editor**에서 `supabase-setup.sql` 내용 복사 후 실행
3. **Database > Replication**에서 `rooms`, `matchmaking` 테이블 Realtime **ON**
4. **Settings > API**에서 Project URL, anon public key 복사
5. `index.html` 상단의 `SUPABASE_URL`, `SUPABASE_ANON_KEY`에 붙여넣기
6. 메인에서 **실시간 대전** 클릭 → 상대가 들어올 때까지 대기 후 게임

## 자동 커밋 & 푸시

파일 수정 시 자동으로 GitHub에 커밋·푸시하려면 터미널에서:

```bash
npm run watch
```

실행한 뒤 작업하면, 변경 후 약 3초 뒤 자동으로 `git add` → `git commit` → `git push`가 실행됩니다. (중단: `Ctrl+C`)
