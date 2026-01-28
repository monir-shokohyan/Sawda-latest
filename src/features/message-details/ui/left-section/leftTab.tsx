import { Tabs, TabsProps } from '@mantine/core'
import { MessageFilter } from '../../types'
import styled from 'styled-components'

interface LeftTabProps {
  filter: MessageFilter
  handleChange: (value: string | null) => void
  messages: { isRead: boolean }[]
  unreadCount: number
}
const HovTabs = styled(Tabs)<TabsProps>`
  .mantine-Tabs-tab:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }
`

const LeftTab = ({
  filter,
  handleChange,
  messages,
  unreadCount,
}: LeftTabProps) => {
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="all">All ({messages.length})</Tabs.Tab>
        <Tabs.Tab value="unread">Unread ({unreadCount})</Tabs.Tab>
        <Tabs.Tab value="read">Read ({messages.length - unreadCount})</Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { LeftTab }
