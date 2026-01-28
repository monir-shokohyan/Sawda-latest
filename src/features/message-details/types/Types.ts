export interface Message {
  id: number
  username: string
  avatar?: string
  message: string
  timestamp: string
  isRead: boolean
  isSelected?: boolean
}

export interface MessageThread {
  id: number
  messages: ChatMessage[]
  participant: {
    username: string
    avatar?: string
  }
}

export interface ChatMessage {
  id: number
  content: string
  timestamp: string
  senderId: string
  isOwn: boolean
}

export type MessageFilter = 'all' | 'unread' | 'read'

export interface LeftButtonGroupProps {
  handleMarkAsRead: () => void
  handleMarkAsUnread: () => void
  handleDeleteSelected: () => void
  handleDeselectAll: () => void
}

export interface LeftMenuProps {
  setSelectionMode: (mode: boolean) => void
  handleSelectAll: () => void
  handleDeselectAll: () => void
  selectedCount: number
  handleMarkAsRead: () => void
  handleMarkAsUnread: () => void
  handleDeleteSelected: () => void
}

export interface LeftSectionProps {
  onMessageSelect: (message: Message) => void
  activeMessageId?: number
}
