import { Avatar, Flex, Stack, Text } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { useNavigate } from 'react-router-dom'
import { ProfileProps } from '../types'
import { HoveredText, SButton } from '@shared/styles'
import { Paths } from '@shared/api/paths/paths'
import { useDisclosure } from '@mantine/hooks'
import { ProfileInfo } from '@features/profile-info'
import { BaseModal } from '@shared/ui/modal'

const ProfileSection = ({
  profile,
  showDetails = false,
  showMessage = false,
  showActiveNow = false,
  showTime = true,
  size = 'md',
  mobileSize = '33px',
  allowPadding = true,
  usernameSizeMobile = '0.9rem',
  usernameSize = 'lg',
  timeSize = '0.8rem',
  showEmail = false,
  direction = 'row',
  hoverUsername = true,
  isStaticColor = false,
  isMessage = false,
  isFollowing = false,
  isCard = false,
  fullSize = true,
}: ProfileProps) => {
  const { isMobile } = Responsive()
  const navigate = useNavigate()
  const padding =
    isMobile && isCard ? '10px' : isMobile && !isCard ? '0px' : 'xs'
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div>
      <Flex
        p={padding}
        pl={allowPadding ? padding : '0px'}
        style={{ cursor: 'pointer', flex: fullSize ? 1 : 'none' }}
        direction={direction}
        align="center"
        gap={isMobile ? 8 : 15}
      >
        <Avatar
          color="blue"
          size={isMobile ? mobileSize : size}
          radius="50%"
          src="/profile.png"
        />

        <Stack
          gap={isMobile ? '4px' : '0px'}
          style={{ width: '100%' }}
        >
          <Flex
            justify="space-between"
            align="center"
            gap={20}
            w="100%"
          >
            <HoveredText
              fw={600}
              size={isMobile ? usernameSizeMobile : usernameSize}
              onClick={(e) => {
                if (!hoverUsername) return
                e.stopPropagation()
                navigate({
                  pathname: `${Paths.ProfileDetails}${profile?.username}`,
                  search: new URLSearchParams({
                    name: `${profile.username?.slice(0, 20)}...`,
                  }).toString(),
                })
              }}
              c={isStaticColor ? 'white' : 'darkText'}
              $isActive={hoverUsername}
            >
              {profile?.username}
            </HoveredText>
            {
            isMessage && (
              <Text
                size={isMobile ? timeSize : 'xs'}
                c="dimmed"
              >
                {profile?.timestamp}
              </Text>
            )}
          </Flex>

          {showEmail && (
            <Text
              size={isMobile ? timeSize : 'xs'}
              c={isStaticColor ? 'white' : 'dimmed'}
            >
              {profile?.email}
            </Text>
          )}
          {showActiveNow && (
            <Text
              size={isMobile ? timeSize : 'xs'}
              c={isStaticColor ? 'white' : 'dimmed'}
            >
              Active now
            </Text>
          )}

          {showMessage && (
            <Text
              size={isMobile ? timeSize : 'xs'}
              c={isStaticColor ? 'white' : 'dimmed'}
              lineClamp={1}
              fw={600}
            >
              {profile?.message}
            </Text>
          )}
          {isMessage && (
            <Text
              size={isMobile ? timeSize : 'xs'}
              lineClamp={4}
              c={profile?.isRead ? 'dimmed' : 'darkText'}
              fw={profile?.isRead ? 400 : 400}
            >
              {profile?.message}
            </Text>
          )}
          {showTime && (
            <Text
              size={isMobile ? timeSize : 'xs'}
              c="dimmed"
            >
              {profile?.timestamp}
            </Text>
          )}

          {showDetails && (
            <HoveredText
              size={isMobile ? timeSize : '0.7rem'}
              onClick={(e) => {
                e.stopPropagation()
                open()
              }}
              c={isStaticColor ? 'white' : 'darkText'}
              td="underline"
              $isActive={true}
            >
              Profile details
            </HoveredText>
          )}
        </Stack>
        {isFollowing && (
          <SButton
            variant="subtle"
            color="lightText"
            size="sm"
            p={0}
            px={10}
            bg="originalBlue"
            miw={70}
            style={{ fontSize: '0.7rem' }}
          >
            {profile?.isFollowing ? 'Unfollow' : 'Follow'}
          </SButton>
        )}
      </Flex>

      <BaseModal
        opened={opened}
        onClose={close}
        pos="relative"
        centered
      >
        <ProfileInfo Profile={profile} />
      </BaseModal>
    </div>
  )
}

export { ProfileSection }
