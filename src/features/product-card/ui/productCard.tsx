import { Flex, Group, Text, Card as MantineCard } from '@mantine/core'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
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
import { SActionIcon } from '@shared/styles'
import { OptionMenu } from '@features/option-menu'
import { useMemo } from 'react'

const ProductCard: React.FC<UseModalProps> = ({
  profile,
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
  } = useModals({ profile, handleToggleLike })
  const cacheBuster = Math.ceil(Math.random() * 400)
  const { width, height } = useMemo(() => {
    const w = Math.floor(Math.random() * (800 - 300 + 1)) + 300 // 300–800
    const h = Math.floor(Math.random() * (600 - 200 + 1)) + 200 // 200–600
    return { width: w, height: h }
  }, [])

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
        <ProfileSection profile={profile} isCard/>

        <ImageContainer
          src={`https://picsum.photos/${width}/${height}?random=${cacheBuster}`}
        />

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
            {profile?.title}
          </Text>
          <Group
            gap="xs"
            mt={isMobile ? '5px' : 'xs'}
          >
            <Text
              size={isMobile ? '0.8rem' : 'xl'}
              fw={700}
            >
              {profile?.price}
            </Text>
            <Text
              size={isMobile ? '0.7rem' : 'md'}
              c="dimmed"
              td="line-through"
            >
              {profile?.originalPrice}
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
            $liked={profile?.liked}
          >
            <SActionIcon
              variant="subtle"
              $isSubtle
              color={profile?.liked ? 'red' : 'textPrimary'}
              onClick={handleLikeClick}
            >
              {profile?.liked ? (
                <FaHeart size={18} />
              ) : (
                <FaRegHeart size={18} />
              )}
            </SActionIcon>
            12
          </ActionIconWrapper>

          <OptionMenu
            type="product"
            id={profile?.id as number}
          />
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
