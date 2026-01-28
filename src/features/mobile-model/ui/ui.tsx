import { CreateModel } from './createModel'
import { FilterModal } from './filterModal'
import { MessageHistoryModel } from './messageHistoryModal'
import { MessageListModel } from './messageListModal'
import { ProfileModel } from './profileModel'

function Ui() {
  return (
    <>
      <ProfileModel />
      <CreateModel />
      <FilterModal />
      <MessageListModel />
      <MessageHistoryModel />
    </>
  )
}

export { Ui }
