import { Tabs } from '@mantine/core'
import { NotificationTabProps } from '../types'
import { HovTabs } from '../styles'
import { useTranslation } from 'react-i18next'

const NotificationTab = ({
  filter,
  handleChange,
  notification,
  followingCount,
}: NotificationTabProps) => {
  const { t } = useTranslation()
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="All"> {t('notification.all')}({notification?.length})</Tabs.Tab>
        <Tabs.Tab value="Following">{t('notification.following')} ({followingCount})</Tabs.Tab>
        <Tabs.Tab value="Support">
          {t('notification.support')} (
          {notification?.length ? notification.length - followingCount : 0})
        </Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { NotificationTab }
