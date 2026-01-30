export interface Notification {
  id: number
  username: string
  avatar?: string
  message?: string
  timestamp?: string
  isRead?: boolean
  isSelected?: boolean
  isSupport?: boolean
}

export type NotificationFilter = 'All' | 'Following' | 'Support'

export interface NotificationSectionProps {
  onNotificationSelect: (notification: Notification) => void
  activeMessageId?: number | null
}

export interface NotificationCardProps {
  message: Notification
  isActive?: boolean
  onClick: (id: number) => void
}

export interface NotificationTabProps {
  filter: NotificationFilter
  handleChange: (value: string | null) => void
  notification?: Notification[]
  followingCount: number
}
