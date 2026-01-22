import { Paths } from '@shared/api/paths/paths'
import { FaClock } from 'react-icons/fa'
import { TbClockOff } from 'react-icons/tb'

const NewestToOldestObj = [
  {
    label: 'Newest',
    icon: FaClock,
    value: 'newest',
  },
  {
    label: 'Oldest',
    icon: TbClockOff,
    value: 'oldest',
  },
]

  const MenuItems = [
    { label: 'Edit profile', path: Paths.EditProfile },
    { label: 'Change password', path: '/settings/change-password' },
    { label: 'Notification', path: '/settings/notification' },
    { label: 'Data and privacy', path: '/settings/data-privacy' },
    { label: 'Theme', path: '/settings/theme' },
  ]

export { NewestToOldestObj, MenuItems }
