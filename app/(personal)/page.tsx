import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadCalendar, loadHomePage } from '@/sanity/loader/loadQuery'
const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadHomePage()
  const calendar = await loadCalendar()

  // console.log(initial)
  // console.log(calendar)

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} calendar={calendar} />
  }

  return <HomePage data={initial.data} calendar={calendar.data} />
}
