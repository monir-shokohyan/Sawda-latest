import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { RegisterType } from '../types'
import { defaultValues } from '../constant'

const useManageRegisterForm = () => {
  const { isMobile } = Responsive()

  const { control, handleSubmit, watch } = useForm<RegisterType>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return {
    handleSubmit,
    onSubmit,
    control,
    isMobile,
  }
}

export { useManageRegisterForm }
