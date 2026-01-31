import { Tabs } from '@mantine/core'
import { FollowingTabProps } from '../types'
import { HovTabs } from '../styles'

const FollowingTab = ({
  filter,
  handleChange,
  notification,
  followingCount,
}: FollowingTabProps) => {
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="Following">
          Following ({notification?.length})
        </Tabs.Tab>
        <Tabs.Tab value="Follower">Follower ({followingCount})</Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { FollowingTab }
