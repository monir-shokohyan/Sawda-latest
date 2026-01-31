import { Stack, Group, Card, Paper } from '@mantine/core'
import { FollowingFilter, FollowingSectionProps } from '../types'
import { FollowingTab } from './FollowingTab'
import { InfiniteScrollWrapper } from '@shared/ui/infinite-scroll'
import { useManageFollowingSection } from '../modal/useManageFollowingSection'
import { NotificationCard } from './FollowingCard'
import { AnimatedStack } from '@features/message-details/styles'

const Ui = ({ onFollowingSelect, activeMessageId }: FollowingSectionProps) => {
  const {
    followingCount,
    handleFollowingClick,
    hasMore,
    fetchMoreData,
    filteredFollowings,
    animationDirection,
    FollowingContainerRef,
    filter,
    setFilter,
    Followings,
  } = useManageFollowingSection({ onFollowingSelect })

  return (
    <Stack
      w="100%"
      gap={0}
      p={0}
    >
      <Card
        radius="sm"
        p={0}
        bg="background.7"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Paper
          bg="background.7"
          p={0}
        >
          <Group justify="space-between"></Group>

          <FollowingTab
            handleChange={(value) => setFilter(value as FollowingFilter)}
            filter={filter}
            notification={Followings}
            followingCount={followingCount}
          />
        </Paper>
        <div
          ref={FollowingContainerRef}
          id="notificationScrollContainer"
          style={{
            flex: 1,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollBehavior: 'smooth',
            maxHeight: '88dvh',
          }}
        >
          <InfiniteScrollWrapper
            dataLength={filteredFollowings.length}
            next={fetchMoreData}
            hasMore={hasMore}
            scrollableTarget="notificationScrollContainer"
            size="sm"
            bg="background.8"
            endMessage=""
          >
            <AnimatedStack
              gap={0}
              p="sm"
              bg="background.8"
              direction={animationDirection}
            >
              {filteredFollowings.map((Following) => (
                <NotificationCard
                  key={Following.id}
                  message={Following}
                  isActive={Following.id === activeMessageId}
                  onClick={handleFollowingClick}
                />
              ))}
            </AnimatedStack>
          </InfiniteScrollWrapper>
        </div>
      </Card>
    </Stack>
  )
}

export { Ui }
