import { EditProfile } from '@features/setting/setting-edit-profile'
import { SettingLayout } from '@features/setting/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="edit-profile">
        <EditProfile />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
