import { TabBlockItem } from '@/types/global'
import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { sluggify } from '@/lib/utils'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

interface TabsBlockProps {
  data: TabBlockItem[]
}

/**
 *
 * @param {TabBlockProps} [data] Provide the component an array of TabBlockItem(s)
 * @returns a React functional component based on [ShadCN UI](https://ui.shadcn.com/docs/components/tabs)
 */
const TabsBlock: FC<TabsBlockProps> = ({ data }) => {
  return (
    <div className="mx-auto flex max-w-screen-sm items-start justify-center p-4 lg:p-8">
      <Tabs defaultValue={sluggify(data[0].trigger)}>
        <TabsList
          className="grid w-full"
          style={{
            gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))`,
          }}
        >
          {data.map(tab => {
            const slug = sluggify(tab.trigger)
            return (
              <TabsTrigger key={`trigger-${slug}`} value={slug}>
                {tab.trigger}
              </TabsTrigger>
            )
          })}
        </TabsList>
        {data.map(item => {
          const slug = sluggify(item.trigger)
          return (
            <TabsContent key={`content-${slug}`} value={slug}>
              <Card>
                <CardHeader>
                  {item.contentTitle && (
                    <CardTitle>{item.contentTitle}</CardTitle>
                  )}
                  {item.description && (
                    <CardDescription>{item.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>{item.content}</CardContent>
                {item.footer && <CardFooter>{item.footer}</CardFooter>}
              </Card>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

export default TabsBlock
