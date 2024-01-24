'use client'
import useSound from 'use-sound'
const boopSound = '/zaumne-click.mp3'
export default function BoopButton({ children }) {
  const [play] = useSound(boopSound)
  return <span onClick={play}>{children}</span>
}
