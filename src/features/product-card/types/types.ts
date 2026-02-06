import { FlexProps } from '@mantine/core'
import { ProfileInfoProps } from '@shared/types/profile'

export interface UseModalProps {
  profile: ProfileInfoProps
  handleToggleLike: (id: number) => void
}
export interface ProfileProps {
  profile: ProfileInfoProps
  showDetails?: boolean
  showMessage?: boolean
  showActiveNow?: boolean
  showTime?: boolean
  size?: 'xl' | 'md' | 'sm' | 'lg'
  allowPadding?: boolean
  mobileSize?: string
  usernameSize?: 'xl' | 'md' | 'sm' | 'lg'
  usernameSizeMobile?: string
  timeSize?: string
  showEmail?: boolean
  direction?: FlexProps['direction']
  hoverUsername?: boolean
  isStaticColor?: boolean
  isMessage?: boolean
  isFollowing?: boolean
  isCard?: boolean
}
