import { Tabs, TabsProps } from '@mantine/core'
import { Message, MessageFilter } from '../../types'
import styled from 'styled-components'

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
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="all">All ({messages?.length})</Tabs.Tab>
        <Tabs.Tab value="unread">Unread ({unreadCount})</Tabs.Tab>
        <Tabs.Tab value="read">
          Read ({messages?.length ? messages.length - unreadCount : 0})
        </Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { LeftTab }
