import { SettingNotificationForm } from '@entities/setting-notification-form'
import { SettingLayout } from '@features/setting/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="notification">
        <SettingNotificationForm />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
