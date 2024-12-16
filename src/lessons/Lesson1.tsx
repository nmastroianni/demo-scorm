// Lesson1.tsx
// @ts-expect-error img
import loon from '@/assets/loon.jpg?format=avif'
import Container from '@/components/Container'
import LabeledImage from '@/components/LabeledImage'
import NextLesson from '@/components/NextLesson'
import PreviousLesson from '@/components/PreviousLesson'
import TextAside from '@/components/TextAside'

import Lesson from '@/components/Lesson'
import React from 'react'
import LessonSubSection from '@/components/LessonSubSection'
import { useCourse } from '@/components/CourseProvider'
import NextSection from '@/components/NextSection'
import PreviousSection from '@/components/PreviousSection'
import { AnimatePresence } from 'motion/react'
import useScrollToTop from '@/hooks/useScrollToTop'
import CallOut from '@/components/CallOut'

const Lesson1: React.FC = () => {
  const { currentSection } = useCourse()
  useScrollToTop(currentSection)
  const hotpsots: Array<Hotspot> = [
    {
      top: '25%',
      left: '63%',
      size: 40,
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          possimus aut. Voluptatem quam aliquid corporis assumenda provident
          maiores animi eos fuga amet eligendi hic, optio quo dolore quia vitae
          quae.
        </p>
      ),
    },
    {
      top: '56%',
      left: '19%',
      color: 'aqua',
      content: (
        <p>
          This is water falling from the beak of a common loon. High-speed
          photography at its finest.
        </p>
      ),
    },
  ]
  return (
    <Lesson>
      <PreviousLesson text="Home" />
      <AnimatePresence mode="sync">
        {currentSection === 0 && (
          <LessonSubSection key={1}>
            <Container width="prose">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                fugit expedita iste fuga mollitia ex at obcaecati culpa omnis
                totam pariatur perspiciatis repudiandae, ducimus architecto
                voluptates officia neque similique iure?
              </p>
              <p>
                Fugiat animi, corrupti at inventore nisi velit, tempore
                dignissimos, sit maxime pariatur illum! Maxime, molestiae
                maiores expedita officia tempore at neque. Consequuntur
                voluptate corrupti quas odio ut assumenda nemo saepe?
              </p>
            </Container>
            <Container width="xl">
              <TextAside
                imageUrl={loon}
                altText="A common loon with water dropping of its bill."
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium in ab ex, deserunt earum eveniet corporis quis
                  mollitia! Distinctio ea recusandae consequuntur assumenda,
                  temporibus delectus alias doloremque! Quae, autem fugit.
                  <br />
                  Fugit sunt neque odit sint vel quis. Incidunt excepturi magnam
                  ipsam molestias et cupiditate, officiis consequatur reiciendis
                  minus accusamus voluptatibus sequi sapiente, voluptate beatae
                  quidem tempore maxime. Laboriosam, ut reprehenderit!
                </p>
                <p>
                  Each course is built with the goal of delivering high-quality,
                  student-centered learning that fosters academic success and
                  supports diverse learning needs.
                </p>
              </TextAside>
              <LabeledImage imageUrl={loon} hotspots={hotpsots} />
              <NextSection />
            </Container>
          </LessonSubSection>
        )}
        {currentSection === 1 && (
          <LessonSubSection key={2}>
            <Container width="prose">
              <PreviousSection />
              <CallOut>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid aspernatur blanditiis possimus eligendi? Error, qui
                  explicabo labore voluptatum esse quo eos veniam maiores
                  consequuntur nulla, aliquam accusantium? Excepturi, nesciunt
                  culpa!
                </p>
              </CallOut>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                illo quis reprehenderit facere. Veritatis, necessitatibus! Magni
                animi maxime cupiditate blanditiis dignissimos reprehenderit
                nobis, optio magnam alias? Amet tempore in omnis?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                nihil ipsa rem natus voluptate, tenetur non porro, magnam ipsum
                quae dolore laborum suscipit earum vero ad nulla aspernatur hic?
                Dolorum!
              </p>
            </Container>
            <Container width="xl">
              <TextAside imageUrl={loon} altText="">
                <p>
                  Welcome! XYZ College&apos;s fully online distance learning
                  courses are designed to provide flexible, asynchronous
                  learning experiences, meaning there are no real-time meetings
                  to attend. These professionally crafted Master Courses are
                  developed by a team of subject matter experts including course
                  developers and reviewers, and instructional designers to
                  ensure that all content is inclusive, engaging, and aligned
                  with the Board of Trustees-approved curriculum.
                </p>
                <p>
                  Each course is built with the goal of delivering high-quality,
                  student-centered learning that fosters academic success and
                  supports diverse learning needs.
                </p>
              </TextAside>
            </Container>
          </LessonSubSection>
        )}
      </AnimatePresence>

      <NextLesson />
    </Lesson>
  )
}

export default Lesson1
