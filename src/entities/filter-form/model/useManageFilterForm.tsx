import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { FilterFormType } from '../types'
import { defaultValues, ProvinceConstants } from '../constant'
import { TbCurrencyAfghani } from 'react-icons/tb'
import { MdAttachMoney } from 'react-icons/md'
import { useEffect } from 'react'

const useManageFilterForm = ({isPill = false}:{isPill: boolean}) => {
  const { isMobile } = Responsive()
  const { control, handleSubmit, watch, reset } = useForm<FilterFormType>({
    resolver: yupResolver(schema) as any,
    defaultValues,
  })

  const formValues = watch()

  useEffect(() => {
    if(isPill){
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
  }
}

export { useManageFilterForm }
