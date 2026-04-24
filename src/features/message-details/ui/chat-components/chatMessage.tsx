import { Text } from '@mantine/core'
import { DetectDirection } from '@shared/hooks'

const ChatMessage = ({ content }: { content: string }) => {
  const { dir } = DetectDirection(content)
  return (
    <Text
      size="sm"
      dir={dir}
      style={{
        lineHeight: 1.4,
        wordBreak: 'break-word',
        unicodeBidi: 'plaintext',
      }}
    >
      {content}
    </Text>
  )
}

export { ChatMessage }
