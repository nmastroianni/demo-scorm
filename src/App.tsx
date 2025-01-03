import { AnimatePresence } from 'motion/react'
import { useCourse } from './components/CourseProvider'
import CourseOverview from './lessons/CourseOverview'
import Lesson1 from './lessons/Lesson1'
import Lesson2 from './lessons/Lesson2'
import { JSX, useEffect } from 'react'
import Container from './components/ContainerBlock'
import { Button } from './components/ui/button'
import AssessmentBlock from './components/quiz/AssessmentBlock'
import {
  MultipleChoiceQuestion,
  MultipleSelectQuestion,
  TrueOrFalseQuestion,
} from './types/global'

function App(): JSX.Element {
  const { currentLesson, setCurrentLesson } = useCourse()
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.add('dark')
  }, [])

  const questions: Array<
    MultipleChoiceQuestion | MultipleSelectQuestion | TrueOrFalseQuestion
  > = [
    {
      type: 'TrueOrFalse',
      id: 'q1',
      question: 'Loons are graceful on land.',
      answer: false,
    },
    {
      type: 'TrueOrFalse',
      id: 'q2',
      question: 'Loons are great swimmers.',
      answer: true,
    },
    {
      type: 'MultipleChoice',
      id: 'q3',
      question: 'What do Loons prefer to eat?',
      options: ['Fish', 'Insects', 'Rodents', 'Other birds'],
      answer: 0,
    },
  ]

  return (
    <main className="min-h-screen scroll-smooth bg-slate-200 text-slate-950 dark:bg-slate-900 dark:text-slate-50">
      <AnimatePresence mode="wait">
        {currentLesson === 0 && <CourseOverview key={1} />}
        {currentLesson === 1 && <Lesson1 key={2} />}
        {currentLesson === 2 && <Lesson2 key={3} />}
        {currentLesson === 3 && (
          <AssessmentBlock key={4} questions={questions} passingScore={80} />
        )}
        {currentLesson > 3 && (
          <Container width="prose">
            <p>
              Oops. We can't seem to find the next lesson. Please let someone
              know you've found a bug.
            </p>
            <Button
              onClick={() => {
                setCurrentLesson(currentLesson - 1)
                localStorage.setItem('lessonProgress', `${currentLesson - 1}`)
              }}
            >
              Go Back
            </Button>
          </Container>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
