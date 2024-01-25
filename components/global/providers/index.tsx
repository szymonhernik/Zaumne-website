'use client'

import { createContext, Dispatch, SetStateAction, useState } from 'react'

type SoundActiveContextType = {
  soundActive: boolean
  setSoundActive: Dispatch<SetStateAction<boolean>>
}

export const SoundContext = createContext<SoundActiveContextType>({
  soundActive: true,
  setSoundActive: () => {},
})

export function SoundProvider({ children }) {
  const [soundActive, setSoundActive] = useState(true)
  return (
    <SoundContext.Provider value={{ soundActive, setSoundActive }}>
      {children}
    </SoundContext.Provider>
  )
}
