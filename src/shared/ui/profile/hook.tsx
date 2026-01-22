import { useLocation, useNavigate } from 'react-router-dom'
import { Profiletype } from './types'
import { TbNotification, TbUserPlus } from 'react-icons/tb'
import { Paths } from '@shared/api/paths/paths'
import {
  MdNotificationsNone,
  MdOutlineLogout,
  MdOutlinePersonOutline,
  MdOutlineSettings,
} from 'react-icons/md'

const useProfileDropDown = ({ id }: { id: string }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const ProfileConstant: Profiletype[] = [
    {
      label: 'Profile',
      icon: <MdOutlinePersonOutline size={24} />,
      path: `${Paths.ProfileDetails}${id}`,
    },
    {
      label: 'Following',
      icon: <TbUserPlus size={24} />,
      path: `${Paths.Following}${id}`,
    },
    {
      label: 'Notification',
      icon: <MdNotificationsNone size={24} />,
      path: `${Paths.Following}${id}`,
    },
    {
      label: 'Settings',
      icon: <MdOutlineSettings size={24} />,
      path: `${Paths.EditProfile}${id}`,
    },
    {
      label: 'Logout',
      icon: <MdOutlineLogout size={24} />,
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
