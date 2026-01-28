import { useState } from 'react'
import { Group } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { LeftSection } from './left-section'
import { RightSection } from './right-section/rightSection'
import { Message } from '../types'
import { Container } from '../styles'



const MessageCenter = () => {
  const { isMobile } = Responsive()
  const [selectedMessage, setSelectedMessage] = useState<Message | undefined>()
  const [showChat, setShowChat] = useState(false)

  const handleMessageSelect = (message: Message) => {
    setSelectedMessage(message)
    if (isMobile) {
      setShowChat(true)
    }
  }

  const handleBack = () => {
    setShowChat(false)
  }

  // Mobile view: show either list or chat
  if (isMobile) {
    return (
      <Container $isMobile={isMobile}>
        {!showChat ? (
          <LeftSection
            onMessageSelect={handleMessageSelect}
            activeMessageId={selectedMessage?.id}
          />
        ) : (
          <RightSection
            selectedMessage={selectedMessage}
            onBack={handleBack}
          />
        )}
      </Container>
    )
  }

  // Desktop view: show both side by side
  return (
    <Container $isMobile={isMobile}>
      <Group
        align="flex-start"
        gap="md"
        wrap="nowrap"
      >
        <LeftSection
          onMessageSelect={handleMessageSelect}
          activeMessageId={selectedMessage?.id}
        />
        <RightSection selectedMessage={selectedMessage} />
      </Group>
    </Container>
  )
}

export { MessageCenter }
