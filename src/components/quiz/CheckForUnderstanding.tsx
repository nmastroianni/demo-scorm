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
    <WhileInView direction="up" margin="-30%">
      <div className="prose mx-auto mt-4 max-w-screen-md rounded bg-slate-50 p-4 shadow-md lg:prose-lg xl:prose-xl dark:prose-invert prose-h2:my-0 lg:mt-8 lg:p-8 dark:bg-slate-800 dark:shadow-slate-500">
        {heading && <h2 className="pb-4 lg:pb-8">{heading}</h2>}
        {children}
      </div>
    </WhileInView>
  )
}

export default CheckForUnderstanding
