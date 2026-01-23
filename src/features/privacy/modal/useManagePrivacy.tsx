import { FormData } from '../types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { defaultValues } from '../constant'
import { Responsive } from '@shared/hooks/responsive'
import { useEffect } from 'react'

const useManagePrivacy = () => {
  const { control, watch } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onChange',
  })

  const values = watch()

  useEffect(() => {
    console.log('Auto-saving notification preferences:', values)
  }, [values])
  const { isMobile } = Responsive()

  return {
    control,
    isMobile,
  }
}

export { useManagePrivacy }
