import { Stack, Group, Card, Paper } from '@mantine/core'
import { NotificationFilter, NotificationSectionProps } from '../types'
import { NotificationTab } from './NotificationTab'
import { InfiniteScrollWrapper } from '@shared/ui/infinite-scroll'
import { useManageNotificationSection } from '../modal/useManageNotificationSection'
import { NotificationCard } from './notificationCard'
import { AnimatedStack } from '@features/message-details/styles'

const Ui = ({
  onNotificationSelect,
  activeMessageId,
}: NotificationSectionProps) => {
  const {
    followingCount,
    handleNotificationClick,
    hasMore,
    fetchMoreData,
    filterednotifications,
    animationDirection,
    notificationContainerRef,
    filter,
    setFilter,
    notifications,
  } = useManageNotificationSection({ onNotificationSelect })

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

          <NotificationTab
            handleChange={(value) => setFilter(value as NotificationFilter)}
            filter={filter}
            notification={notifications}
            followingCount={followingCount}
          />
        </Paper>
        <div
          ref={notificationContainerRef}
          id="notificationScrollContainer"
          style={{
            flex: 1,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollBehavior: 'smooth',
            maxHeight: '85dvh',
          }}
        >
          <InfiniteScrollWrapper
            dataLength={filterednotifications.length}
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
              {filterednotifications.map((Notification) => (
                <NotificationCard
                  key={Notification.id}
                  message={Notification}
                  isActive={Notification.id === activeMessageId}
                  onClick={handleNotificationClick}
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
