import { Privacy } from '@features/setting/setting-privacy'
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
      <SettingLayout title={t('settings.privacy')}>
        <Privacy />
      </SettingLayout>
    </Flex>
  )
}

export { Ui }
