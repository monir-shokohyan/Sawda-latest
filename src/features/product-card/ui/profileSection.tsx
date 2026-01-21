import { Avatar, Flex, Group, Text, useMantineTheme } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ProductProps } from '@shared/types/profile'
import { NavLink, useNavigate } from 'react-router-dom'

interface ProfileProps {
  product: ProductProps
  showDetails?: boolean
  showTime?: boolean
  size?: 'xl' | 'md' | 'sm' | 'lg'
  allowPadding?: boolean
}

const ProfileSection = ({
  product,
  showDetails = false,
  showTime = true,
  size = 'md',
  allowPadding = true,
}: ProfileProps) => {
  const { isMobile } = Responsive()
  const navigate = useNavigate()
  const theme = useMantineTheme()
  const padding = isMobile ? '5px' : 'xs'
  return (
    <Group
      p={padding}
      pl={allowPadding ? padding : '0px'}
      onClick={(e) => {
        e.stopPropagation()
        navigate({
          pathname: `/profile/${product.username}`,
          search: new URLSearchParams({
            name: `${product.username?.slice(0, 20)}...`,
          }).toString(),
        })
      }}
    >
      <Avatar
        color="blue"
        radius="xl"
        size={isMobile ? '33px' : size}
      >
        {product.username?.charAt(0).toUpperCase()}
      </Avatar>
      <Flex
        direction="column"
        gap={isMobile ? '4px' : '0px'}
      >
        <Text
          fw={600}
          size={isMobile ? '0.7rem' : 'md'}
        >
          {product.username}
        </Text>

        {showTime && (
          <Text
            size={isMobile ? '0.7rem' : 'xs'}
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
