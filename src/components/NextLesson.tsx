import { LucideArrowDown } from 'lucide-react'
import React from 'react'
import { useCourse } from './CourseProvider'

type NextLessonProps = {
  text?: string
}
const NextLesson: React.FC<NextLessonProps> = ({ text = 'Go Forward' }) => {
  const { currentLesson, setCurrentLesson } = useCourse()

  return (
    <div className="bg-slate-950 text-slate-200 text-2xl text-center hover:bg-slate-900 transition-colors duration-300 ease-in">
      <button
        onClick={() => {
          setCurrentLesson(currentLesson + 1)
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

export default NextLesson
