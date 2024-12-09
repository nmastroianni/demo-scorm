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
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-x-4 items-center">
        <div className="md:flex-1 py-5">
          <WhileInView direction="left">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <img
                  src={imageUrl}
                  alt={altText}
                  className="rounded-lg shadow-md shadow-slate-900 cursor-zoom-in"
                />
              </DialogTrigger>
              <DialogContent className="max-w-screen-lg p-8">
                <img
                  src={imageUrl}
                  alt={altText}
                  className="rounded-lg shadow shadow-slate-600 w-full cursor-zoom-out"
                  onClick={() => {
                    setOpen(false)
                  }}
                />
              </DialogContent>
            </Dialog>
          </WhileInView>
        </div>
        <div className="md:flex-1 prose lg:prose-lg xl:prose-xl mx-auto p-4 md:p-0 dark:prose-invert">
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextAside
