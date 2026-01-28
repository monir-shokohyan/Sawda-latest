import { Group, Paper, Stack, Text, Avatar, PaperProps } from '@mantine/core'
import styled from 'styled-components'
import { ChatMessage } from '../types'
import { ReactNode } from 'react'

interface ChatBubbleProps {
  message: ChatMessage
  username: string
}

const BubbleWrapper = styled(Group)<{ $isOwn: boolean }>`
  justify-content: ${({ $isOwn }) => ($isOwn ? 'flex-end' : 'flex-start')};
  width: 100%;
`

const MessageBubble = styled(Paper)<
  PaperProps & { $isOwn: boolean; children: ReactNode }
>`
  max-width: 70%;
  padding: 12px 16px;
  background: ${({ $isOwn }) =>
    $isOwn ? 'var(--mantine-color-primary-6)' : 'var(--mantine-color-gray-1)'};
  color: ${({ $isOwn }) => ($isOwn ? 'white' : 'var(--mantine-color-dark-9)')};
  border-radius: ${({ $isOwn }) =>
    $isOwn ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`

const ChatBubble = ({ message, username }: ChatBubbleProps) => {
  return (
    <BubbleWrapper
      $isOwn={message.isOwn}
      wrap="nowrap"
      align="flex-end"
      gap="xs"
    >
      {!message.isOwn && (
        <Avatar
          size="sm"
          radius="xl"
          color="primary"
        >
          {username.charAt(0).toUpperCase()}
        </Avatar>
      )}

      <Stack gap={4}>
        <MessageBubble
          $isOwn={message.isOwn}
          shadow="sm"
        >
          <Text
            size="sm"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {message.content}
          </Text>
        </MessageBubble>

        <Text
          size="xs"
          c="dimmed"
          ta={message.isOwn ? 'right' : 'left'}
          px="xs"
        >
          {message.timestamp}
        </Text>
      </Stack>

      {message.isOwn && (
        <Avatar
          size="sm"
          radius="xl"
          color="blue"
        >
          Me
        </Avatar>
      )}
    </BubbleWrapper>
  )
}

export { ChatBubble }
