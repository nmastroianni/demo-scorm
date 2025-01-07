// src/global.d.ts

import { ReactNode } from 'react'

interface Window extends window {
  GetStatus: () => void
  SetFailed: () => void
  SetPassed: () => void
  SetScore: () => void
  RecordMultipleChoiceInteraction: () => void
  RecordFillInInteraction: () => void
}

interface Lesson {
  id: number
  title: string
}

/**
 * This type provides data to the LabeledImage component
 */
interface Hotspot {
  /**
   * How far from the top should this label appear?
   * This is typically expressed as a percentage like "33%"
   */
  top: string
  /**
   * How far from the left edge should this label appear?
   * This is typically expressed as a percentage like "25%"
   */
  left: string
  /**
   * How large should the label be in pixels?
   * Enter a number as a value like 50.
   */
  size?: number
  /**
   * What color should the label be? Consider a color that will provide sufficient contrast.
   * You can use HTML color names.
   */
  color?: HTMLColor
  /**
   * Enter HTML that you wish to appear when the label is clicked.
   */
  content: ReactNode
}

interface AccordionBlockItem {
  value: string
  trigger: string
  content: ReactNode
}

interface CarouselImageItem {
  image: string
  alt: string
}

interface TabBlockItem {
  trigger: string
  description?: ReactNode
  content: ReactNode
  contentTitle?: string
  footer?: ReactNode
}

interface TrueOrFalseQuestion {
  /**
   * id should be a string of text that you use to identify your question
   * exampe:
   * ```typescript
   * id: 'lesson1question1'
   * ```
   */
  id: string
  /**
   * type can only be one string value: TrueOrFalse
   * ```typescript
   * type: 'TrueOrFalse'
   * ```
   */
  type: 'TrueOrFalse'
  question: string
  answer: boolean
  correctFeedback?: string
  incorrectFeedback?: string
}

interface MultipleChoiceQuestion {
  id: string
  type: 'MultipleChoice'
  question: string
  options: string[]
  answer: number
  correctFeedback?: string
  incorrectFeedback?: string
}

interface MultipleSelectQuestion {
  id: string
  type: 'MultipleSelect'
  question: string
  options: string[]
  answer: number[]
  correctFeedback?: string
  incorrectFeedback?: string
}

type HTMLColor =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen'
  | `#${string}` // Hexadecimal
  | `rgb(${number},${number},${number})`
  | `rgba(${number},${number},${number},${number})`
  | `hsl(${number},${number}%,${number}%)`
  | `hsla(${number},${number}%,${number}%,${number})`
