import { Stack } from '@mantine/core'
import { useManageForgotForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormInput } from '@shared/ui/form'
import { TbMail } from 'react-icons/tb'
import { ForgetTab } from './Tab'
import { TabType } from '../types'
import { FormNumberInput } from '@shared/ui/form/FormNumberInput'
import { LuPhone } from 'react-icons/lu'

const Ui = () => {
  const { handleSubmit, onSubmit, control, handler, filter, setFilter, t } =
    useManageForgotForm()

  return (
    <FormWrapper
      handleSubmit={handleSubmit(onSubmit)}
      buttonTitle={t('auth.sendResetLink')}
      allowButton
      buttonFullWidth
    >
      <Stack
        gap="md"
        {...handler}
      >
        <ForgetTab
          handleChange={(value) => setFilter(value as TabType)}
          filter={filter}
        />

        {filter === 'email' ? (
          <FormInput
            name="email"
            control={control}
            label={t('auth.email')}
            placeholder="your@email.com"
            leftSection={<TbMail size={16} />}
          />
        ) : (
          <FormNumberInput
            name="phone"
            control={control}
            label={t('auth.phoneNumber')}
            placeholder="+93 7XX XXX-XXX"
            leftSection={<LuPhone size={16} />}
            type="tel"
            prefix="+93"
            maxLength={12}
            thousandSeparator={false}
          />
        )}
      </Stack>
    </FormWrapper>
  )
}

export { Ui }
