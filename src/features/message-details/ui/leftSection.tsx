import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  Stack,
  Group,
  Loader,
  Tabs,
  ActionIcon,
  Menu,
  Text,
  Button,
  Badge,
  Checkbox,
  Paper,
  PaperProps,
  ScrollArea,
} from '@mantine/core'
import styled from 'styled-components'
import { Responsive } from '@shared/hooks/responsive'
import { InteractiveCard } from '@shared/styles'
import { MessageCard } from './MessageCard'
import { Message, MessageFilter } from '../types'
import { generateMessages } from '../constant'
import {
  MdMoreVert,
  MdDelete,
  MdMarkEmailRead,
  MdMarkEmailUnread,
  MdSelectAll,
  MdDeselect,
} from 'react-icons/md'

interface LeftSectionProps {
  onMessageSelect: (message: Message) => void
  activeMessageId?: number
}



const StickyHeader = styled(Paper)<PaperProps & {children: React.ReactNode}>`
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--mantine-color-background-7);
  border-bottom: 1px solid var(--mantine-color-gray-3);
`

const LeftSection = ({ onMessageSelect, activeMessageId }: LeftSectionProps) => {
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
      }))
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
      prev.map((msg) => (msg.isSelected ? { ...msg, isRead: true } : msg))
    )
    handleDeselectAll()
  }

  const handleMarkAsUnread = () => {
    setMessages((prev) =>
      prev.map((msg) => (msg.isSelected ? { ...msg, isRead: false } : msg))
    )
    handleDeselectAll()
  }

  const handleToggleSelect = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, isSelected: !msg.isSelected } : msg
      )
    )
  }

  const handleMessageClick = (id: number) => {
    const message = messages.find((m) => m.id === id)
    if (message) {
      onMessageSelect(message)
      // Mark as read when clicked
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg))
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
      <InteractiveCard
        withBorder
        radius="sm"
        p={0}
        bg="background.7"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <StickyHeader p="md">
          <Group justify="space-between" mb="md">
            <Group gap="xs">
              <Text fw={600} size="lg">
                Messages
              </Text>
              {unreadCount > 0 && (
                <Badge color="primary" size="sm" circle>
                  {unreadCount}
                </Badge>
              )}
            </Group>

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <MdMoreVert size={20} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  leftSection={<MdSelectAll size={16} />}
                  onClick={() => {
                    setSelectionMode(true)
                    handleSelectAll()
                  }}
                >
                  Select All
                </Menu.Item>
                <Menu.Item
                  leftSection={<MdDeselect size={16} />}
                  onClick={handleDeselectAll}
                  disabled={selectedCount === 0}
                >
                  Deselect All
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  leftSection={<MdMarkEmailRead size={16} />}
                  onClick={handleMarkAsRead}
                  disabled={selectedCount === 0}
                >
                  Mark as Read
                </Menu.Item>
                <Menu.Item
                  leftSection={<MdMarkEmailUnread size={16} />}
                  onClick={handleMarkAsUnread}
                  disabled={selectedCount === 0}
                >
                  Mark as Unread
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  leftSection={<MdDelete size={16} />}
                  onClick={handleDeleteSelected}
                  disabled={selectedCount === 0}
                  color="red"
                >
                  Delete Selected ({selectedCount})
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>

          {selectionMode && selectedCount > 0 && (
            <Group gap="xs" mb="sm">
              <Button
                size="xs"
                variant="light"
                color="primary"
                onClick={handleMarkAsRead}
                leftSection={<MdMarkEmailRead size={14} />}
              >
                Read
              </Button>
              <Button
                size="xs"
                variant="light"
                color="gray"
                onClick={handleMarkAsUnread}
                leftSection={<MdMarkEmailUnread size={14} />}
              >
                Unread
              </Button>
              <Button
                size="xs"
                variant="light"
                color="red"
                onClick={handleDeleteSelected}
                leftSection={<MdDelete size={14} />}
              >
                Delete
              </Button>
              <Button
                size="xs"
                variant="subtle"
                onClick={handleDeselectAll}
              >
                Cancel
              </Button>
            </Group>
          )}

          <Tabs value={filter} onChange={(value) => setFilter(value as MessageFilter)}>
            <Tabs.List grow>
              <Tabs.Tab value="all">
                All ({messages.length})
              </Tabs.Tab>
              <Tabs.Tab value="unread">
                Unread ({unreadCount})
              </Tabs.Tab>
              <Tabs.Tab value="read">
                Read ({messages.length - unreadCount})
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </StickyHeader>
           <ScrollArea
                  h="74dvh"
                  scrollbars="y"
                  scrollbarSize={4}
                >

          <InfiniteScroll
            dataLength={filteredMessages.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <Group justify="center" py="md">
                <Loader size="sm" color="primary" />
              </Group>
            }
            scrollableTarget="messageScrollContainer"
          >
            <Stack gap={0} p="xs" bg="background.8">
              {filteredMessages.map((message) => (
                <MessageCard
                  key={message.id}
                  message={message}
                  isActive={message.id === activeMessageId}
                  onSelect={handleToggleSelect}
                  onClick={handleMessageClick}
                  selectionMode={selectionMode}
                />
              ))}
            </Stack>
          </InfiniteScroll>

                </ScrollArea>
      </InteractiveCard>
    </Stack>
  )
}

export { LeftSection }