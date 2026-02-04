import { Group, Indicator } from '@mantine/core'
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
      <Indicator
        inline
        processing
        disabled={message.isRead}
        color="red"
        size={6}
      >
        <Group
          wrap="nowrap"
          align="center"
        >
          <ProfileSection
            profile={message}
            isMessage
            showTime={false}
            usernameSizeMobile="1rem"
            usernameSize="md"
          />
        </Group>
      </Indicator>
    </StyledCard>
  )
}

export { NotificationCard }
