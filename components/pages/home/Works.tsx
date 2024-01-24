'use client'
import { ShowcaseWork } from '@/types'
import { WorkListItem } from './WorkListItem'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { useState } from 'react'

interface WorksProps {
  showcaseWorks: ShowcaseWork[]
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function Works(props: WorksProps) {
  const { showcaseWorks, encodeDataAttribute } = props
  const [showAll, setShowAll] = useState(false)

  return (
    <div>
      {showcaseWorks
        .filter((work) => (showAll ? work : work.highlighted)) // Filter works with highlighted set to true
        .map((work, key) => {
          return (
            <div
              key={key}
              data-sanity={encodeDataAttribute?.(['showcaseWorks', key])}
            >
              <WorkListItem work={work} />
            </div>
          )
        })}
      <div className="border-t-[1px] border-gray-500 p-4">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </div>
  )
}