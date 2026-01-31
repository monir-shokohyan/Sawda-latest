import { CreateModel } from './createModel'
import { FilterModal } from './filterModal'
import { MessageHistoryModel } from './messageHistoryModal'
import { MessageListModel } from './messageListModal'
import { ProfileModel } from './profileModel'
import { NotificationStatusModel } from './notification-status'

function Ui() {
  return (
    <>
      <ProfileModel />
      <CreateModel />
      <FilterModal />
      <MessageListModel />
      <MessageHistoryModel />
      <NotificationStatusModel />
    </>
  )
}

export { Ui }
