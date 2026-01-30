import { Card, Stack } from '@mantine/core'
import { RightSectionProps } from '../../types'
import { EmptyInbox } from '../emptyInbox'
import { Body } from './body'
import { Header } from './header'
import { Footer } from './footer'
import { useManageRightSection } from '@features/message-details/modal'

const RightSection = ({ selectedMessage, onBack }: RightSectionProps) => {
  const {
    isMobile,
    hasMore,
    handleKeyPress,
    messages,
    inputValue,
    setInputValue,
    handleSendMessage,
    fetchMoreData,
  } = useManageRightSection({ selectedMessage, onBack })
  if (!selectedMessage) {
    return <EmptyInbox />
  }

  return (
    <Stack
      w={isMobile ? '100%' : '72%'}
      gap={0}
    >
      <Card
        withBorder
        radius="sm"
        p={0}
        bg="background.7"
        style={{
          height: isMobile ? 'calc(100dvh - 60px)' : 'calc(100vh - 60px)',
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
      </Card>
    </Stack>
  )
}

export { RightSection }
