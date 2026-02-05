import { Stack } from '@mantine/core'
import { useManageRegisterForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormInput } from '@shared/ui/form'
import { TbLock, TbMail } from 'react-icons/tb'
import { FormPasswordInput } from '@shared/ui/form/FormPasswordInput'
import { FiUser } from 'react-icons/fi'
import { RegisterTab } from './Tab'
import { TabType } from '../types'
import { FormNumberInput } from '@shared/ui/form/FormNumberInput'
import { LuPhone } from 'react-icons/lu'

const Ui = () => {
  const { handleSubmit, onSubmit, control, handler, filter, setFilter } = useManageRegisterForm()
  

  return (
    <FormWrapper
      handleSubmit={handleSubmit(onSubmit)}
      buttonTitle="Sign Up"
      allowButton
      buttonFullWidth
    >
      <Stack
        gap="md"
        {...handler}
      >
        <RegisterTab
          handleChange={(value) => setFilter(value as TabType)}
          filter={filter}
        />
        <FormInput
          name="username"
          control={control}
          label="User name"
          placeholder="Your username"
          leftSection={<FiUser size={16} />}
          mb={0}
        />
        {filter === 'email' ? (
          <FormInput
            name="email"
            control={control}
            label="Email"
            placeholder="your@email.com"
            leftSection={<TbMail size={16} />}
            mb={0}
          />
        ) : (
          <FormNumberInput
            name="phoneNumber"
            control={control}
            label="Mobile number"
            placeholder="+93 7XX XXX-XXX"
            leftSection={<LuPhone size={16} />}
            mb={0}
            type="tel"
            prefix='+93'
            maxLength={12}
            thousandSeparator={false}
            
          />
        )}
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
          mb={30}
        />
      </Stack>
    </FormWrapper>
  )
}

export { Ui }
