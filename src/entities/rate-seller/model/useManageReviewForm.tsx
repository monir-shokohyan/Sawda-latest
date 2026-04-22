import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { ReviewType } from '../types'
import { defaultValues } from '../constant'
import { useTranslation } from 'react-i18next'

const useManageReviewForm = () => {
  const { isMobile } = Responsive()
  const { control, handleSubmit } = useForm<ReviewType>({
    resolver: yupResolver(schema),
    defaultValues,
  })
  const { t } = useTranslation()

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

export { useManageReviewForm }
