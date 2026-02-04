import { Stack } from '@mantine/core'
import { ChatBubble } from '../chatBubble'
import { ChatContainer } from '@features/message-details/styles'
import { BodyProps } from '@features/message-details/types'
import { InfiniteScrollWrapper } from '@shared/ui/infinite-scroll'

const Body = ({
  messages,
  fetchMoreData,
  hasMore,
  selectedMessage,
}: BodyProps) => {
  return (
    <ChatContainer
      direction="column-reverse"
      bg="background.8"
    >
      <div
        id="messageScrollContainer"
        style={{ flex: 1, overflow: 'auto', scrollbarWidth: 'thin' }}
      >
        <InfiniteScrollWrapper
          dataLength={messages.length}
          next={fetchMoreData}
          hasMore={hasMore}
          scrollableTarget="messageScrollContainer"
          endMessage=""
          size='sm'
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
        </InfiniteScrollWrapper>
      </div>
    </ChatContainer>
  )
}

export { Body }
