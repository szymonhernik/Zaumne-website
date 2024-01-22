import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { About } from '@/components/shared/About'
import { resolveHref } from '@/sanity/lib/utils'
import type { CalendarData, HomePagePayload } from '@/types'
import { WorkListItem } from './WorkListItem'
import { MixListItem } from './MixListItem'
import { CustomPortableText } from '@/components/shared/CustomPortableText'

export interface HomePageProps {
  data: {
    home: HomePagePayload | null
    calendar: CalendarData[] | null
  }
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    aboutDescription = [],
    socials = [],
    showcaseProjects = [],
    showcaseWorks = [],
    showcaseMixes = [],
  } = data.home ?? {}

  const calendar = data.calendar ?? []

  return (
    <div className="font-normal flex flex-col gap-y-10">
      {/* Header */}
      <CustomPortableText paragraphClasses="italic" value={socials} />
      <CustomPortableText paragraphClasses="text-lg" value={aboutDescription} />
      {/* <About description={aboutDescription} /> */}
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="">
          <h1 className="italic">Discography</h1>
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
          <h1 className="italic">Selected Works</h1>
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
          <h1 className="italic">Mixes</h1>
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
          <h1 className="italic">Calendar</h1>
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
