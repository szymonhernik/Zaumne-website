'use client'
import { ShowcaseWork } from '@/types'
import { WorkListItem } from './WorkListItem'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { useState } from 'react'
import BoopButton from '@/components/shared/BoopButton'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'

interface WorksProps {
  showcaseWorks: ShowcaseWork[]
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function Works(props: WorksProps) {
  const { showcaseWorks, encodeDataAttribute } = props
  const [showAll, setShowAll] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const handleClose = () => {
    setActiveIndex(null)
  }
  const handleShowMore = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="flex flex-col gap-4">
      {showcaseWorks
        .filter((work) => (showAll ? work : work.highlighted)) // Filter works with highlighted set to true
        .map((work, key) => {
          return (
            <div
              key={key}
              data-sanity={encodeDataAttribute?.(['showcaseWorks', key])}
            >
              <WorkListItem
                handleClick={() => handleShowMore(key)}
                work={work}
              />
              {key === activeIndex && (
                <div className="fixed z-[10] top-0 left-0 w-screen min-w-screen h-screen min-h-screen bg-white  px-4 pt-12">
                  <BoopButton>
                    <button onClick={handleClose}>
                      <span className="italic underline">back</span>
                    </button>
                  </BoopButton>
                  <p>{work.title}</p>
                  {work.workDetails && (
                    <CustomPortableText value={work.workDetails} />
                  )}
                  {work.coverImage && (
                    <div className="w-3/4 flex justify-self-center">
                      <ImageBox
                        classesWrapper="w-full"
                        image={work.coverImage}
                        alt={`${work.coverImage?.alt ?? ''}`}
                      />
                    </div>
                  )}
                  {work.workDescription && (
                    <CustomPortableText value={work.workDescription} />
                  )}
                </div>
              )}
            </div>
          )
        })}
      <div className="border-t-[1px] border-gray-500 p-4">
        <BoopButton>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </BoopButton>
      </div>
    </div>
  )
}
