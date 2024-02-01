'use client'
import BoopButton from '@/components/shared/BoopButton'
import { useState } from 'react'

export default function Colophon() {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <h3
        className="hover:underline cursor-default"
        onClick={() => setClicked(!clicked)}
      >
        Colophon
      </h3>
      <p className={`${clicked ? 'big-tablet:block' : 'big-tablet:hidden'}`}>
        Website by{' '}
        <BoopButton>
          {' '}
          <a
            target="_blank"
            href="https://linktr.ee/isz_szi"
            className="text-zaumne-pink underline"
          >
            isz szi studio
          </a>
        </BoopButton>
      </p>
    </>
  )
}
