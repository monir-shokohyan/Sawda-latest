import { Avatar, Flex, Stack, Text, useMantineTheme } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { useNavigate } from 'react-router-dom'
import { ProfileProps } from '../types'
import { HModal, HoveredText, SButton } from '@shared/styles'
import { Paths } from '@shared/api/paths/paths'
import { useDisclosure } from '@mantine/hooks'
import { ProfileInfo } from '@features/profile-info'
import { Logo } from '@shared/ui/logo'

const ProfileSection = ({
  profile,
  showDetails = false,
  showMessage = false,
  showActiveNow = false,
  showTime = true,
  size = 'md',
  mobileSize = '33px',
  allowPadding = true,
  usernameSizeMobile = '0.7rem',
  usernameSize = 'lg',
  timeSize = '0.7rem',
  showEmail = false,
  direction = 'row',
  hoverUsername = true,
  isStaticColor = false,
  isMessage = false,
  isFollowing = false,
}: ProfileProps) => {
  const { isMobile } = Responsive()
  const navigate = useNavigate()
  const theme = useMantineTheme()
  const padding = isMobile ? '5px' : 'xs'
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Flex
        p={padding}
        pl={allowPadding ? padding : '0px'}
        style={{ cursor: 'pointer', flex: 1 }}
        direction={direction}
        gap={15}
      >
        <Avatar
          color="blue"
          size={isMobile ? mobileSize : size}
          radius="50%"
          src="/profile.png"
        />

        <Stack
          gap={isMobile ? '8px' : '0px'}
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
            {isMessage && (
              <Text
                size={isMobile ? timeSize : 'xs'}
                c="dimmed"
              >
                {profile?.timestamp}
              </Text>
            )}
            {isFollowing && (
              <SButton
                variant="subtle"
                color="lightText"
                size="sm"
                p={0}
                px={10}
                bg="originalBlue"
              >
                {profile?.isFollowing ? 'Unfollow' : 'Follow back'}
              </SButton>
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
              lineClamp={2}
              c={profile?.isRead ? 'dimmed' : 'darkText'}
              fw={profile?.isRead ? 400 : 500}
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
      </Flex>

      <HModal
        opened={opened}
        onClose={close}
        title={<Logo />}
        pos="relative"
        transitionProps={{ transition: 'fade', duration: 200 }}
        centered
      >
        <ProfileInfo Profile={profile} />
      </HModal>
    </>
  )
}

export { ProfileSection }
