import { useState, useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  Stack,
  Group,
  Text,
  Avatar,
  Loader,
  TextInput,
  ActionIcon,
  Paper,
  Button,
  Divider,
  PaperProps,
} from '@mantine/core'
import styled from 'styled-components'
import { Responsive } from '@shared/hooks/responsive'
import { InteractiveCard } from '@shared/styles'
import { ChatBubble } from './ChatBubble'
import { Message, ChatMessage } from '../types'
import { generateChatHistory } from '../constant'
import {
  MdSend,
  MdArrowBack,
  MdMoreVert,
  MdDelete,
  MdBlock,
} from 'react-icons/md'

interface RightSectionProps {
  selectedMessage?: Message
  onBack?: () => void
}

const ChatContainer = styled.div`
  height: calc(100vh - 300px);
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 16px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--mantine-color-gray-4);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--mantine-color-gray-5);
  }
`

const StickyHeader = styled(Paper) <PaperProps & {children: React.ReactNode}>`
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--mantine-color-background-7);
  border-bottom: 1px solid var(--mantine-color-gray-3);
`

const StickyFooter = styled(Paper) <PaperProps & {children: React.ReactNode}>`
  position: sticky;
  bottom: 0;
  z-index: 10;
  background: var(--mantine-color-background-7);
  border-top: 1px solid var(--mantine-color-gray-3);
`

const EmptyState = styled(Stack)`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 48px 24px;
  text-align: center;
`

const RightSection = ({ selectedMessage, onBack }: RightSectionProps) => {
  const { isMobile } = Responsive()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedMessage) {
      // Load initial chat history
      const history = generateChatHistory(selectedMessage.username)
      setMessages(history)
      setHasMore(history.length >= 20)
    }
  }, [selectedMessage])

  const fetchMoreData = () => {
    setTimeout(() => {
      // Generate more old messages
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
    return (
      <Stack w={isMobile ? '100%' : '72%'}>
        <InteractiveCard
          withBorder
          radius="sm"
          p={0}
          bg="background.7"
          style={{ height: 'calc(100vh - 60px)' }}

        >
          <EmptyState>
            <Avatar size={80} radius="xl" color="gray" mb="md">
              <MdSend size={40} />
            </Avatar>
            <Text size="xl" fw={600} c="dark" mb="xs">
              No Message Selected
            </Text>
            <Text size="sm" c="dimmed" maw={400}>
              Select a message from the list to view the conversation history
              and start chatting.
            </Text>
          </EmptyState>
        </InteractiveCard>
      </Stack>
    )
  }

  return (
    <Stack w={isMobile ? '100%' : '72%'} gap={0}>
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
        <StickyHeader p="md">
          <Group justify="space-between">
            <Group gap="md">
              {isMobile && onBack && (
                <ActionIcon variant="subtle" onClick={onBack}>
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
                <Text fw={600} size="md">
                  {selectedMessage.username}
                </Text>
                <Text size="xs" c="dimmed">
                  Active now
                </Text>
              </Stack>
            </Group>

            <ActionIcon variant="subtle" color="gray">
              <MdMoreVert size={20} />
            </ActionIcon>
          </Group>
        </StickyHeader>

        {/* Chat Messages */}
        <ChatContainer id="chatScrollContainer">
          <InfiniteScroll
            dataLength={messages.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <Group justify="center" py="md">
                <Loader size="sm" color="primary" />
              </Group>
            }
            scrollableTarget="chatScrollContainer"
            inverse={true}
            style={{ display: 'flex', flexDirection: 'column-reverse' }}
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
          <div ref={messagesEndRef} />
        </ChatContainer>

        {/* Input Footer */}
        <StickyFooter p="md">
          <Group gap="xs" wrap="nowrap">
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
        </StickyFooter>
      </InteractiveCard>
    </Stack>
  )
}

export { RightSection }