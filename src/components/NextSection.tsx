import React from 'react'
import { Button } from './ui/button'
import { useCourse } from './CourseProvider'
import WhileInView from './WhileInView'

interface NextSectionProps {
  text?: string
}
const NextSection: React.FC<NextSectionProps> = ({ text = 'Continue' }) => {
  const { currentSection, setCurrentSection } = useCourse()
  return (
    <div className="my-4 lg:my-8 flex justify-center">
      <WhileInView direction="down" margin="-20%">
        <Button
          className="w-96"
          variant={'secondary'}
          onClick={() => {
            setCurrentSection(currentSection + 1)
          }}
        >
          {text}
        </Button>
      </WhileInView>
    </div>
  )
}

export default NextSection
