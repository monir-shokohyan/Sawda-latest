import { useRef } from 'react'

interface SwipeInput {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  minSwipeDistance?: number
}

export const useSwipe = (input: SwipeInput) => {
  const { onSwipeLeft, onSwipeRight, minSwipeDistance = 50 } = input

  const touchStart = useRef<number | null>(null)
  const touchEnd = useRef<number | null>(null)

  const onTouchStart = (e: TouchEvent) => {
    touchEnd.current = null
    touchStart.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return

    const distance = touchStart.current - touchEnd.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft()
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight()
    }
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
