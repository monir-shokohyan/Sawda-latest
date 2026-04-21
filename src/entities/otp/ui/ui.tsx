import { Stack } from '@mantine/core'
import { useManageOtpForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormPinInput } from '@shared/ui/form/FormPinInput'

const Ui = () => {
  const { handleSubmit, onSubmit, control, ResendOtp, t } = useManageOtpForm()

  return (
    <FormWrapper
      handleSubmit={handleSubmit(onSubmit)}
      allowButton
      buttonTitle={t('auth.verify')}
      buttonFullWidth
    >
      <Stack gap="md">
        <FormPinInput
          control={control}
          name="otp"
          label={t('auth.verificationCode')}
          length={4}
          type="number"
          oneTimeCode
          isButton
          buttonTitle={t('auth.resend')}
          handleClick={ResendOtp}
          resendTimer={6}
        />
      </Stack>
    </FormWrapper>
  )
}

export { Ui }
