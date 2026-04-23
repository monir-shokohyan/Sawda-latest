import { Tabs, TabsProps } from '@mantine/core'
import { Message, MessageFilter } from '../../types'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

interface LeftTabProps {
  filter: MessageFilter
  handleChange: (value: string | null) => void
  messages?: Message[]
  unreadCount: number
}

const HovTabs = styled(Tabs)<TabsProps>`
  .mantine-Tabs-tab:hover {
    background-color: transparent;
  }

  .mantine-Tabs-tab {
    transition: all 0.2s ease-in-out;
  }

  .mantine-Tabs-list {
    position: relative;
  }
`

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
        <Tabs.Tab value="all">{t('messages.all')} ({messages?.length})</Tabs.Tab>
        <Tabs.Tab value="unread">{t('messages.unread')} ({unreadCount})</Tabs.Tab>
        <Tabs.Tab value="read">
          {t('messages.read')} ({messages?.length ? messages.length - unreadCount : 0})
        </Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { LeftTab }
