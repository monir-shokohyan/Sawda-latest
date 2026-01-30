export interface Message {
  id: number
  username: string
  avatar?: string
  message?: string
  timestamp?: string
  isRead?: boolean
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
  activeMessageId?: number | null
}

export interface AttachedFile {
  file: File
  type: 'image' | 'audio' | 'document' | 'other'
  preview?: string
  uploadProgress?: number
}

export interface RightFooterProps {
  inputValue: string
  setInputValue: (value: string) => void
  handleSendMessage: (files?: AttachedFile[]) => void
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface RightHeaderProps {
  selectedMessage: {
    username: string
    avatar?: string
  }
  onBack?: () => void
}

export interface RightSectionProps {
  selectedMessage?: Message
  onBack?: () => void
}

export interface BodyProps {
  messages: any[]
  fetchMoreData: () => void
  hasMore: boolean
  selectedMessage: any
}

export interface MessageCardProps {
  message: Message
  isActive?: boolean
  onSelect: (id: number) => void
  onClick: (id: number) => void
  selectionMode: boolean
  setSelectionMode: (value: boolean) => void
}

//// chat section

export interface ChatBubbleProps {
  message: ChatMessage
  username: string
}

export interface ChatMessage {
  id: number
  content: string
  timestamp: string
  senderId: string
  isOwn: boolean
  attachments?: {
    id?: number
    name?: string
    type?: 'image' | 'audio' | 'document' | 'other'
    size?: number
    url: string
  }[]
}
