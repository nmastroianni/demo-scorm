import { CarouselImageItem } from '@/types/global'
import { FC } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Card, CardContent } from './ui/card'
import { cn } from '@/lib/utils'
interface CarouselBlockProps {
  images: CarouselImageItem[]
}

const CarouselBlock: FC<CarouselBlockProps> = ({ images }) => {
  return (
    <div className="mx-auto flex items-center justify-center px-4 py-4 lg:px-12 lg:py-8">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={image + index.toString()}
              className={cn('h-full cursor-grab')}
            >
              <div>
                <Card>
                  <CardContent className="relative p-0">
                    {
                      <img
                        src={image.image}
                        alt={image.alt}
                        className="w-full rounded-lg object-cover"
                        title={image.alt}
                      />
                    }
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden md:inline-flex" />
        <CarouselPrevious className="hidden md:inline-flex" />
      </Carousel>
    </div>
  )
}

export default CarouselBlock
