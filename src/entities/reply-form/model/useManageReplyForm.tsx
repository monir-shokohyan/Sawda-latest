import { useMantineTheme } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { ReplyFormType } from '../types'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { useTranslation } from 'react-i18next'
import { useIsRtlLang } from '@shared/hooks'
import { quickReplies } from '../constant'

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
  const { t } = useTranslation()
  const { isEnglish } = useIsRtlLang()

  const onSubmit = (data: ReplyFormType) => {
    console.log('Sending message:', data.message)
    reset()
  }
const modifiedQuickReplies = quickReplies.map(item=> t(item as any))
console.log(quickReplies);
console.log(modifiedQuickReplies);


  return {
    register,
    handleSubmit,
    reset,
    setValue,
    isSubmitting,
    onSubmit,
    control,
    t,
    isEnglish,
    modifiedQuickReplies,
  }
}

export { useManageReplyForm }
