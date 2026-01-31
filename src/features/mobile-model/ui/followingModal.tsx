import { Modal } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { Logo } from '@shared/ui/logo'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { Message } from '@features/message-details/types'
import { Following } from '@features/followings'

const FollowingModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  const handleFollowingSelect = (message: Message) => {
    navigate(
      `${Paths.MobileModel}message-history?id=${message.id}&username=${message.username}`,
    )
  }

  return (
    <Modal
      opened={pathname.endsWith('following')}
      onClose={() => navigate(-1 || '/')}
      fullScreen
      title={<Logo />}
      pos="relative"
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <Following onFollowingSelect={handleFollowingSelect}/>
    </Modal>
  )
}

export { FollowingModel }
