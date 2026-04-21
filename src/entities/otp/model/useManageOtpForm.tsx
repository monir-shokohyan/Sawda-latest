import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { OtpType } from '../types'
import { defaultValues } from '../constant'
import { useTranslation } from 'react-i18next'

const useManageOtpForm = () => {
  const { isMobile } = Responsive()
  const { t } = useTranslation()
  const { control, handleSubmit } = useForm<OtpType>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }
  const ResendOtp = () => {
    alert('resend')
  }

  return {
    handleSubmit,
    onSubmit,
    control,
    isMobile,
    ResendOtp,
    t,
  }
}

export { useManageOtpForm }
