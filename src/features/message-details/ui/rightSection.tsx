import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  Stack,
  Group,
  Text,
  Avatar,
  Loader,
  TextInput,
  ActionIcon,
  Flex,
  FlexProps,
  ScrollArea,
} from '@mantine/core'
import styled from 'styled-components'
import { Responsive } from '@shared/hooks/responsive'
import { InteractiveCard } from '@shared/styles'
import { ChatBubble } from './chatBubble'
import { ChatMessage } from '../types'
import { generateChatHistory } from '../constant'
import { MdSend, MdArrowBack, MdMoreVert } from 'react-icons/md'
import { EmptyInbox } from './emptyInbox'
import { RightSectionProps, StickyPaper } from '../styles'

const ChatContainer = styled(Flex)<FlexProps>`
  overflow-y: auto;
`

const RightSection = ({ selectedMessage, onBack }: RightSectionProps) => {
  const { isMobile } = Responsive()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (selectedMessage) {
      const history = generateChatHistory(selectedMessage.username)
      setMessages(history)
      setHasMore(history.length >= 20)
    }
  }, [selectedMessage])

  const fetchMoreData = () => {
    setTimeout(() => {
      const newMessages: ChatMessage[] = Array.from({ length: 10 }, (_, i) => ({
        id: messages.length + i,
        content: `This is an older message ${messages.length + i}`,
        timestamp: `${messages.length + i + 1} hours ago`,
        senderId: i % 2 === 0 ? 'me' : selectedMessage?.username || 'user',
        isOwn: i % 2 === 0,
      }))

      setMessages((prev) => [...prev, ...newMessages])

      if (messages.length >= 50) {
        setHasMore(false)
      }
    }, 1000)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() && selectedMessage) {
      const newMessage: ChatMessage = {
        id: messages.length,
        content: inputValue,
        timestamp: 'Just now',
        senderId: 'me',
        isOwn: true,
      }

      setMessages((prev) => [newMessage, ...prev])
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!selectedMessage) {
    return <EmptyInbox />
  }

  return (
    <Stack
      w={isMobile ? '100%' : '72%'}
      gap={0}
    >
      <InteractiveCard
        withBorder
        radius="sm"
        p={0}
        bg="background.7"
        style={{
          height: isMobile ? 'calc(100vh - 140px)' : 'calc(100vh - 60px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <StickyPaper type="header">
          <Group justify="space-between">
            <Group gap="md">
              {isMobile && onBack && (
                <ActionIcon
                  variant="subtle"
                  onClick={onBack}
                >
                  <MdArrowBack size={20} />
                </ActionIcon>
              )}

              <Avatar
                src={selectedMessage.avatar}
                alt={selectedMessage.username}
                radius="xl"
                size="md"
                color="primary"
              >
                {selectedMessage.username.charAt(0).toUpperCase()}
              </Avatar>

              <Stack gap={0}>
                <Text
                  fw={600}
                  size="md"
                >
                  {selectedMessage.username}
                </Text>
                <Text
                  size="xs"
                  c="dimmed"
                >
                  Active now
                </Text>
              </Stack>
            </Group>

            <ActionIcon
              variant="subtle"
              color="gray"
            >
              <MdMoreVert size={20} />
            </ActionIcon>
          </Group>
        </StickyPaper>

        {/* Chat Messages */}
        <ChatContainer
          direction="column-reverse"
          bg="background.8"
        >
          <ScrollArea
            h="74dvh"
            scrollbars="y"
            scrollbarSize={4}
          >
            <InfiniteScroll
              dataLength={messages.length}
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
            >
              <Stack gap="md">
                {messages.map((message) => (
                  <ChatBubble
                    key={message.id}
                    message={message}
                    username={selectedMessage.username}
                  />
                ))}
              </Stack>
            </InfiniteScroll>
          </ScrollArea>
        </ChatContainer>

        {/* Input Footer */}
        <StickyPaper type="footer">
          <Group
            gap="xs"
            wrap="nowrap"
          >
            <TextInput
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{ flex: 1 }}
              radius="xl"
              size="md"
            />
            <ActionIcon
              size="lg"
              radius="xl"
              color="primary"
              variant="filled"
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
            >
              <MdSend size={20} />
            </ActionIcon>
          </Group>
        </StickyPaper>
      </InteractiveCard>
    </Stack>
  )
}

export { RightSection }
