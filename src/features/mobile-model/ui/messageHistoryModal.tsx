import { Modal } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { Logo } from '@shared/ui/logo'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { RightSection } from '@features/message-details/ui/right-section'

const MessageHistoryModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  const [searchParams] = useSearchParams()
  const activeMessageId = Number(searchParams.get('id')) || 0
  const activeMessageUsername = searchParams.get('username') || ''

  return (
    <Modal
      opened={pathname.endsWith('message-history')}
      onClose={() => navigate(Paths.Main)}
      fullScreen
      title={<Logo />}
      pos="relative"
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <RightSection
        selectedMessage={{
          id: activeMessageId,
          username: activeMessageUsername,
        }}
        onBack={() => navigate(`${Paths.MessageList}?id=${activeMessageId}`)}
      />
    </Modal>
  )
}

export { MessageHistoryModel }
