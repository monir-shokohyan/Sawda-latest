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
      pos={isMobile ? 'inherit' : 'sticky'}
      top={30}
      right={0}
      h={isMobile ? 'auto' : '100vh'}
      mb={0}
      style={{ border: '1px solid red' }}
    >
      <DragAndDrop
        images={images}
        setImages={setImages}
      />
    </Stack>
  )
}

export { RightSection }
