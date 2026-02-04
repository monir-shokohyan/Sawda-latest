import { Paths } from '@shared/api/paths/paths'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { RightSection } from '@features/message-details/ui/right-section'
import { BaseModal } from '@shared/ui/modal'

const MessageHistoryModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  const [searchParams] = useSearchParams()
  const activeMessageId = Number(searchParams.get('id')) || 0
  const activeMessageUsername = searchParams.get('username') || ''

  return (
    <BaseModal
      opened={pathname.endsWith('message-history')}
      onClose={() => navigate(Paths.Main)}
      fullScreen
      pos="relative"
    >
      <RightSection
        selectedMessage={{
          id: activeMessageId,
          username: activeMessageUsername,
        }}
        onBack={() => navigate(`${Paths.MessageList}?id=${activeMessageId}`)}
      />
    </BaseModal>
  )
}

export { MessageHistoryModel }
