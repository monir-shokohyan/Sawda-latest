import { Tabs } from '@mantine/core'
import { NotificationTabProps } from '../types'
import { HovTabs } from '../styles'

const NotificationTab = ({
  filter,
  handleChange,
  notification,
  followingCount,
}: NotificationTabProps) => {
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="All">All ({notification?.length})</Tabs.Tab>
        <Tabs.Tab value="Following">Following ({followingCount})</Tabs.Tab>
        <Tabs.Tab value="Support">
          Support (
          {notification?.length ? notification.length - followingCount : 0})
        </Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { NotificationTab }
