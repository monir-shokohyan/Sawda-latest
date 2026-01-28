import { Group, Loader, ScrollArea, Stack } from '@mantine/core'
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
  )
}

export { Body }
