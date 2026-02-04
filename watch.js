const fs = require('fs');
const { execSync } = require('child_process');

const DEBOUNCE_MS = 3000;
let timeout;

function run() {
  try {
    execSync('git add -A', { stdio: 'inherit', cwd: __dirname });
    const status = execSync('git status --short', { encoding: 'utf8', cwd: __dirname });
    if (status.trim()) {
      execSync('git commit -m "auto: update"', { stdio: 'inherit', cwd: __dirname });
      execSync('git push', { stdio: 'inherit', cwd: __dirname });
      console.log('[%s] 커밋 & 푸시 완료', new Date().toLocaleTimeString('ko-KR'));
    }
  } catch (e) {
    console.error(e.message || e);
  }
}

function schedule() {
  clearTimeout(timeout);
  timeout = setTimeout(run, DEBOUNCE_MS);
}

fs.watch(__dirname, { recursive: true }, (event, filename) => {
  if (!filename || filename.includes('.git') || filename.includes('node_modules')) return;
  if (filename === 'watch.js') return;
  console.log('변경 감지:', filename);
  schedule();
});

console.log('파일 변경 감지 중... (수정 시 자동 커밋 & 푸시)');
