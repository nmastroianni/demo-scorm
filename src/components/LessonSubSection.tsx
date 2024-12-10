import { motion } from 'motion/react'
import React, { ReactNode } from 'react'

interface LessonSubSectionProps {
  children: ReactNode
}
const LessonSubSection: React.FC<LessonSubSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  )
}

export default LessonSubSection
