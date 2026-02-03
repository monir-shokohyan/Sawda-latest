import { Privacy } from '@features/setting/setting-privacy'
import { SettingLayout } from '@features/setting/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="privacy">
        <Privacy />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
