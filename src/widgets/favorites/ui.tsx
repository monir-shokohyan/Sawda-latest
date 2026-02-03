import { Favorites } from '@features/favorites'
import { SettingLayout } from '@features/setting/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout
        title="filtered-products"
        isSetting={false}
      >
        <Favorites />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
