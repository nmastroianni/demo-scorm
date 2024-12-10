// Lesson1.tsx
import loon from '@/assets/loon.jpg'
import LabeledImage from '@/components/LabeledImage'
import NextLesson from '@/components/NextLesson'
import PageWrapper from '@/components/PageWrapper'
import PreviousLesson from '@/components/PreviousLesson'
import TextAside from '@/components/TextAside'
import { motion } from 'motion/react'

import React from 'react'

const Lesson1: React.FC = () => {
  const hotpsots: Array<Hotspot> = [
    {
      top: '24%',
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
    <motion.section exit={{ opacity: 0, transition: { duration: 1 } }}>
      <PreviousLesson text="Home" />

      <PageWrapper>
        <p>
          The facilitation approach to teaching at XYZ emphasizes active
          engagement, where instructors guide, support, and interact with
          students through asynchronous discussions, feedback, and resources,
          rather than delivering traditional lectures. This approach fosters a
          collaborative learning environment that encourages student
          independence and critical thinking.
        </p>
        <p>
          This approach also ensures that instructors are not overwhelmed with
          administrative tasks, allowing them to maintain a sustainable and
          effective teaching practice.
        </p>
      </PageWrapper>
      <PageWrapper prose={false}>
        <TextAside imageUrl={loon} altText="">
          <p>
            Welcome! XYZ College’s fully online distance learning courses are
            designed to provide flexible, asynchronous learning experiences,
            meaning there are no real-time meetings to attend. These
            professionally crafted Master Courses are developed by a team of
            subject matter experts including course developers and reviewers,
            and instructional designers to ensure that all content is inclusive,
            engaging, and aligned with the Board of Trustees-approved
            curriculum.
          </p>
          <p>
            Each course is built with the goal of delivering high-quality,
            student-centered learning that fosters academic success and supports
            diverse learning needs.
          </p>
        </TextAside>
        <LabeledImage imageUrl={loon} hotspots={hotpsots} />
      </PageWrapper>

      <NextLesson />
    </motion.section>
  )
}

export default Lesson1
