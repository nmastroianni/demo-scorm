// Lesson1.tsx

import loon from '@/assets/images/loon.jpg'
import ContainerBlock from '@/components/ContainerBlock'
import LabeledImageBlock from '@/components/LabeledImageBlock'
import NextLessonButton from '@/components/NextLessonButton'
import TextAsideBlock from '@/components/TextAsideBlock'
import LessonBlock from '@/components/LessonBlock'
import React from 'react'
import { useCourse } from '@/components/CourseProvider'
import NextSectionButton from '@/components/NextSectionButton'
import { AnimatePresence } from 'motion/react'
import CallOutBlock from '@/components/CallOutBlock'
import CheckForUnderstanding from '@/components/quiz/CheckForUnderstanding'
import TrueOrFalseQuestion from '@/components/quiz/TrueOrFalseQuestionBlock'
import {
  MultipleChoiceQuestions,
  MultipleSelectQuestions,
  TrueOrFalseQuestions,
} from '@/lib/questions'
import WhileInView from '@/components/WhileInView'
import type { Hotspot } from '@/types/global'
import LessonSectionBlock from '@/components/LessonSectionBlock'
import MultipleChoiceQuestionBlock from '@/components/quiz/MultipleChoiceQuestionBlock'
import MultipleSelectQuestionBlock from '@/components/quiz/MultipleSelectQuestionBlock'

