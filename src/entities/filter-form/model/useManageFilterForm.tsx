import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { FilterFormType } from '../types'
import { ProvinceConstants } from '../constant'
import { TbCurrencyAfghani } from 'react-icons/tb'
import { MdAttachMoney } from 'react-icons/md'

const useManageFilterForm = () => {
  const { isMobile } = Responsive()
  const { control, handleSubmit, watch } = useForm<FilterFormType>({
    resolver: yupResolver(schema),
  })

  const getDistrictsForProvince = () => {
    const province = ProvinceConstants.find(
      (p) => p.value === watch('province'),
    )
    return province?.districts || []
  }
  const currencySymbol = watch('currency') === 'AFN' ? '؋' : '$'
  const currencyIcon =
    watch('currency') === 'AFN' ? (
      <TbCurrencyAfghani size={20} />
    ) : (
      <MdAttachMoney size={20} />
    )
  const isProvinceActive = !!watch('province')
  const onSubmit = (data: FilterFormType) => {
    console.log(data)
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
  }
}

export { useManageFilterForm }
