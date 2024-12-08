// Lesson1.tsx
import { useCourse } from '@/components/CourseProvider'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import React from 'react'

const Lesson2: React.FC = () => {
  const { currentLesson, setCurrentLesson } = useCourse()

  return (
    <motion.div exit={{ opacity: 0, transition: { duration: 1 } }}>
      <Button
        onClick={() => {
          setCurrentLesson(currentLesson - 1)
        }}
      >
        Go Back
      </Button>

      <p>
        Welcome to Lesson {currentLesson}!
        <br /> <strong>Here's an important highlight.</strong>
      </p>
    </motion.div>
  )
}

export default Lesson2
