import {
  MultipleChoiceQuestion,
  MultipleSelectQuestion,
  TrueOrFalseQuestion,
  Window,
} from '@/types/global'
import { FC, ReactNode, useEffect, useState } from 'react'
import ContainerBlock from '../ContainerBlock'
import { AnimatePresence, motion } from 'motion/react'
import TrueOrFalseQuestionBlock from './TrueOrFalseQuestionBlock'
import MultipleChoiceQuestionBlock from './MultipleChoiceQuestionBlock'
import MultipleSelectQuestionBlock from './MultipleSelectQuestionBlock'
import { useCourse } from '../CourseProvider'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '../ui/button'
import { Progress } from '../ui/progress'
interface AssessmentBlockProps {
  questions: Array<
    MultipleChoiceQuestion | MultipleSelectQuestion | TrueOrFalseQuestion
  >
  passingScore: number
  randomize?: boolean
  retake?: boolean
  children: ReactNode
}

const AssessmentBlock: FC<AssessmentBlockProps> = ({
  children,
  passingScore,
  questions,
  randomize = false,
}) => {
  const {
    correctAssessmentItems,
    coursePassed,
    WindowRef,
    setAssessmentItems,
    setCoursePassed,
    setCorrectAssessmentItems,
    setCurrentLesson,
    setCurrentSection,
  } = useCourse()
  useEffect(() => {
    setAssessmentItems(questions.length)
  })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [assessmentPassed, setAssessmentPassed] = useState<boolean | null>(null)
  useEffect(() => {
    if (
      (correctAssessmentItems / questions.length) * 100 >= passingScore &&
      currentQuestion === questions.length
    ) {
      setAssessmentPassed(true)
      setCoursePassed(true)
    } else if (
      (correctAssessmentItems / questions.length) * 100 < passingScore &&
      currentQuestion === questions.length
    ) {
      setAssessmentPassed(false)
      const scm = WindowRef.current as unknown as Window
      if (typeof scm.SetFailed === 'function') {
        scm.SetFailed()
      }
    }
  }, [
    currentQuestion,
    correctAssessmentItems,
    passingScore,
    questions.length,
    setCoursePassed,
    WindowRef,
  ])

  useEffect(() => {
    if (coursePassed && currentQuestion === questions.length) {
      const scm = WindowRef.current as unknown as Window
      if (typeof scm.SetPassed === 'function') {
        scm?.SetPassed()
      } else {
        alert(
          `Learner passed with a score of ${(correctAssessmentItems / questions.length) * 100}. This only appears while in development mode.`,
        )
      }
    }
  }, [
    correctAssessmentItems,
    coursePassed,
    currentQuestion,
    questions.length,
    WindowRef,
  ])

  questions = randomize
    ? [...questions].sort(() => Math.random() - 0.5)
    : questions
  return (
    <ContainerBlock width="md" className="pt-4 lg:py-12">
      <Progress
        value={(currentQuestion / questions.length) * 100}
        className="my-6 lg:my-12"
      />
      <AnimatePresence>
        {currentQuestion < questions.length &&
          questions[currentQuestion].type === 'TrueOrFalse' && (
            <motion.div exit={{ opacity: 0 }}>
              <TrueOrFalseQuestionBlock
                assessment
                question={questions[currentQuestion]}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                key={questions[currentQuestion].id}
              />
            </motion.div>
          )}
        {currentQuestion < questions.length &&
          questions[currentQuestion].type === 'MultipleChoice' && (
            <motion.div exit={{ opacity: 0 }}>
              <MultipleChoiceQuestionBlock
                assessment
                question={questions[currentQuestion]}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                key={questions[currentQuestion].id}
              />
            </motion.div>
          )}
        {currentQuestion < questions.length &&
          questions[currentQuestion].type === 'MultipleSelect' && (
            <motion.div exit={{ opacity: 0 }}>
              <MultipleSelectQuestionBlock
                assessment
                question={questions[currentQuestion]}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                key={questions[currentQuestion].id}
              />
            </motion.div>
          )}
        {currentQuestion === questions.length && (
          <div className="flex justify-center pt-6 lg:pt-12">
            {assessmentPassed === false && (
              <div className="prose mx-auto dark:prose-invert lg:prose-lg xl:prose-xl 2xl:prose-2xl">
                <p className="text-center text-6xl font-bold dark:text-white">
                  {(correctAssessmentItems / questions.length) * 100}%
                </p>
                <p>
                  You finished the assessment with a score of{' '}
                  {(correctAssessmentItems / questions.length) * 100}%. You
                  needed to score {passingScore}% or higher.
                </p>
                <motion.button
                  onClick={() => {
                    setCurrentQuestion(0)
                    setAssessmentPassed(null)
                    setCorrectAssessmentItems(0)
                  }}
                  className={cn(buttonVariants({ variant: 'default' }))}
                >
                  Try again.
                </motion.button>
              </div>
            )}
            {assessmentPassed && (
              <div className="prose mx-auto dark:prose-invert lg:prose-lg xl:prose-xl 2xl:prose-2xl">
                {children}
                <Button
                  variant={'default'}
                  onClick={() => {
                    setCurrentLesson(0)
                    setCurrentSection(0)
                  }}
                >
                  Return to the Course Overview
                </Button>
              </div>
            )}
          </div>
        )}
      </AnimatePresence>
    </ContainerBlock>
  )
}

export default AssessmentBlock
