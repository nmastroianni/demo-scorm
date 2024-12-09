import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  prose?: boolean
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  prose = true,
}) => {
  return (
    <div className="max-w-screen-lg bg-slate-50 dark:bg-slate-800 mx-auto py-4 lg:py-8">
      <span className="w-full" />
      <div
        className={cn('mx-auto  p-4 lg:p-0', {
          'prose lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert':
            prose,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default PageWrapper
