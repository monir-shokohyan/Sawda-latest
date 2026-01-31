import { Modal } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { Logo } from '@shared/ui/logo'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { Message } from '@features/message-details/types'
import { NotificationStatus } from '@features/notification-status'

const NotificationStatusModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  const handleNotificationSelect = (message: Message) => {
    navigate(
      `${Paths.MobileModel}message-history?id=${message.id}&username=${message.username}`,
    )
  }

  return (
    <Modal
      opened={pathname.endsWith('notification')}
      onClose={() => navigate(-1 || '/')}
      fullScreen
      title={<Logo />}
      transitionProps={{ transition: 'fade', duration: 200 }}
      m={0}
    >
      <NotificationStatus onNotificationSelect={handleNotificationSelect} />
    </Modal>
  )
}

export { NotificationStatusModel }
