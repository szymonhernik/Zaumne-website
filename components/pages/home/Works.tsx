'use client'
import { ShowcaseWork } from '@/types'
import { WorkListItem } from './WorkListItem'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { useEffect, useState } from 'react'
import BoopButton from '@/components/shared/BoopButton'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import { useDebouncedCallback } from 'use-debounce'

interface WorksProps {
  showcaseWorks: ShowcaseWork[]
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function Works(props: WorksProps) {
  const { showcaseWorks, encodeDataAttribute } = props
  const [showAll, setShowAll] = useState(true)
  const [activeIndex, setActiveIndex] = useState(null)

  // Debounce callback for checking screen size
  const debouncedCheckScreenSize = useDebouncedCallback(() => {
    setShowAll(window.innerWidth > 926)
  }, 100)

  useEffect(() => {
    debouncedCheckScreenSize()
    window.addEventListener('resize', debouncedCheckScreenSize)
    return () => {
      window.removeEventListener('resize', debouncedCheckScreenSize)
    }
  }, [debouncedCheckScreenSize])

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
                <div className="fixed z-[10] top-0 left-0 w-screen min-w-screen h-dvh min-h-dvh bg-white  px-4 pt-10 overflow-y-scroll pb-16 overscroll-none">
                  <div className="sticky top-0 big-tablet:max-w-md">
                    <BoopButton>
                      <button className="py-2 pr-6" onClick={handleClose}>
                        <span className="italic underline">back</span>
                      </button>
                    </BoopButton>
                  </div>
                  <h1 className="italic text-zaumne-blue mt-8">{work.title}</h1>
                  {work.workDetails && (
                    <CustomPortableText value={work.workDetails} />
                  )}

                  {work.coverImage && (
                    <div className="w-[80vw] sm:max-w-md big-tablet:max-w-[30vw] 2xl:max-w-md flex mx-auto mt-16 mb-16 ">
                      <ImageBox
                        classesWrapper="w-full"
                        classesImage="mx-auto"
                        image={work.coverImage}
                        alt={`${work.coverImage?.alt ?? ''}`}
                      />
                    </div>
                  )}
                  {work.workDescription && (
                    <div className="border-x-[1px] border-black rounded-2xl px-[19px] py-[15px] max-w-md big-tablet:max-w-[30vw] big-tablet:fixed big-tablet:bottom-4 big-tablet:left-4">
                      <CustomPortableText value={work.workDescription} />
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      <div className="border-t-[1px] border-gray-500 p-4 big-tablet:hidden">
        <BoopButton>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </BoopButton>
      </div>
    </div>
  )
}
