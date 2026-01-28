import { Responsive } from '@shared/hooks/responsive'
import React, { useState } from 'react'
import { Message } from '../types'

const useManageMessageCenter = () => {
  const { isMobile } = Responsive()
  const [selectedMessage, setSelectedMessage] = useState<Message | undefined>()
  const [showChat, setShowChat] = useState(false)

  const handleMessageSelect = (message: Message) => {
    setSelectedMessage(message)
    if (isMobile) {
      setShowChat(true)
    }
  }

  const handleBack = () => {
    setShowChat(false)
  }

  return {
    isMobile,
    selectedMessage,
    showChat,
    handleMessageSelect,
    handleBack,
  }
}

export { useManageMessageCenter }
