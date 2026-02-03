import { SettingLayout } from '@features/setting/setting-layout'
import { Theme } from '@features/setting/setting-theme'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title="theme">
        <Theme />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
