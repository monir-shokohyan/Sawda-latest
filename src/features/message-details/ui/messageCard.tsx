import {
  Group,
  Checkbox,
} from '@mantine/core'
import { MessageCardProps } from '../types'
import { useLongPress } from '@mantine/hooks'
import { ProfileSection } from '@features/product-card/ui/profileSection'
import { StyledCard } from '../styles'

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
          <ProfileSection product={message} isMessage showTime={false} usernameSize='1rem'/>
      </Group>
    </StyledCard>
  )
}

export { MessageCard }
