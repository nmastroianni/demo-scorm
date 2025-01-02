import { motion } from 'motion/react'
import { FC, ReactNode } from 'react'

interface ListProps {
  type?: 'ordered' | 'unordered'
  children: ReactNode
  animate?: boolean
}
const ListBlock: FC<ListProps> = ({
  animate = true,
  children,
  type = 'unordered',
}) => {
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
        initial={animate ? 'hidden' : 'visible'}
        whileInView="visible"
        variants={list}
        viewport={{ margin: '-20%', once: true }}
      >
        {children}
      </motion.ol>
    )
  } else {
    return (
      <motion.ul
        initial={animate ? 'hidden' : 'visible'}
        whileInView="visible"
        variants={list}
        viewport={{ margin: '-10%', once: true }}
      >
        {children}
      </motion.ul>
    )
  }
}

export default ListBlock
