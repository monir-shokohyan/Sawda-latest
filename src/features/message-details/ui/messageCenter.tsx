import { Group } from '@mantine/core'
import { LeftSection } from './left-section'
import { RightSection } from './right-section/rightSection'
import { Container } from '../styles'
import { useManageMessageCenter } from '../modal'

const MessageCenter = () => {
  const {
    isMobile,
    selectedMessage,
    showChat,
    handleMessageSelect,
    handleBack,
  } = useManageMessageCenter()
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
