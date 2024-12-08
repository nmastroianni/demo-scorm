import { AnimatePresence } from 'motion/react'
import { useCourse } from './components/CourseProvider'
import Lesson0 from './lessons/Lesson0'
import Lesson1 from './lessons/Lesson1'
import Lesson2 from './lessons/Lesson2'

function App(): JSX.Element {
  // Specify the type of SDRef: `Window | null`
  const { currentLesson } = useCourse()

  return (
    <main className="bg-slate-200 dark:bg-slate-900 min-h-screen text-slate-50">
      {/* <Lesson content={lessons[currentLesson]} /> */}
      <AnimatePresence mode="wait">
        {currentLesson === 0 && <Lesson0 key={1} />}
        {currentLesson === 1 && <Lesson1 key={2} />}
        {currentLesson === 2 && <Lesson2 key={3} />}
      </AnimatePresence>
    </main>
  )
}

export default App
