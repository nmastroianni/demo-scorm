import { TrueOrFalseQuestion, MultipleChoiceQuestion, MultipleSelectQuestion } from '@/types/global'

/**
 * questions is an array of objects.
 * import this array into a LessonSection
 * use a statement like below to find the correct question by id
 * ```typescript
 *  const [question3] = TrueOrFalseQuestions.filter(question => question.id === 'lesson1question3')
 * ```
 */
export const TrueOrFalseQuestions: Array<TrueOrFalseQuestion> = [
  {
    id: 'lesson1question1',
    type: 'TrueOrFalse',
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    answer: true,
    correctFeedback: 'Fugiat animi, corrupti at inventore nisi velit',
    incorrectFeedback:
      'Maxime, molestiae maiores expedita officia tempore at neque.',
  },
]

export const MultipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 'lesson1question2',
    type: 'MultipleChoice',
    question: 'lorem ipsum sit dolor amit',
    options: ['lorem', 'ipsum', 'sit', 'dolor'],
    answer: 0,
  },
]

export const MultipleSelectQuestions: MultipleSelectQuestion[] = [
  {
    id: 'lesson1question3',
    type: 'MultipleSelect',
    question: 'Select all of the lorem text',
    options: ['lorem', 'ipsum', 'sit', 'dog'],
    answer: [0, 1, 2],
  },
]
