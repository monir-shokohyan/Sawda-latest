import {
  ActionIcon,
  Avatar,
  Flex,
  Group,
  Image,
  Text,
  Card as MantineCard,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaEllipsisV, FaHeart, FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 13rem;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 800px) {
    height: 6.5rem;
  }
`
export interface Product {
  id: number
  username: string
  timestamp: string
  title: string
  price: string
  originalPrice: string
  status: string
  liked: boolean
}

const ImageContainer = () => (
  <StyledImageContainer>
    <Image
      src="/placeholder.png"
      width="100%"
      height="100%"
    />
  </StyledImageContainer>
)

const ProductCard = ({
  product,
  handeToggleLike,
}: {
  product: Product
  handeToggleLike: (id: number) => void
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const navigate = useNavigate()
  return (
    <MantineCard
      shadow="sm"
      padding="0"
      radius="md"
      withBorder={false}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={() =>
        navigate({
          pathname: `/product/${product.id}`,
          search: new URLSearchParams({
            name: `${product.title.slice(0, 20)}...`,
          }).toString(),
        })
      }
    >
      <Group
        px="md"
        py={isMobile ? '5px' : 'xs'}
        style={{ borderBottom: '1px solid #e8e8e8' }}
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

      <ImageContainer />

      <Flex
        px={16}
        py={isMobile ? '5px' : '16px'}
        direction="column"
      >
        <Text
          size={isMobile ? '0.7rem' : 'sm'}
          fw={500}
          lineClamp={1}
          style={{ flexGrow: 1 }}
        >
          {product.title}
        </Text>
        <Group
          gap="xs"
          mt={isMobile ? '5px' : 'xs'}
        >
          <Text
            size={isMobile ? '0.8rem' : 'xl'}
            fw={700}
          >
            {product.price}
          </Text>
          <Text
            size={isMobile ? '0.7rem' : 'md'}
            c="dimmed"
            td="line-through"
          >
            {product.originalPrice}
          </Text>
        </Group>
      </Flex>

      <Group
        justify="space-between"
        px="md"
        py={isMobile ? '5px' : 'xs'}
        style={{ borderTop: '1px solid #e8e8e8' }}
      >
        <ActionIcon
          variant="subtle"
          color={product.liked ? 'red' : 'gray'}
          onClick={() => handeToggleLike(product.id)}
        >
          {product.liked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          color="gray"
        >
          <FaEllipsisV size={16} />
        </ActionIcon>
      </Group>
    </MantineCard>
  )
}

export { ProductCard }
