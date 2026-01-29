import { useState } from 'react'
import { Stack, Group, Loader, Text, Badge, ScrollArea, Card } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { InteractiveCard } from '@shared/styles'
import { MessageCard } from '../messageCard'
import { LeftSectionProps, Message, MessageFilter } from '../../types'
import { generateMessages } from '../../constant'
import { LeftTab } from './leftTab'
import { LeftMenu } from './leftMenu'
import { LeftButtonGroup } from './leftButtonGroup'
import { StickyPaper } from '../../styles'
import InfiniteScroll from 'react-infinite-scroll-component'

const LeftSection = ({
  onMessageSelect,
  activeMessageId,
}: LeftSectionProps) => {
  const { isMobile } = Responsive()
  const [messages, setMessages] = useState<Message[]>(generateMessages(0, 15))
  const [hasMore, setHasMore] = useState(true)
  const [filter, setFilter] = useState<MessageFilter>('all')
  const [selectionMode, setSelectionMode] = useState(false)

  const fetchMoreData = () => {
    setTimeout(() => {
      const newMessages = generateMessages(messages.length, 15)
      setMessages((prev) => [...prev, ...newMessages])

      if (messages.length + newMessages.length >= 60) {
        setHasMore(false)
      }
    }, 1000)
  }

  const filteredMessages = messages.filter((msg) => {
    if (filter === 'unread') return !msg.isRead
    if (filter === 'read') return msg.isRead
    return true
  })

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

  return (
    <Stack
      w={isMobile ? '100%' : '25%'}
      style={{
        position: isMobile ? 'relative' : 'sticky',
        top: isMobile ? 0 : 30,
        height: isMobile ? 'auto' : 'calc(100vh - 60px)',
      }}
      gap={0}
    >
      <Card
        withBorder
        radius="sm"
        p={0}
        bg="background.7"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <StickyPaper type="header">
          <Group
            justify="space-between"
            mb="md"
          >
            <Group gap="xs">
              <Text
                fw={600}
                size="lg"
              >
                Messages
              </Text>
              {unreadCount > 0 && (
                <Badge
                  color="primary"
                  size="sm"
                  circle
                >
                  {unreadCount}
                </Badge>
              )}
            </Group>

            <LeftMenu
              setSelectionMode={setSelectionMode}
              handleSelectAll={handleSelectAll}
              handleDeselectAll={handleDeselectAll}
              selectedCount={selectedCount}
              handleMarkAsRead={handleMarkAsRead}
              handleMarkAsUnread={handleMarkAsUnread}
              handleDeleteSelected={handleDeleteSelected}
            />
          </Group>

          {selectionMode && selectedCount > 0 && (
            <LeftButtonGroup
              handleMarkAsRead={handleMarkAsRead}
              handleMarkAsUnread={handleMarkAsUnread}
              handleDeleteSelected={handleDeleteSelected}
              handleDeselectAll={handleDeselectAll}
            />
          )}

          <LeftTab
            handleChange={(value) => setFilter(value as MessageFilter)}
            filter={filter}
            messages={messages}
            unreadCount={unreadCount}
          />
        </StickyPaper>
        <div
          id="messageScrollContainer"
          style={{
            flex: 1,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollBehavior: 'smooth',
          }}
        >
          <InfiniteScroll
            dataLength={filteredMessages.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <Group
                justify="center"
                py="md"
              >
                <Loader
                  size="sm"
                  color="primary"
                />
              </Group>
            }
            scrollableTarget="messageScrollContainer"
          >
            <Stack
              gap={0}
              p="xs"
              bg="background.8"
            >
              {filteredMessages.map((message) => (
                <MessageCard
                  key={message.id}
                  message={message}
                  isActive={message.id === activeMessageId}
                  onSelect={handleToggleSelect}
                  onClick={handleMessageClick}
                  selectionMode={selectionMode}
                  setSelectionMode={setSelectionMode}
                />
              ))}
            </Stack>
          </InfiniteScroll>
        </div>
      </Card>
    </Stack>
  )
}

export { LeftSection }
