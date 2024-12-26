import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sluggify = (text: string): string => {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/[\s]+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]+/g, '') // Remove invalid characters
}
