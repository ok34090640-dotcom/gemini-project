# 📋 개발 일지: Emotion-Driven Ledger

## 프로젝트 개요
* **프로젝트명:** Emotion-Driven Ledger
* **개발 기간:** 1주
* **목표:** CRUD 및 감정별 지출 시각화가 가능한 반응형 웹 가계부 구현

## 개발 과정
### Week 1 (날짜: 2025.10.20 ~) 

#### Day 1 프로젝트 기획 & 초기 설정
* **작업 내용**: 프로젝트 구조 생성, Git 초기화, GEMINI.md/README.md 작성.
* **Gemini CLI 사용 프롬프트**:
    * `React 프로젝트의 기본 폴더 구조와 package.json 파일을 설정해줘. [cite_start]Tailwind CSS 설정도 포함해줘.` 
* **결과 및 수정사항**: AI가 생성한 `tailwind.config.js` 파일에 아이패드 해상도를 고려한 커스텀 Breakpoint를 추가함.
* **학습 내용**: React와 Tailwind CSS의 초기 통합 과정을 학습함.

#### Day 2 UI 구현 (지출 입력 컴포넌트)
* **작업 내용**: 지출 입력 폼 (금액, 카테고리, 감정, 메모) 컴포넌트 구현.
* **Gemini CLI 사용 프롬프트**:
    * `React Input 컴포넌트와 Tailwind CSS를 사용하여 '감정 태그'를 선택할 수 있는 드롭다운 메뉴 코드를 생성해줘. 감정은 '행복, 불안, 스트레스, 만족'으로 구성.` 
* **결과 및 수정사항**: AI 코드는 기본 HTML `select` 태그를 사용했으나, 사용자 경험을 위해 커스텀 React 컴포넌트로 수정함.
* **커밋 (예시)**: `feat: Implement basic expense input form (AI-assisted)` 



Day 3: 지출 입력 폼 (CRUD - Create) 및 유효성 검사
작업 내용:

지출 입력 폼 컴포넌트 (ExpenseForm.tsx)를 생성하고 LocalStorage 저장 기능 연결.

금액, 항목, 날짜, 감정 태그에 대한 유효성 검사 로직 구현.

[커밋 4] feat: Implement ExpenseForm component (AI-assisted)

[커밋 5] fix: Implement form validation logic

_(참고: Day 1, Day 2 커밋 포함 총 5개 이상 커밋 달성_)

Gemini CLI 사용 프롬프트 (Log 1):

"TypeScript와 Tailwind CSS를 사용하여 'ExpenseForm.tsx' 컴포넌트를 만들어줘. 금액, 항목(드롭다운), 날짜 입력 필드, 그리고 5가지 감정 태그 버튼이 포함되어야 해. 폼 제출 시 유효성 검사 로직을 포함시키고, 폼 제출 시 **LocalStorage에 데이터를 저장**하는 로직까지 연결해줘."

결과 및 수정사항 (Log 2):

Gemini 응답: (여기에 Gemini가 제안한 ExpenseForm.tsx 코드 및 관련 로직을 복사)

AI 코드 검증 및 수정:

[문제 발견] Gemini가 제안한 유효성 검사 로직이 금액(amount) 필드가 숫자인지 제대로 확인하지 못하고 빈 문자열 여부만 체크함.

[수정] amount 필드 유효성 검사 로직에 isNaN(Number(amount)) 체크를 추가하여 숫자 타입 유효성 검사를 직접 구현함.

[문제 발견] LocalStorage 저장 시 id 생성을 누락하여, dataStorage.ts 유틸리티에 uuid를 사용하는 임시 id 생성 로직을 직접 추가함.

학습 내용: AI가 복잡한 타입 기반의 유효성 검사를 구현할 때 실수가 잦다는 것을 확인. useCallback이나 useMemo를 사용한 성능 최적화는 직접 구현하거나 명확히 요청해야 함을 학습.



Day 4: 지출 목록 조회 (CRUD - Read) 및 통합
작업 내용:

지출 목록 조회 컴포넌트 (ExpenseList.tsx)의 기능 검증 및 App.tsx에 통합.

목록 조회 기능이 정상적으로 LocalStorage 데이터를 표시하는지 확인.

[커밋 6] feat: Implement ExpenseList component for read function (AI-assisted)

[커밋 7] feat: Integrate ExpenseList with data logic in App.tsx

Gemini CLI 사용 프롬프트 (Log 1):

"TypeScript와 Tailwind CSS를 사용하여 저장된 지출 내역(Expense[])을 보여주는 'ExpenseList.tsx' 컴포넌트를 만들어줘. 각 행은 ID, 날짜, 항목, 금액, 감정 태그를 표시해야 해."

결과 및 수정사항 (Log 2):

Gemini 응답: Gemini는 ExpenseList.tsx 파일이 이미 존재하며 요구사항을 충족한다고 판단, 코드 생성 대신 기존 파일의 재사용을 제안함. 이는 부모 컴포넌트가 LocalStorage 데이터를 prop으로 전달하는 깔끔한 구조임을 확인.

AI 코드 검증 및 수정: Gemini의 제안에 따라 ExpenseList.tsx 파일을 수정 없이 재사용하고, 대신 App.tsx에서 LocalStorage 데이터를 Hook으로 불러와 props로 전달하는 통합 로직만 직접 추가함. (AI의 구조 설계 효율성을 수용하여 시간을 절약함.)

학습 내용: AI는 기존 파일 구조를 이해하고 중복 작업을 회피할 수 있어, 개발 시간을 단축하는 데 효과적임을 학습.



// ... Day 3, Day 4 등 계속 작성 (최소 15개 커밋을 위한 기록)

## 주요 도전 과제 및 해결 방법 
1.  **문제**: LocalStorage에 저장된 데이터를 Plotly.js로 가져와 그래프로 변환하는 과정에서 데이터 타입 오류 발생.
    * **해결**: 문자열 형태의 금액 데이터를 파싱하여 숫자로 변환하는 유틸리티 함수를 추가함.
    * **AI 활용**: `데이터의 문자열 숫자를 안전하게 숫자로 변환하는 JavaScript 함수와 테스트 코드를 생성해줘.`

## 바이브 코딩 활용 소감 [cite: 102]
* **AI와의 협업 경험**: (예: 반복적인 UI 작업이나 정규 표현식 작성 시 AI가 효율적이었음.)
* **효과적이었던 프롬프트 패턴**: (예: "React 컴포넌트를 만들되, Tailwind 클래스를 사용하고 데이터 구조는 이러이러하게 해줘"와 같이 구체적인 출력 형식을 지정했을 때 가장 좋았음.)

// ... 최종 결과물 평가는 과제 마감 직전에 작성