# 콩한쪽 — 잃어버린 에어팟을 건 운명의 게임

## 프로젝트 구조

```
├── .gitignore
├── index.html      전체 앱 (메인 + AI 매칭 + 운명의 게임, 단일 파일)
├── README.md
```

## 실행 방법

`index.html`을 브라우저에서 열면 됩니다.

## 자동 커밋 & 푸시

파일 수정 시 자동으로 GitHub에 커밋·푸시하려면 터미널에서:

```bash
npm run watch
```

실행한 뒤 작업하면, 변경 후 약 3초 뒤 자동으로 `git add` → `git commit` → `git push`가 실행됩니다. (중단: `Ctrl+C`)
