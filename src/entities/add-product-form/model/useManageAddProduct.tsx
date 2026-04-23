import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { AddProductFormData } from '../types'
import { useCategories } from '@shared/ui/category/useCategory'
import { useTranslation } from 'react-i18next'
import { ConditionConstants, IsFreeConstants } from '../constant'
import { ProvinceConstants } from '@entities/filter-form/constant'

const useManageAddProduct = () => {
  const { control, handleSubmit, watch } = useForm<AddProductFormData>({
    resolver: yupResolver(schema),
  })
  const { isMobile } = Responsive()
  const { category } = useCategories()
  const isFree = watch('isfree') === '1'
  const { t } = useTranslation()
  const modifiedContant = IsFreeConstants.map((item) => ({
    ...item,
    label: t(item.label),
  }))
  const modifiedConditionConstant = ConditionConstants.map((item) => ({
    ...item,
    label: t(item.label),
  }))
  const modifiedProvinceConstants = ProvinceConstants.map((province) => ({
    ...province,
    label: t(province.label),
    districts: province.districts.map((d) => ({
      ...d,
      label: t(d.label),
    })),
  }))

  return {
    isMobile,
    control,
    handleSubmit,
    isFree,
    category,
    t,
    modifiedContant,
    modifiedConditionConstant,
    modifiedProvinceConstants,
  }
}

export { useManageAddProduct }
