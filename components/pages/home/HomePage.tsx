import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { About } from '@/components/shared/About'
import { resolveHref } from '@/sanity/lib/utils'
import type { CalendarData, HomePagePayload } from '@/types'
import { WorkListItem } from './WorkListItem'
import { MixListItem } from './MixListItem'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
  calendar: CalendarData | null
}

export function HomePage({
  data,
  encodeDataAttribute,
  calendar,
}: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    aboutDescription = [],
    showcaseProjects = [],
    showcaseWorks = [],
    showcaseMixes = [],
  } = data ?? {}

  console.log('DATA', calendar)

  return (
    <div className="italic font-normal flex flex-col gap-y-0.5">
      {/* Header */}
      <About description={aboutDescription} />
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="">
          <p>Projects</p>
          {showcaseProjects.map((project, key) => {
            return (
              <div
                key={key}
                data-sanity={encodeDataAttribute?.(['showcaseProjects', key])}
              >
                <ProjectListItem project={project} />
              </div>
            )
          })}
        </div>
      )}
      {showcaseWorks && showcaseWorks.length > 0 && (
        <div className="">
          <p>Works</p>
          {showcaseWorks.map((work, key) => {
            return (
              <div
                key={key}
                data-sanity={encodeDataAttribute?.(['showcaseWorks', key])}
              >
                <WorkListItem work={work} />
              </div>
            )
          })}
        </div>
      )}
      {showcaseMixes && showcaseMixes.length > 0 && (
        <div className="">
          <p>Mixes</p>
          {showcaseMixes.map((mix, key) => {
            return (
              <div
                key={key}
                data-sanity={encodeDataAttribute?.(['showcaseMixes', key])}
              >
                <MixListItem mix={mix} />
              </div>
            )
          })}
        </div>
      )}

      {calendar && calendar.length > 0 && (
        <div>
          {calendar.map((calendarItem, key) => {
            return (
              <div key={key} className="flex">
                <p>{calendarItem.title}</p>
                <p>{calendarItem.date}</p>
                <p>{calendarItem.city}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HomePage
