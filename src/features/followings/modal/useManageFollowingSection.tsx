import { useEffect, useRef, useState } from 'react'
import { Following, FollowingFilter, FollowingSectionProps } from '../types'
import { Responsive } from '@shared/hooks/responsive'
import { generateFollowing } from '../constant'
import { useSwipe } from '@shared/hooks/useSwipe'

const useManageFollowingSection = ({
  onFollowingSelect,
}: FollowingSectionProps) => {
  const { isMobile } = Responsive()
  const [Followings, setFollowings] = useState<Following[]>(
    generateFollowing(0, 15),
  )
  const [totalFetched, setTotalFetched] = useState(15)
  const [reachedEnd, setReachedEnd] = useState(false)
  const [filter, setFilter] = useState<FollowingFilter>('Following')
  const [animationDirection, setAnimationDirection] = useState<
    'left' | 'right' | null
  >(null)
  const FollowingContainerRef = useRef<HTMLDivElement>(null)

  const tabs: FollowingFilter[] = ['Following', 'Follower']

  const handleSwipeLeft = () => {
    const currentIndex = tabs.indexOf(filter)
    if (currentIndex < tabs.length - 1) {
      setAnimationDirection('left')
      setFilter(tabs[currentIndex + 1])
    }
  }

  const handleSwipeRight = () => {
    const currentIndex = tabs.indexOf(filter)
    if (currentIndex > 0) {
      setAnimationDirection('right')
      setFilter(tabs[currentIndex - 1])
    }
  }

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
    minSwipeDistance: 50,
  })

  useEffect(() => {
    const scrollContainer = FollowingContainerRef.current
    if (!scrollContainer) return
    scrollContainer.addEventListener('touchstart', onTouchStart)
    scrollContainer.addEventListener('touchmove', onTouchMove)
    scrollContainer.addEventListener('touchend', onTouchEnd)
    return () => {
      scrollContainer.removeEventListener('touchstart', onTouchStart)
      scrollContainer.removeEventListener('touchmove', onTouchMove)
      scrollContainer.removeEventListener('touchend', onTouchEnd)
    }
  }, [onTouchStart, onTouchMove, onTouchEnd])

  useEffect(() => {
    if (animationDirection) {
      const timer = setTimeout(() => setAnimationDirection(null), 300)
      return () => clearTimeout(timer)
    }
  }, [animationDirection, filter])

  const filteredFollowings = Followings.filter((msg) => {
    if (filter === 'Follower') return !msg.isFollowing
    if (filter === 'Following') return msg.isFollowing
    return true
  })

  const hasMore = !reachedEnd

  const fetchMoreData = () => {
    setTimeout(() => {
      const newFollowings = generateFollowing(totalFetched, 15)
      setFollowings((prev) => [...prev, ...newFollowings])
      const newTotal = totalFetched + newFollowings.length
      setTotalFetched(newTotal)

      if (newTotal >= 60) {
        setReachedEnd(true)
      }
    }, 1000)
  }

  useEffect(() => {
    if (reachedEnd) return

    const container = FollowingContainerRef.current
    if (!container) return
    const timer = setTimeout(() => {
      const { scrollHeight, clientHeight } = container
      if (scrollHeight <= clientHeight) {
        fetchMoreData()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [filter, filteredFollowings.length, reachedEnd])

  const followingCount = Followings.filter((m) => m.isFollowing).length

  const handleFollowingClick = (id: number) => {
    const message = Followings.find((m) => m.id === id)
    if (message) {
      onFollowingSelect(message)
      setFollowings((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg)),
      )
    }
  }

  return {
    handleFollowingClick,
    fetchMoreData,
    filteredFollowings,
    hasMore,
    isMobile,
    followingCount,
    filter,
    setFilter,
    Followings,
    FollowingContainerRef,
    animationDirection,
  }
}

export { useManageFollowingSection }
