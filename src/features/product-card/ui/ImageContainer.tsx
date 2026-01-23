import { StyledImageContainer } from '../styles'
import { LazyImage } from '@shared/ui/image'

const ImageContainer = () => (
  <StyledImageContainer>
    <LazyImage
      src="/bg.jpg"
      alt="product image"
      width="100%"
      height="100%"
    />
  </StyledImageContainer>
)
export { ImageContainer }
