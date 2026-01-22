import { FlexProps } from '@mantine/core'
import { ProductProps } from '@shared/types/profile'

export interface UseModalProps {
  product: ProductProps
  handleToggleLike: (id: number) => void
}
export interface ProfileProps {
  product: ProductProps
  showDetails?: boolean
  showTime?: boolean
  size?: 'xl' | 'md' | 'sm' | 'lg'
  allowPadding?: boolean
  mobileSize?: string
  usernameSize?: string
  timeSize?: string
  showEmail?: boolean
  direction?: FlexProps['direction']
  hoverUsername?: boolean
}
