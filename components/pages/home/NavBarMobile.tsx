'use client'

import { useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import BoopButton from '@/components/shared/BoopButton'
import Speaker from '@/components/shared/Speaker'

export default function NavBarMobile() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop

      if (st > lastScrollTop.current) {
        setIsVisible(false)
        // console.log('scroll down')
      } else {
        setIsVisible(true)
        // console.log('scroll up')
      }
      lastScrollTop.current = st <= 0 ? 0 : st
    }
    const debouncedHandleScroll = debounce(handleScroll, 100)

    window.addEventListener('scroll', debouncedHandleScroll)
    return () => window.removeEventListener('scroll', debouncedHandleScroll)
  }, [])
  return (
    <div
      className={`big-tablet:hidden z-[1] fixed top-4 right-4 text-right transition-transform duration-1000 ease-out ${isVisible ? '' : '-translate-y-96'}`}
    >
      <ul className="">
        <BoopButton>
          <a href="#info" className="underline">
            <li>info</li>
          </a>
        </BoopButton>
        <BoopButton>
          <a href="#discography" className="underline">
            <li>discography</li>
          </a>
        </BoopButton>
        <BoopButton>
          <a href="#works" className="underline">
            <li>works</li>
          </a>
        </BoopButton>
        <BoopButton>
          <a href="#mixes" className="underline">
            <li>mixes</li>
          </a>
        </BoopButton>
        <BoopButton>
          <a href="#calendar" className="underline">
            <li>calendar</li>
          </a>
        </BoopButton>
        <li>
          <Speaker />
        </li>
      </ul>
    </div>
  )
}
