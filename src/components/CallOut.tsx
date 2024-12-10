import { LucideInfo } from 'lucide-react'
import React, { ReactNode } from 'react'

interface CallOutProps {
  children: ReactNode
}
const CallOut: React.FC<CallOutProps> = ({ children }) => {
  return (
    <div className="border border-slate-400 rounded flex items-center p-4 lg:p-8 gap-x-4 lg:gap-x-8">
      <LucideInfo width={30} height={30} className="shrink-0" />
      <div className="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
        {children}
      </div>
    </div>
  )
}

export default CallOut
