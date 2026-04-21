import React, { useState } from 'react'
import { Container, Paper, Stack, rem } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import type { EmblaCarouselType } from 'embla-carousel'
import { Responsive } from '@shared/hooks/responsive'
import { LazyImage } from '../image'

interface ImageData {
  id?: number
  name?: string
  type?: 'image' | 'audio' | 'document' | 'other'
  url: string
}

interface Props {
  data?: ImageData[]
  slideGap?: boolean
  fullImage?: boolean
  allowBg?: boolean
}

const ImageCarousel = ({ data, slideGap = true, fullImage = false }: Props) => {
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

  const handleThumbnailClick = (index: number) => {
    embla?.scrollTo(index)
  }
  const { isMobile } = Responsive()

  /////////////////// will be deleted
  const width = Math.floor(Math.random() * (800 - 300 + 1)) + 300
  const height = Math.floor(Math.random() * (600 - 200 + 1)) + 200
  const images: ImageData[] = [
    {
      id: 1,
      url: `https://picsum.photos/4000/1800?random=1`,
    },
    {
      id: 2,
      url: `https://picsum.photos/3100/1700?random=2`,
    },
    {
      id: 3,
      url: `https://picsum.photos/1600/1400?random=3`,
    },
    {
      id: 4,
      url: `https://picsum.photos/2000/2300?random=4`,
    },
    {
      id: 5,
      url: `https://picsum.photos/1400/1400?random=5`,
    },
    {
      id: 6,
      url: `https://picsum.photos/2500/2500?random=6`,
    },
  ]

  return (
    <Container px={0}>
      <Stack>
        <Carousel
          withIndicators
          height={isMobile ? 300 : '50vh'}
          slideGap={slideGap ? 'sm' : '0px'}
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
          {images?.map((image) => (
            <Carousel.Slide key={image.id}>
              <LazyImage
                src={image.url}
                alt="product image"
                fallbackSrc="/bg.jpg"
                width="100%"
                height="100%"
              />
            </Carousel.Slide>
          ))}
        </Carousel>

        {/*Desktop Thumbnail Carousel */}
        <Carousel
          withControls={false}
          slideSize="16.666%"
          slideGap="md"
        >
          {data?.map((image, index) => (
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
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)'
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
                    src="/cover.png"
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
      </Stack>
    </Container>
  )
}

export { ImageCarousel }
