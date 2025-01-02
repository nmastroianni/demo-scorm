import { FC } from 'react'

interface HeaderImageProps {
  /**
   * Import an image in your component and pass that as a prop here
   */
  image: string
  /**
   * This text is required for accessibility
   * Describe the image without using the word image or picture
   * Example: A common loon swimming in a lake with water dropping from its bill
   * Otherwise, leaving this blank will default to 'decorative image'
   */
  altText: string
  /**
   * Optionally provide H1 text for the page
   * This should be the title for the page
   */
  heading?: string
}

const defaultHeading =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

const HeaderImageBlock: FC<HeaderImageProps> = ({
  image,
  altText,
  heading = defaultHeading,
}) => {
  if (altText === '') altText = 'decorative image'
  return (
    <header className="relative mb-4 flex h-72 items-center justify-center p-4 lg:mb-8 lg:p-8">
      <img
        src={image}
        alt={altText}
        className="absolute inset-0 h-72 w-full object-cover"
      />
      <div className="z-10 max-w-screen-lg rounded-lg bg-slate-200/80 p-4 text-slate-800 backdrop-blur-sm dark:bg-slate-800/80 dark:text-slate-200 md:max-w-screen-md lg:p-8">
        <h1
          className="text-center text-2xl font-black md:text-3xl lg:text-6xl"
          style={{ lineHeight: 1.3 }}
        >
          {heading}
        </h1>
      </div>
    </header>
  )
}

export default HeaderImageBlock
