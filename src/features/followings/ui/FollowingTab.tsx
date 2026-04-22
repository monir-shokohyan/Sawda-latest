import { Tabs } from '@mantine/core'
import { FollowingTabProps } from '../types'
import { HovTabs } from '../styles'
import { useTranslation } from 'react-i18next'

const FollowingTab = ({
  filter,
  handleChange,
  notification,
  followingCount,
}: FollowingTabProps) => {
  const followersCount = notification!.length - followingCount
  const { t } = useTranslation()
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="Following">
          {t('following.following')} ({followingCount})
        </Tabs.Tab>
        <Tabs.Tab value="Follower">
          {t('following.follower')} ({followersCount})
        </Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { FollowingTab }
