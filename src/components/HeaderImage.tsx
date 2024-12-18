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

const HeaderImage: FC<HeaderImageProps> = ({
  image,
  altText,
  heading = defaultHeading,
}) => {
  if (altText === '') altText = 'decorative image'
  return (
    <header className="relative flex justify-center items-center mb-4 lg:mb-8 p-4 lg:p-8 h-72">
      <img
        src={image}
        alt={altText}
        className="absolute inset-0 object-cover w-full h-72"
      />
      <div className="md:max-w-screen-md max-w-screen-lg z-10 p-4 lg:p-8 bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:text-slate-200 backdrop-blur-sm rounded-lg">
        <h1
          className="font-black text-2xl md:text-3xl lg:text-5xl text-center"
          style={{ lineHeight: 1.3 }}
        >
          {heading}
        </h1>
      </div>
    </header>
  )
}

export default HeaderImage
