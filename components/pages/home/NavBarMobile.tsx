'use client'

import { useEffect, useRef, useState } from 'react'

export default function NavBarMobile() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    const container = document.getElementById('container') // Replace 'container' with the actual ID of your container element

    const handleScroll = () => {
      const st = container?.scrollTop ?? 0
      if (st > lastScrollTop.current) {
        setIsVisible(false)
        console.log('scroll down')
      } else {
        setIsVisible(true)
        console.log('scroll up')
      }
      lastScrollTop.current = st <= 0 ? 0 : st
    }

    container?.addEventListener('scroll', handleScroll)
    return () => container?.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div
      className={` fixed top-4 right-4 text-right transition-transform duration-1000 ease-out ${isVisible ? '' : '-translate-y-96'}`}
    >
      <ul className="">
        <a href="#info" className="underline">
          <li>info</li>
        </a>
        <a href="#discography" className="underline">
          <li>discography</li>
        </a>
        <a href="#works" className="underline">
          <li>works</li>
        </a>

        <a href="#mixes" className="underline">
          <li>mixes</li>
        </a>

        <a href="#calendar" className="underline">
          <li>calendar</li>
        </a>
      </ul>
    </div>
  )
}
