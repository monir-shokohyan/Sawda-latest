import { SettingLayout } from '@features/setting-layout'
import { Theme } from '@features/theme'
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
