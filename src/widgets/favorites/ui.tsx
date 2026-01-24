import { Favorites } from '@features/favorites'
import { SettingLayout } from '@features/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout
        title="favorites"
        isSetting={false}
      >
        <Favorites />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
