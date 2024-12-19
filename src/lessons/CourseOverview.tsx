import Container from '@/components/Container'
import { useCourse } from '@/components/CourseProvider'
import Lesson from '@/components/Lesson'
import { Button } from '@/components/ui/button'
import React from 'react'
// @ts-expect-error imagetools
import loon from '@/assets/loon.jpg?w=1920&h=1080'
import HeaderImage from '@/components/HeaderImage'

const CourseOverview: React.FC = () => {
  const { currentLesson, setCurrentLesson } = useCourse()
  return (
    <>
      <Lesson>
        <HeaderImage image={loon} altText="" heading="This is the h1 text." />
        <div className="flex justify-center py-4 lg:py-8">
          <Button
            variant={'secondary'}
            onClick={() => {
              setCurrentLesson(currentLesson + 1)
            }}
          >
            Start Course
          </Button>
        </div>
        <Container width="prose">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            nulla? Harum, soluta numquam. Necessitatibus veniam ab nostrum autem
            asperiores perspiciatis animi ducimus fuga, suscipit voluptas
            accusamus sequi quia voluptatem similique?
          </p>
        </Container>
      </Lesson>
    </>
  )
}

export default CourseOverview
