import React from 'react'
import { Button } from './ui/button'
import { useCourse } from './CourseProvider'
import WhileInView from './WhileInView'

interface NextSectionButtonProps {
  text?: string
  contingent?: boolean
}
const NextSectionButton: React.FC<NextSectionButtonProps> = ({
  text = 'Continue',
  contingent = false,
}) => {
  const { currentSection, setCurrentSection, sectionPassed, setSectionPassed } =
    useCourse()
  return (
    <div className="flex justify-center py-4 lg:py-12">
      {(contingent === false || sectionPassed) && (
        <WhileInView direction="up" margin="0%">
          <Button
            className="w-96 ring-slate-700 focus:outline-none focus:ring dark:ring-slate-200"
            onClick={() => {
              setCurrentSection(currentSection + 1)
              localStorage.setItem('sectionProgress', `${currentSection + 1}`)
              setSectionPassed(false)
            }}
          >
            {text}
          </Button>
        </WhileInView>
      )}
    </div>
  )
}

export default NextSectionButton
