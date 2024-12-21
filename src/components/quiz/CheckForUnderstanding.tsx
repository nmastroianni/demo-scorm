import { FC, ReactNode } from 'react'
import WhileInView from '../WhileInView'
interface CheckForUnderstandingProps {
  children: ReactNode
  heading?: string
}
const CheckForUnderstanding: FC<CheckForUnderstandingProps> = ({
  children,
  heading,
}) => {
  return (
    <div className="prose mx-auto max-w-screen-md rounded bg-slate-50 p-4 shadow-md lg:prose-lg xl:prose-xl dark:prose-invert prose-h2:my-0 lg:p-8 dark:bg-slate-800 dark:shadow-slate-500">
      {heading && (
        <WhileInView direction="down">
          <h2>{heading}</h2>
        </WhileInView>
      )}
      {children}
    </div>
  )
}

export default CheckForUnderstanding
