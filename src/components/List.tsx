import { motion } from 'motion/react'
import { FC, ReactNode } from 'react'

interface ListProps {
  type?: 'ordered' | 'unordered'
  children: ReactNode
}
const List: FC<ListProps> = ({ children, type = 'unordered' }) => {
  const list = {
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.4 },
    },
    hidden: { opacity: 0, transition: { when: 'afterChildren' } },
  }
  if (type === 'ordered') {
    return (
      <motion.ol
        initial="hidden"
        whileInView="visible"
        variants={list}
        viewport={{ margin: '-20%' }}
      >
        {children}
      </motion.ol>
    )
  } else {
    return (
      <motion.ul initial="hidden" whileInView="visible" variants={list}>
        {children}
      </motion.ul>
    )
  }
}

export default List
