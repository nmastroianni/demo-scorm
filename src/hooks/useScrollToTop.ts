import { useEffect } from 'react'

const useScrollToTop = (currentSection: number) => {
  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo({
        top: 100,
        behavior: 'instant',
      })
    }, 500)
  }, [currentSection])
}
export default useScrollToTop
