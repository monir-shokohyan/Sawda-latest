import { useMantineTheme } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { ReplyFormType } from '../types'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'

const useManageReplyForm = () => {
  const theme = useMantineTheme()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    control,
  } = useForm<ReplyFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      message: '',
    },
  })

  const onSubmit = (data: ReplyFormType) => {
    console.log('Sending message:', data.message)
    reset()
  }

  return {
    register,
    handleSubmit,
    reset,
    setValue,
    isSubmitting,
    onSubmit,
    control,
  }
}

export { useManageReplyForm }
