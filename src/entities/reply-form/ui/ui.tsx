import { Flex, Stack, Textarea } from '@mantine/core'
import { HoveredActionIcon, OpacityButton } from '@shared/styles'
import { FiSend } from 'react-icons/fi'

import { quickReplies } from '../constant'
import { useManageReplyForm } from '../model'

const Ui = () => {
  const {
    handleSubmit,
    onSubmit,
    isSubmitting,
    errors,
    setValue,
    register,
    theme,
  } = useManageReplyForm()

  return (
    <Stack gap={20}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap={6}
          pos="relative"
        >
          <HoveredActionIcon
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
          </HoveredActionIcon>

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

export { Ui }
