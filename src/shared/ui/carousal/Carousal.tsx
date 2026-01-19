import React, { useState } from 'react'
import { Container, Paper, Stack, rem } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import type { EmblaCarouselType } from 'embla-carousel'
import { Responsive } from '@shared/hooks/responsive'

interface ImageData {
  id: number
  url: string
}

const ImageCarousel: React.FC = () => {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = React.useCallback(() => {
    if (!embla) return
    setCanScrollPrev(embla.canScrollPrev())
    setCanScrollNext(embla.canScrollNext())
  }, [embla])

  React.useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
    embla.on('reInit', onSelect)
  }, [embla, onSelect])

  const images: ImageData[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=600&fit=crop',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=1200&h=600&fit=crop',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=600&fit=crop',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop',
    },
  ]

  const handleThumbnailClick = (index: number) => {
    embla?.scrollTo(index)
  }
  const { isMobile } = Responsive()

  return (
    <Container px={0}>
      <Stack gap="xl">
        <Carousel
          withIndicators
          height={isMobile ? 300 : 500}
          slideGap="sm"
          controlsOffset="xl"
          controlSize={50}
          getEmblaApi={setEmbla}
          previousControlProps={{
            style: {
              opacity: canScrollPrev ? 1 : 0,
              pointerEvents: canScrollPrev ? 'auto' : 'none',
              transition: 'opacity 0.3s ease',
            },
          }}
          nextControlProps={{
            style: {
              opacity: canScrollNext ? 1 : 0,
              pointerEvents: canScrollNext ? 'auto' : 'none',
              transition: 'opacity 0.3s ease',
            },
          }}
          styles={{
            controls: {
              opacity: isMobile ? '0' : '1',
            },
            indicator: {
              width: rem(12),
              height: rem(12),
              transition: 'width 250ms ease',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              '&[data-active]': {
                width: rem(40),
                backgroundColor: '#228be6',
              },
            },
          }}
          emblaOptions={{
            align: 'start',
          }}
          slideSize={isMobile ? '95%' : '97%'}
        >
          {images.map((image) => (
            <Carousel.Slide key={image.id}>
              <img
                src={image.url}
                alt="image of product"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>

        {/*Desktop Thumbnail Carousel */}
        {!isMobile && (
          <Carousel
            withControls={false}
            slideSize="16.666%"
            slideGap="md"
          >
            {images.map((image, index) => (
              <Carousel.Slide key={`thumb-${image.id}`}>
                <Paper
                  shadow="md"
                  radius="md"
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                  }}
                  onClick={() => handleThumbnailClick(index)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow =
                      '0 8px 16px rgba(0,0,0,0.2)'
                    e.currentTarget.style.borderColor = '#228be6'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.borderColor = 'transparent'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      paddingTop: '75%',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={image.url}
                      alt="images of products"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </Paper>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </Stack>
    </Container>
  )
}

export { ImageCarousel }
