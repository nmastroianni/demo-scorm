import React, { ReactNode } from 'react'
interface TextAside {
  children: ReactNode
}
const TextAside: React.FC<TextAside> = () => {
  return <div>TextAside</div>
}

export default TextAside
