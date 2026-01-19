import {
  MdOutlineLogout,
  MdOutlinePersonOutline,
  MdOutlineSettings,
} from 'react-icons/md'
import { Profiletype } from './types'
import { TbUserPlus } from 'react-icons/tb'

export const ProfileConstant: Profiletype[] = [
  {
    label: 'Following',
    icon: <TbUserPlus size={20} />,
  },
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
