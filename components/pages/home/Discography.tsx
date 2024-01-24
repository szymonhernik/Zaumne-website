'use client'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { ProjectListItem } from './ProjectListItem'
import { useEffect, useState } from 'react'
import BoopButton from '@/components/shared/BoopButton'
import Image from 'next/image'
import ImageBox from '@/components/shared/ImageBox'

export default function Discography({ showcaseProjects, encodeDataAttribute }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [displayAlbum, setDisplayAlbum] = useState(false)

  useEffect(() => {
    console.log('active: ', activeIndex)
  }, [activeIndex])

  function toggleDisplay(e, key) {
    setActiveIndex(key)
    setDisplayAlbum(!displayAlbum)
  }
  return (
    <div className="flex flex-col gap-2">
      {showcaseProjects.map((project, key) => {
        const isActiveProject = displayAlbum && key === activeIndex

        return (
          <div
            key={key}
            data-sanity={encodeDataAttribute?.(['showcaseProjects', key])}
          >
            <ProjectListItem
              project={project}
              //   isActive={isActiveProject}
              //   onToggleDisplay={(e) => isActiveProject && toggleDisplay(e, key)}
              onToggleDisplay={(e) => toggleDisplay(e, key)}
            />
            {displayAlbum && key == activeIndex && (
              <div className="fixed z-[10] top-0 left w-screen min-w-screen h-screen min-h-screen bg-white  px-4 pt-12">
                <BoopButton>
                  <button
                    onClick={(e) => {
                      toggleDisplay(e, key)
                    }}
                  >
                    <span className="italic underline">back</span>
                  </button>
                </BoopButton>
                <h1 className="italic text-zaumne-blue">
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
                {/* <Image /> */}
                <div className="w-full flex justify-center">
                  <ImageBox
                    classesWrapper="w-full"
                    image={project.coverImage}
                    alt={project.coverImage.alt}
                  />
                </div>
                {project.quote && <CustomPortableText value={project.quote} />}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
