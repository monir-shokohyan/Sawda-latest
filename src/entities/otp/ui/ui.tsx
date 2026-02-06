import { Stack } from '@mantine/core'
import { useManageOtpForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormPinInput } from '@shared/ui/form/FormPinInput'

const Ui = () => {
  const { handleSubmit, onSubmit, control, ResendOtp } =
    useManageOtpForm()

  return (
    <FormWrapper
      handleSubmit={handleSubmit(onSubmit)}   
      allowButton
      buttonTitle='Verify'
      buttonFullWidth
      >
      <Stack
        gap="md"
      >
                <FormPinInput
              control={control}
              name="otp"
              label="Verification Code"
              length={4}
              type="number"
              oneTimeCode
              isButton
              buttonTitle="Resend"
              handleClick={ResendOtp}
              resendTimer={6}
            />
      </Stack>
    </FormWrapper>
  )
}

export { Ui }
