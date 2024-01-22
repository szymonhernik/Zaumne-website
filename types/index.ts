import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
  date?: string
  highlighted: string
  quote?: PortableTextBlock[]
}
export interface ShowcaseWork {
  _type: string
  coverImage?: Image
  workDetails?: PortableTextBlock[]
  workDescription?: PortableTextBlock[]
  highlighted?: boolean
  title?: string
}
export interface ShowcaseMix {
  _type: string
  date?: string
  link?: string
  title?: string
}
// Page payloads

export interface HomePagePayload {
  aboutDescription: PortableTextBlock[]
  socials: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  showcaseWorks?: ShowcaseWork[]
  showcaseMixes?: ShowcaseMix[]
  title?: string
}

export interface CombinedHomePagePayload {
  home: HomePagePayload
  calendar: CalendarData[]
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface CalendarData {
  title: string
  city: string
  link: string
  date: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}
