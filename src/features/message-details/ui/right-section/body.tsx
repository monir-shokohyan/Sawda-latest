import { Group, Loader, Stack } from '@mantine/core'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ChatBubble } from '../chatBubble'
import { ChatContainer } from '@features/message-details/styles'
import { BodyProps } from '@features/message-details/types'

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
      </div>
    </ChatContainer>
  )
}

export { Body }
