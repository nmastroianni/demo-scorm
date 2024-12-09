import loon from '@/assets/loon.jpg'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const LabeledImage = () => {
  return (
    <div className="relative inline-block">
      <img src={loon} alt="" />
      <Popover>
        <PopoverTrigger className="text-4xl absolute top-[30%] right-[30%]">
          *
        </PopoverTrigger>
        <PopoverContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            possimus aut. Voluptatem quam aliquid corporis assumenda provident
            maiores animi eos fuga amet eligendi hic, optio quo dolore quia
            vitae quae.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            possimus aut. Voluptatem quam aliquid corporis assumenda provident
            maiores animi eos fuga amet eligendi hic, optio quo dolore quia
            vitae quae.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default LabeledImage
