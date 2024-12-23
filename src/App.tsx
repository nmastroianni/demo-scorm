import { AnimatePresence } from 'motion/react'
import { useCourse } from './components/CourseProvider'
import CourseOverview from './lessons/CourseOverview'
import Lesson1 from './lessons/Lesson1'
import Lesson2 from './lessons/Lesson2'
import { JSX, useEffect } from 'react'

function App(): JSX.Element {
  const { currentLesson } = useCourse()
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.add('dark')
  }, [])

  return (
    <main className="min-h-screen scroll-smooth bg-slate-200 text-slate-950 dark:bg-slate-900 dark:text-slate-50">
      <AnimatePresence mode="wait">
        {currentLesson === 0 && <CourseOverview key={1} />}
        {currentLesson === 1 && <Lesson1 key={2} />}
        {currentLesson === 2 && <Lesson2 key={3} />}
      </AnimatePresence>
    </main>
  )
}

export default App
