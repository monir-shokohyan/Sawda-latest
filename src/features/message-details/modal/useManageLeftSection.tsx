import { Responsive } from '@shared/hooks/responsive'
import { useEffect, useRef, useState } from 'react'
import { LeftSectionProps, Message, MessageFilter } from '../types'
import { generateMessages } from '../constant'
import { useSwipe } from '@shared/hooks/useSwipe'

const useManageLeftSection = ({ onMessageSelect }: LeftSectionProps) => {
  const { isMobile } = Responsive()
  const [messages, setMessages] = useState<Message[]>(generateMessages(0, 15))
  const [totalFetched, setTotalFetched] = useState(15)
  const [reachedEnd, setReachedEnd] = useState(false)
  const [filter, setFilter] = useState<MessageFilter>('all')
  const [selectionMode, setSelectionMode] = useState(false)
  const [animationDirection, setAnimationDirection] = useState<
    'left' | 'right' | null
  >(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const fetchMoreDataRef = useRef<(() => void) | null>(null)

  const tabs: MessageFilter[] = ['all', 'unread', 'read']

  const hasMore = !reachedEnd

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
    const scrollContainer = scrollContainerRef.current
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
      const newMessages = generateMessages(totalFetched, 15)
      setMessages((prev) => [...prev, ...newMessages])
      const newTotal = totalFetched + newMessages.length
      setTotalFetched(newTotal)

      if (newTotal >= 60) {
        setReachedEnd(true)
      }
    }, 1000)
  }

  useEffect(() => {
    fetchMoreDataRef.current = fetchMoreData
  })

  const filteredMessages = messages.filter((msg) => {
    if (filter === 'unread') return !msg.isRead
    if (filter === 'read') return msg.isRead
    return true
  })

  useEffect(() => {
    if (reachedEnd) return

    const container = scrollContainerRef.current
    if (!container) return

    const timer = setTimeout(() => {
      const { scrollHeight, clientHeight } = container
      if (scrollHeight <= clientHeight) {
        fetchMoreDataRef.current?.()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [filter, filteredMessages.length, reachedEnd])

  const unreadCount = messages.filter((m) => !m.isRead).length
  const selectedCount = messages.filter((m) => m.isSelected).length

  const handleSelectAll = () => {
    setMessages((prev) =>
      prev.map((msg) => ({
        ...msg,
        isSelected: !prev.every((m) => m.isSelected),
      })),
    )
  }

  const handleDeselectAll = () => {
    setMessages((prev) => prev.map((msg) => ({ ...msg, isSelected: false })))
    setSelectionMode(false)
  }

  const handleDeleteSelected = () => {
    setMessages((prev) => prev.filter((msg) => !msg.isSelected))
    setSelectionMode(false)
  }

  const handleMarkAsRead = () => {
    setMessages((prev) =>
      prev.map((msg) => (msg.isSelected ? { ...msg, isRead: true } : msg)),
    )
    handleDeselectAll()
  }

  const handleMarkAsUnread = () => {
    setMessages((prev) =>
      prev.map((msg) => (msg.isSelected ? { ...msg, isRead: false } : msg)),
    )
    handleDeselectAll()
  }

  const handleToggleSelect = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, isSelected: !msg.isSelected } : msg,
      ),
    )
  }

  const handleMessageClick = (id: number) => {
    const message = messages.find((m) => m.id === id)
    if (message) {
      onMessageSelect(message)
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg)),
      )
    }
  }

  return {
    handleDeleteSelected,
    handleDeselectAll,
    handleMarkAsRead,
    handleMarkAsUnread,
    handleSwipeLeft,
    handleSwipeRight,
    handleToggleSelect,
    handleMessageClick,
    handleSelectAll,
    fetchMoreData,
    filteredMessages,
    selectionMode,
    hasMore,
    isMobile,
    unreadCount,
    setSelectionMode,
    selectedCount,
    filter,
    setFilter,
    messages,
    scrollContainerRef,
    animationDirection,
  }
}

export { useManageLeftSection }
