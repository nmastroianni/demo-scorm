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

export const getYouTubeVideoId = (
  url: string,
): { vid: string; shorts: boolean } | null => {
  const shortUrlPattern = /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?&/]+)/
  const regularUrlPattern =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^?&/]+)/
  const shortsUrlPattern =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^?&/]+)/
  const match =
    url.match(shortUrlPattern) ||
    url.match(regularUrlPattern) ||
    url.match(shortsUrlPattern)
  return match
    ? { vid: match[1], shorts: url.match(shortsUrlPattern) ? true : false }
    : null
}
