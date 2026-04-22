import { Paths } from '@shared/api/paths/paths'

const MenuItems = [
  { label: 'profile.editProfile', path: Paths.EditProfile },
  { label: 'profile.changePassword', path: Paths.ChangePassword },
  { label: 'settings.notification', path: Paths.Notification },
  { label: 'settings.dataAndPrivacy', path: Paths.Privacy },
  { label: 'settings.theme', path: Paths.Theme },
] as const

export { MenuItems }
