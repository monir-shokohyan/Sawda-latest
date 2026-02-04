import { Group, Checkbox } from '@mantine/core'
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
        align="center"
      >
        {selectionMode && (
          <Checkbox
            checked={message.isSelected}
            onChange={() => onSelect(message.id)}
            onClick={(e) => e.stopPropagation()}
            radius={3}
          />
        )}
        <ProfileSection
          profile={message}
          isMessage
          showTime={false}
          usernameSizeMobile="1rem"
          usernameSize='md'

        />
      </Group>
    </StyledCard>
  )
}

export { MessageCard }
