import { Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { DragAndDrop } from '@features/drag-and-drop';
import { useState } from 'react';
import { ImageFile } from '@features/drag-and-drop/types';


const RightSection = ({}) => {
  const { isMobile } = Responsive()
const [images, setImages] = useState<ImageFile[]>([]); 
  return (
    <Stack
      w={isMobile ? '100%' : '35%'}
      pos={isMobile ? "inherit" : "sticky"}
      top={30}
      right={0}
      h={isMobile ? 'auto' : '100vh'}
      mb={isMobile ? 100 : 0}
    >
      <DragAndDrop images={images} setImages={setImages} />
    </Stack>
  )
}

export { RightSection }