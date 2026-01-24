import { Flex, Group, Text, Card as MantineCard } from '@mantine/core'
import { FaEllipsisV, FaHeart, FaRegHeart } from 'react-icons/fa'
import { ProfileSection } from './profileSection'
import {
  ActionIconWrapper,
  CardWrapper,
  LikeOverlay,
  OverlayHeart,
  Particle,
} from '../styles'
import { useModals } from '../modals'
import { UseModalProps } from '../types'
import { ImageContainer } from './ImageContainer'
import { HoveredActionIcon } from '@shared/styles'

const ProductCard: React.FC<UseModalProps> = ({
  product,
  handleToggleLike,
}) => {
  const {
    handleClick,
    handleDoubleClick,
    isAnimating,
    isMobile,
    handleLikeClick,
    showOverlay,
    particles,
  } = useModals({ product, handleToggleLike })
  return (
    <CardWrapper
      data-tooltip-id="global-tooltip"
      data-tooltip-content="Click card for details • Double-click to quick like"
      data-tooltip-place="top"
      data-tooltip-delay-show={800}
    >
      <MantineCard
        shadow="sm"
        padding="0"
        radius="md"
        withBorder={false}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        bg="background.7"
      >
        <ProfileSection product={product} />

        <ImageContainer />

        <Flex
          px={16}
          py={isMobile ? '5px' : '16px'}
          direction="column"
        >
          <Text
            size={isMobile ? '0.9rem' : 'sm'}
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
          <ActionIconWrapper
            $isAnimating={isAnimating}
            $liked={product.liked}
          >
            <HoveredActionIcon
              variant="subtle"
              color={product.liked ? 'red' : 'gray'}
              onClick={handleLikeClick}
            >
              {product.liked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
            </HoveredActionIcon>
          </ActionIconWrapper>
          <HoveredActionIcon
            variant="subtle"
            color="gray"
          >
            <FaEllipsisV size={16} />
          </HoveredActionIcon>
        </Group>
      </MantineCard>

      <LikeOverlay $show={showOverlay}>
        <OverlayHeart $show={showOverlay}>
          <FaHeart />
        </OverlayHeart>
        {showOverlay &&
          particles.map((particle, index) => (
            <Particle
              key={index}
              $delay={particle.delay}
              $angle={particle.angle}
            />
          ))}
      </LikeOverlay>
    </CardWrapper>
  )
}

export { ProductCard }
