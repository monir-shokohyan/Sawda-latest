import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { AddProductFormData } from '../types'
import { useCategories } from '@shared/ui/category/useCategory'
import { useTranslation } from 'react-i18next'

const useManageAddProduct = () => {
  const { control, handleSubmit, watch } = useForm<AddProductFormData>({
    resolver: yupResolver(schema),
  })
  const { isMobile } = Responsive()
  const { category } = useCategories()
  const isFree = watch('isfree') === '1'
  const { t } = useTranslation()

  return { isMobile, control, handleSubmit, isFree, category, t }
}

export { useManageAddProduct }
