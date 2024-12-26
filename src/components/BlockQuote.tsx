import { FC, ReactNode } from 'react'
import Container from './Container'

interface BlockQuoteProps {
  children: ReactNode
  author?: string
  citation?: string
}

const BlockQuote: FC<BlockQuoteProps> = ({ author, children, citation }) => {
  return (
    <Container width="md" className="my-4 lg:my-8">
      <blockquote
        className="border-l-2 border-r-2 p-4 text-2xl font-semibold lg:p-8 lg:text-3xl"
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

export default BlockQuote