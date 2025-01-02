import { motion } from 'motion/react'
import React, { HTMLAttributes, ReactNode, useEffect, useRef } from 'react'

interface LessonSubSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  id: string
}
const LessonSectionBlock: React.FC<LessonSubSectionProps> = ({
  children,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!id) return
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // if (ref.current) ref.current.focus()
    }
  }, [id])
  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="py-4 lg:py-8"
      tabIndex={-1}
    >
      {children}
    </motion.div>
  )
}

export default LessonSectionBlock
