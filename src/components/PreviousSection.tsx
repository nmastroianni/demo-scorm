import React from 'react'
import { Button } from './ui/button'
import { useCourse } from './CourseProvider'
import WhileInView from './WhileInView'

interface PreviousSectionProps {
  text?: string
}
const PreviousSection: React.FC<PreviousSectionProps> = ({
  text = 'Return to previous section',
}) => {
  const { currentSection, setCurrentSection } = useCourse()
  return (
    <div className="py-4 lg:py-8 flex justify-center">
      <WhileInView direction="down" margin="0%">
        <Button
          className="w-96"
          variant={'secondary'}
          onClick={() => {
            setCurrentSection(currentSection - 1)
          }}
        >
          {text}
        </Button>
      </WhileInView>
    </div>
  )
}

export default PreviousSection
