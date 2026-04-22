import { Search } from '@features/search'
import { SettingLayout } from '@features/setting/setting-layout'
import { Flex } from '@mantine/core'
import { useTranslation } from 'react-i18next'

const Ui = () => {
  const { t } = useTranslation()
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout
        title={t('common.search')}
        isSetting={false}
      >
        <Search />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
