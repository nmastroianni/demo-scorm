// Lesson1.tsx
import Container from '@/components/Container'
import { useCourse } from '@/components/CourseProvider'
import Lesson from '@/components/Lesson'
import LessonSubSection from '@/components/LessonSection'
import NextLesson from '@/components/NextLessonButton'
import PreviousLesson from '@/components/PreviousLessonButton'
import { AnimatePresence } from 'motion/react'
import React from 'react'

const Lesson2: React.FC = () => {
  const { currentSection } = useCourse()
  const sectionCount = 1
  return (
    <Lesson>
      <PreviousLesson text="Go Back to Lesson 1" />
      <AnimatePresence mode="sync">
        {currentSection >= 0 && (
          <LessonSubSection id="section1">
            <Container width="prose">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus quisquam voluptatem at est quae assumenda sapiente.
                Nulla corporis excepturi, animi minus ipsum est facilis maiores
                eligendi aperiam. Voluptas, sint deserunt.
              </p>
              <p>
                Fugit perferendis, placeat nemo culpa mollitia consequuntur odio
                totam quod asperiores et! Itaque magni voluptates voluptatem
                possimus nulla sint ex ea omnis? Aliquid temporibus voluptatum
                nisi nemo. Alias, illo temporibus?
              </p>
              <p>
                Hic nesciunt maxime provident autem commodi iure fugit officia
                sit laborum error voluptatum dolorum sequi inventore quaerat sed
                officiis alias, quam cumque vero? Dolor doloremque praesentium,
                iusto in distinctio molestias.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora rerum, dolorum nostrum cum vitae fugiat vel beatae
                deleniti iusto modi eius magnam possimus dicta error ipsam. Eius
                esse facilis tempore.
              </p>
            </Container>
          </LessonSubSection>
        )}
      </AnimatePresence>
      {currentSection === sectionCount - 1 && (
        <NextLesson text="Proceed to the next lesson" />
      )}
    </Lesson>
  )
}

export default Lesson2
