import { Flex, Stack } from '@mantine/core'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { useSearchParams } from 'react-router-dom'
import { Responsive } from '@shared/hooks/responsive'
import { GradientContainer } from '@shared/ui/containers'
import { RightSection } from './rightSection'
import { LeftSection } from './leftSection'
import { useState } from 'react'
import { ImageFile } from '@features/drag-and-drop/types'
import { AddProductFormData } from '@entities/add-product-form/types'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'
  const [images, setImages] = useState<ImageFile[]>([])

  const onSubmit = (data: AddProductFormData) => {
    console.log(data)
  }

  return (
    <GradientContainer>
      <Stack
        w="100%"
        gap={0}
        px={isMobile ? 'sm' : GeneralPadding}
        py={isMobile ? 'sm' : 'xl'}
      >
        <BreadcrumbsNav
          items={[{ title: 'Home', href: '/' }, { title: name }]}
        />
        <Flex
          gap="10px"
          p={isMobile ? '0px' : 'xl'}
          wrap="wrap"
        >
          {/* right section */}
          <RightSection
            images={images}
            setImages={setImages}
          />

          {/* left section */}
          <LeftSection
            onSubmit={onSubmit}
          />
        </Flex>
      </Stack>
    </GradientContainer>
  )
}

export { Ui }
