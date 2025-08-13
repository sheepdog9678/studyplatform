import { Note } from "../types/note";

export const dummyNotes: Note[] = [
  {
    noteId: 1,
    title: "React 정리",
    content: "React 컴포넌트와 훅에 대한 정리입니다.",
    createAt: "2024-11-22 10:00:00",
    modifiedAt: "2025-06-20 09:12:00",
  },
  {
    noteId: 2,
    title: "자바스크립트 배열",
    content: "map, filter, reduce 사용법 요약",
    createAt: "2024-10-05 14:30:00",
    modifiedAt: "2025-06-21 08:45:00",
  },
  {
    noteId: 3,
    title: "TypeScript 기본",
    content: "interface와 type의 차이, 제네릭 예제 정리",
    createAt: "2024-09-10 09:00:00",
    modifiedAt: "2025-06-18 16:00:00",
  },
  {
    noteId: 4,
    title: "CSS Flex/Grid",
    content: "레이아웃을 만들기 위한 핵심 속성들 요약",
    createAt: "2024-08-22 11:00:00",
    modifiedAt: "2025-06-19 12:30:00",
  },
  {
    noteId: 5,
    title: "Next.js 라우팅",
    content: "폴더 기반 라우팅 구조와 동적 라우트",
    createAt: "2024-12-01 15:45:00",
    modifiedAt: "2025-06-22 17:20:00",
  },
];
