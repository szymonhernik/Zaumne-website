'use client'

import { useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import BoopButton from '@/components/shared/BoopButton'

export default function NavBarMobile() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    const container = document.getElementById('container') // Replace 'container' with the actual ID of your container element

    const handleScroll = () => {
      const st = container?.scrollTop ?? 0

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

    container?.addEventListener('scroll', debouncedHandleScroll)
    return () => container?.removeEventListener('scroll', debouncedHandleScroll)
  }, [])
  return (
    <div
      className={` z-[1] fixed top-4 right-4 text-right transition-transform duration-1000 ease-out ${isVisible ? '' : '-translate-y-96'}`}
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
        <BoopButton>
          <a href="#home" className="">
            <li className="py-4">↑</li>
          </a>
        </BoopButton>
      </ul>
    </div>
  )
}
