import { useLenis } from 'lenis/react'

const LenisIgnoreDropdowns = ({ children }: { children: React.ReactNode }) => {
  const lenis = useLenis()

  const handleWheel = (e: any) => {
    if (
      e.target instanceof Element &&
      (e.target.closest('.mantine-Select-dropdown') ||
        e.target.closest('.mantine-ScrollArea-viewport'))
    ) {
      lenis?.stop()
      setTimeout(() => lenis?.start(), 100)
    }
  }

  return (
    <div
      onWheelCapture={handleWheel}
      onTouchMoveCapture={handleWheel}
    >
      {children}
    </div>
  )
}
export { LenisIgnoreDropdowns }
