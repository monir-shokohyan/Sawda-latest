import { useState } from 'react'
import { Stack, Grid } from '@mantine/core'
import { GradientContainer } from '@shared/ui/containers'
import { Product } from '../types'
import { GeneralPadding } from '@shared/constants'
import { ProductCard } from '@features/product-card'
import { InfiniteScrollWrapper } from '@shared/ui/infinite-scroll'

const generateProducts = (start: number, count: number): Product[] => {
  const cacheBuster = Math.ceil(Math.random() * 400)
  return Array.from({ length: count }, (_, i) => ({
    id: start + i,
    username: 'abraham534',
    timestamp: '3 days ago',
    title:
      'Wooden Sofa Set with Green Floral Cushions, RRP$3998, 6 months old ...',
    price: 'S$99',
    originalPrice: 'S$442',
    status: 'Likely new',
    liked: false,
    imageSrc: `https://picsum.photos/1200/800?random=${cacheBuster}`,
  }))
}

const Ui = ({ allowPadding = true }: { allowPadding?: boolean }) => {
  const [products, setProducts] = useState<Product[]>(generateProducts(0, 16))
  const [hasMore, setHasMore] = useState(true)

  const fetchMoreData = () => {
    setTimeout(() => {
      const newProducts = generateProducts(products.length, 16)
      setProducts((prev) => [...prev, ...newProducts])

      if (products.length + newProducts.length >= 64) {
        setHasMore(false)
      }
    }, 1000)
  }

  const toggleLike = (id: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p)),
    )
  }

  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const chunks: T[][] = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  }

  const productChunks = chunkArray(products, 16)

  return (
    <Stack
      w="100%"
      justify="center"
    >
      <InfiniteScrollWrapper
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        size="sm"
      >
        {productChunks.map((chunk, chunkIndex) => {
          return (
            <GradientContainer
              key={chunkIndex}
              px={allowPadding ? GeneralPadding : '0px'}
              pb={{ base: 12, sm: 16, md: 20 }}
              style={{ overflow: 'hidden' }}
            >
              <Grid gutter={{ base: 12, sm: 16, md: 20 }}>
                {chunk.map((product) => (
                  <Grid.Col
                    key={product.id}
                    span={{ base: 6, sm: 6, md: 4, lg: 3 }}
                  >
                    <ProductCard
                      profile={product}
                      handleToggleLike={toggleLike}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </GradientContainer>
          )
        })}
      </InfiniteScrollWrapper>
    </Stack>
  )
}

export { Ui }
