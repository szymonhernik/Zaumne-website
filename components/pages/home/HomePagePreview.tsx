'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { calendarQuery, homePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { CalendarData, HomePagePayload } from '@/types'

import HomePage from './HomePage'

type Props = {
  initial: QueryResponseInitial<HomePagePayload | null>
  calendar: any
}

export default function HomePagePreview(props: Props) {
  const { initial, calendar } = props
  const { data, encodeDataAttribute } = useQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }
  if (!calendar) {
    return <div className="text-center">Missing calendar!</div>
  }

  return (
    <HomePage
      data={data}
      calendar={calendar}
      encodeDataAttribute={encodeDataAttribute}
    />
  )
}
