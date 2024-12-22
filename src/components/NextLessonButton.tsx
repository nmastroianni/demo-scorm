import { LucideArrowDown } from 'lucide-react'
import React from 'react'
import { useCourse } from './CourseProvider'

type NextLessonButtonProps = {
  text?: string
}
const NextLessonButton: React.FC<NextLessonButtonProps> = ({
  text = 'Go Forward',
}) => {
  const { currentLesson, setCurrentLesson, setCurrentSection } = useCourse()

  return (
    <div className="mt-4 bg-slate-950 text-center text-2xl text-slate-200 transition-colors duration-300 ease-in hover:bg-slate-900 lg:mt-8">
      <button
        onClick={() => {
          setCurrentLesson(currentLesson + 1)
          setCurrentSection(0)
        }}
        className="w-full p-4"
      >
        <span className="flex items-center justify-center">
          <LucideArrowDown className="inline" width={25} height={25} /> {text}
        </span>
      </button>
    </div>
  )
}

export default NextLessonButton
