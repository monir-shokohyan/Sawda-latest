import {
  MdOutlineLogout,
  MdOutlinePersonOutline,
  MdOutlineSettings,
} from 'react-icons/md'
import { Profiletype } from './types'

export const ProfileConstant: Profiletype[] = [
  {
    label: 'Profile',
    icon: <MdOutlinePersonOutline size={20} />,
  },
  {
    label: 'Settings',
    icon: <MdOutlineSettings size={20} />,
  },
  {
    label: 'Logout',
    icon: <MdOutlineLogout size={20} />,
  },
]
