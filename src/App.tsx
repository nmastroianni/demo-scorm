import { AnimatePresence } from 'motion/react'
import { useCourse } from './components/CourseProvider'
import CourseOverview from './lessons/CourseOverview'
import Lesson1 from './lessons/Lesson1'
import Lesson2 from './lessons/Lesson2'
import { JSX } from 'react'
import Container from './components/ContainerBlock'
import { Button } from './components/ui/button'
import AssessmentBlock from './components/quiz/AssessmentBlock'
import {
  MultipleChoiceQuestion,
  MultipleSelectQuestion,
  TrueOrFalseQuestion,
} from './types/global'
import { ThemeToggle } from './components/ThemeToggle'
import { House } from 'lucide-react'
import { cn } from './lib/utils'
import Headroom from 'react-headroom'

function App(): JSX.Element {
  const { currentLesson, setCurrentLesson } = useCourse()

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
    {
      type: 'MultipleSelect',
      id: 'q4',
      question: 'What colors do you find on a common loon?',
      options: ['Black', 'White', 'Red', 'Blue'],
      answer: [0, 1, 2],
    },
  ]

  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <Headroom>
        <header className="bg-slate-200/95 backdrop-blur dark:bg-slate-900/95">
          <div className="mx-auto flex max-w-screen-lg justify-between px-8 py-4 lg:px-16">
            <Button
              className={cn('transition-all duration-150 ease-in-out', {
                'scale-0': currentLesson === 0,
              })}
              variant={'outline'}
              size="icon"
              onClick={() => {
                setCurrentLesson(0)
              }}
            >
              <House className="h-[1rem] w-[1rem]" />
            </Button>
            <ThemeToggle />
          </div>
        </header>
      </Headroom>
      <main className="min-h-screen scroll-smooth bg-slate-200 text-slate-950 dark:bg-slate-900 dark:text-slate-50">
        <AnimatePresence mode="wait">
          {currentLesson === 0 && <CourseOverview key={1} />}
          {currentLesson === 1 && <Lesson1 key={2} />}
          {currentLesson === 2 && <Lesson2 key={3} />}
          {currentLesson === 3 && (
            <AssessmentBlock key={4} questions={questions} passingScore={80}>
              <p>
                This is the content that will be shown when someone passes the
                assessment
              </p>
            </AssessmentBlock>
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
    </div>
  )
}

export default App
