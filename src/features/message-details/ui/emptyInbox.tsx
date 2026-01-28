import { Avatar, Stack, Text } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { InteractiveCard } from '@shared/styles'
import { MdSend } from 'react-icons/md'
import styled from 'styled-components'

const EmptyState = styled(Stack)`
  text-align: center;
`

const EmptyInbox = () => {
  const { isMobile } = Responsive()
  return (
    <Stack w={isMobile ? '100%' : '72%'}>
      <InteractiveCard
        withBorder
        radius="sm"
        p={0}
        bg="background.7"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <EmptyState
          h="100%"
          align="center"
          justify="center"
          px={24}
          py={48}
        >
          <Avatar
            size={80}
            radius="xl"
            color="gray"
            mb="md"
          >
            <MdSend size={40} />
          </Avatar>
          <Text
            size="xl"
            fw={600}
            c="darkText"
            mb="xs"
          >
            No Message Selected
          </Text>
          <Text
            size="sm"
            c="dimmed"
            maw={400}
          >
            Select a message from the list to view the conversation history and
            start chatting.
          </Text>
        </EmptyState>
      </InteractiveCard>
    </Stack>
  )
}

export { EmptyInbox }
