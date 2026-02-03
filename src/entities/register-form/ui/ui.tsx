import { Group, Progress, Stack } from '@mantine/core'
import { useManageRegisterForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormInput } from '@shared/ui/form'
import { TbLock, TbMail } from 'react-icons/tb'
import { FormPasswordInput } from '@shared/ui/form/FormPasswordInput'


const Ui = () => {
  const { handleSubmit, onSubmit, control } = useManageRegisterForm()
        
  return (
    <FormWrapper
      handleSubmit={handleSubmit(onSubmit)}
      buttonTitle="Sign Up"
      allowButton
      buttonFullWidth
    >
      <Stack gap="md">
        <FormInput
          name="email"
          control={control}
          label="Email"
          placeholder="your@email.com"
          leftSection={<TbMail size={16} />}
          mb={0}
          />
        <FormPasswordInput
          name="password"
          control={control}
          label="Password"
          placeholder="Your password"
          leftSection={<TbLock size={16} />}
          showStrength
          mb={0}
          />
        
        <FormPasswordInput
          name="confirm_password"
          control={control}
          label="Password"
          placeholder="Repeat password"
          leftSection={<TbLock size={16} />}
          mb={0}
        />
      </Stack>
    </FormWrapper>
  )
}

export { Ui }
