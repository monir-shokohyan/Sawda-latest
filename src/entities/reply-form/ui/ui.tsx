import { Flex, Stack } from '@mantine/core'
import { SActionIcon, SButton } from '@shared/styles'
import { FiSend } from 'react-icons/fi'
import { quickReplies } from '../constant'
import { useManageReplyForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormTextarea } from '@shared/ui/form/FormTextArea'

const Ui = () => {
  const { handleSubmit, onSubmit, isSubmitting, setValue, control } =
    useManageReplyForm()

  return (
    <Stack gap={0}>
      <FormWrapper
        allowPadding={false}
        transparent
        marginTop="0px"
      >
        <Stack
          gap={0}
          pos="relative"
        >
          <SActionIcon
            type="submit"
            variant="transparent"
            color="blue"
            size="lg"
            radius="xl"
            loading={isSubmitting}
            pos="absolute"
            top={30}
            right={5}
            style={{
              zIndex: 10,
            }}
            aria-label="Send message"
            onClick={handleSubmit(onSubmit)}
          >
            <FiSend size={18} />
          </SActionIcon>

          <FormTextarea
            placeholder="Greetings..."
            label="Ask the seller"
            name="message"
            control={control}
            mb={0}
            rows={4}
          />
        </Stack>
      </FormWrapper>

      {/* Quick replies */}
      <Flex
        direction="column"
        gap={10}
        align="flex-start"
      >
        {quickReplies.map((text) => (
          <SButton
            key={text}
            onClick={() => setValue('message', text, { shouldValidate: true })}
            size="compact-sm"
          >
            {text}
          </SButton>
        ))}
      </Flex>
    </Stack>
  )
}

export { Ui }
