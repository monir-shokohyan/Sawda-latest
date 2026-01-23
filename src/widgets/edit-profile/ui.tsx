import { EditProfile } from '@features/edit-profile'
import { SettingLayout } from '@features/setting-layout'
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
