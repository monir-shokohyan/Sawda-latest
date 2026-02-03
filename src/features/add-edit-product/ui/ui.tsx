import { Flex } from '@mantine/core'
import { useSearchParams } from 'react-router-dom'
import { Responsive } from '@shared/hooks/responsive'
import { RightSection } from './rightSection'
import { LeftSection } from './leftSection'
import { useState } from 'react'
import { ImageFile } from '@features/drag-and-drop/types'
import { AddProductFormData } from '@entities/add-product-form/types'
import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'

function Ui() {
  const { isMobile } = Responsive()
  const [images, setImages] = useState<ImageFile[]>([])

  const onSubmit = (data: AddProductFormData) => {
    console.log(data)
  }

  return (
    <ContainerWithBreadCrumb title="Add product">
      <Flex
        gap="10px"
        p={isMobile ? '0px' : 'xl'}
        wrap="wrap"
      >
        <RightSection
          images={images}
          setImages={setImages}
        />

        <LeftSection onSubmit={onSubmit} />
      </Flex>
    </ContainerWithBreadCrumb>
  )
}

export { Ui }
