// Lesson.tsx
import { motion } from 'motion/react'
import React from 'react'
interface LessonProps {
  children: React.ReactNode
}

const LessonBlock: React.FC<LessonProps> = ({ children }) => {
  return (
    <motion.section exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      {children}
    </motion.section>
  )
}

export default LessonBlock
