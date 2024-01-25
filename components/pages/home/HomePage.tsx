import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import type { CalendarData, HomePagePayload } from '@/types'
import { MixListItem } from './MixListItem'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import Calendar from './Calendar'
import ZaumneLogo from '@/components/shared/ZaumneLogo'
import { Works } from './Works'
import NavBarMobile from './NavBarMobile'
import Discography from './Discography'

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
    <>
      <div
        id="container"
        className="h-dvh sm:h-screen scroll-smooth overflow-y-scroll overflow-x-visible snap-y snap-proximity font-normal flex flex-col gap-y-10 pb-64  px-4 relative w-screen z-[0] "
      >
        <NavBarMobile />
        <div
          id="home"
          className="zaumne-logo min-h-svh sm:h-screen  w-full  flex justify-center items-center snap-start"
        >
          <ZaumneLogo />
        </div>

        <div id="info" className=" snap-start mb-48">
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
          <div id="discography" className="snap-start pt-8 mb-48 ">
            <h1 className="italic mb-8">Discography</h1>
            <Discography
              showcaseProjects={showcaseProjects}
              encodeDataAttribute={encodeDataAttribute}
            />
          </div>
        )}
        {showcaseWorks && showcaseWorks.length > 0 && (
          <div id="works" className="max-w-md snap-start pt-8 mb-48">
            <h1 className="italic mb-8">Selected Works</h1>
            <Works
              showcaseWorks={showcaseWorks}
              encodeDataAttribute={encodeDataAttribute}
            />
          </div>
        )}
        {showcaseMixes && showcaseMixes.length > 0 && (
          <div id="mixes" className="snap-start pt-8 mb-48">
            <h1 className="italic mb-8">Mixes</h1>
            <div className="flex flex-col gap-4">
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
          </div>
        )}

        {calendar && calendar.length > 0 && (
          <div id="calendar" className="max-w-md snap-start pt-8">
            <h1 className="italic mb-8">Calendar</h1>
            <Calendar calendar={calendar} />
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage
