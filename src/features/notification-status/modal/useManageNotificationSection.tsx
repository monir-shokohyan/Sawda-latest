import { useEffect, useRef, useState } from 'react'
import {
  Notification,
  NotificationFilter,
  NotificationSectionProps,
} from '../types'
import { Responsive } from '@shared/hooks/responsive'
import { generateNotification } from '../constant'
import { useSwipeable } from 'react-swipeable'

const useManageNotificationSection = ({
  onNotificationSelect,
}: NotificationSectionProps) => {
  const { isMobile } = Responsive()
  const [notifications, setNotifications] = useState<Notification[]>(
    generateNotification(0, 15),
  )
  const [totalFetched, setTotalFetched] = useState(15)
  const [reachedEnd, setReachedEnd] = useState(false)
  const [filter, setFilter] = useState<NotificationFilter>('All')
  const [animationDirection, setAnimationDirection] = useState
    <'left' | 'right' | null
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    trackMouse: false,
    preventScrollOnSwipe: false,
    delta: 50,
  })

  useEffect(() => {
    if (animationDirection) {
      const timer = setTimeout(() => setAnimationDirection(null), 300)
      return () => clearTimeout(timer)
    }
  }, [animationDirection, filter])

  const filterednotifications = notifications.filter((msg) => {
    if (filter === 'Following') return !msg.isSupport
    if (filter === 'Support') return msg.isSupport
    return true
  })

  const hasMore = !reachedEnd

  const fetchMoreData = () => {
    setTimeout(() => {
      const newNotifications = generateNotification(totalFetched, 15)
      setNotifications((prev) => [...prev, ...newNotifications])
      const newTotal = totalFetched + newNotifications.length
      setTotalFetched(newTotal)

      if (newTotal >= 60) {
        setReachedEnd(true)
      }
    }, 1000)
  }

  useEffect(() => {
    if (reachedEnd) return

    const container = notificationContainerRef.current
    if (!container) return
    const timer = setTimeout(() => {
      const { scrollHeight, clientHeight } = container
      if (scrollHeight <= clientHeight) {
        fetchMoreData()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [filter, filterednotifications.length, reachedEnd])

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
    swipeHandlers,
  }
}

export { useManageNotificationSection }