import { useCourse } from '@/components/CourseProvider'
import Lesson from '@/components/Lesson'
import { Button } from '@/components/ui/button'
import React from 'react'

const Lesson0: React.FC = () => {
  const { currentLesson, setCurrentLesson } = useCourse()
  return (
    <Lesson>
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
    </Lesson>
  )
}

export default Lesson0
