import { Stack, Avatar, Modal } from '@mantine/core'
import { AudioPlayerComponent } from '@shared/players'
import { useDisclosure } from '@mantine/hooks'
import { ImageCarousel } from '@shared/ui/carousal'
import { ChatBubbleProps } from '../types'
import { ImageGrid } from './chat-components/imageGrid'
import { ChatMessage } from './chat-components/chatMessage'
import { TimeMessage } from './chat-components'
import { AvatarMessage } from './chat-components/avatarMessage'
import { BubbleWrapper, MessageBubble } from '../styles'

const ChatBubble = ({ message }: ChatBubbleProps) => {
  const { isOwn, timestamp, content, attachments } = message

  const images = attachments?.filter((a) => a.type === 'image') || []
  const audios = attachments?.filter((a) => a.type === 'audio') || []
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <BubbleWrapper
      $isOwn={isOwn}
      wrap="nowrap"
      align="flex-end"
      gap="xs"
    >
      {!isOwn && (
        <Avatar
          size={28}
          radius="xl"
          color="primary"
          style={{ flexShrink: 0 }}
          src="/profile.png"
        />
      )}

      <Stack
        gap={2}
        style={{ maxWidth: '70%' }}
        align={isOwn ? 'flex-end' : 'flex-start'}
      >
        <MessageBubble
          $isOwn={isOwn}
          $isText={!!content}
        >
          <Stack gap={8}>
            {/* Image Messages */}
            {images.length > 0 && (
              <ImageGrid
                images={images}
                handleClick={() => open()}
              />
            )}

            {/* Audio Messages */}
            {audios.map((attachment, index) => (
              <AudioPlayerComponent
                key={index}
                audioUrl={attachment.url}
                isOwn={isOwn}
              />
            ))}

            {/* Text content */}
            {content && <ChatMessage content={content} />}
          </Stack>
        </MessageBubble>

        <TimeMessage timestamp={timestamp} />
      </Stack>

      {isOwn && <AvatarMessage src="/profile.png" />}

      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
      >
        <ImageCarousel
          data={images}
          slideGap={false}
          fullImage
          allowBg={false}
        />
      </Modal>
    </BubbleWrapper>
  )
}

export { ChatBubble }
