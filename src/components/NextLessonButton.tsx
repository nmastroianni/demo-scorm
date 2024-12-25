import { LucideArrowDown } from 'lucide-react'
import React from 'react'
import { useCourse } from './CourseProvider'

type NextLessonButtonProps = {
  text?: string
  contingent?: boolean
}
const NextLessonButton: React.FC<NextLessonButtonProps> = ({
  contingent = false,
  text = 'Go Forward',
}) => {
  const { currentLesson, setCurrentLesson, setCurrentSection, sectionPassed } =
    useCourse()

  return (
    <div className="bg-slate-950 text-center text-2xl text-slate-200 transition-colors duration-300 ease-in hover:bg-slate-900">
      {(contingent === false || sectionPassed) && (
        <button
          onClick={() => {
            setCurrentLesson(currentLesson + 1)
            localStorage.setItem('lessonProgress', `${currentLesson + 1}`)
            localStorage.setItem('sectionProgress', '0')
            setCurrentSection(0)
          }}
          className="w-full p-4 lg:p-8"
        >
          <span className="flex items-center justify-center">
            <LucideArrowDown className="inline" width={25} height={25} /> {text}
          </span>
        </button>
      )}
    </div>
  )
}

export default NextLessonButton
