import React from 'react'
import { Button } from './ui/button'
import { useCourse } from './CourseProvider'
import WhileInView from './WhileInView'

interface NextSectionButtonProps {
  text?: string
}
const NextSectionButton: React.FC<NextSectionButtonProps> = ({
  text = 'Continue',
}) => {
  const { currentSection, setCurrentSection } = useCourse()
  return (
    <div className="flex justify-center py-4 lg:py-8">
      <WhileInView direction="down" margin="-10%">
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

export default NextSectionButton
