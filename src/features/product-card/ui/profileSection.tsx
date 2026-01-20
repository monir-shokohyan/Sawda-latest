import { Avatar, Flex, Group, Text } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ProductProps } from '@shared/types/profile'

interface ProfileProps {
  product: ProductProps
}

const ProfileSection = ({ product }: ProfileProps) => {
  const { isMobile } = Responsive()
  return (
    <Group
      px="md"
      py={isMobile ? '5px' : 'xs'}
      style={{ borderBottom: '1px solid #e8e8e8' }}
      onClick={(e) => {
        e.stopPropagation()
        alert('')
      }}
    >
      <Avatar
        color="blue"
        radius="xl"
        size={isMobile ? '33px' : 'md'}
      >
        {product.username.charAt(0).toUpperCase()}
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
        <Text
          size={isMobile ? '0.7rem' : 'xs'}
          c="dimmed"
        >
          {product.timestamp}
        </Text>
      </Flex>
    </Group>
  )
}

export { ProfileSection }
