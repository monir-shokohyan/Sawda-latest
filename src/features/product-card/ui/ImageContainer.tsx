import { Image } from '@mantine/core'
import { StyledImageContainer } from '../styles'

const ImageContainer = () => (
  <StyledImageContainer>
    <Image
      src="/placeholder.png"
      width="100%"
      height="100%"
    />
  </StyledImageContainer>
)
export { ImageContainer }
