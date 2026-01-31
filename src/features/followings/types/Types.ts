export interface Following {
  id: number
  username: string
  avatar?: string
  message?: string
  timestamp?: string
  isRead?: boolean
  isSelected?: boolean
  isFollower?: boolean
}

export type FollowingFilter = 'Follower' | 'Following'

export interface FollowingSectionProps {
  onFollowingSelect: (notification: Following) => void
  activeMessageId?: number | null
}

export interface FollowingCardProps {
  message: Following
  isActive?: boolean
  onClick: (id: number) => void
}

export interface FollowingTabProps {
  filter: FollowingFilter
  handleChange: (value: string | null) => void
  notification?: Following[]
  followingCount: number
}
