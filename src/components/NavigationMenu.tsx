import { Lesson } from '@/types/global'
import { FC, useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Home, Lock, LockOpen, Menu } from 'lucide-react'
import { useCourse } from './CourseProvider'
import { Button } from './ui/button'
interface NavigationMenuProps {
  lessons: Array<Lesson>
}

const NavigationMenu: FC<NavigationMenuProps> = ({ lessons }) => {
  const { currentLesson, setCurrentLesson } = useCourse()
  const [highestLesson, setHighestLesson] = useState(currentLesson)
  useEffect(() => {
    if (currentLesson > highestLesson) {
      setHighestLesson(currentLesson)
    }
  }, [currentLesson, highestLesson, setHighestLesson])
  console.log('current lesson is ', currentLesson)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} size={'icon'} className="dark:bg-slate-800">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-slate-800">
        {currentLesson > 0 && (
          <DropdownMenuItem
            className="flex dark:hover:bg-slate-700"
            onClick={() => setCurrentLesson(0)}
          >
            <span>
              <Home className="h-[1rem] w-[1rem]" />
            </span>
            <span>Home</span>
          </DropdownMenuItem>
        )}
        {lessons.map(lesson => {
          return (
            <DropdownMenuItem
              key={lesson.id}
              className="flex dark:hover:bg-slate-700"
              onClick={() => {
                setCurrentLesson(lesson.id)
              }}
              disabled={lesson.id > highestLesson}
            >
              <span>
                {lesson.id > highestLesson ? (
                  <Lock className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <LockOpen className="h-[1.2rem] w-[1.2rem]" />
                )}
              </span>
              <span>{lesson.title}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavigationMenu
