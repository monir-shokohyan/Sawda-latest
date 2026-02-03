import { Stack } from '@mantine/core'
import { useManageChangePassword } from '../modal'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormPasswordInput } from '@shared/ui/form/FormPasswordInput'

const Ui = () => {
  const { handleSubmit, control, onSubmit, isMobile } =
    useManageChangePassword()
  return (
    <>
      <FormWrapper
        allowButton
        title="Change password"
        buttonTitle="Save changes"
        handleSubmit={handleSubmit(onSubmit)}
        buttonFullWidth={isMobile}
      >
        <Stack
          gap={3}
          mb={30}
        >
          <FormPasswordInput
            label="Current password"
            control={control}
            name="currentPassword"
          />
          <FormPasswordInput
            label="New password"
            control={control}
            name="newPassword"
          />
          <FormPasswordInput
            label="Confirm password"
            control={control}
            name="confirmPassword"
          />
        </Stack>
      </FormWrapper>
    </>
  )
}

export { Ui }
