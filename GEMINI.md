# 📕 프로젝트 가이드라인: Emotion-Driven Ledger

## 1. 프로젝트 개요
* **목표:** 감정 기록 기반의 소비 분석 웹 애플리케이션 개발.
* **핵심 기능:** 가계부 CRUD 및 감정별 지출 시각화 대시보드.
* **대상 플랫폼:** 반응형 웹 디자인. **모바일(아이패드 가로/세로) 환경을 최우선 디자인**하여 사용성을 확보한다.

## 2. 기술 스택 명시 [cite: 40, 56]
* **Frontend:** React (SPA 구조)
* **Styling:** Tailwind CSS (반응형 및 빠른 UI 구축) 
* **Data Storage:** LocalStorage 또는 IndexedDB (간단한 데이터 저장이 최소 요구사항이므로). (이후 백엔드 API로 확장 가능)

## 3. 코딩 스타일 및 컨벤션 [cite: 40]
* **언어:** JavaScript ES6+
* **커밋 메시지:** Conventional Commits (예: `feat:`, `fix:`, `chore:`)를 준수하며, **AI 활용 시 커밋 메시지에 명시**한다. 예: `feat: Add expense category (AI-assisted)`


## 4. AI 활용 전략
* **Gemini CLI**를 활용하여 React 컴포넌트 생성, Tailwind CSS 스타일링 코드, 데이터 시각화 로직, 테스트 코드 및 버그 수정에 적극 활용한다.