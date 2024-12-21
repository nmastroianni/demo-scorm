import { FC, FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { CircleX } from 'lucide-react'

interface TrueOrFalseProps {
  question: string
  answer: boolean
}

// Define the type for your form data
interface FormData {
  studentAnswer: 'true' | 'false' | null
}

const TrueOrFalse: FC<TrueOrFalseProps> = ({ answer, question }) => {
  const [formData, setFormData] = useState<FormData>({ studentAnswer: null })
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState<null | boolean>(null)
  const stringAnswer = answer.toString()

  // Function to handle input changes

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormData({ studentAnswer: value as 'true' | 'false' })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    if (formData.studentAnswer === stringAnswer) {
      console.log('studentAnswer === stringAnswer')
      setCorrect(true)
    } else {
      console.log('studenAnswer !== stringAnswer')
      setCorrect(false)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col border p-4">
          <legend className="p-2">{question}</legend>
          <div className="grid gap-y-4 font-semibold">
            <label
              htmlFor="choice-true"
              className={cn(
                'flex items-center rounded p-4 transition-colors duration-300 ease-in',
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
              />

              <span className="pl-4 lg:pl-6">True</span>
            </label>
            <label
              htmlFor="choice-false"
              className={cn(
                'flex items-center rounded p-4 transition-colors duration-300 ease-in',
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
              />
              <span className="pl-4 lg:pl-6">False</span>
            </label>
          </div>
        </fieldset>
        <div className="flex flex-col items-center pt-4 lg:pt-6">
          {correct === false && <CircleX width={40} height={40} />}
          {correct !== false && (
            <Button
              variant={'default'}
              disabled={submitted === true}
              className={cn({ 'bg-slate-500 text-slate-900': submitted })}
              type="submit"
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default TrueOrFalse
