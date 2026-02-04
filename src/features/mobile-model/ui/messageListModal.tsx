import { Paths } from '@shared/api/paths/paths'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { LeftSection } from '@features/message-details/ui/left-section'
import { Message } from '@features/message-details/types'
import { BaseModal } from '@shared/ui/modal'

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
    <BaseModal
      opened={pathname.endsWith('message-list')}
      onClose={() => navigate(Paths.Main)}
      fullScreen
      pos="relative"
    >
      <LeftSection
        onMessageSelect={handleMessageSelect}
        activeMessageId={activeMessageId}
      />
    </BaseModal>
  )
}

export { MessageListModel }
