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
        className="h-dvh sm:h-screen scroll-smooth overflow-y-scroll overflow-x-visible snap-y snap-proximity font-normal flex flex-col gap-y-10 pb-64 big-tablet:pb-0 px-4 relative w-screen z-[0] "
      >
        <NavBarMobile />
        <div
          id="home"
          className="zaumne-logo min-h-svh sm:h-screen w-full flex justify-center items-center snap-start big-tablet:fixed  big-tablet:min-h-4 big-tablet:h-auto big-tablet:bottom-[15dvh] big-tablet:right-[30dvw] big-tablet:w-auto"
        >
          <ZaumneLogo />
        </div>

        <div
          id="info"
          className="snap-start mb-48 big-tablet:mb-0 big-tablet:max-h-dvh big-tablet:min-h-dvh big-tablet:h-dvh  big-tablet:flex big-tablet:flex-col big-tablet:justify-between "
        >
          <div className="h-[80svh] big-tablet:h-auto">
            <div className="socials sticky top-0 py-4">
              <CustomPortableText paragraphClasses="italic" value={socials} />
            </div>
          </div>
          <div className="about-text max-w-md big-tablet:mb-4">
            <CustomPortableText
              paragraphClasses="text-lg"
              value={aboutDescription}
            />
          </div>
        </div>
        {/* <About description={aboutDescription} /> */}
        <div className="big-tablet:relative big-tablet:max-h-dvh big-tablet:min-h-dvh big-tablet:w-dvh  ">
          {/* Showcase projects */}
          {showcaseProjects && showcaseProjects.length > 0 && (
            <div
              id="discography"
              className="snap-start pt-8 mb-48 big-tablet:absolute big-tablet:top-[0] big-tablet:w-auto big-tablet:right-[18vw] big-tablet:text-right big-tablet:pt-[5vh]"
            >
              <h1 className="italic mb-8 big-tablet:hidden">Discography</h1>
              <Discography
                showcaseProjects={showcaseProjects}
                encodeDataAttribute={encodeDataAttribute}
              />
            </div>
          )}
          <div
            className="
          big-tablet:max-h-[60dvh] big-tablet:h-[60dvh] big-tablet:mt-[40dvh]  big-tablet:relative big-tablet:overflow-y-scroll big-tablet:border-t-[1px]  big-tablet:border-black big-tablet:max-w-[40vw] big-tablet:px-4  big-tablet:text-sm hidescrollbar"
          >
            {showcaseWorks && showcaseWorks.length > 0 && (
              <div
                id="works"
                className="max-w-md snap-start pt-8 mb-48 big-tablet:absolute  big-tablet:top-0 big-tablet:max-w-sm big-tablet:py-16 "
              >
                <h1 className="italic mb-8 big-tablet:hidden">
                  Selected Works
                </h1>
                <Works
                  showcaseWorks={showcaseWorks}
                  encodeDataAttribute={encodeDataAttribute}
                />
              </div>
            )}
            {showcaseMixes && showcaseMixes.length > 0 && (
              <div
                id="mixes"
                className="snap-start pt-8 mb-48 big-tablet:absolute big-tablet:top-0  big-tablet:max-w-sm big-tablet:py-16 big-tablet:hidden"
              >
                <h1 className="italic mb-8 big-tablet:hidden ">Mixes</h1>
                <div className="flex flex-col gap-4 big-tablet:gap-8">
                  {showcaseMixes.map((mix, key) => {
                    return (
                      <div
                        key={key}
                        data-sanity={encodeDataAttribute?.([
                          'showcaseMixes',
                          key,
                        ])}
                      >
                        <MixListItem mix={mix} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {calendar && calendar.length > 0 && (
            <div
              id="calendar"
              className="max-w-md snap-start pt-8 big-tablet:absolute big-tablet:bottom-0 big-tablet:right-0 big-tablet:max-w-40  "
            >
              <h1 className="italic mb-8 big-tablet:mb-0 big-tablet:sticky big-tablet:top-0 big-tablet:bg-white">
                Calendar
              </h1>
              <Calendar calendar={calendar} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
