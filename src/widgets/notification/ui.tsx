import { Notification } from '@features/notification'
import { SettingLayout } from '@features/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="privacy">
        <Notification />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
