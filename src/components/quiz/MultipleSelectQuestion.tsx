import { cn } from '@/lib/utils'
import { CircleX, PartyPopper, Undo } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { FC, FormEvent, useState } from 'react'
import { Button } from '../ui/button'

interface MultipleSelectQuestionProps {
  question: MultipleSelectQuestion
}

// Define the type for your form data
interface FormData {
  [questionId: string]: number[]
}

const MultipleSelectQuestion: FC<MultipleSelectQuestionProps> = ({
  question,
}) => {
  const [formData, setFormData] = useState<FormData>({ [question.id]: [] })
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState<null | boolean>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target
    const optionIndex = parseInt(value, 10)
    setFormData(prevData => {
      const updatedAnswers = checked
        ? [...prevData[name], optionIndex]
        : prevData[name].filter(answer => answer !== optionIndex)
      return { [name]: updatedAnswers }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    const isCorrect =
      formData[question.id]?.every(answer =>
        question.answer.includes(answer),
      ) && formData[question.id].length === question.answer.length
    setCorrect(isCorrect)
  }

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    ;(e.target as HTMLFormElement).reset()
    setSubmitted(false)
    setCorrect(null)
    setFormData({ [question.id]: [] })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <fieldset className="flex flex-col border p-4">
          <legend className="border bg-slate-200 p-2 lg:p-4 dark:bg-slate-950">
            {question.question}
          </legend>
          <div className="grid gap-y-4 font-semibold">
            {question.options.map((option, index) => {
              return (
                <label
                  key={option}
                  htmlFor={`ms-option-${index}`}
                  className={cn(
                    'flex cursor-pointer items-center space-x-4 rounded p-4 transition-colors duration-300 ease-in',
                    {
                      'bg-slate-200 dark:bg-cyan-900':
                        formData[question.id].includes(index),
                    },
                  )}
                >
                  <input
                    id={`ms-option-${index}`}
                    type="checkbox"
                    name={question.id}
                    value={index.toString()}
                    className="form-checkbox shrink-0"
                    onChange={handleInputChange}
                    checked={formData[question.id].includes(index)}
                  />
                  <span>{option}</span>
                </label>
              )
            })}
          </div>
          <div className="flex items-center justify-center space-x-4 py-4 lg:py-6">
            {correct === false && (
              <>
                <CircleX width={40} height={40} />
                <span>
                  {question.incorrectFeedback
                    ? question.incorrectFeedback
                    : `Incorrect. Try again?`}
                </span>
              </>
            )}
            {correct === true && (
              <>
                <PartyPopper width={40} height={40} className="shrink-0" />
                <span>
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
                // disabled={submitted}
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

export default MultipleSelectQuestion
