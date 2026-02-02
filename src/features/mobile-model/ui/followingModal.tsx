import { Paths } from '@shared/api/paths/paths'
import { Logo } from '@shared/ui/logo'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { Message } from '@features/message-details/types'
import { Following } from '@features/followings'
import { HModal } from '@shared/styles'

const FollowingModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  const handleFollowingSelect = (message: Message) => {
    navigate(
      `${Paths.MobileModel}message-history?id=${message.id}&username=${message.username}`,
    )
  }

  return (
    <HModal
      opened={pathname.endsWith('following')}
      onClose={() => navigate(-1 || '/')}
      fullScreen
      title={<Logo />}
      pos="relative"
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <Following onFollowingSelect={handleFollowingSelect} />
    </HModal>
  )
}

export { FollowingModel }
