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