import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Flex,
  Stack,
  Textarea,
  Button,
  Group,
  useMantineTheme,
  ActionIcon,
} from '@mantine/core'
import { OpacityButton } from '@shared/styles'
import { FiSend } from 'react-icons/fi'

const schema = yup.object({
  message: yup
    .string()
    .trim()
    .required('Please write your message')
    .min(2, 'Message is too short')
    .max(1000, 'Message is too long (max 1000 characters)'),
})

type FormValues = yup.InferType<typeof schema>

const ReplySection = () => {
  const theme = useMantineTheme()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      message: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('Sending message:', data.message)

    reset()
  }

  const quickReplies = [
    'Are you still selling?',
    'Is bargaining appropriate?',
    'When can I watch it?',
    'Will you send me a video?',
  ]

  return (
    <Stack gap={20}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap={6}
          pos="relative"
        >
          <ActionIcon
            type="submit"
            variant="transparent"
            color="blue"
            size="lg"
            radius="xl"
            loading={isSubmitting}
            style={{
              position: 'absolute',
              top: '23%',
              right: 8,
              zIndex: 10,
            }}
            aria-label="Send message"
          >
            <FiSend size={18} />
          </ActionIcon>

          <Textarea
            placeholder="Greetings..."
            label="Ask the seller"
            autosize
            minRows={5}
            error={errors.message?.message}
            styles={{
              input: {
                background: theme.colors.backgroundInput?.[8] || '#f8f9fa',
                paddingLeft: '52px !important',
                paddingTop: '38px !important',
              },
              label: {
                marginBottom: 6,
              },
            }}
            {...register('message')}
          />
        </Stack>
      </form>

      {/* Quick replies */}
      <Flex
        direction="column"
        gap={10}
        align="flex-start"
      >
        {quickReplies.map((text) => (
          <OpacityButton
            key={text}
            bg="black"
            onClick={() => setValue('message', text, { shouldValidate: true })}
            size="compact-sm"
          >
            {text}
          </OpacityButton>
        ))}
      </Flex>
    </Stack>
  )
}

export { ReplySection }
