'use client'
import { useContext } from 'react'
import useSound from 'use-sound'
import { SoundContext } from '../global/providers'
const boopSound = '/zaumne-click.mp3'
export default function BoopButton({ children }) {
  const { soundActive } = useContext(SoundContext)

  const [play] = useSound(boopSound, { soundEnabled: soundActive })
  return <span onClick={play}>{children}</span>
}
