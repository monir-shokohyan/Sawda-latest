import { FormData } from '../types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { defaultValues } from '../constant'
import { Responsive } from '@shared/hooks/responsive'

const useManageChangePassword = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const { isMobile } = Responsive()

  const onSubmit = (data: FormData): void => {
    console.log('Complete Form Data:', {
      ...data,
    })
  }

  return {
    handleSubmit,
    control,
    onSubmit,
    isMobile,
  }
}

export { useManageChangePassword }
