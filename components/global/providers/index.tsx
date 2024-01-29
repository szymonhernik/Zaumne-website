'use client'

import soundManagerInstance from '@/components/shared/SoundManager'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

type SoundActiveContextType = {
  soundActive: boolean
  setSoundActive: Dispatch<SetStateAction<boolean>>
  playSound: () => void // Add the playSound property
}

export const SoundContext = createContext<SoundActiveContextType>({
  soundActive: true,
  setSoundActive: () => {},
  playSound: () => {},
})

export function SoundProvider({ children }) {
  const [soundActive, setSoundActive] = useState(true)
  const playSound = () => {
    if (soundActive) {
      soundManagerInstance.play()
    }
  }
  return (
    <SoundContext.Provider value={{ soundActive, setSoundActive, playSound }}>
      {children}
    </SoundContext.Provider>
  )
}
