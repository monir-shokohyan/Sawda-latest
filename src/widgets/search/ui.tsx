import { Search } from '@features/search'
import { SettingLayout } from '@features/setting-layout'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout
        title="search"
        isSetting={false}
      >
        <Search />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
