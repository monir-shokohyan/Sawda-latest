import { Group } from '@mantine/core'
import { FollowingCardProps } from '../types'
import { ProfileSection } from '@features/product-card/ui/profileSection'
import { StyledCard } from '../styles'

const NotificationCard = ({
  message,
  isActive,
  onClick,
}: FollowingCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    onClick(message.id)
  }

  return (
    <StyledCard
      $isActive={isActive}
      p="md"
      radius="0px"
      onClick={handleClick}
    >
      <Group
        wrap="nowrap"
        align="center"
      >
        <ProfileSection
          profile={message}
          isMessage
          showTime={false}
          usernameSize="1rem"
          isFollowing
        />
      </Group>
    </StyledCard>
  )
}

export { NotificationCard }
