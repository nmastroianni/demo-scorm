import { LucideInfo } from 'lucide-react'
import React, { ReactNode } from 'react'

interface CallOutProps {
  children: ReactNode
}
const CallOutBlock: React.FC<CallOutProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-x-4 rounded border border-slate-400 p-4 lg:gap-x-8 lg:p-8">
      <LucideInfo width={30} height={30} className="shrink-0" />
      <div className="prose dark:prose-invert lg:prose-lg xl:prose-xl 2xl:prose-2xl">
        {children}
      </div>
    </div>
  )
}

export default CallOutBlock
