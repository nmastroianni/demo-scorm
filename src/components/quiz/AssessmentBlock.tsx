import {
  MultipleChoiceQuestion,
  MultipleSelectQuestion,
  TrueOrFalseQuestion,
} from '@/types/global'
import { FC, useEffect, useState } from 'react'
import ContainerBlock from '../ContainerBlock'
import { AnimatePresence, motion } from 'motion/react'
import TrueOrFalseQuestionBlock from './TrueOrFalseQuestionBlock'
import MultipleChoiceQuestionBlock from './MultipleChoiceQuestionBlock'
interface AssessmentBlockProps {
  questions: Array<
    MultipleChoiceQuestion | MultipleSelectQuestion | TrueOrFalseQuestion
  >
  passingScore: number
  randomize?: boolean
  retake?: boolean
}

const AssessmentBlock: FC<AssessmentBlockProps> = ({
  passingScore,
  questions,
  randomize = false,
}) => {
  console.log(passingScore)
  questions = randomize
    ? [...questions].sort(() => Math.random() - 0.5)
    : questions
  const [currentQuestion, setCurrentQuestion] = useState(0)
  useEffect(() => {
    console.log('currentQuestion is ', currentQuestion)
  }, [currentQuestion])
  return (
    <ContainerBlock width="md">
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
        {currentQuestion === questions.length && <div>No More Questions</div>}
      </AnimatePresence>
    </ContainerBlock>
  )
}

export default AssessmentBlock
