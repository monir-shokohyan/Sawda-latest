import { Group } from '@mantine/core'
import { NotificationCardProps } from '../types'
import { ProfileSection } from '@features/product-card/ui/profileSection'
import { StyledCard } from '../styles'

const NotificationCard = ({
  message,
  isActive,
  onClick,
}: NotificationCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    onClick(message.id)
  }

  return (
    <StyledCard
      $isActive={isActive}
      $isRead={message.isRead}
      p="md"
      radius="0px"
      onClick={handleClick}
    >
      <Group
        wrap="nowrap"
        align="center"
      >
        <ProfileSection
          product={message}
          isMessage
          showTime={false}
          usernameSize="1rem"
        />
      </Group>
    </StyledCard>
  )
}

export { NotificationCard }
