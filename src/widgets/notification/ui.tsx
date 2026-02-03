import { Notification } from '@features/setting/setting-notification'
import { SettingLayout } from '@features/setting/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="notification">
        <Notification />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
