import { Avatar, Flex, Group, Text, useMantineTheme } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { NavLink, useNavigate } from 'react-router-dom'
import { ProfileProps } from '../types'
import { HoveredText } from '@shared/styles'
import { Paths } from '@shared/api/paths/paths'

const ProfileSection = ({
  product,
  showDetails = false,
  showTime = true,
  size = 'md',
  mobileSize = '33px',
  allowPadding = true,
  usernameSize = '0.7rem',
  timeSize = '0.7rem',
  showEmail = false
}: ProfileProps) => {
  const { isMobile } = Responsive()
  const navigate = useNavigate()
  const theme = useMantineTheme()
  const padding = isMobile ? '5px' : 'xs'
  return (
    <Group
      p={padding}
      pl={allowPadding ? padding : '0px'}
      style={{ cursor: 'pointer' }}
    >
      <Avatar
        color="blue"
        radius="xl"
        size={isMobile ? mobileSize : size}
      >
        {product.username?.charAt(0).toUpperCase()}
      </Avatar>

      <Flex
        direction="column"
        gap={isMobile ? '4px' : '0px'}
      >
        <HoveredText
          fw={600}
          size={isMobile ? usernameSize : 'md'}
          onClick={(e) => {
            e.stopPropagation()
            navigate({
              pathname: `${Paths.ProfileDetails}${product.username}`,
              search: new URLSearchParams({
                name: `${product.username?.slice(0, 20)}...`,
              }).toString(),
            })
          }}
          c="darkText"
        >
          {product.username}
        </HoveredText>

        {showEmail && (
          <Text
            size={isMobile ? timeSize : 'xs'}
            c="dimmed"
          >
            {product.email}
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
      </Flex>
    </Group>
  )
}

export { ProfileSection }
