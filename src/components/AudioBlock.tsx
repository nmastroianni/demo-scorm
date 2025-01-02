import { FC, useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

interface AudioBlockProps {
  audioFile: string
  transcript: string
}
/**
 *
 * @param {string} [audioFile] Import an audio file in your lesson and pass this as a prop
 * @param {string} [transcript] Paste in the text transcript for your audio for accessibility (this is required)
 * @returns a React functional component
 */
const AudioBlock: FC<AudioBlockProps> = ({ audioFile, transcript }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  return (
    <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center py-4 lg:py-8">
      <audio ref={audioRef} src={audioFile} controls></audio>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={audioFile}>
          <AccordionTrigger>Audio Transcript</AccordionTrigger>
          <AccordionContent>{transcript}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AudioBlock
