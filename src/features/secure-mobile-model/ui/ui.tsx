import { MessageHistoryModel } from './messageHistoryModal'
import { MessageListModel } from './messageListModal'
import { NotificationStatusModel } from './notification-status'
import { FollowingModel } from './followingModal'

function Ui() {
  return (
    <>
          <MessageListModel />
          <MessageHistoryModel />
          <NotificationStatusModel />
          <FollowingModel />
    </>
  )
}

export { Ui }
