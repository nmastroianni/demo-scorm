import { cn, getYouTubeVideoId } from '@/lib/utils'
import { FC } from 'react'
interface YouTubeBlockProps {
  url: string
  title: string
}

const YouTubeBlock: FC<YouTubeBlockProps> = ({ title, url }) => {
  const video = getYouTubeVideoId(url)

  return (
    <div
      className={cn('mx-auto py-4 lg:py-8', {
        'max-w-sm': video?.shorts,
      })}
    >
      {video ? (
        <div
          className={cn({
            'aspect-h-9 aspect-w-16': !video.shorts,
            'aspect-h-16 aspect-w-9': video.shorts,
          })}
        >
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${video.vid}?feature=oembed`}
            allowFullScreen
            allow="accelerometer; picture-in-picture;"
            className="rounded-lg"
          ></iframe>
        </div>
      ) : (
        <div>
          <p>
            URL is not recognized as a youtube video. Please try a different
            URL.
          </p>
        </div>
      )}
    </div>
  )
}

export default YouTubeBlock
