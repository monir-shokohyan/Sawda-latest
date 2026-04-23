import { Anchor, Group, Stack } from '@mantine/core'
import { useManageLoginForm } from '../model'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { FormInput } from '@shared/ui/form'
import { TbLock, TbMail } from 'react-icons/tb'
import { FormPasswordInput } from '@shared/ui/form/FormPasswordInput'
import { FormCheckbox } from '@shared/ui/form/FormCheckBox'
import { Paths } from '@shared/api/paths/paths'
import { FormNumberInput } from '@shared/ui/form/FormNumberInput'
import { LuPhone } from 'react-icons/lu'
import { LoginTab } from './Tab'
import { TabType } from '../types'

const Ui = () => {
  const { handler, handleSubmit, onSubmit, control, filter, setFilter, t } =
    useManageLoginForm()
  return (
    <FormWrapper
      handleSubmit={handleSubmit(onSubmit)}
      buttonTitle={t('auth.signIn')}
      allowButton
      buttonFullWidth
    >
      <LoginTab
        handleChange={(value) => setFilter(value as TabType)}
        filter={filter}
      />
      <Stack
        gap="md"
        {...handler}
      >
        {filter === 'email' ? (
          <FormInput
            name="email"
            control={control}
            label={t('auth.email')}
            placeholder="your@email.com"
            leftSection={<TbMail size={16} />}
            mb={0}
          />
        ) : (
          <FormNumberInput
            name="phoneNumber"
            control={control}
            label={t('auth.phoneNumber')}
            placeholder="+93 7XX XXX-XXX"
            leftSection={<LuPhone size={16} />}
            mb={0}
            type="tel"
            maxLength={12}
            thousandSeparator={false}
          />
        )}

        <FormPasswordInput
          name="password"
          control={control}
          label={t('auth.password')}
          placeholder={t('auth.password')}
          leftSection={<TbLock size={16} />}
          mb={0}
        />

        <Group
          justify="space-between"
          mt="xs"
        >
          <FormCheckbox
            name="remember"
            control={control}
            label={t('auth.rememberMe')}
          />

          <Anchor
            size="sm"
            href={Paths.Forget}
          >
            {t('auth.forgotPassword')}
          </Anchor>
        </Group>
      </Stack>
    </FormWrapper>
  )
}

export { Ui }
