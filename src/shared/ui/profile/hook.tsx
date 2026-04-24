import { useLocation, useNavigate } from 'react-router-dom'
import { Profiletype } from './types'
import { TbUserPlus } from 'react-icons/tb'
import { Paths } from '@shared/api/paths/paths'
import {
  MdNotificationsNone,
  MdOutlineLogout,
  MdOutlinePersonOutline,
  MdOutlineSettings,
} from 'react-icons/md'
import { Responsive } from '@shared/hooks/responsive'
import { useAppDispatch } from '@shared/hooks/redux-hooks'
import { toggleCollapseSettingDropDown } from '@features/mobile-model/reducers/slice'
import { useTranslation } from 'react-i18next'

const useProfileDropDown = ({ id = 'monir' }: { id?: string }) => {
  const { pathname } = useLocation()
  const { isMobile } = Responsive()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const ProfileConstant: Profiletype[] = [
    {
      label: t('profile.profile'),
      id: 'profile',
      icon: <MdOutlinePersonOutline size={isMobile ? 24 : 20} />,
      path: `${Paths.ProfileDetails}${id}`,
    },
    {
      label: t('following.following'),
      id: 'following',
      icon: <TbUserPlus size={isMobile ? 24 : 20} />,
      path: `${Paths.FollowingStatus}?id=${id}`,
    },
    {
      label: t('settings.notification'),
      id: 'notification',
      icon: <MdNotificationsNone size={isMobile ? 24 : 20} />,
      path: `${Paths.NotificationStatus}?id=${id}`,
    },
    {
      label: t('settings.settings'),
      id: 'settings',
      icon: <MdOutlineSettings size={isMobile ? 24 : 20} />,
      handleClick: () => {
        if (isMobile) {
          dispatch(toggleCollapseSettingDropDown())
          return
        }
        navigate(`${Paths.EditProfile}${id}`)
      },
    },
    {
      label: t('profile.logout'),
      id: 'logout',
      icon: <MdOutlineLogout size={isMobile ? 24 : 20} />,
      handleClick: () => {
        // Handle logout
      },
    },
  ]

  return {
    ProfileConstant,
    pathname,
  }
}

export { useProfileDropDown }
