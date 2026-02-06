import { StyledImageContainer } from '../styles'
import { LazyImage } from '@shared/ui/image'

const ImageContainer = ({ src = '/bg.jpg' }: { src?: string }) => (
  <StyledImageContainer>
    <LazyImage
      src={src}
      alt="product image"
      fallbackSrc="/bg.jpg"
      width="100%"
      height="100%"
    />
  </StyledImageContainer>
)
export { ImageContainer }
