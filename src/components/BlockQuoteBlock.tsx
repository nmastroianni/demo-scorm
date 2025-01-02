import { FC, ReactNode } from 'react'
import Container from './ContainerBlock'

interface BlockQuoteProps {
  children: ReactNode
  author?: string
  citation?: string
}

const BlockQuoteBlock: FC<BlockQuoteProps> = ({
  author,
  children,
  citation,
}) => {
  return (
    <Container
      width="md"
      className="my-4 border-l-2 border-r-2 border-slate-300 dark:border-slate-200 lg:my-8"
    >
      <blockquote
        className="p-4 font-serif text-2xl font-semibold lg:p-8 lg:text-3xl"
        style={{ lineHeight: '2.6rem' }}
      >
        <p>{children}</p>
      </blockquote>
      {author && (
        <p className="flex justify-end pr-4 lg:pr-8">
          - {author}
          {citation && (
            <>
              <cite>, {citation}</cite>
            </>
          )}
        </p>
      )}
    </Container>
  )
}

export default BlockQuoteBlock
