import { Anchor, Group, Stack } from '@mantine/core'
import { useManageLoginForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormInput } from '@shared/ui/form'
import { TbLock, TbMail } from 'react-icons/tb'
import { FormPasswordInput } from '@shared/ui/form/FormPasswordInput'
import { FormCheckbox } from '@shared/ui/form/FormCheckBox'

const Ui = () => {
const {handleSubmit, onSubmit, control} = useManageLoginForm()
  return (
    <FormWrapper
            handleSubmit={handleSubmit(onSubmit)}
            buttonTitle="Sign In"
            allowButton
            buttonFullWidth
          >
            <Stack gap="md">
              <FormInput
                name="email"
                label="Email"
                placeholder="your@email.com"
                control={control}
                leftSection={<TbMail size={16} />}
                mb={10}
              />

              <FormPasswordInput
                name="password"
                control={control}
                label="Password"
                placeholder="Your password"
                leftSection={<TbLock size={16} />}
                mb={10}
              />

              <Group
                justify="space-between"
                mt="xs"
              >
                <FormCheckbox
                  name="remember"
                  control={control}
                  label="Remember me"
                />

                <Anchor
                  size="sm"
                  href="/forgot-password"
                >
                  Forgot password?
                </Anchor>
              </Group>
            </Stack>
          </FormWrapper>
  )
}

export { Ui }
