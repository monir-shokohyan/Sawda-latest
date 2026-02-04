import { CreateModel } from './createModel'
import { FilterModal } from './filterModal'
import { MessageHistoryModel } from './messageHistoryModal'
import { MessageListModel } from './messageListModal'
import { ProfileModel } from './profileModel'
import { NotificationStatusModel } from './notification-status'
import { FollowingModel } from './followingModal'
import { Auth } from '@shared/authentication/auth'
import { Navigate } from 'react-router-dom'
import { Paths } from '@shared/api/paths/paths'

function Ui() {
  const { isAuth } = Auth()
  return (
    <>
      <ProfileModel />
      <FilterModal />
      <CreateModel />
      {isAuth ? <Navigate to={Paths.Register}/>  :(
        <>
      <MessageListModel />
      <MessageHistoryModel />
      <NotificationStatusModel />
      <FollowingModel />
        </>
      )}
    </>
  )
}

export { Ui }
