import { Responsive } from '@shared/hooks/responsive'
import { useEffect, useRef, useState } from 'react'
import {
  NotificationSectionProps,
  Notification,
  NotificationFilter,
} from '../types'
import { generateNotification } from '../constant'
import { useSwipe } from '@shared/hooks/useSwipe'

const useManageNotificationSection = ({
  onNotificationSelect,
}: NotificationSectionProps) => {
  const { isMobile } = Responsive()
  const [notifications, setNotifications] = useState<Notification[]>(
    generateNotification(0, 15),
  )
  const [hasMore, setHasMore] = useState(true)
  const [filter, setFilter] = useState<NotificationFilter>('All')
  const [animationDirection, setAnimationDirection] = useState<
    'left' | 'right' | null
  >(null)
  const notificationContainerRef = useRef<HTMLDivElement>(null)

  const tabs: NotificationFilter[] = ['All', 'Following', 'Support']

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
    const scrollContainer = notificationContainerRef.current
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
      const timer = setTimeout(() => {
        setAnimationDirection(null)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [animationDirection, filter])

  const fetchMoreData = () => {
    setTimeout(() => {
      const newNotifications = generateNotification(notifications.length, 15)
      setNotifications((prev) => [...prev, ...newNotifications])

      if (notifications.length + newNotifications.length >= 60) {
        setHasMore(false)
      }
    }, 1000)
  }

  const filterednotifications = notifications.filter((msg) => {
    if (filter === 'Following') return !msg.isSupport
    if (filter === 'Support') return msg.isSupport
    return true
  })

  const followingCount = notifications.filter((m) => !m.isSupport).length

  const handleNotificationClick = (id: number) => {
    const message = notifications.find((m) => m.id === id)
    if (message) {
      onNotificationSelect(message)
      setNotifications((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg)),
      )
    }
  }

  return {
    handleNotificationClick,
    fetchMoreData,
    filterednotifications,
    hasMore,
    isMobile,
    followingCount,
    filter,
    setFilter,
    notifications,
    notificationContainerRef,
    animationDirection,
  }
}

export { useManageNotificationSection }
