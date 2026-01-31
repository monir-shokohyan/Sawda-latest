import { Tabs } from '@mantine/core'
import { FollowingTabProps } from '../types'
import { HovTabs } from '../styles'

const FollowingTab = ({
  filter,
  handleChange,
  notification,
  followingCount,
}: FollowingTabProps) => {
  const followersCount = notification!.length - followingCount
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="Following">Following ({followingCount})</Tabs.Tab>
        <Tabs.Tab value="Follower">Follower ({followersCount})</Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { FollowingTab }
