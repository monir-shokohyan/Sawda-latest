import { Responsive } from '@shared/hooks/responsive'
import React, { useEffect, useState } from 'react'
import { AttachedFile, ChatMessage, RightSectionProps } from '../types'
import { generateChatHistory } from '../constant'

const useManageRightSection = ({
  selectedMessage,
  onBack,
}: RightSectionProps) => {
  const { isMobile } = Responsive()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (selectedMessage) {
      const history = generateChatHistory(selectedMessage.username)
      setMessages(history)
      setHasMore(history.length >= 20)
    }
  }, [selectedMessage])

  const fetchMoreData = () => {
    setTimeout(() => {
      const newMessages: ChatMessage[] = Array.from({ length: 10 }, (_, i) => ({
        id: messages.length + i,
        content: `This is an older message ${messages.length + i}`,
        timestamp: `${messages.length + i + 1} hours ago`,
        senderId: i % 2 === 0 ? 'me' : selectedMessage?.username || 'user',
        isOwn: i % 2 === 0,
      }))

      setMessages((prev) => [...prev, ...newMessages])

      if (messages.length >= 50) {
        setHasMore(false)
      }
    }, 1000)
  }

  const handleSendMessage = (attachedFiles?: AttachedFile[]) => {
    if (
      (inputValue.trim() || (attachedFiles && attachedFiles.length > 0)) &&
      selectedMessage
    ) {
      const newMessage: ChatMessage = {
        id: messages.length,
        content: inputValue,
        timestamp: 'Just now',
        senderId: 'me',
        isOwn: true,
        attachments: attachedFiles?.map((a) => ({
          name: a.file.name,
          type: a.type,
          size: a.file.size,
          url: a.preview || URL.createObjectURL(a.file),
        })),
      }

      setMessages((prev) => [...prev, newMessage])
      setInputValue('')

      // Upload files to server if there are any
      if (attachedFiles && attachedFiles.length > 0) {
        uploadFilesToServer(attachedFiles, newMessage.id)
      }
    }
  }

  const uploadFilesToServer = async (
    files: AttachedFile[],
    messageId: number,
  ) => {
    const formData = new FormData()

    files.forEach((attachedFile, index) => {
      formData.append(`file_${index}`, attachedFile.file)
    })

    // Add message metadata
    formData.append('messageId', messageId.toString())
    formData.append('recipientId', selectedMessage?.username || '')

    try {
      // Example API call - replace with your actual endpoint
      // const response = await fetch('/api/messages/upload', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     // Add authentication headers if needed
      //     // 'Authorization': `Bearer ${token}`
      //   }
      // })

      // if (!response.ok) {
      //   throw new Error('Upload failed')
      // }

      // const data = await response.json()

      console.log('Files ready to upload:', {
        messageId,
        files: files.map((f) => ({
          name: f.file.name,
          size: f.file.size,
          type: f.type,
        })),
      })

      // You can update the message with the server response URLs here
      // setMessages(prev => prev.map(msg =>
      //   msg.id === messageId
      //     ? { ...msg, attachments: data.attachments }
      //     : msg
      // ))
    } catch (error) {
      console.error('Upload failed:', error)

      // Handle upload error - you might want to show a notification
      // notifications.show({
      //   title: 'Upload Failed',
      //   message: 'Failed to upload files. Please try again.',
      //   color: 'red',
      // })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return {
    isMobile,
    hasMore,
    handleKeyPress,
    fetchMoreData,
    handleSendMessage,
    messages,
    inputValue,
    setInputValue,
  }
}

export { useManageRightSection }
