'use client'
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

export default function Discography(props: DiscographyProps) {
  const { showcaseProjects, encodeDataAttribute } = props
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {}, [activeIndex])

  const handleProjectClick = (index) => {
    setActiveIndex(index)
  }

  const handleClose = () => {
    setActiveIndex(null)
  }

  return (
    <div className="flex flex-col gap-2">
      {showcaseProjects.map((project, key) => {
        return (
          <div
            key={key}
            data-sanity={encodeDataAttribute?.(['showcaseProjects', key])}
          >
            <ProjectListItem
              project={project}
              onClick={() => handleProjectClick(key)}
              isActive={activeIndex === key} // Add this line
            />
            {/* Logic to display content only for the clicked title */}

            {activeIndex === key && (
              <div className="fixed z-[10] top-0 left-0 w-screen min-w-screen h-dvh min-h-dvh bg-white  px-4 pt-10 overflow-scroll pb-16">
                <div className="sticky top-0">
                  <BoopButton>
                    <button className="py-2 pr-6" onClick={handleClose}>
                      <span className="italic underline ">back</span>
                    </button>
                  </BoopButton>
                  <h1 className="italic text-zaumne-bordo mt-8">
                    {project.title}
                    <span className="not-italic text-black">
                      , {project.label} ({project.date})
                    </span>
                  </h1>
                  <BoopButton>
                    <a href={project.link} className="underline">
                      listen
                    </a>
                  </BoopButton>
                </div>

                {/* <Image /> */}
                <div className="w-[80vw] flex mx-auto mt-16 mb-16  shadow-zaumne">
                  <ImageBox
                    classesWrapper="w-full"
                    image={project.coverImage}
                    alt={`${project.coverImage?.alt ?? ''}`}
                  />
                </div>
                {project.quote && (
                  <div className="border-x-[1px] border-black rounded-2xl px-[19px] py-[15px]">
                    <CustomPortableText value={project.quote} />
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
