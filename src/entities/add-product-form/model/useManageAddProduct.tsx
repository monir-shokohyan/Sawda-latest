import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { AddProductFormData } from '../types'

const useManageAddProduct = () => {
  const { control, handleSubmit, watch } = useForm<AddProductFormData>({
    resolver: yupResolver(schema),
  })
  const { isMobile } = Responsive()
  const isFree = watch('isfree') === '1'

  return { isMobile, control, handleSubmit, isFree }
}

export { useManageAddProduct }
