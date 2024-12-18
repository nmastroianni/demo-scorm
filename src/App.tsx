import { AnimatePresence } from 'motion/react'
import { useCourse } from './components/CourseProvider'
import CourseOverview from './lessons/CourseOverview'
import Lesson1 from './lessons/Lesson1'
import Lesson2 from './lessons/Lesson2'
import { JSX } from 'react'

function App(): JSX.Element {
  const { currentLesson } = useCourse()

  return (
    <main className="bg-slate-200 dark:bg-slate-900 min-h-screen dark:text-slate-50 text-slate-950 scroll-smooth">
      <AnimatePresence mode="wait">
        {currentLesson === 0 && <CourseOverview key={1} />}
        {currentLesson === 1 && <Lesson1 key={2} />}
        {currentLesson === 2 && <Lesson2 key={3} />}
      </AnimatePresence>
    </main>
  )
}

export default App