const Lesson1: React.FC = () => {
  const { currentSection } = useCourse()
  // set a const for the total number of sections in this lesson
  const sectionCount = 3
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
  const [question1] = TrueOrFalseQuestions.filter(
    question => question.id === 'lesson1question1',
  )
  const [question2] = MultipleChoiceQuestions.filter(
    question => question.id === 'lesson1question2',
  )
  const [question3] = MultipleSelectQuestions.filter(
    question => question.id === 'lesson1question3',
  )
  return (
    <LessonBlock>
      <AnimatePresence mode="sync">
        {currentSection >= 0 && (
          <LessonSectionBlock id="section1" key={1}>
            <ContainerBlock width="prose">
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, quo error unde autem eum deserunt molestias? Debitis
                numquam corporis sint illo, accusamus fugit consequuntur! Libero
                voluptatem ullam repudiandae excepturi corporis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem dolorum, porro labore ea, cum facilis non, animi
                expedita sapiente dicta deleniti unde eaque similique ad
                reiciendis aliquid totam asperiores vitae!
              </p>
            </ContainerBlock>
            <ContainerBlock width="xl">
              <TextAsideBlock
                imageUrl={loon}
                altText="A common loon with water dropping off its bill."
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium in ab ex, deserunt earum eveniet corporis quis
                  mollitia! Distinctio ea recusandae consequuntur assumenda,
                  temporibus delectus alias doloremque! Quae, autem fugit.
                </p>
                <p>
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
              </TextAsideBlock>
              <WhileInView direction="up" margin="-30%">
                <LabeledImageBlock imageUrl={loon} hotspots={hotpsots} />
              </WhileInView>
            </ContainerBlock>
            <ContainerBlock width="prose" className="pt-4">
              <WhileInView direction="up">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi rem nesciunt, pariatur consequatur cum reiciendis a
                  praesentium corrupti molestias consequuntur! Temporibus,
                  repudiandae quae rerum nisi obcaecati nostrum. Hic, ex
                  mollitia.
                </p>
              </WhileInView>
            </ContainerBlock>
            <ContainerBlock width="md">
              <CheckForUnderstanding heading="Check for Understanding">
                <TrueOrFalseQuestion question={question1} />
              </CheckForUnderstanding>
              {currentSection === 0 && <NextSectionButton />}
            </ContainerBlock>
          </LessonSectionBlock>
        )}
        {currentSection >= 1 && (
          <LessonSectionBlock id="section2" key={2}>
            <ContainerBlock width="prose">
              <CallOutBlock>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid aspernatur blanditiis possimus eligendi? Error, qui
                  explicabo labore voluptatum esse quo eos veniam maiores
                  consequuntur nulla, aliquam accusantium? Excepturi, nesciunt
                  culpa!
                </p>
              </CallOutBlock>
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
            </ContainerBlock>
            <ContainerBlock width="xl">
              <TextAsideBlock imageUrl={loon} altText="">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati natus ducimus itaque veniam consequuntur ipsum
                  dolore repudiandae officiis quasi molestiae, maiores at vero
                  quia voluptate sapiente optio consequatur, ipsa enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, blanditiis necessitatibus modi soluta atque maxime
                  deleniti est, accusamus aperiam rerum vero, quibusdam illum
                  corporis! Eius voluptatem delectus perferendis voluptatum
                  veniam!
                </p>
              </TextAsideBlock>
              <CheckForUnderstanding>
                <MultipleChoiceQuestionBlock question={question2} />
              </CheckForUnderstanding>
              {currentSection === 1 && <NextSectionButton contingent />}
            </ContainerBlock>
          </LessonSectionBlock>
        )}
        {currentSection >= 2 && (
          <LessonSectionBlock id="section3" key={3}>
            <ContainerBlock width="prose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                rerum omnis quia nulla totam, dicta iste fuga earum? Nam minus
                commodi odio repellat labore cumque molestias rerum. Reiciendis,
                excepturi odio.
              </p>
              <p>
                Et natus earum possimus a magnam aut magni saepe nisi, nobis
                praesentium eius totam qui amet harum est officia rerum! Rem
                alias aspernatur tempore quibusdam ipsam quidem provident fugit
                sunt!
              </p>
              <p>
                Nostrum tempora error corporis, voluptatem ut quam ad, delectus
                facilis repudiandae ea cum deserunt ipsa dolore libero accusamus
                ullam nulla at aperiam laboriosam! Iste eos rem voluptatem
                aliquam eveniet facilis!
              </p>
              <p>
                Ad, voluptas eaque aperiam debitis cum modi, architecto corrupti
                earum facere fugiat libero temporibus incidunt. Eius at animi
                modi doloribus cupiditate alias beatae velit quae. Perferendis
                nesciunt doloremque minima quis?
              </p>
              <p>
                Tempore doloremque accusantium ullam dolore commodi facilis vel,
                obcaecati officia saepe officiis, recusandae fugit quidem quae
                nobis harum quam iure exercitationem, distinctio animi aperiam.
                Qui sit rerum placeat consequatur harum.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                fugiat corporis exercitationem in quis facere, adipisci
                doloribus animi dolorum voluptates tempora aut qui mollitia at.
                Optio delectus voluptatem nostrum debitis.
              </p>
              <p>
                Praesentium, modi et aperiam quia nostrum eum laborum, nesciunt
                quo sapiente labore enim quae maiores mollitia iusto repellat!
                Earum necessitatibus quo neque iusto. Aut delectus debitis ab,
                quod quam consequatur!
              </p>
              <p>
                Beatae nulla dolorum repellendus totam animi laboriosam,
                inventore consectetur, impedit libero odio nam incidunt debitis
                necessitatibus maxime exercitationem. Assumenda facere ipsa
                deleniti minus fugit nostrum magni cum obcaecati. Deleniti, ex?
              </p>
              <p>
                Pariatur itaque veniam totam voluptatum ad magnam aperiam beatae
                iusto temporibus aliquam! Sint officia laudantium aut qui illum
                reprehenderit maxime iste, porro dicta blanditiis, error soluta
                sed accusantium voluptates sunt.
              </p>
              <p>
                Excepturi recusandae nesciunt quam sapiente at, illo libero
                cumque vitae doloremque quo consectetur eveniet est placeat
                numquam eius neque amet blanditiis voluptate quas molestias,
                quidem incidunt commodi provident labore! Optio.
              </p>
              <CheckForUnderstanding>
                <MultipleSelectQuestionBlock question={question3} />
              </CheckForUnderstanding>
            </ContainerBlock>
          </LessonSectionBlock>
        )}
      </AnimatePresence>

      {currentSection === sectionCount - 1 && <NextLessonButton contingent />}
    </LessonBlock>
  )
}

export default Lesson1
