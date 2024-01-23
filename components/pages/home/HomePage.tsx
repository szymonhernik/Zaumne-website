import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { About } from '@/components/shared/About'
import { resolveHref } from '@/sanity/lib/utils'
import type { CalendarData, HomePagePayload } from '@/types'
import { WorkListItem } from './WorkListItem'
import { MixListItem } from './MixListItem'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { CalendarListItem } from './CalendarListItem'
import Calendar from './Calendar'
import ZaumneLogo from '@/components/shared/ZaumneLogo'

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
    <div className="container h-dvh sm:h-screen overflow-y-scroll snap-y snap-proximity font-normal flex flex-col gap-y-10 pb-64  px-4 relative w-full  ">
      <div className="zaumne-logo min-h-svh sm:h-screen  w-full  flex justify-center items-center snap-start">
        <ZaumneLogo />
      </div>

      <div className="about-group snap-start mb-48">
        <div className="h-[80svh]">
          <div className="socials sticky top-0 py-4">
            <CustomPortableText paragraphClasses="italic" value={socials} />
          </div>
        </div>
        <div className="about-text ">
          <CustomPortableText
            paragraphClasses="text-lg"
            value={aboutDescription}
          />
        </div>
      </div>
      {/* <About description={aboutDescription} /> */}
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="snap-start pt-8 mb-48">
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
        <div className="snap-start pt-8 mb-48">
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
        <div className="snap-start pt-8 mb-48">
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
        <div className="max-w-md snap-start pt-8">
          <h1 className="italic">Calendar</h1>
          <Calendar calendar={calendar} />
        </div>
      )}
    </div>
  )
}

export default HomePage
