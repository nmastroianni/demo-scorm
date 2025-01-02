import { cn } from '@/lib/utils'
import { MapPin } from 'lucide-react'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { motion } from 'motion/react'
import { Hotspot } from '@/types/global'

interface LabledImageProps {
  imageUrl: string
  imageAlt?: string
  hotspots: Hotspot[]
}
const LabeledImageBlock: React.FC<LabledImageProps> = ({
  imageAlt = 'decorative image',
  imageUrl,
  hotspots,
}) => {
  return (
    <div className="relative mx-auto flex max-w-screen-md justify-center">
      <div className="relative">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="border-4 dark:border-slate-500"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: { when: 'beforeChildren', staggerChildren: 0.3 },
            },
            hidden: {
              opacity: 0,
              transition: {
                when: 'afterChildren',
              },
            },
          }}
        >
          {hotspots.map((hotspot, index) => {
            return (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                viewport={{ once: true }}
              >
                <Popover>
                  <PopoverTrigger
                    className={cn(
                      `absolute animate-pulse rounded-full border p-2 text-4xl focus:outline-none focus:ring-4 focus-visible:ring-ring`,
                    )}
                    style={{
                      top: hotspot.top,
                      left: hotspot.left,
                      borderColor: hotspot.color ? hotspot.color : 'white',
                    }}
                    aria-label="click to view more information"
                  >
                    <MapPin
                      width={hotspot.size ? hotspot.size : 30}
                      height={hotspot.size ? hotspot.size : 30}
                      color={hotspot.color ? hotspot.color : 'white'}
                    />
                  </PopoverTrigger>
                  <PopoverContent>{hotspot.content}</PopoverContent>
                </Popover>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default LabeledImageBlock
