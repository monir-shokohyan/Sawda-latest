import { useLocation } from 'react-router-dom'
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

const useProfileDropDown = ({ id = 'monir' }: { id?: string }) => {
  const { pathname } = useLocation()
  const { isMobile } = Responsive()

  const ProfileConstant: Profiletype[] = [
    {
      label: 'Profile',
      icon: <MdOutlinePersonOutline size={isMobile ? 24 : 20} />,
      path: `${Paths.ProfileDetails}${id}`,
    },
    {
      label: 'Following',
      icon: <TbUserPlus size={isMobile ? 24 : 20} />,
      path: `${Paths.Following}${id}`,
    },
    {
      label: 'Notification',
      icon: <MdNotificationsNone size={isMobile ? 24 : 20} />,
      path: `${Paths.Following}${id}`,
    },
    {
      label: 'Settings',
      icon: <MdOutlineSettings size={isMobile ? 24 : 20} />,
      path: `${Paths.EditProfile}${id}`,
    },
    {
      label: 'Logout',
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
