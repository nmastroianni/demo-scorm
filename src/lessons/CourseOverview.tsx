import Container from '@/components/Container'
import { useCourse } from '@/components/CourseProvider'
import Lesson from '@/components/Lesson'
import { Button } from '@/components/ui/button'
import HeaderImage from '@/components/HeaderImage'
import BlockQuote from '@/components/BlockQuote'
import YouTubeBlock from '@/components/YouTubeBlock'
import AudioBlock from '@/components/AudioBlock'
//import assets
// @ts-expect-error imagetools
import loon from '@/assets/images/loon.jpg?w=1920&h=1080'
import apollo11 from '@/assets/audio/Armstrong_Small_Step.ogg'

const CourseOverview: React.FC = () => {
  const { currentLesson, setCurrentLesson } = useCourse()

  return (
    <>
      <Lesson>
        <HeaderImage image={loon} altText="" heading="This is an h1 element." />
        <div className="flex justify-center py-4 lg:py-8">
          <Button
            onClick={() => {
              setCurrentLesson(currentLesson + 1)
              localStorage.setItem('lessonProgress', `${currentLesson + 1}`)
              localStorage.setItem('sectionProgress', '0')
            }}
            tabIndex={0}
          >
            Start Course
          </Button>
        </div>
        <Container width="prose">
          <h2>
            This is an h2 element because it is a child of the h1 ☝️ in the
            HeaderImage component.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            nulla? Harum, soluta numquam. Necessitatibus veniam ab nostrum autem
            asperiores perspiciatis animi ducimus fuga, suscipit voluptas
            accusamus sequi quia voluptatem similique?
          </p>
        </Container>
        <BlockQuote author="Some Author" citation="Some Source">
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam quidem porro autem, beatae vitae magnam perferendis accusamus
          iste cumque, cum fuga quibusdam eveniet eaque! Ipsam modi cupiditate
          quasi odio sunt.&rdquo;
        </BlockQuote>
        <YouTubeBlock url="https://youtube.com/shorts/pFuFVZU3NB0?si=2J_BuhjHVs5eULGA" />
        <AudioBlock
          audioFile={apollo11}
          transcript="Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor augue integer pharetra morbi nisi taciti. Mollis fusce semper vehicula potenti ligula feugiat aptent. Ut adipiscing vivamus lectus fusce aptent himenaeos. Dictum aliquam inceptos quisque penatibus natoque ex nisi dictumst. Ad odio pulvinar gravida ipsum diam posuere convallis hac. Mauris quisque et scelerisque senectus quisque hendrerit inceptos dis. Eros posuere litora at ad etiam nunc; at donec. Metus faucibus porttitor mi justo id nibh varius. Ultricies pulvinar morbi leo nostra pharetra. Senectus senectus pharetra urna; eros himenaeos molestie. Posuere nullam nunc aptent magnis suscipit aliquet lacus. Pharetra metus libero felis congue; molestie mauris duis quam. Auctor eget netus eget proin cubilia lobortis. Congue magna proin dictumst massa; himenaeos augue habitant massa luctus."
        />
      </Lesson>
    </>
  )
}

export default CourseOverview
