import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react'

interface CourseContextProps {
  currentLesson: number
  currentSection: number
  lessonLength: number
  WindowRef: React.MutableRefObject<Window | null>
  setCurrentLesson: React.Dispatch<React.SetStateAction<number>>
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>
  setLessonLength: React.Dispatch<React.SetStateAction<number>>
}
const CourseContext = createContext<CourseContextProps | undefined>(undefined)
const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [lessonLength, setLessonLength] = useState(0)
  const WindowRef = useRef<Window | null>(null)

  WindowRef.current = window.parent

  return (
    <CourseContext.Provider
      value={{
        currentLesson,
        currentSection,
        lessonLength,
        WindowRef,
        setCurrentLesson,
        setCurrentSection,
        setLessonLength,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}
const useCourse = () => {
  const context = useContext(CourseContext)
  if (context === undefined) {
    throw new Error('useCourse must be used within a CourseProvider')
  }
  return context
}
// eslint-disable-next-line react-refresh/only-export-components
export { CourseProvider, useCourse }
