import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { FilterFormType } from '../types'
import {
  CurrencyConstants,
  defaultValues,
  ProvinceConstants,
} from '../constant'
import { TbCurrencyAfghani } from 'react-icons/tb'
import { MdAttachMoney } from 'react-icons/md'
import { useEffect } from 'react'
import { useCategories } from '@shared/ui/category/useCategory'
import { useTranslation } from 'react-i18next'

const useManageFilterForm = ({ isPill = false }: { isPill: boolean }) => {
  const { isMobile } = Responsive()
  const { t } = useTranslation()
  const { control, handleSubmit, watch, reset } = useForm<FilterFormType>({
    resolver: yupResolver(schema) as any,
    defaultValues,
  })
  const { category } = useCategories()

  const formValues = watch()

  useEffect(() => {
    if (isPill) {
      handleSubmit(onSubmit)()
    }
  }, [formValues])

  const getDistrictsForProvince = () => {
    const province = ProvinceConstants.find(
      (p) => p.value === watch('province'),
    )
    return province?.districts || []
  }
  const currencySymbol = watch('currency') === 'AFN' ? '؋' : '$'
  const currencyIcon =
    watch('currency') === 'AFN' ? (
      <TbCurrencyAfghani size={16} />
    ) : (
      <MdAttachMoney size={16} />
    )
  const isProvinceActive = !!watch('province')
  const onSubmit = (data: FilterFormType) => {
    console.log(data)
  }
  const resetForm = () => {
    reset(defaultValues)
  }
  const modifiedCurrencyConstant = CurrencyConstants.map((item) => ({
    ...item,
    label: t(item.label),
  }))

  return {
    isMobile,
    control,
    handleSubmit,
    getDistrictsForProvince,
    currencyIcon,
    currencySymbol,
    isProvinceActive,
    onSubmit,
    resetForm,
    category,
    t,
    modifiedCurrencyConstant,
  }
}

export { useManageFilterForm }
