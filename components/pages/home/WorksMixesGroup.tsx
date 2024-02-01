'use client'
import { useState } from 'react'
import { MixListItem } from './MixListItem'
import { Works } from './Works'
import BoopButton from '@/components/shared/BoopButton'

export default function WorksMixesGroup({
  showcaseWorks,
  showcaseMixes,
  encodeDataAttribute,
}) {
  const [activeTab, setActiveTab] = useState('works')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <>
      <ul className="hidden big-tablet:flex sticky ml-auto right-0 top-0 justify-end gap-2  w-fit p-3 pr-0 text-gray-500 z-[3] cursor-pointer">
        <BoopButton>
          <li
            onClick={() => handleTabClick('works')}
            className={`${activeTab === 'works' ? 'text-black' : ''}`}
          >
            Selected Works
          </li>
        </BoopButton>
        <BoopButton>
          <li
            onClick={() => handleTabClick('mixes')}
            className={`${activeTab === 'mixes' ? 'text-black' : ''}`}
          >
            Mixes
          </li>
        </BoopButton>
      </ul>
      {showcaseWorks && showcaseWorks.length > 0 && (
        <div
          id="works"
          className={`max-w-md  pt-8 mb-8 big-tablet:absolute  big-tablet:top-0 big-tablet:max-w-sm big-tablet:py-16   ${
            activeTab === 'works' ? 'big-tablet:block' : 'big-tablet:hidden'
          }`}
        >
          <h1 className="italic mb-8 big-tablet:hidden">Selected Works</h1>
          <Works
            showcaseWorks={showcaseWorks}
            encodeDataAttribute={encodeDataAttribute}
          />
        </div>
      )}
      {showcaseMixes && showcaseMixes.length > 0 && (
        <div
          id="mixes"
          className={`snap-start pt-8 mb-8 big-tablet:absolute big-tablet:top-0  big-tablet:max-w-sm big-tablet:py-16  ${
            activeTab === 'mixes' ? 'big-tablet:block' : 'big-tablet:hidden'
          }`}
        >
          <h1 className="italic mb-8 big-tablet:hidden ">Mixes</h1>
          <div className="flex flex-col gap-4 big-tablet:gap-8">
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
    </>
  )
}
