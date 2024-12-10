import { cn } from '@/lib/utils'
import { MapPin } from 'lucide-react'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

interface LabledImageProps {
  imageUrl: string
  imageAlt?: string
  hotspots: Hotspot[]
}
const LabeledImage: React.FC<LabledImageProps> = ({
  imageAlt = 'decorative image',
  imageUrl,
  hotspots,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="border-4 dark:border-slate-500"
        />
        {hotspots.map((hotspot, index) => {
          return (
            <Popover key={index}>
              <PopoverTrigger
                className={cn(`animate-pulse text-4xl absolute`)}
                style={{ top: hotspot.top, left: hotspot.left }}
              >
                <MapPin
                  width={hotspot.size ? hotspot.size : 30}
                  height={hotspot.size ? hotspot.size : 30}
                  color={hotspot.color ? hotspot.color : 'white'}
                />
              </PopoverTrigger>
              <PopoverContent>{hotspot.content}</PopoverContent>
            </Popover>
          )
        })}
      </div>
    </div>
  )
}

export default LabeledImage
