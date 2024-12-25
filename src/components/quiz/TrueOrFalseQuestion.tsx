import { FC, FormEvent, useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { CircleX, PartyPopper, Undo } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useCourse } from '../CourseProvider'

interface TrueOrFalseQuestionProps {
  /**
   * question: Enter the true or false question text.
   */
  question: TrueOrFalseQuestion
}

// Define the type for your form data
interface FormData {
  studentAnswer: 'true' | 'false' | null
}
/**
 * A functional component that renders a true or false question form.
 * @param {TrueOrFalseQuestion} [question] provide the question object
 * @returns {FC} A React functional component
 */
const TrueOrFalseQuestion: FC<TrueOrFalseQuestionProps> = ({ question }) => {
  const { setSectionPassed } = useCourse()
  const [formData, setFormData] = useState<FormData>({ studentAnswer: null })
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState<null | boolean>(null)
  const stringAnswer = question.answer.toString()
  const feedbackRef = useRef<HTMLSpanElement>(null)
  const questionRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (feedbackRef.current) feedbackRef.current.focus()
  }, [correct])

  // Function to handle input changes

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormData({ studentAnswer: value as 'true' | 'false' })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    if (formData.studentAnswer === stringAnswer) {
      setCorrect(true)
      setSectionPassed(true)
    } else {
      setCorrect(false)
    }
  }

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    ;(e.target as HTMLFormElement).reset()
    setSubmitted(false)
    setCorrect(null)
    setFormData({ studentAnswer: null })
    if (questionRef.current) questionRef.current.focus()
  }
  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <fieldset className="flex flex-col rounded border p-4 dark:border-slate-200">
          <legend className="rounded border bg-slate-200 p-2 dark:border-slate-200 dark:bg-slate-950 lg:p-4">
            <span tabIndex={-1} ref={questionRef}>
              {question.question}
            </span>
          </legend>
          <div className="grid gap-y-4 font-semibold">
            <label
              htmlFor="choice-true"
              className={cn(
                'flex cursor-pointer items-center rounded p-4 transition-colors duration-300 ease-in',
                {
                  'bg-slate-200 dark:bg-cyan-900':
                    formData.studentAnswer === 'true',
                },
              )}
            >
              <input
                id="choice-true"
                type="radio"
                value="true"
                onChange={handleInputChange}
                className="form-radio"
                name="tf"
                disabled={submitted}
                checked={formData.studentAnswer === 'true'}
              />

              <span className="pl-4 lg:pl-6">True</span>
            </label>
            <label
              htmlFor="choice-false"
              className={cn(
                'flex cursor-pointer items-center rounded p-4 transition-colors duration-300 ease-in',
                {
                  'bg-slate-200 dark:bg-cyan-900':
                    formData.studentAnswer === 'false',
                },
              )}
            >
              <input
                id="choice-false"
                type="radio"
                value="false"
                onChange={handleInputChange}
                name="tf"
                disabled={submitted}
                checked={formData.studentAnswer === 'false'}
              />
              <span className="pl-4 lg:pl-6">False</span>
            </label>
          </div>
          <div className="flex items-center justify-center space-x-4 py-4 lg:py-6">
            {correct === false && (
              <>
                <CircleX width={40} height={40} />
                <span ref={feedbackRef} tabIndex={-1}>
                  {question.incorrectFeedback
                    ? question.incorrectFeedback
                    : `Incorrect. Try again?`}
                </span>
              </>
            )}
            {correct === true && (
              <>
                <PartyPopper width={40} height={40} className="shrink-0" />
                <span ref={feedbackRef} tabIndex={-1}>
                  {question.correctFeedback
                    ? question.correctFeedback
                    : 'Correct!'}
                </span>
              </>
            )}
          </div>
        </fieldset>
        <div className="flex flex-col items-center pt-4 lg:pt-6">
          <AnimatePresence mode="wait">
            {correct !== false && submitted === false && (
              <Button
                variant={'default'}
                className={cn({ 'bg-slate-500 text-slate-900': submitted })}
                type="submit"
              >
                Submit
              </Button>
            )}
            {correct === false && submitted === true && (
              <motion.button
                type="reset"
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 75 }}
              >
                <Undo width={40} height={40} />
                <p className="text-center text-sm">Retry</p>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  )
}

export default TrueOrFalseQuestion
