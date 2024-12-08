// Overview.tsx
import { useCourse } from '@/components/CourseProvider'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import React from 'react'

const Lesson0: React.FC = () => {
  const { currentLesson, setCurrentLesson } = useCourse()
  return (
    <motion.div exit={{ opacity: 0, transition: { duration: 1 } }}>
      <p>
        Welcome to the Course Overview. It's actually lesson {currentLesson}.{' '}
        <br />
        <strong>Here's an important highlight.</strong>
      </p>

      <Button
        onClick={() => {
          setCurrentLesson(currentLesson + 1)
        }}
      >
        Continue
      </Button>
    </motion.div>
  )
}

export default Lesson0
