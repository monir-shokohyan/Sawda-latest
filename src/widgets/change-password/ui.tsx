import { ChangePasswordForm } from '@entities/change-password-form'
import { SettingLayout } from '@features/setting/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="change-password">
        <ChangePasswordForm />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
