'use client'
import { useContext } from 'react'
import { SoundContext } from '../global/providers'

export default function BoopButton({ children }) {
  const { soundActive } = useContext(SoundContext)
  const { playSound } = useContext(SoundContext)

  return <span onClick={playSound}>{children}</span>
}
