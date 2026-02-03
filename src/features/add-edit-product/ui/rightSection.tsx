import { Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { DragAndDrop } from '@features/drag-and-drop'
import { ImageFile } from '@features/drag-and-drop/types'

interface RightSectionProps {
  images: ImageFile[]
  setImages: React.Dispatch<React.SetStateAction<ImageFile[]>>
}

const RightSection = ({ images, setImages }: RightSectionProps) => {
  const { isMobile } = Responsive()

  return (
    <Stack
      w={isMobile ? '100%' : '35%'}
      pos={isMobile ? 'static' : 'sticky'}
      top={isMobile ? undefined : 30}
      right={isMobile ? undefined : 0}
      h={isMobile ? 'auto' : '100vh'}
      mb={0}
    >
      <DragAndDrop
        images={images}
        setImages={setImages}
      />
    </Stack>
  )
}

export { RightSection }
