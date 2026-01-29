import { Group, Stack, Text, Avatar, Box, Image, Grid } from '@mantine/core'
import styled from 'styled-components'
import { ChatMessage } from '../types'
import { MdVolumeUp } from 'react-icons/md'

interface ChatBubbleProps {
  message: ChatMessage
  username: string
}

const BubbleWrapper = styled(Group)<{ $isOwn: boolean }>`
  justify-content: ${({ $isOwn }) => ($isOwn ? 'flex-end' : 'flex-start')};
  width: 100%;
  padding: 2px 0;
`

const MessageBubble = styled.div<{ $isOwn: boolean }>`
  max-width: 65%;
  padding: ${({ $isOwn }) => ($isOwn ? '10px 14px' : '10px 14px')};
  background: ${({ $isOwn }) =>
    $isOwn ? 'linear-gradient(135deg, #0084ff 0%, #0073e6 100%)' : '#f0f0f0'};
  color: ${({ $isOwn }) => ($isOwn ? 'white' : '#050505')};
  border-radius: 18px;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  position: relative;
`

const AudioBubble = styled.div<{ $isOwn: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${({ $isOwn }) =>
    $isOwn ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 20px;
  min-width: 200px;
`

const WaveformContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  height: 24px;
`

const WaveBar = styled.div<{ height: number; $isOwn: boolean }>`
  width: 3px;
  height: ${({ height }) => height}%;
  background: ${({ $isOwn }) =>
    $isOwn ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.4)'};
  border-radius: 2px;
  transition: all 0.3s ease;
`

const AudioPlayer = styled.audio`
  display: none;
`

const PlayButton = styled.button<{ $isOwn: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${({ $isOwn }) =>
    $isOwn ? 'white' : 'var(--mantine-color-primary-6)'};
  color: ${({ $isOwn }) =>
    $isOwn ? 'var(--mantine-color-primary-6)' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`

const ChatBubble = ({ message, username }: ChatBubbleProps) => {
  const { isOwn, timestamp, content, attachments } = message

  const images = attachments?.filter((a) => a.type === 'image') || []
  const audios = attachments?.filter((a) => a.type === 'audio') || []

  const waveformHeights = [40, 70, 50, 90, 60, 80, 45, 75, 55, 85, 50, 70]

  const handlePlayAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl)
    audio.play()
  }
  console.log(images)

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
        >
          {username.charAt(0).toUpperCase()}
        </Avatar>
      )}

      <Stack
        gap={2}
        style={{ maxWidth: '70%' }}
        align={isOwn ? 'flex-end' : 'flex-start'}
      >
        <MessageBubble $isOwn={isOwn}>
          <Stack gap={8}>
            {/* Images */}
            <Grid
              gutter="xs" // ← nice spacing between images
              justify="center" // optional: centers if odd number of images
            >
              {images.map((attachment, index) => (
                <Grid.Col
                  key={index}
                  span={{ base: 12, xs: 6 }}
                >
                  <Image
                    src="/cover.png" // ← use real url, not "/cover.png"
                    alt={attachment.name || 'Image'}
                    loading="lazy"
                    radius="md" // ← looks better in chat
                    fit="cover"
                    h={180} // or 200 – your choice
                    w="100%" // ← let it fill column width
                    style={{ display: 'block' }}
                  />
                </Grid.Col>
              ))}
            </Grid>

            {/* Audio Messages */}
            {audios.map((attachment, index) => (
              <AudioBubble
                key={index}
                $isOwn={isOwn}
              >
                <PlayButton
                  $isOwn={isOwn}
                  onClick={() => handlePlayAudio(attachment.url)}
                >
                  <MdVolumeUp size={18} />
                </PlayButton>

                <WaveformContainer>
                  {waveformHeights.map((height, i) => (
                    <WaveBar
                      key={i}
                      height={height}
                      $isOwn={isOwn}
                    />
                  ))}
                </WaveformContainer>

                <AudioPlayer controls>
                  <source
                    src={attachment.url}
                    type="audio/webm"
                  />
                </AudioPlayer>
              </AudioBubble>
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
        >
          <Text
            size="xs"
            c="white"
            fw={600}
          >
            Me
          </Text>
        </Avatar>
      )}
    </BubbleWrapper>
  )
}

export { ChatBubble }
