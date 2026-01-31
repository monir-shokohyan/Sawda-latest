import { CreateModel } from './createModel'
import { FilterModal } from './filterModal'
import { MessageHistoryModel } from './messageHistoryModal'
import { MessageListModel } from './messageListModal'
import { ProfileModel } from './profileModel'
import { NotificationStatusModel } from './notification-status'
import { FollowingModel } from './followingModal'

function Ui() {
  return (
    <>
      <ProfileModel />
      <CreateModel />
      <FilterModal />
      <MessageListModel />
      <MessageHistoryModel />
      <NotificationStatusModel />
      <FollowingModel />
    </>
  )
}

export { Ui }
