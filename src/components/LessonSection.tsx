import { motion } from 'motion/react'
import React, { HTMLAttributes, ReactNode, useEffect } from 'react'

interface LessonSubSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  id: string
}
const LessonSection: React.FC<LessonSubSectionProps> = ({ children, id }) => {
  useEffect(() => {
    if (!id) return
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [id])
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="py-4 lg:py-8"
    >
      {children}
    </motion.div>
  )
}

export default LessonSection
