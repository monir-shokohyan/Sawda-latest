import { ChatMessage } from '@features/message-details/types'
import { AspectRatio, Grid, Image } from '@mantine/core'

interface Props {
  images: ChatMessage['attachments']
  handleClick: () => void
}
const ImageGrid = ({ images, handleClick }: Props) => {
  return (
    <Grid
      gutter="5px"
      justify="center"
      grow
    >
      {images?.map((attachment, index) => (
        <Grid.Col
          key={index}
          span={{ base: 6, xs: 6 }}
        >
          <AspectRatio ratio={3 / 4}>
            <Image
              src={attachment.url || '/cover.png'}
              alt={attachment.name || 'Attachment image'}
              loading="lazy"
              radius="md"
              fit="cover"
              fallbackSrc="/cover.png"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onClick={handleClick}
            />
          </AspectRatio>
        </Grid.Col>
      ))}
    </Grid>
  )
}

export { ImageGrid }
