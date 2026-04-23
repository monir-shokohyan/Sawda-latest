import { MessageHistoryModel } from './messageHistoryModal'
import { MessageListModel } from './messageListModal'
import { NotificationStatusModel } from './notification-status'
import { FollowingModel } from './followingModal'
import { ProfileModel } from '@features/mobile-model/ui/profileModel'
import { CreateModel } from './createModel'

function Ui() {
  return (
    <>
      <CreateModel />
      <ProfileModel />
      <MessageListModel />
      <MessageHistoryModel />
      <NotificationStatusModel />
      <FollowingModel />
    </>
  )
}

export { Ui }
