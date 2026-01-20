import { Container } from '@mantine/core'
import { useLocation } from 'react-router-dom'
import { ProductDetails } from './pages/PageDetails'
import { HomePageSkeleton } from './pages'

const LoadingSkeleton = () => {
  const { pathname } = useLocation()

  if (pathname.startsWith('/product')) {
    return (
      <Container
        p={0}
        fluid
        h="100%"
        style={{ overflow: 'hidden', width: '100vw' }}
      >
        <ProductDetails />
      </Container>
    )
  }

  return (
    <Container
      p={0}
      fluid
      h="100%"
      style={{ overflow: 'hidden', width: '100vw' }}
    >
      <HomePageSkeleton />
    </Container>
  )
}

export { LoadingSkeleton }
