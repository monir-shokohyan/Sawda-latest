import { Stack, Group, Text, Badge, Card } from '@mantine/core'
import { MessageCard } from '../messageCard'
import { LeftSectionProps, MessageFilter } from '../../types'
import { LeftTab } from './leftTab'
import { LeftMenu } from './leftMenu'
import { LeftButtonGroup } from './leftButtonGroup'
import { AnimatedStack, StickyPaper } from '../../styles'
import { InfiniteScrollWrapper } from '@shared/ui/infinite-scroll'
import { useManageLeftSection } from '@features/message-details/modal/useManageLeftSection'

const LeftSection = ({
  onMessageSelect,
  activeMessageId,
}: LeftSectionProps) => {
  const {
    isMobile,
    unreadCount,
    selectionMode,
    handleDeleteSelected,
    handleDeselectAll,
    handleMarkAsRead,
    handleMarkAsUnread,
    handleMessageClick,
    handleToggleSelect,
    hasMore,
    fetchMoreData,
    filteredMessages,
    selectedCount,
    setSelectionMode,
    animationDirection,
    scrollContainerRef,
    filter,
    setFilter,
    messages,
    bulkEmailActions,
    swipeHandlers,
  } = useManageLeftSection({ onMessageSelect })
  return (
    <Stack
      w={isMobile ? '100%' : '25%'}
      style={{
        position: isMobile ? 'relative' : 'sticky',
        top: isMobile ? 0 : 30,
        height: isMobile ? '90vh' : 'calc(100vh - 60px)',
      }}
      {...swipeHandlers}
      gap={0}
    >
      <Card
        withBorder
        radius="sm"
        p={0}
        bg="background.7"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <StickyPaper type="header">
          <Group
            justify="space-between"
            mb="md"
          >
            <Group gap="xs">
              <Text
                fw={600}
                size="lg"
              >
                Messages
              </Text>
              {unreadCount > 0 && (
                <Badge
                  color="primary"
                  size="sm"
                >
                  {unreadCount}
                </Badge>
              )}
            </Group>

            <LeftMenu constant={bulkEmailActions} />
          </Group>

          {selectionMode && selectedCount > 0 && (
            <LeftButtonGroup
              handleMarkAsRead={handleMarkAsRead}
              handleMarkAsUnread={handleMarkAsUnread}
              handleDeleteSelected={handleDeleteSelected}
              handleDeselectAll={handleDeselectAll}
            />
          )}

          <LeftTab
            handleChange={(value) => setFilter(value as MessageFilter)}
            filter={filter}
            messages={messages}
            unreadCount={unreadCount}
          />
        </StickyPaper>
        <div
          ref={scrollContainerRef}
          id="messageScrollContainer"
          style={{
            flex: 1,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollBehavior: 'smooth',
          }}
        >
          <InfiniteScrollWrapper
            dataLength={filteredMessages.length}
            next={fetchMoreData}
            hasMore={hasMore}
            scrollableTarget="messageScrollContainer"
            size="sm"
            bg="background.8"
            endMessage=""
          >
            <AnimatedStack
              gap={0}
              p="xs"
              bg="background.8"
              direction={animationDirection}
            >
              {filteredMessages.map((message) => (
                <MessageCard
                  key={message.id}
                  message={message}
                  isActive={message.id === activeMessageId}
                  onSelect={handleToggleSelect}
                  onClick={handleMessageClick}
                  selectionMode={selectionMode}
                  setSelectionMode={setSelectionMode}
                />
              ))}
            </AnimatedStack>
          </InfiniteScrollWrapper>
        </div>
      </Card>
    </Stack>
  )
}

export { LeftSection }
