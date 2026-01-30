import {
  Group,
  Stack,
  Text,
  Avatar,
  Image,
  Grid,
  AspectRatio,
  Modal,
} from '@mantine/core'
import styled from 'styled-components'
import { ChatMessage } from '../types'
import { AudioPlayerComponent } from '@shared/players'
import { useDisclosure } from '@mantine/hooks'
import { ImageCarousel } from '@shared/ui/carousal'

interface ChatBubbleProps {
  message: ChatMessage
  username: string
}

const BubbleWrapper = styled(Group)<{ $isOwn: boolean }>`
  justify-content: ${({ $isOwn }) => ($isOwn ? 'flex-end' : 'flex-start')};
  width: 100%;
  padding: 2px 0;
`

const MessageBubble = styled.div<{ $isOwn: boolean; $isImages: boolean }>`
  min-width: 120px;
  max-width: ${({ $isImages }) => ($isImages ? '75%' : 'auto')};
  padding: ${({ $isImages }) => ($isImages ? '5px' : '14px 10px')};
  background: ${({ $isOwn }) =>
    $isOwn
      ? 'var(--mantine-color-primary-8)'
      : 'var(--mantine-color-backgroundInput-9)'};
  color: ${({ $isOwn }) => ($isOwn ? 'white' : '#050505')};
  border-radius: ${({ $isImages }) => ($isImages ? '5px' : '18px')};
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  position: relative;
`

const ChatBubble = ({ message, username }: ChatBubbleProps) => {
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
          $isImages={images.length > 0}
        >
          <Stack gap={8}>
            {/* Image Messages */}
            {images.length > 0 && (
              <Grid
                gutter="5px"
                justify="center"
                grow
              >
                {images.map((attachment, index) => (
                  <Grid.Col
                    key={index}
                    span={{ base: 6, xs: 6 }}
                  >
                    <AspectRatio ratio={3 / 4}>
                      <Image
                        src={attachment.url || '/cover.png'}
                        alt={attachment.name || 'Attachment image'}
                        loading="lazy"
                        radius="md"
                        fit="cover"
                        fallbackSrc="/cover.png"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        onClick={() => open()}
                      />
                    </AspectRatio>
                  </Grid.Col>
                ))}
              </Grid>
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
            {content && (
              <Text
                size="sm"
                style={{
                  lineHeight: 1.4,
                  wordBreak: 'break-word',
                }}
              >
                {content}
              </Text>
            )}
          </Stack>
        </MessageBubble>

        <Text
          size="xs"
          c="dimmed"
          px={4}
        >
          {timestamp}
        </Text>
      </Stack>

      {isOwn && (
        <Avatar
          size={28}
          radius="xl"
          style={{
            background: 'linear-gradient(135deg, #0084ff 0%, #0073e6 100%)',
            flexShrink: 0,
          }}
          src="/profile.png"
        />
          )}

      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
      >
        <ImageCarousel data={images} slideGap={false} fullImage allowBg={false}/>
      </Modal>
    </BubbleWrapper>
  )
}

export { ChatBubble }
