import { Paths } from '@shared/api/paths/paths'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { Message } from '@features/message-details/types'
import { NotificationStatus } from '@features/notification-status'
import { BaseModal } from '@shared/ui/modal'

const NotificationStatusModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  const handleNotificationSelect = (message: Message) => {
    navigate(
      `${Paths.MobileModel}message-history?id=${message.id}&username=${message.username}`,
    )
  }

  return (
    <BaseModal
      opened={pathname.endsWith('notification')}
      onClose={() => navigate(-1 || '/')}
      fullScreen
    >
      <NotificationStatus onNotificationSelect={handleNotificationSelect} />
    </BaseModal>
  )
}

export { NotificationStatusModel }
