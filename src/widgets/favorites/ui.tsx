import { Favorites } from '@features/favorites'
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
        title={t('favorites.favorites')}
        isSetting={false}
      >
        <Favorites />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
