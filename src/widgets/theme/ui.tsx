import { SettingLayout } from '@features/setting/setting-layout'
import { Theme } from '@features/setting/setting-theme'
import { Flex } from '@mantine/core'
import { useTranslation } from 'react-i18next'

const Ui = () => {
    const { t } = useTranslation()
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <SettingLayout title={t('settings.theme')}>
        <Theme />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
