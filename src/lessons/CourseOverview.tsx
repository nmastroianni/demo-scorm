import ContainerBlock from '@/components/ContainerBlock'
import { useCourse } from '@/components/CourseProvider'
import LessonBlock from '@/components/LessonBlock'
import { Button } from '@/components/ui/button'
import HeaderImageBlock from '@/components/HeaderImageBlock'
import BlockQuoteBlock from '@/components/BlockQuoteBlock'
import YouTubeBlock from '@/components/YouTubeBlock'
import AudioBlock from '@/components/AudioBlock'
//import assets
// @ts-expect-error imagetools
import loon from '@/assets/images/loon.jpg?w=1920&h=1080'
import tremolo from '@/assets/audio/Common_loon_tremolo.ogg'
import CarouselBlock from '@/components/CarouselBlock'
import { CarouselImageItem } from '@/types/global'

const CourseOverview: React.FC = () => {
  const { currentLesson, setCurrentLesson } = useCourse()

  const carouselItems: CarouselImageItem[] = [
    {
      image: loon,
      alt: 'A common loon',
    },
    {
      image: loon,
      alt: 'The same common loon',
    },
    {
      image: loon,
      alt: 'The same common loon',
    },
  ]
  return (
    <>
      <LessonBlock>
        <HeaderImageBlock
          image={loon}
          altText=""
          heading="This is an h1 element."
        />
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
        <ContainerBlock width="prose">
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
        </ContainerBlock>
        <BlockQuoteBlock author="Some Author" citation="Some Source">
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam quidem porro autem, beatae vitae magnam perferendis accusamus
          iste cumque, cum fuga quibusdam eveniet eaque! Ipsam modi cupiditate
          quasi odio sunt.&rdquo;
        </BlockQuoteBlock>
        <ContainerBlock width="2xl">
          <YouTubeBlock
            title="Video Title Goes Here"
            url="https://www.youtube.com/watch?v=o3FzIZvYsII"
          />
        </ContainerBlock>
        <ContainerBlock width="md">
          <AudioBlock
            audioFile={tremolo}
            transcript="Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor augue integer pharetra morbi nisi taciti. Mollis fusce semper vehicula potenti ligula feugiat aptent. Ut adipiscing vivamus lectus fusce aptent himenaeos. Dictum aliquam inceptos quisque penatibus natoque ex nisi dictumst. Ad odio pulvinar gravida ipsum diam posuere convallis hac. Mauris quisque et scelerisque senectus quisque hendrerit inceptos dis. Eros posuere litora at ad etiam nunc; at donec. Metus faucibus porttitor mi justo id nibh varius. Ultricies pulvinar morbi leo nostra pharetra. Senectus senectus pharetra urna; eros himenaeos molestie. Posuere nullam nunc aptent magnis suscipit aliquet lacus. Pharetra metus libero felis congue; molestie mauris duis quam. Auctor eget netus eget proin cubilia lobortis. Congue magna proin dictumst massa; himenaeos augue habitant massa luctus."
          />
          <CarouselBlock images={carouselItems} />
        </ContainerBlock>
      </LessonBlock>
    </>
  )
}

export default CourseOverview
