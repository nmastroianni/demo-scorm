// Lesson1.tsx
import AccordionBlock from '@/components/AccordionBlock'
import Container from '@/components/Container'
import { useCourse } from '@/components/CourseProvider'
import Lesson from '@/components/Lesson'
import LessonSubSection from '@/components/LessonSection'
import List from '@/components/List'
import ListItem from '@/components/ListItem'
import NextLesson from '@/components/NextLessonButton'
import PreviousLesson from '@/components/PreviousLessonButton'
import TabsBlock from '@/components/TabsBlock'
import { AccordionBlockItem, TabBlockItem } from '@/types/global'
import { AnimatePresence } from 'motion/react'
import React from 'react'
import loon from '@/assets/images/loon.jpg'

const Lesson2: React.FC = () => {
  const { currentSection } = useCourse()
  const sectionCount = 1
  const accordionData: AccordionBlockItem[] = [
    {
      value: 'item-1',
      trigger: 'Lorem ipsum trigger',
      content: <p>This is content that appears when you click the trigger.</p>,
    },
    {
      value: 'item-2',
      trigger: 'Second Lorem ipsum trigger',
      content: <p>This is content that appears when you click the trigger.</p>,
    },
    {
      value: 'item-3',
      trigger: 'Third Lorem ipsum trigger',
      content: <p>This is content that appears when you click the trigger.</p>,
    },
  ]
  const tabsData: TabBlockItem[] = [
    {
      trigger: 'About Lorem',
      contentTitle: 'This is the content title',
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          tempore? Assumenda repudiandae possimus magni ea eaque eos,
          perspiciatis et officia non rem neque animi blanditiis id impedit
          numquam laboriosam quam.
        </p>
      ),
    },
    {
      trigger: 'About Ipsum',
      description: (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          molestiae totam animi sit quis! Commodi totam, pariatur delectus
          consequuntur aperiam minus voluptates officia sapiente impedit iusto.
          A, consequuntur dolorum! Ut.
        </p>
      ),
      contentTitle: 'This is the title for the second content',
      content: <img src={loon} alt="common loon" className="h-[200px]" />,
    },
  ]
  return (
    <Lesson>
      <PreviousLesson text="Go Back to Lesson 1" />
      <AnimatePresence mode="sync">
        {currentSection >= 0 && (
          <LessonSubSection id="section1">
            <Container width="prose">
              <List type="unordered">
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
              </List>
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
              <List animate={false}>
                <ListItem>Did</ListItem>
                <ListItem>You</ListItem>
                <ListItem>Know</ListItem>
                <ListItem>That</ListItem>
                <ListItem>This Is Powered By React?</ListItem>
              </List>
            </Container>
            <TabsBlock data={tabsData} />
            <AccordionBlock data={accordionData} />
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
