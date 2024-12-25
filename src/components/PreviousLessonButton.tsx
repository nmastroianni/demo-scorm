import { LucideArrowUp } from 'lucide-react'
import { useCourse } from './CourseProvider'
import React from 'react'

type PreviousLessonButtonProps = {
  text?: string
}
const PreviousLessonButton: React.FC<PreviousLessonButtonProps> = ({
  text = 'Go Back',
}) => {
  const { currentLesson, setCurrentLesson, setCurrentSection } = useCourse()

  return (
    <div className="mb-4 bg-slate-950 text-center text-2xl text-slate-200 transition-colors duration-300 ease-in hover:bg-slate-900 lg:mb-8">
      <button
        onClick={() => {
          setCurrentLesson(currentLesson - 1)
          localStorage.setItem('lessonProgress', `${currentLesson - 1}`)
          setCurrentSection(0)
        }}
        className="w-full p-4"
      >
        <span className="flex items-center justify-center">
          <LucideArrowUp className="inline" width={25} height={25} /> {text}
        </span>
      </button>
    </div>
  )
}

export default PreviousLessonButton
