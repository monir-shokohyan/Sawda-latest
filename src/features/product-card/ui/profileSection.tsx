import { Avatar, Flex, Stack, Text, useMantineTheme } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { NavLink, useNavigate } from 'react-router-dom'
import { ProfileProps } from '../types'
import { HoveredText } from '@shared/styles'
import { Paths } from '@shared/api/paths/paths'

const ProfileSection = ({
  product,
  showDetails = false,
  showMessage = false,
  showActiveNow = false,
  showTime = true,
  size = 'md',
  mobileSize = '33px',
  allowPadding = true,
  usernameSize = '0.7rem',
  timeSize = '0.7rem',
  showEmail = false,
  direction = 'row',
  hoverUsername = true,
  isStaticColor = false,
  isMessage = false
}: ProfileProps) => {
  const { isMobile } = Responsive()
  const navigate = useNavigate()
  const theme = useMantineTheme()
  const padding = isMobile ? '5px' : 'xs'
  return (
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

        <Flex justify="space-between" align="center" gap={20}  w="100%" >
        <HoveredText
          fw={600}
          size={isMobile ? usernameSize : 'sm'}
          onClick={(e) => {
            if (!hoverUsername) return
            e.stopPropagation()
            navigate({
              pathname: `${Paths.ProfileDetails}${product.username}`,
              search: new URLSearchParams({
                name: `${product.username?.slice(0, 20)}...`,
              }).toString(),
            })
          }}
          c={isStaticColor ? 'white' : 'darkText'}
          $isActive={hoverUsername}
        >
          {product.username}
        </HoveredText>
        {isMessage &&  <Text
            size={isMobile ? timeSize : 'xs'}
            c="dimmed"
          >
            {product.timestamp}
          </Text>}
        </Flex>
        {showEmail && (
          <Text
            size={isMobile ? timeSize : 'xs'}
            c={isStaticColor ? 'white' : 'dimmed'}
          >
            {product.email}
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
            {product.message}
          </Text>
        )}
        {isMessage && (
          <Text
            size={isMobile ? timeSize : 'xs'}
            lineClamp={1}
            c={product.isRead ? 'dimmed' : 'darkText'}
            fw={product.isRead ? 400 : 500}
          >
            {product.message}
          </Text>
        )}
        {showTime && (
          <Text
            size={isMobile ? timeSize : 'xs'}
            c="dimmed"
          >
            {product.timestamp}
          </Text>
        )}

        {showDetails && (
          <NavLink
            to="/"
            style={{ color: theme.colors.textPrimary[8], fontSize: '0.7rem' }}
          >
            Profile details
          </NavLink>
        )}
      </Stack>
    </Flex>
  )
}

export { ProfileSection }
