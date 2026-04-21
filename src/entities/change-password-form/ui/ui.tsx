import { Stack } from '@mantine/core'
import { useManageChangePassword } from '../modal'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormPasswordInput } from '@shared/ui/form/FormPasswordInput'

const Ui = () => {
  const { handleSubmit, control, onSubmit, isMobile, t } =
    useManageChangePassword()
  return (
    <>
      <FormWrapper
        allowButton
        title={t('profile.changePassword')}
        buttonTitle={t('profile.saveChanges')}
        handleSubmit={handleSubmit(onSubmit)}
        buttonFullWidth={isMobile}
      >
        <Stack
          gap={3}
          mb={30}
        >
          <FormPasswordInput
            label={t('auth.currentPassword')}
            control={control}
            name="currentPassword"
          />
          <FormPasswordInput
            label={t('auth.newPassword')}
            control={control}
            name="newPassword"
          />
          <FormPasswordInput
            label={t('auth.confirmPassword')}
            control={control}
            name="confirmPassword"
          />
        </Stack>
      </FormWrapper>
    </>
  )
}

export { Ui }
