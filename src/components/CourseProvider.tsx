import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

interface CourseContextProps {
  currentLesson: number
  currentSection: number
  lessonLength: number
  sectionPassed: boolean
  coursePassed: boolean
  assessmentItems: number
  correctAssessmentItems: number
  WindowRef: React.RefObject<Window | null>
  setCurrentLesson: React.Dispatch<React.SetStateAction<number>>
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>
  setLessonLength: React.Dispatch<React.SetStateAction<number>>
  setSectionPassed: React.Dispatch<React.SetStateAction<boolean>>
  setCoursePassed: React.Dispatch<React.SetStateAction<boolean>>
  setAssessmentItems: React.Dispatch<React.SetStateAction<number>>
  setCorrectAssessmentItems: React.Dispatch<React.SetStateAction<number>>
}
const CourseContext = createContext<CourseContextProps | undefined>(undefined)
const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [lessonLength, setLessonLength] = useState(0)
  const [sectionPassed, setSectionPassed] = useState(false)
  const [coursePassed, setCoursePassed] = useState(false)
  const [assessmentItems, setAssessmentItems] = useState(0)
  const [correctAssessmentItems, setCorrectAssessmentItems] = useState(0)
  const WindowRef = useRef<Window | null>(null)
  useEffect(() => {
    const localLesson = Number(localStorage.getItem('lessonProgress'))
    const localSection = Number(localStorage.getItem('sectionProgress'))
    if (localLesson) {
      setCurrentLesson(localLesson)
    } else {
      setCurrentLesson(0)
    }
    if (localSection) {
      setCurrentSection(localSection)
    } else {
      setCurrentSection(0)
    }
  }, [])

  WindowRef.current = window.parent

  return (
    <CourseContext.Provider
      value={{
        currentLesson,
        currentSection,
        lessonLength,
        sectionPassed,
        coursePassed,
        assessmentItems,
        correctAssessmentItems,
        WindowRef,
        setCurrentLesson,
        setCurrentSection,
        setLessonLength,
        setSectionPassed,
        setCoursePassed,
        setAssessmentItems,
        setCorrectAssessmentItems,
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
