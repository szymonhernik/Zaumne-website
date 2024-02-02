import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import type { CalendarData, HomePagePayload } from '@/types'
import { MixListItem } from './MixListItem'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import Calendar from './Calendar'
import ZaumneLogo from '@/components/shared/ZaumneLogo'
import { Works } from './Works'
import NavBarMobile from './NavBarMobile'
import Discography from './Discography'
import WorksMixesGroup from './WorksMixesGroup'
import Speaker from '@/components/shared/Speaker'
import BoopButton from '@/components/shared/BoopButton'
import Colophon from './Colophon'
import Drawings from './Drawings'

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
        id="home"
        className=" sm:h-screen scroll-smooth    font-normal flex flex-col gap-y-10 big-tablet:gap-y-0 pb-0 big-tablet:pb-0 px-4 relative w-screen z-[0] "
      >
        <div className="absolute right-2 big-tablet:block big-tablet:fixed  big-tablet:right-2 big-tablet:top-0 p-4 z-[12] cursor-pointer">
          <Speaker />
        </div>
        <div className="hidden big-tablet:block big-tablet:absolute big-tablet:top-16 right-2 z-[4]">
          <BoopButton>
            <a href="#work">
              <p className="text-right leading-4 p-2 text-sm underline font-bold italic">
                Discover
                <br />
                more
              </p>
            </a>
          </BoopButton>
        </div>
        <BoopButton>
          <a href="#home">
            <div className="big-tablet:hidden fixed bottom-0 right-0 p-8 text-lg z-[9]">
              ↑
            </div>
          </a>
        </BoopButton>
        {/* <NavBarMobile /> */}
        <div
          id="home"
          className="zaumne-logo min-h-[600px] sm:h-screen w-full flex justify-center items-center  big-tablet:fixed  big-tablet:min-h-4 big-tablet:h-auto big-tablet:bottom-[15dvh] big-tablet:right-[30dvw] big-tablet:w-auto"
        >
          <ZaumneLogo />
        </div>

        <div
          id="info"
          className=" mb-16 big-tablet:mb-0 big-tablet:max-h-dvh big-tablet:min-h-dvh big-tablet:h-dvh  big-tablet:flex big-tablet:flex-col big-tablet:justify-between "
        >
          <div className="h-[400px] big-tablet:h-auto">
            <div className="socials sticky top-0 left-0 py-4">
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
        <div
          id="work"
          className="big-tablet:relative big-tablet:max-h-dvh big-tablet:min-h-dvh big-tablet:h-dvh  "
        >
          <Drawings />
          {/* Showcase projects */}
          {showcaseProjects && showcaseProjects.length > 0 && (
            <div
              id="discography"
              className=" pt-8 mb-8 big-tablet:absolute big-tablet:top-[0] big-tablet:w-auto big-tablet:right-[18vw]  big-tablet:pt-[5vh]"
            >
              <h1 className="italic mb-8 big-tablet:hidden">Discography</h1>
              <Discography
                showcaseProjects={showcaseProjects}
                encodeDataAttribute={encodeDataAttribute}
              />
            </div>
          )}
          <div className="hidden big-tablet:flex flex-col z-[-1] justify-between pt-48 pb-4 ml-[40vw] border-l-[1px] absolute border-black h-[calc(100vh-4rem)] my-8">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                width="23"
                height="5"
                viewBox="0 0 23 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  opacity="0.5"
                  x1="22.0154"
                  y1="4.49126"
                  x2="0.906954"
                  y2="0.491257"
                  stroke="black"
                />
              </svg>
            ))}
          </div>
          <div className="big-tablet:max-h-[60dvh] big-tablet:h-[60dvh] big-tablet:mt-[40dvh]  big-tablet:relative big-tablet:overflow-y-scroll big-tablet:border-t-[1px]  big-tablet:border-black big-tablet:max-w-[40vw] big-tablet:px-4  big-tablet:text-sm hidescrollbar">
            <WorksMixesGroup
              showcaseMixes={showcaseMixes}
              showcaseWorks={showcaseWorks}
              encodeDataAttribute={encodeDataAttribute}
            />
          </div>

          {calendar && calendar.length > 0 && (
            <div
              id="calendar"
              className="mb-48 big-tablet:mb-0 max-w-md  pt-8 big-tablet:absolute big-tablet:bottom-0 big-tablet:right-0 big-tablet:max-w-40  "
            >
              <h1 className="italic mb-8 big-tablet:mb-0 big-tablet:sticky big-tablet:top-0 big-tablet:bg-white">
                Calendar
              </h1>
              <Calendar calendar={calendar} />
            </div>
          )}
          <div className="pt-8 mb-8 italic big-tablet:absolute big-tablet:top-0 text-sm ">
            <Colophon />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
