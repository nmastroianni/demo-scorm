import { motion } from 'motion/react'
import { FC, ReactNode } from 'react'

interface ListItemProps {
  children: ReactNode
}

const ListItem: FC<ListItemProps> = ({ children }) => {
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  return <motion.li variants={item}>{children}</motion.li>
}

export default ListItem
