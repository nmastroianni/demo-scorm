// Lesson1.tsx
import { useCourse } from '@/components/CourseProvider'
import PageWrapper from '@/components/PageWrapper'
import PreviousLesson from '@/components/PreviousLesson'
import { Button } from '@/components/ui/button'
import WhileInView from '@/components/WhileInView'
import { motion } from 'motion/react'
import React from 'react'

const Lesson1: React.FC = () => {
  const { currentLesson, setCurrentLesson } = useCourse()

  return (
    <motion.section exit={{ opacity: 0, transition: { duration: 1 } }}>
      <PreviousLesson text="Home" />

      <PageWrapper>
        <WhileInView direction="left">
          <p>
            The facilitation approach to teaching at OCC emphasizes active
            engagement, where instructors guide, support, and interact with
            students through asynchronous discussions, feedback, and resources,
            rather than delivering traditional lectures. This approach fosters a
            collaborative learning environment that encourages student
            independence and critical thinking.
          </p>
        </WhileInView>
        <p className="h-[1000px]">
          This approach also ensures that instructors are not overwhelmed with
          administrative tasks, allowing them to maintain a sustainable and
          effective teaching practice.
        </p>
        <div className="h-[500px]" />
      </PageWrapper>

      <Button
        onClick={() => {
          setCurrentLesson(currentLesson + 1)
        }}
      >
        Continue
      </Button>
    </motion.section>
  )
}

export default Lesson1
