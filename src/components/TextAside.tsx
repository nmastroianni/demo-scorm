import React, { ReactNode, useState } from 'react'
import WhileInView from './WhileInView'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
interface TextAside {
  altText: string
  children: ReactNode
  imageUrl: string
}
const TextAside: React.FC<TextAside> = ({ altText, children, imageUrl }) => {
  const [open, setOpen] = useState(false)
  if (altText === '')
    altText = '🚨 Alert! Alternative text is required for this image. 🚨'
  return (
    <div className="p-4">
      <div className="flex flex-wrap items-center gap-x-4">
        <div className="py-5 md:flex-1">
          <WhileInView direction="right" margin="-30%">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <figure>
                  <img
                    src={imageUrl}
                    alt=""
                    className="cursor-zoom-in rounded-lg shadow-md shadow-slate-900"
                    title={altText}
                  />
                  <figcaption className="mt-4 border-t border-slate-400/50 pt-2">
                    {altText}
                  </figcaption>
                </figure>
              </DialogTrigger>
              <DialogContent className="max-w-screen-lg p-8">
                <img
                  src={imageUrl}
                  alt={altText}
                  className="w-full cursor-zoom-out rounded-lg shadow shadow-slate-600"
                  onClick={() => {
                    setOpen(false)
                  }}
                />
              </DialogContent>
            </Dialog>
          </WhileInView>
        </div>
        <div className="prose mx-auto p-4 lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert md:flex-1 md:p-0">
          <WhileInView direction="left">{children}</WhileInView>
        </div>
      </div>
    </div>
  )
}

export default TextAside
