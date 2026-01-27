import { useState } from 'react'
import { Container, Flex, Group, Stack } from '@mantine/core'
import styled from 'styled-components'
import { Responsive } from '@shared/hooks/responsive'
import { LeftSection } from './leftSection'
import { RightSection } from './rightSection'
import { Message } from '../types'
import { GradientContainer } from '@shared/ui/containers'
import { GeneralPadding } from '@shared/constants'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'



const Ui = () => {
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

  // Mobile view: show either list or chat
  if (isMobile) {
    return (
    <Container w="100%" maw={1400} mx="auto" p={isMobile ? 16 : 24}>
        {!showChat ? (
          <LeftSection
            onMessageSelect={handleMessageSelect}
            activeMessageId={selectedMessage?.id}
          />
        ) : (
          <RightSection
            selectedMessage={selectedMessage}
            onBack={handleBack}
          />
        )}
      </Container>
    )
  }

  // Desktop view: show both side by side
  return (
       <GradientContainer>
      <Stack
        w="100%"
        gap={0}
        px={isMobile ? 'sm' : GeneralPadding}
        py={isMobile ? 'sm' : 'xl'}
      >
        <BreadcrumbsNav
          items={[{ title: 'Home', href: '/' }, { title: 'Messages' }]}
        />
        <Flex
          gap="2%"
          p={isMobile ? '0px' : 'xl'}
          wrap="wrap"
        >
           <LeftSection
          onMessageSelect={handleMessageSelect}
          activeMessageId={selectedMessage?.id}
        />
        <RightSection selectedMessage={selectedMessage} />
        </Flex>
      </Stack>
    </GradientContainer>
  )
}

export { Ui }