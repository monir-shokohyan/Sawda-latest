import { Tabs } from '@mantine/core'
import { LeftTabProps } from '../../types'
import { useTranslation } from 'react-i18next'
import { HovTabs } from '@features/message-details/styles';

const LeftTab = ({
  filter,
  handleChange,
  messages,
  unreadCount,
}: LeftTabProps) => {
  const { t } = useTranslation()
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="all">
          {t('messages.all')} ({messages?.length})
        </Tabs.Tab>
        <Tabs.Tab value="unread">
          {t('messages.unread')} ({unreadCount})
        </Tabs.Tab>
        <Tabs.Tab value="read">
          {t('messages.read')} (
          {messages?.length ? messages.length - unreadCount : 0})
        </Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { LeftTab }
