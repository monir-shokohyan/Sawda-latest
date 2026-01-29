import {
  Card,
  Group,
  Stack,
  Text,
  Avatar,
  Checkbox,
  CardProps,
  TextProps,
} from '@mantine/core'
import styled from 'styled-components'
import { Message } from '../types'
import { ReactNode } from 'react'
import { useLongPress } from '@mantine/hooks'

interface MessageCardProps {
  message: Message
  isActive?: boolean
  onSelect: (id: number) => void
  onClick: (id: number) => void
  selectionMode: boolean
  setSelectionMode: (value: boolean) => void
}

const StyledCard = styled(Card)<
  CardProps & {
    $isActive?: boolean
    $isRead?: boolean
    onClick: (e: React.MouseEvent) => void
  }
>`
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $isActive }) =>
    $isActive ? 'var(--mantine-color-primary-light-hover)' : 'transparent'};
  border-left: ${({ $isActive }) =>
    $isActive
      ? '3px solid var(--mantine-color-primary-light-hover)'
      : '3px solid transparent'};
  opacity: ${({ $isRead }) => ($isRead ? 0.7 : 1)};

  &:hover {
    background: var(--mantine-color-primary-light-hover);
    transform: translateX(2px);
  }
`

const MessagePreview = styled(Text)<TextProps & { children: ReactNode }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
`

const MessageCard = ({
  message,
  isActive,
  onSelect,
  onClick,
  selectionMode,
  setSelectionMode,
}: MessageCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (selectionMode) {
      e.stopPropagation()
      onSelect(message.id)
    } else {
      onClick(message.id)
    }
  }
  const longPressEvents = useLongPress(
    () => {
      if (!selectionMode) {
        setSelectionMode(true)
        onSelect(message.id)
      }
    },
    {
      threshold: 1000,
    },
  )

  return (
    <StyledCard
      $isActive={isActive}
      $isRead={message.isRead}
      p="md"
      radius="sm"
      withBorder
      onClick={handleClick}
      {...(selectionMode ? {} : longPressEvents)}
    >
      <Group
        wrap="nowrap"
        align="flex-start"
      >
        {selectionMode && (
          <Checkbox
            checked={message.isSelected}
            onChange={() => onSelect(message.id)}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        <Avatar
          src={message.avatar}
          alt={message.username}
          radius="xl"
          size="md"
          color="primary"
        >
          {message.username.charAt(0).toUpperCase()}
        </Avatar>

        <Stack
          gap={4}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Group
            justify="space-between"
            wrap="nowrap"
          >
            <Text
              fw={message.isRead ? 400 : 600}
              size="sm"
              truncate
              c="darkText"
            >
              {message.username}
            </Text>
            <Text
              size="xs"
              style={{ flexShrink: 0 }}
              c="demText"
            >
              {message.timestamp}
            </Text>
          </Group>

          <Group gap={4}>
            <MessagePreview
              size="sm"
              c={message.isRead ? 'demText' : 'dark'}
              fw={message.isRead ? 400 : 500}
            >
              {message.message}
            </MessagePreview>
          </Group>
        </Stack>
      </Group>
    </StyledCard>
  )
}

export { MessageCard }
