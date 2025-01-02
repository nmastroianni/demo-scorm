import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  width: '2xl' | 'xl' | 'lg' | 'md' | 'prose'
  className?: string
}

const ContainerBlock: React.FC<ContainerProps> = ({
  children,
  className,
  width,
}) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-screen-lg',
        {
          'max-w-screen-2xl': width === '2xl',
          'max-w-screen-xl': width === 'xl',
          'max-w-screen-md': width === 'md',
        },
        className,
      )}
    >
      <span className="w-full" />
      <div
        className={cn('mx-auto p-4 lg:p-0', {
          'prose dark:prose-invert lg:prose-lg xl:prose-xl 2xl:prose-2xl':
            width === 'prose',
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default ContainerBlock
