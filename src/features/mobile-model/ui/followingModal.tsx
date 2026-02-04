import { Paths } from '@shared/api/paths/paths'
import { Logo } from '@shared/ui/logo'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { Message } from '@features/message-details/types'
import { Following } from '@features/followings'
import { HModal } from '@shared/styles'
import { BaseModal } from '@shared/ui/modal'

const FollowingModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  const handleFollowingSelect = (message: Message) => {
    navigate(
      `${Paths.MobileModel}message-history?id=${message.id}&username=${message.username}`,
    )
  }

  return (
    <BaseModal
      opened={pathname.endsWith('following')}
      onClose={() => navigate(-1 || '/')}
      fullScreen
      pos="relative"
    >
      <Following onFollowingSelect={handleFollowingSelect} />
    </BaseModal>
  )
}

export { FollowingModel }
