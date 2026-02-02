import { Flex, Stack } from '@mantine/core'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { useSearchParams } from 'react-router-dom'
import { Responsive } from '@shared/hooks/responsive'
import { GradientContainer } from '@shared/ui/containers'
import { RightSection } from './rightSection'
import { LeftSection } from './leftSection'
import { AddProductFormData } from '../types'
import { schema } from '../schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { ImageFile } from '@features/drag-and-drop/types'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'
  const [images, setImages] = useState<ImageFile[]>([])

  const { control, handleSubmit, watch, setValue } =
    useForm<AddProductFormData>({
      resolver: yupResolver(schema),
    })

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
          gap="2%"
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
            control={control}
            handleSubmit={handleSubmit}
            watch={watch}
            setValue={setValue}
            onSubmit={onSubmit}
          />
        </Flex>
      </Stack>
    </GradientContainer>
  )
}

export { Ui }
