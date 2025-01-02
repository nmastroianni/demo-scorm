import { FC, useRef } from 'react'

interface AudioBlockProps {
  audioFile: string
}

const AudioBlock: FC<AudioBlockProps> = ({ audioFile }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  return (
    <div className="flex justify-center py-4 lg:py-8">
      <audio ref={audioRef} src={audioFile} controls></audio>
    </div>
  )
}

export default AudioBlock
