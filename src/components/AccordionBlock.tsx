import { FC } from 'react'
import Container from './ContainerBlock'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { AccordionBlockItem } from '@/types/global'

interface AccordionBlockProps {
  data: Array<AccordionBlockItem>
  type?: 'single' | 'multiple'
  collapsible?: boolean
}
/**
 *
 * @param {AccordionBlockProps} [collapsible] Should the user be allowed to collapse an item after is was expanded? Default is true
 * @param {AccordionBlockProps} [type] Can more than one item be expanded at a time? Default is single
 * @param {AccordionBlockProps} [data] This is the array of AccordionItem(s) that you will have in your accordion
 * @returns {ReactNode} Returns a React functional component
 */
const AccordionBlock: FC<AccordionBlockProps> = ({
  collapsible = true,
  data,
  type = 'single',
}) => {
  return (
    <Container width="md">
      <Accordion type={type} collapsible={collapsible}>
        {data.map((item, index) => (
          <AccordionItem
            value={item.value}
            className="dark:border-slate-400"
            key={item.value + index}
          >
            <AccordionTrigger className="lg:text-lg">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  )
}

export default AccordionBlock
