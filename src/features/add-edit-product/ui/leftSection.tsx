import { AddProductForm } from '@entities/add-product-form'
import { AddProductSubmitProps } from '@entities/add-product-form/types'
import { Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'


const LeftSection = ({
  onSubmit,
}: AddProductSubmitProps) => {
  const { isMobile } = Responsive()

  return (
    <Stack w={isMobile ? '100%' : '62%'}>
      <AddProductForm onSubmit={onSubmit} />
    </Stack>
  )
}

export { LeftSection }
