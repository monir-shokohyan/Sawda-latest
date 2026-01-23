import { Paths } from '@shared/api/paths/paths'

const MenuItems = [
  { label: 'Edit profile', path: Paths.EditProfile },
  { label: 'Change password', path: Paths.ChangePassword },
  { label: 'Notification', path: '/settings/notification' },
  { label: 'Data and privacy', path: '/settings/data-privacy' },
  { label: 'Theme', path: '/settings/theme' },
]

export { MenuItems }
