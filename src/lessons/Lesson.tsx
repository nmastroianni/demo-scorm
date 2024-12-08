// Lesson.tsx
import React from 'react'
interface LessonProps {
  content: React.ReactNode
}

const Lesson: React.FC<LessonProps> = ({ content }) => {
  return <div>{content}</div>
}

export default Lesson
