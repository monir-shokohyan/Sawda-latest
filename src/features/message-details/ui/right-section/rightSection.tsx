import { useState, useEffect } from 'react'
import { Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { InteractiveCard } from '@shared/styles'
import { ChatMessage, RightSectionProps } from '../../types'
import { generateChatHistory } from '../../constant'
import { EmptyInbox } from '../emptyInbox'
import { Body } from './body'
import { Header } from './header'
import { Footer } from './footer'

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
        <Header
          selectedMessage={selectedMessage}
          onBack={onBack}
        />

        {/* Chat Messages */}
        <Body
          messages={messages}
          fetchMoreData={fetchMoreData}
          hasMore={hasMore}
          selectedMessage={selectedMessage}
        />

        {/* Input Footer */}
        <Footer
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSendMessage={handleSendMessage}
          handleKeyPress={handleKeyPress}
        />
      </InteractiveCard>
    </Stack>
  )
}

export { RightSection }
