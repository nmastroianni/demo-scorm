import { cn } from '@/lib/utils'
import { FC } from 'react'
interface YouTubeBlockProps {
  url: string
  style?: 'normal' | 'vertical'
}

const YouTubeBlock: FC<YouTubeBlockProps> = ({ style = 'normal', url }) => {
  const v = new URL(url).searchParams.get('v')
  let vid
  if (v) {
    vid = v
  }
  return (
    <div
      className={cn('mx-auto max-w-screen-md py-4 lg:py-8', {
        'max-w-sm': style === 'vertical',
      })}
    >
      <div
        className={cn({
          'aspect-h-9 aspect-w-16': style === 'normal',
          'aspect-h-16 aspect-w-9': style === 'vertical',
        })}
      >
        <iframe
          src={`https://www.youtube.com/embed/${vid}?feature=oembed`}
          allowFullScreen
          allow="accelerometer; picture-in-picture;"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  )
}

export default YouTubeBlock
