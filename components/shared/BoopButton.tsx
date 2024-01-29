'use client'
import { useContext } from 'react'
import { SoundContext } from '../global/providers'

export default function BoopButton({ children }) {
  const { soundActive } = useContext(SoundContext)
  const { playSound } = useContext(SoundContext)

  // const [play] = useSound('./zaumne-click.mp3', { soundEnabled: soundActive })
  return <span onClick={playSound}>{children}</span>
}
