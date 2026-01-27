import ReactLenis from 'lenis/react'
import React from 'react'
import { LenisIgnoreDropdowns } from './lenisIgnore'

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  return (
       <ReactLenis
              root
              options={{
                lerp: 0.1,
                duration: 1.7,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                allowNestedScroll: true,
              }}
            >
              <LenisIgnoreDropdowns>
              {children}
              </LenisIgnoreDropdowns>
            </ReactLenis>
  )
}

export  { LenisProvider }
