import { ChangePassword } from '@features/change-password'
import { SettingLayout } from '@features/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="change-password">
        <ChangePassword />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
