'use client'
import { isBrowser } from 'react-device-detect'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { ProjectListItem } from './ProjectListItem'
import { useEffect, useState } from 'react'
import BoopButton from '@/components/shared/BoopButton'

import ImageBox from '@/components/shared/ImageBox'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { ShowcaseProject } from '@/types'

interface DiscographyProps {
  showcaseProjects: ShowcaseProject[]
  encodeDataAttribute?: EncodeDataAttributeCallback
}

// This function will generate a transform value based on the sine function
// You can adjust the amplitude and frequency to control how the titles align
const getTransformValue = (index, totalItems) => {
  const frequency = Math.PI / totalItems // This controls the "width" of the wave
  const amplitude = 60 // This controls how far the items move
  const phaseShift = Math.PI / 0.85 // This shifts the wave to start from the center

  // We multiply the index by the frequency and add a phase shift to get our sine value
  const sineValue = Math.sin(frequency * index + phaseShift)

  // We then multiply by the amplitude to get our final transform value
  return sineValue * amplitude
}

export default function Discography(props: DiscographyProps) {
  const { showcaseProjects, encodeDataAttribute } = props
  const [activeIndex, setActiveIndex] = useState(null)
  const [isInside, setIsInside] = useState(false)

  useEffect(() => {}, [activeIndex])

  const handleProjectClick = (index) => {
    setActiveIndex(index)
    setIsInside(true)
  }

  const handleClose = () => {
    setActiveIndex(null)
    setIsInside(false)
  }

  return (
    <div className="flex flex-col gap-2 big-tablet:gap-4  ">
      {showcaseProjects.map((project, key) => {
        const totalItems = showcaseProjects.length

        const transformXValue = getTransformValue(key, totalItems)

        return (
          <div
            key={key}
            data-sanity={encodeDataAttribute?.(['showcaseProjects', key])}
          >
            <ProjectListItem
              project={project}
              onClick={() => handleProjectClick(key)}
              isActive={activeIndex === key}
              transformXValue={transformXValue}
            />
            {/* Logic to display content only for the clicked title */}

            {activeIndex === key && (
              <div className="fixed z-[10] top-0 left-0 w-screen min-w-screen h-dvh min-h-dvh bg-white px-4 pt-10 overflow-y-scroll big-tablet:overflow-y-none pb-16 overscroll-none ">
                <div className="hidden big-tablet:fixed big-tablet:top-[0] big-tablet:w-auto big-tablet:right-[18vw]  big-tablet:pt-[5vh] big-tablet:flex big-tablet:flex-col big-tablet:gap-4 big-tablet:z-[-1] ">
                  {showcaseProjects.map((project, index) => (
                    <ProjectListItem
                      key={index}
                      project={project}
                      onClick={() => handleProjectClick(index)}
                      isActive={activeIndex === index}
                      transformXValue={getTransformValue(index, totalItems)}
                      isInside={isInside}
                    />
                  ))}
                </div>
                <div className="sticky top-0 flex flex-col items-start w-fit">
                  <BoopButton>
                    <button className="py-2 pr-6" onClick={handleClose}>
                      <span className="italic underline ">back</span>
                    </button>
                  </BoopButton>
                </div>
                <h1 className="italic text-zaumne-bordo mt-8 w-fit">
                  {project.title}
                  <span className="not-italic text-black">
                    , {project.label} ({project.date})
                  </span>
                </h1>
                <BoopButton>
                  <a target="_blank" href={project.link} className="underline">
                    listen
                  </a>
                </BoopButton>
                {/* <Image /> */}
                <div className="w-[80vw] sm:max-w-md big-tablet:max-w-[30vw] 2xl:max-w-md flex mx-auto mt-16 mb-16  ">
                  <a target="_blank" href={project.link} className="w-full">
                    <ImageBox
                      classesWrapper="w-full"
                      classesImage="shadow-zaumne mx-auto"
                      image={project.coverImage}
                      alt={`${project.coverImage?.alt ?? ''}`}
                    />
                  </a>
                </div>
                {project.quote && (
                  <div className="border-x-[1px] border-black rounded-2xl px-[19px] py-[15px] max-w-md big-tablet:max-w-[30vw] big-tablet:fixed big-tablet:bottom-4 big-tablet:left-4">
                    <CustomPortableText value={project.quote} />
                  </div>
                )}
                {project.productionInfo && (
                  <div className="max-w-md mt-32  text-sm big-tablet:fixed big-tablet:bottom-4 big-tablet:right-4 big-tablet:text-right big-tablet:mt-0">
                    <CustomPortableText value={project.productionInfo} />
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
