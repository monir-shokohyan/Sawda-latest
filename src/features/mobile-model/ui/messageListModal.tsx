import { Modal } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { Logo } from '@shared/ui/logo'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SettingDropDownSelector } from '../reducers'
import { useAppSelector } from '@shared/hooks/redux-hooks'
import { LeftSection } from '@features/message-details/ui/left-section'
import { Message } from '@features/message-details/types'

const MessageListModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  const handleMessageSelect = (message: Message) => {
    navigate(
      `${Paths.MobileModel}message-history?id=${message.id}&username=${message.username}`,
    )
  }
  const [searchParams] = useSearchParams()
  const activeMessageId = Number(searchParams.get('id')) || null

  return (
    <Modal
      opened={pathname.endsWith('message-list')}
      onClose={() => navigate(Paths.Main)}
      fullScreen
      title={<Logo />}
      pos="relative"
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <LeftSection
        onMessageSelect={handleMessageSelect}
        activeMessageId={activeMessageId}
      />
    </Modal>
  )
}

export { MessageListModel }
