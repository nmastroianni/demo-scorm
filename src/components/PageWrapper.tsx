import React, { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-screen-lg bg-slate-50 dark:bg-slate-800 mx-auto py-4 lg:py-8">
      <span className="w-full" />
      <div className="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto dark:prose-invert">
        {children}
      </div>
    </div>
  )
}

export default PageWrapper
