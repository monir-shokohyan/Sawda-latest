import { Privacy } from '@features/privacy'
import { SettingLayout } from '@features/setting-layout'
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
