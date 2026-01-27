import { Card, Group, Stack, Text, Avatar, Checkbox, Badge, CardProps, TextProps } from '@mantine/core'
import styled from 'styled-components'
import { Message } from '../types'

interface MessageCardProps {
  message: Message
  isActive?: boolean
  onSelect: (id: number) => void
  onClick: (id: number) => void
  selectionMode: boolean
}

const StyledCard = styled(Card)<CardProps & { $isActive?: boolean; $isRead?: boolean, onClick: (e: React.MouseEvent) => void }>`
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $isActive }) => ($isActive ? 'var(--mantine-color-primary-1)' : 'transparent')};
  border-left: ${({ $isActive }) => ($isActive ? '3px solid var(--mantine-color-primary-6)' : '3px solid transparent')};
  opacity: ${({ $isRead }) => ($isRead ? 0.7 : 1)};
  
  &:hover {
    background: var(--mantine-color-gray-0);
    transform: translateX(2px);
  }
`

const MessagePreview = styled(Text)<TextProps & {children: string}>`
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
  selectionMode 
}: MessageCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (selectionMode) {
      e.stopPropagation()
      onSelect(message.id)
    } else {
      onClick(message.id)
    }
  }

  return (
    <StyledCard
      $isActive={isActive}
      $isRead={message.isRead}
      p="md"
      radius="sm"
      withBorder
      onClick={handleClick}
    >
      <Group wrap="nowrap" align="flex-start">
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
        
        <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
          <Group justify="space-between" wrap="nowrap">
            <Text fw={message.isRead ? 400 : 600} size="sm" truncate>
              {message.username}
            </Text>
            <Text size="xs" c="dimmed" style={{ flexShrink: 0 }}>
              {message.timestamp}
            </Text>
          </Group>
          
          <Group gap={4}>
            <MessagePreview
              size="sm"
              c={message.isRead ? 'dimmed' : 'dark'}
              fw={message.isRead ? 400 : 500}
            >
              {message.message}
            </MessagePreview>
            {!message.isRead && (
              <Badge size="xs" color="primary" circle style={{ flexShrink: 0 }}>
                •
              </Badge>
            )}
          </Group>
        </Stack>
      </Group>
    </StyledCard>
  )
}

export { MessageCard }