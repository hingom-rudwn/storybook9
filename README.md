# Hingom UI

React 컴포넌트 라이브러리입니다.

## 설치

```bash
npm install hingom-ui
```

## 사용법

```jsx
import { Button } from 'hingom-ui';

function App() {
  return (
    <Button theme="primary" size="medium">
      클릭하세요
    </Button>
  );
}
```

## 사용 가능한 컴포넌트

- **Button**: 다양한 테마와 크기를 지원하는 버튼 컴포넌트
- **Header**: 헤더 컴포넌트
- **Page**: 페이지 컴포넌트

## 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 스토리북 실행
npm run storybook

# 라이브러리 빌드
npm run build:lib

# 타입 정의 생성
npm run build:types

# 전체 빌드
npm run build
```

## 배포

```bash
npm publish
```

## 라이센스

MIT