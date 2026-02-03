import { EditProfileForm } from '@entities/edit-profile-form'
import { SettingLayout } from '@features/setting/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="edit-profile">
        <EditProfileForm />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
