import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { Responsive } from '@shared/hooks/responsive'
import { RegisterType, TabType } from '../types'
import { defaultValues } from '../constant'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

const useManageRegisterForm = () => {
  const { isMobile } = Responsive()
  const { control, handleSubmit } = useForm<RegisterType>({
    resolver: yupResolver(schema) as any,
    defaultValues,
  })
  const [filter, setFilter] = useState<TabType>('phone')
  const Toggle = () => {
    setFilter((prev) => (prev === 'email' ? 'phone' : 'email'))
  }
  const handler = useSwipeable({
    onSwipedLeft: () => Toggle(),
    onSwipedRight: () => Toggle(),
    delta: 50,
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return {
    handleSubmit,
    onSubmit,
    control,
    isMobile,
    handler,
    filter,
    setFilter,
  }
}

export { useManageRegisterForm }
